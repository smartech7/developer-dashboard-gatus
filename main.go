package main

import (
	"bytes"
	"compress/gzip"
	"log"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/TwinProduction/gatus/config"
	"github.com/TwinProduction/gatus/security"
	"github.com/TwinProduction/gatus/watchdog"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

const cacheTTL = 10 * time.Second

var (
	cachedServiceResults          []byte
	cachedServiceResultsGzipped   []byte
	cachedServiceResultsTimestamp time.Time
)

func main() {
	cfg := loadConfiguration()
	resultsHandler := serviceResultsHandler
	if cfg.Security != nil && cfg.Security.IsValid() {
		resultsHandler = security.Handler(serviceResultsHandler, cfg.Security)
	}
	// favicon needs to be always served from the root
	http.HandleFunc("/favicon.ico", favIconHandler)
	http.HandleFunc(cfg.Web.AppendToCtxRoot("/api/v1/results"), resultsHandler)
	http.HandleFunc(cfg.Web.AppendToCtxRoot("/health"), healthHandler)
	http.Handle(cfg.Web.CtxRoot(), GzipHandler(http.StripPrefix(cfg.Web.CtxRoot(), http.FileServer(http.Dir("./static")))))

	if cfg.Metrics {
		http.Handle(cfg.Web.AppendToCtxRoot("/metrics"), promhttp.Handler())
	}
	log.Printf("[main][main] Listening on %s%s\n", cfg.Web.SocketAddress(), cfg.Web.CtxRoot())
	go watchdog.Monitor(cfg)
	log.Fatal(http.ListenAndServe(cfg.Web.SocketAddress(), nil))
}

func loadConfiguration() *config.Config {
	var err error
	customConfigFile := os.Getenv("GATUS_CONFIG_FILE")
	if len(customConfigFile) > 0 {
		err = config.Load(customConfigFile)
	} else {
		err = config.LoadDefaultConfiguration()
	}
	if err != nil {
		panic(err)
	}
	return config.Get()
}

func serviceResultsHandler(writer http.ResponseWriter, r *http.Request) {
	if isExpired := cachedServiceResultsTimestamp.IsZero() || time.Now().Sub(cachedServiceResultsTimestamp) > cacheTTL; isExpired {
		buffer := &bytes.Buffer{}
		gzipWriter := gzip.NewWriter(buffer)
		data, err := watchdog.GetJSONEncodedServiceResults()
		if err != nil {
			log.Printf("[main][serviceResultsHandler] Unable to marshal object to JSON: %s", err.Error())
			writer.WriteHeader(http.StatusInternalServerError)
			_, _ = writer.Write([]byte("Unable to marshal object to JSON"))
			return
		}
		gzipWriter.Write(data)
		gzipWriter.Close()
		cachedServiceResults = data
		cachedServiceResultsGzipped = buffer.Bytes()
		cachedServiceResultsTimestamp = time.Now()
	}
	var data []byte
	if strings.Contains(r.Header.Get("Accept-Encoding"), "gzip") {
		writer.Header().Set("Content-Encoding", "gzip")
		data = cachedServiceResultsGzipped
	} else {
		data = cachedServiceResults
	}
	writer.Header().Add("Content-type", "application/json")
	writer.WriteHeader(http.StatusOK)
	_, _ = writer.Write(data)
}

func healthHandler(writer http.ResponseWriter, _ *http.Request) {
	writer.Header().Add("Content-type", "application/json")
	writer.WriteHeader(http.StatusOK)
	_, _ = writer.Write([]byte("{\"status\":\"UP\"}"))
}

// favIconHanlder responds to /favicon.ico requests
func favIconHandler(writer http.ResponseWriter, request *http.Request) {
	http.ServeFile(writer, request, "./static/favicon.ico")
}
