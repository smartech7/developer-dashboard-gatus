package teams

import (
	"fmt"
	"net/http"

	"github.com/TwinProduction/gatus/v3/alerting/alert"
	"github.com/TwinProduction/gatus/v3/alerting/provider/custom"
	"github.com/TwinProduction/gatus/v3/core"
)

// AlertProvider is the configuration necessary for sending an alert using Teams
type AlertProvider struct {
	WebhookURL string `yaml:"webhook-url"`

	// DefaultAlert is the default alert configuration to use for services with an alert of the appropriate type
	DefaultAlert *alert.Alert `yaml:"default-alert"`
}

// IsValid returns whether the provider's configuration is valid
func (provider *AlertProvider) IsValid() bool {
	return len(provider.WebhookURL) > 0
}

// ToCustomAlertProvider converts the provider into a custom.AlertProvider
func (provider *AlertProvider) ToCustomAlertProvider(service *core.Service, alert *alert.Alert, result *core.Result, resolved bool) *custom.AlertProvider {
	var message string
	var color string
	if resolved {
		message = fmt.Sprintf("An alert for *%s* has been resolved after passing successfully %d time(s) in a row", service.Name, alert.SuccessThreshold)
		color = "#36A64F"
	} else {
		message = fmt.Sprintf("An alert for *%s* has been triggered due to having failed %d time(s) in a row", service.Name, alert.FailureThreshold)
		color = "#DD0000"
	}
	var results string
	for _, conditionResult := range result.ConditionResults {
		var prefix string
		if conditionResult.Success {
			prefix = "&#x2705;"
		} else {
			prefix = "&#x274C;"
		}
		results += fmt.Sprintf("%s - `%s`<br/>", prefix, conditionResult.Condition)
	}
	var description string
	if alertDescription := alert.GetDescription(); len(alertDescription) > 0 {
		description = ":\\n> " + alertDescription
	}
	return &custom.AlertProvider{
		URL:    provider.WebhookURL,
		Method: http.MethodPost,
		Body: fmt.Sprintf(`{
  "@type": "MessageCard",
  "@context": "http://schema.org/extensions",
  "themeColor": "%s",
  "title": "&#x1F6A8; Gatus",
  "text": "%s%s",
  "sections": [
    {
      "activityTitle": "URL",
      "text": "%s"
    },
    {
      "activityTitle": "Condition results",
      "text": "%s"
    }
  ]
}`, color, message, description, service.URL, results),
		Headers: map[string]string{"Content-Type": "application/json"},
	}
}

// GetDefaultAlert returns the provider's default alert configuration
func (provider AlertProvider) GetDefaultAlert() *alert.Alert {
	return provider.DefaultAlert
}
