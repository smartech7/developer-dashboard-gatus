package maintenance

import (
	"errors"
	"fmt"
	"strconv"
	"testing"
	"time"
)

func TestGetDefaultConfig(t *testing.T) {
	if *GetDefaultConfig().Enabled {
		t.Fatal("expected default config to be disabled by default")
	}
}

func TestConfig_Validate(t *testing.T) {
	yes, no := true, false
	scenarios := []struct {
		name          string
		cfg           *Config
		expectedError error
	}{
		{
			name:          "nil",
			cfg:           nil,
			expectedError: nil,
		},
		{
			name: "disabled",
			cfg: &Config{
				Enabled: &no,
			},
			expectedError: nil,
		},
		{
			name: "invalid-day",
			cfg: &Config{
				Every: []string{"invalid-day"},
			},
			expectedError: errInvalidDayName,
		},
		{
			name: "invalid-day",
			cfg: &Config{
				Every: []string{"invalid-day"},
			},
			expectedError: errInvalidDayName,
		},
		{
			name: "invalid-start-format",
			cfg: &Config{
				Start: "0000",
			},
			expectedError: errInvalidMaintenanceStartFormat,
		},
		{
			name: "invalid-start-hours",
			cfg: &Config{
				Start: "25:00",
			},
			expectedError: errInvalidMaintenanceStartFormat,
		},
		{
			name: "invalid-start-minutes",
			cfg: &Config{
				Start: "0:61",
			},
			expectedError: errInvalidMaintenanceStartFormat,
		},
		{
			name: "invalid-start-minutes-non-numerical",
			cfg: &Config{
				Start: "00:zz",
			},
			expectedError: strconv.ErrSyntax,
		},
		{
			name: "invalid-start-hours-non-numerical",
			cfg: &Config{
				Start: "zz:00",
			},
			expectedError: strconv.ErrSyntax,
		},
		{
			name: "invalid-duration",
			cfg: &Config{
				Start:    "23:00",
				Duration: 0,
			},
			expectedError: errInvalidMaintenanceDuration,
		},
		{
			name: "every-day-at-2300",
			cfg: &Config{
				Start:    "23:00",
				Duration: time.Hour,
			},
			expectedError: nil,
		},
		{
			name: "every-monday-at-0000",
			cfg: &Config{
				Start:    "00:00",
				Duration: 30 * time.Minute,
				Every:    []string{"Monday"},
			},
			expectedError: nil,
		},
		{
			name: "every-friday-and-sunday-at-0000-explicitly-enabled",
			cfg: &Config{
				Enabled:  &yes,
				Start:    "08:00",
				Duration: 8 * time.Hour,
				Every:    []string{"Friday", "Sunday"},
			},
			expectedError: nil,
		},
	}
	for _, scenario := range scenarios {
		t.Run(scenario.name, func(t *testing.T) {
			err := scenario.cfg.ValidateAndSetDefaults()
			if !errors.Is(err, scenario.expectedError) {
				t.Errorf("expected %v, got %v", scenario.expectedError, err)
			}
		})
	}
}

func TestConfig_IsUnderMaintenance(t *testing.T) {
	yes, no := true, false
	now := time.Now().UTC()
	scenarios := []struct {
		name     string
		cfg      *Config
		expected bool
	}{
		{
			name: "disabled",
			cfg: &Config{
				Enabled: &no,
			},
			expected: false,
		},
		{
			name: "under-maintenance-explicitly-enabled",
			cfg: &Config{
				Enabled:  &yes,
				Start:    fmt.Sprintf("%02d:00", now.Hour()),
				Duration: 2 * time.Hour,
			},
			expected: true,
		},
		{
			name: "under-maintenance",
			cfg: &Config{
				Start:    fmt.Sprintf("%02d:00", now.Hour()),
				Duration: 2 * time.Hour,
			},
			expected: true,
		},
		{
			name: "not-under-maintenance",
			cfg: &Config{
				Start:    fmt.Sprintf("%02d:00", now.Add(-5*time.Hour).Hour()),
				Duration: time.Hour,
			},
			expected: false,
		},
		{
			name: "not-under-maintenance-today",
			cfg: &Config{
				Start:    fmt.Sprintf("%02d:00", now.Hour()),
				Duration: time.Hour,
				Every:    []string{now.Add(48 * time.Hour).Weekday().String()},
			},
			expected: false,
		},
	}
	for _, scenario := range scenarios {
		t.Run(scenario.name, func(t *testing.T) {
			if scenario.cfg.ValidateAndSetDefaults() != nil {
				t.Fatal("validation shouldn't have returned an error")
			}
			isUnderMaintenance := scenario.cfg.IsUnderMaintenance()
			if isUnderMaintenance != scenario.expected {
				t.Errorf("expected %v, got %v", scenario.expected, isUnderMaintenance)
				t.Logf("start=%v; duration=%v; now=%v", scenario.cfg.Start, scenario.cfg.Duration, time.Now().UTC())
			}
		})
	}
}
