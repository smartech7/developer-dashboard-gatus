package config

import (
	"errors"
	"github.com/TwinProduction/gatus/alerting"
	"github.com/TwinProduction/gatus/core"
	"gopkg.in/yaml.v2"
	"io/ioutil"
	"log"
	"os"
)

const (
	DefaultConfigurationFilePath = "config/config.yaml"
)

var (
	ErrNoServiceInConfig  = errors.New("configuration file should contain at least 1 service")
	ErrConfigFileNotFound = errors.New("configuration file not found")
	ErrConfigNotLoaded    = errors.New("configuration is nil")
	config                *Config
)

type Config struct {
	Metrics  bool             `yaml:"metrics"`
	Debug    bool             `yaml:"debug"`
	Alerting *alerting.Config `yaml:"alerting"`
	Services []*core.Service  `yaml:"services"`
}

func Get() *Config {
	if config == nil {
		panic(ErrConfigNotLoaded)
	}
	return config
}

func Load(configFile string) error {
	log.Printf("[config][Load] Reading configuration from configFile=%s", configFile)
	cfg, err := readConfigurationFile(configFile)
	if err != nil {
		if os.IsNotExist(err) {
			return ErrConfigFileNotFound
		} else {
			return err
		}
	}
	config = cfg
	return nil
}

func LoadDefaultConfiguration() error {
	err := Load(DefaultConfigurationFilePath)
	if err != nil {
		if err == ErrConfigFileNotFound {
			return Load("config/config.yml")
		}
		return err
	}
	return nil
}

func readConfigurationFile(fileName string) (config *Config, err error) {
	var bytes []byte
	if bytes, err = ioutil.ReadFile(fileName); err == nil {
		// file exists, so we'll parse it and return it
		return parseAndValidateConfigBytes(bytes)
	}
	return
}

func parseAndValidateConfigBytes(yamlBytes []byte) (config *Config, err error) {
	// Expand environment variables
	yamlBytes = []byte(os.ExpandEnv(string(yamlBytes)))
	// Parse configuration file
	err = yaml.Unmarshal(yamlBytes, &config)
	// Check if the configuration file at least has services.
	if config == nil || config.Services == nil || len(config.Services) == 0 {
		err = ErrNoServiceInConfig
	} else {
		validateAlertingConfig(config)
		validateServicesConfig(config)
	}
	return
}

func validateServicesConfig(config *Config) {
	for _, service := range config.Services {
		if config.Debug {
			log.Printf("[config][validateServicesConfig] Validating service '%s'", service.Name)
		}
		service.ValidateAndSetDefaults()
	}
	log.Printf("[config][validateServicesConfig] Validated %d services", len(config.Services))
}

func validateAlertingConfig(config *Config) {
	if config.Alerting == nil {
		log.Printf("[config][validateAlertingConfig] Alerting is not configured")
		return
	}
	var validProviders, invalidProviders []core.AlertType
	if config.Alerting.Slack != nil && config.Alerting.Slack.IsValid() {
		validProviders = append(validProviders, core.SlackAlert)
	} else {
		invalidProviders = append(invalidProviders, core.SlackAlert)
	}
	if config.Alerting.Twilio != nil && config.Alerting.Twilio.IsValid() {
		validProviders = append(validProviders, core.TwilioAlert)
	} else {
		invalidProviders = append(invalidProviders, core.TwilioAlert)
	}
	if config.Alerting.PagerDuty != nil && config.Alerting.PagerDuty.IsValid() {
		validProviders = append(validProviders, core.PagerDutyAlert)
	} else {
		invalidProviders = append(invalidProviders, core.PagerDutyAlert)
	}
	if config.Alerting.Custom != nil && config.Alerting.Custom.IsValid() {
		validProviders = append(validProviders, core.CustomAlert)
	} else {
		invalidProviders = append(invalidProviders, core.CustomAlert)
	}
	log.Printf("[config][validateAlertingConfig] configuredProviders=%s; ignoredProviders=%s", validProviders, invalidProviders)
}
