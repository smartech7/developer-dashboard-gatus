package slack

import (
	"github.com/TwinProduction/gatus/core"
	"strings"
	"testing"
)

func TestAlertProvider_IsValid(t *testing.T) {
	invalidProvider := AlertProvider{WebhookUrl: ""}
	if invalidProvider.IsValid() {
		t.Error("provider shouldn't have been valid")
	}
	validProvider := AlertProvider{WebhookUrl: "http://example.com"}
	if !validProvider.IsValid() {
		t.Error("provider should've been valid")
	}
}

func TestAlertProvider_ToCustomAlertProviderWithResolvedAlert(t *testing.T) {
	provider := AlertProvider{WebhookUrl: "http://example.com"}
	customAlertProvider := provider.ToCustomAlertProvider(&core.Service{}, &core.Alert{}, &core.Result{}, true)
	if customAlertProvider == nil {
		t.Error("customAlertProvider shouldn't have been nil")
	}
	if !strings.Contains(customAlertProvider.Body, "resolved") {
		t.Error("customAlertProvider.Body should've contained the substring resolved")
	}
}

func TestAlertProvider_ToCustomAlertProviderWithTriggeredAlert(t *testing.T) {
	provider := AlertProvider{WebhookUrl: "http://example.com"}
	customAlertProvider := provider.ToCustomAlertProvider(&core.Service{}, &core.Alert{}, &core.Result{}, false)
	if customAlertProvider == nil {
		t.Error("customAlertProvider shouldn't have been nil")
	}
	if !strings.Contains(customAlertProvider.Body, "triggered") {
		t.Error("customAlertProvider.Body should've contained the substring triggered")
	}
}
