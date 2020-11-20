package config

import (
	"fmt"
	"math"
)

// webConfig is the structure which supports the configuration of the endpoint
// which provides access to the web frontend
type webConfig struct {
	// Address to listen on (defaults to 0.0.0.0 specified by DefaultAddress)
	Address string `yaml:"address"`

	// Port to listen on (default to 8080 specified by DefaultPort)
	Port int `yaml:"port"`
}

// validateAndSetDefaults checks and sets missing values based on the defaults
// in given in DefaultAddress and DefaultPort if necessary
func (web *webConfig) validateAndSetDefaults() {
	if len(web.Address) == 0 {
		web.Address = DefaultAddress
	}
	if web.Port == 0 {
		web.Port = DefaultPort
	} else if web.Port < 0 || web.Port > math.MaxUint16 {
		panic(fmt.Sprintf("port has an invalid: value should be between %d and %d", 0, math.MaxUint16))
	}
}

// SocketAddress returns the combination of the Address and the Port
func (web *webConfig) SocketAddress() string {
	return fmt.Sprintf("%s:%d", web.Address, web.Port)
}
