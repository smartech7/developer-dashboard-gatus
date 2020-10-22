package twilio

import (
	"github.com/TwinProduction/gatus/core"
	"testing"
)

func TestTwilioAlertProvider_IsValid(t *testing.T) {
	invalidProvider := AlertProvider{}
	if invalidProvider.IsValid() {
		t.Error("provider shouldn't have been valid")
	}
	validProvider := AlertProvider{
		SID:   "1",
		Token: "1",
		From:  "1",
		To:    "1",
	}
	if !validProvider.IsValid() {
		t.Error("provider should've been valid")
	}
}

func TestAlertProvider_ToCustomAlertProvider(t *testing.T) {
	provider := AlertProvider{
		SID:   "1",
		Token: "1",
		From:  "1",
		To:    "1",
	}
	customAlertProvider := provider.ToCustomAlertProvider(&core.Service{}, &core.Alert{}, &core.Result{}, true)
	if customAlertProvider == nil {
		t.Error("customAlertProvider shouldn't have been nil")
	}
}
