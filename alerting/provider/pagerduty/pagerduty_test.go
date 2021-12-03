package pagerduty

import (
	"encoding/json"
	"testing"

	"github.com/TwiN/gatus/v3/alerting/alert"
	"github.com/TwiN/gatus/v3/core"
)

func TestAlertProvider_IsValid(t *testing.T) {
	invalidProvider := AlertProvider{IntegrationKey: ""}
	if invalidProvider.IsValid() {
		t.Error("provider shouldn't have been valid")
	}
	validProvider := AlertProvider{IntegrationKey: "00000000000000000000000000000000"}
	if !validProvider.IsValid() {
		t.Error("provider should've been valid")
	}
}

func TestAlertProvider_IsValidWithOverride(t *testing.T) {
	providerWithInvalidOverrideGroup := AlertProvider{
		Overrides: []Override{
			{
				IntegrationKey: "00000000000000000000000000000000",
				Group:          "",
			},
		},
	}
	if providerWithInvalidOverrideGroup.IsValid() {
		t.Error("provider Group shouldn't have been valid")
	}
	providerWithInvalidOverrideIntegrationKey := AlertProvider{
		Overrides: []Override{
			{
				IntegrationKey: "",
				Group:          "group",
			},
		},
	}
	if providerWithInvalidOverrideIntegrationKey.IsValid() {
		t.Error("provider integration key shouldn't have been valid")
	}
	providerWithValidOverride := AlertProvider{
		Overrides: []Override{
			{
				IntegrationKey: "00000000000000000000000000000000",
				Group:          "group",
			},
		},
	}
	if !providerWithValidOverride.IsValid() {
		t.Error("provider should've been valid")
	}
}

func TestAlertProvider_buildRequestBody(t *testing.T) {
	description := "test"
	scenarios := []struct {
		Name         string
		Provider     AlertProvider
		Alert        alert.Alert
		Resolved     bool
		ExpectedBody string
	}{
		{
			Name:         "triggered",
			Provider:     AlertProvider{IntegrationKey: "00000000000000000000000000000000"},
			Alert:        alert.Alert{Description: &description},
			Resolved:     false,
			ExpectedBody: "{\n  \"routing_key\": \"00000000000000000000000000000000\",\n  \"dedup_key\": \"\",\n  \"event_action\": \"trigger\",\n  \"payload\": {\n    \"summary\": \"TRIGGERED:  - test\",\n    \"source\": \"\",\n    \"severity\": \"critical\"\n  }\n}",
		},
		{
			Name:         "resolved",
			Provider:     AlertProvider{IntegrationKey: "00000000000000000000000000000000"},
			Alert:        alert.Alert{Description: &description, ResolveKey: "key"},
			Resolved:     true,
			ExpectedBody: "{\n  \"routing_key\": \"00000000000000000000000000000000\",\n  \"dedup_key\": \"key\",\n  \"event_action\": \"resolve\",\n  \"payload\": {\n    \"summary\": \"RESOLVED:  - test\",\n    \"source\": \"\",\n    \"severity\": \"critical\"\n  }\n}",
		},
	}
	for _, scenario := range scenarios {
		t.Run(scenario.Name, func(t *testing.T) {
			body := scenario.Provider.buildRequestBody(&core.Endpoint{}, &scenario.Alert, &core.Result{}, scenario.Resolved)
			if body != scenario.ExpectedBody {
				t.Errorf("expected %s, got %s", scenario.ExpectedBody, body)
			}
			out := make(map[string]interface{})
			if err := json.Unmarshal([]byte(body), &out); err != nil {
				t.Error("expected body to be valid JSON, got error:", err.Error())
			}
		})
	}
}

func TestAlertProvider_getIntegrationKeyForGroup(t *testing.T) {
	scenarios := []struct {
		Name           string
		Provider       AlertProvider
		InputGroup     string
		ExpectedOutput string
	}{
		{
			Name: "provider-no-override-specify-no-group-should-default",
			Provider: AlertProvider{
				IntegrationKey: "00000000000000000000000000000001",
				Overrides:      nil,
			},
			InputGroup:     "",
			ExpectedOutput: "00000000000000000000000000000001",
		},
		{
			Name: "provider-no-override-specify-group-should-default",
			Provider: AlertProvider{
				IntegrationKey: "00000000000000000000000000000001",
				Overrides:      nil,
			},
			InputGroup:     "group",
			ExpectedOutput: "00000000000000000000000000000001",
		},
		{
			Name: "provider-with-override-specify-no-group-should-default",
			Provider: AlertProvider{
				IntegrationKey: "00000000000000000000000000000001",
				Overrides: []Override{
					{
						Group:          "group",
						IntegrationKey: "00000000000000000000000000000002",
					},
				},
			},
			InputGroup:     "",
			ExpectedOutput: "00000000000000000000000000000001",
		},
		{
			Name: "provider-with-override-specify-group-should-override",
			Provider: AlertProvider{
				IntegrationKey: "00000000000000000000000000000001",
				Overrides: []Override{
					{
						Group:          "group",
						IntegrationKey: "00000000000000000000000000000002",
					},
				},
			},
			InputGroup:     "group",
			ExpectedOutput: "00000000000000000000000000000002",
		},
	}
	for _, scenario := range scenarios {
		t.Run(scenario.Name, func(t *testing.T) {
			if output := scenario.Provider.getIntegrationKeyForGroup(scenario.InputGroup); output != scenario.ExpectedOutput {
				t.Errorf("expected %s, got %s", scenario.ExpectedOutput, output)
			}
		})
	}
}
