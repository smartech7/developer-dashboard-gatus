package core

// ServiceStatus contains the evaluation Results of a Service
type ServiceStatus struct {
	// Group the service is a part of. Used for grouping multiple services together on the front end.
	Group string `json:"group,omitempty"`

	// Results is the list of service evaluation results
	Results []*Result `json:"results"`
}

// NewServiceStatus creates a new ServiceStatus
func NewServiceStatus(service *Service) *ServiceStatus {
	return &ServiceStatus{
		Group:   service.Group,
		Results: make([]*Result, 0),
	}
}

// AddResult adds a Result to ServiceStatus.Results and makes sure that there are
// no more than 20 results in the Results slice
func (ss *ServiceStatus) AddResult(result *Result) {
	ss.Results = append(ss.Results, result)
	if len(ss.Results) > 20 {
		ss.Results = ss.Results[1:]
	}
}
