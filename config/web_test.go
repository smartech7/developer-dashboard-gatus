package config

import (
	"fmt"
	"testing"
)

func TestWebConfig_SocketAddress(t *testing.T) {
	web := &webConfig{
		Address: "0.0.0.0",
		Port:    8081,
	}
	if web.SocketAddress() != "0.0.0.0:8081" {
		t.Errorf("expected %s, got %s", "0.0.0.0:8081", web.SocketAddress())
	}
}

func TestWebConfig_PrependWithContextRoot(t *testing.T) {
	web := &webConfig{ContextRoot: "/status/"}
	if result := web.PrependWithContextRoot("/api/v1/results"); result != "/status/api/v1/results" {
		t.Errorf("expected %s, got %s", "/status/api/v1/results", result)
	}
	if result := web.PrependWithContextRoot("/health"); result != "/status/health" {
		t.Errorf("expected %s, got %s", "/status/health", result)
	}
	if result := web.PrependWithContextRoot("/health/"); result != "/status/health" {
		t.Errorf("expected %s, got %s", "/status/health", result)
	}
}

// validContextRootTest specifies all test case which should end up in
// a valid context root used to bind the web interface to
var validContextRootTests = []struct {
	name         string
	path         string
	expectedPath string
}{
	{"Empty", "", "/"},
	{"/", "/", "/"},
	{"///", "///", "/"},
	{"Single character 'a'", "a", "/a/"},
	{"Slash at the beginning", "/status", "/status/"},
	{"Slashes at start and end", "/status/", "/status/"},
	{"Multiple slashes at start", "//status", "/status/"},
	{"Multiple slashes at start and end", "///status////", "/status/"},
	{"Contains '@' in path'", "me@/status/gatus", "/me@/status/gatus/"},
	{"Nested context with trailing slash", "/status/gatus/", "/status/gatus/"},
	{"Nested context without trailing slash", "/status/gatus/system", "/status/gatus/system/"},
}

func TestWebConfig_ValidContextRoots(t *testing.T) {
	for idx, test := range validContextRootTests {
		t.Run(fmt.Sprintf("%d: %s", idx, test.name), func(t *testing.T) {
			expectValidResultForContextRoot(t, test.path, test.expectedPath)
		})
	}
}

func expectValidResultForContextRoot(t *testing.T, path string, expected string) {
	web := &webConfig{
		ContextRoot: path,
	}
	web.validateAndSetDefaults()
	if web.ContextRoot != expected {
		t.Errorf("expected %s, got %s", expected, web.ContextRoot)
	}
}

// invalidContextRootTests contains all tests for context root which are
// expected to fail and stop program execution
var invalidContextRootTests = []struct {
	name string
	path string
}{
	{"Only a fragment identifier", "#"},
	{"Invalid character in path", "/invalid" + string([]byte{0x7F})},
	{"Starts with protocol", "http://status/gatus"},
	{"Path with fragment", "/status/gatus#here"},
	{"Starts with '://'", "://status"},
	{"Contains query parameter", "/status/h?ello=world"},
	{"Contains '?'", "/status?"},
}

func TestWebConfig_InvalidContextRoots(t *testing.T) {
	for idx, test := range invalidContextRootTests {
		t.Run(fmt.Sprintf("%d: %s", idx, test.name), func(t *testing.T) {
			expectInvalidResultForContextRoot(t, test.path)
		})
	}
}

func expectInvalidResultForContextRoot(t *testing.T, path string) {
	defer func() { recover() }()

	web := &webConfig{ContextRoot: path}
	web.validateAndSetDefaults()

	t.Fatal(fmt.Sprintf("Should've panicked because the configuration specifies an invalid context root: %s", path))
}
