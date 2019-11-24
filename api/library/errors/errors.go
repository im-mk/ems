package errors

import (
	"encoding/json"
	"errors"
	"log"
	"net/http"
	"os"

	"github.com/aws/aws-lambda-go/events"
)

var errorLogger = log.New(os.Stderr, "ERROR ", log.Llongfile)

//ErrorResponse type
type ErrorResponse struct {
	Code        string `json:"code"`
	Message     string `json:"message"`
	Description string `json:"description"`
}

// ClientError ...
func ClientError(err ErrorResponse) (events.APIGatewayProxyResponse, error) {
	json, jError := json.Marshal(err)

	if jError != nil {
		return ServerError(jError)
	}

	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusBadRequest,
		Body:       string(json),
	}, nil
}

// ServerError ...
func ServerError(err error) (events.APIGatewayProxyResponse, error) {
	LogError(err)

	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusInternalServerError,
		Body:       http.StatusText(http.StatusInternalServerError),
	}, err
}

// StatusCode ...
func StatusCode(status int) (events.APIGatewayProxyResponse, error) {
	return events.APIGatewayProxyResponse{
		StatusCode: status,
		Body:       http.StatusText(status),
	}, nil
}

// NewError ...
func NewError(errorString string) error {
	err := errors.New(errorString)
	LogError(err)

	return err
}

// LogError ...
func LogError(err error) error {
	errorLogger.Println(err.Error())

	return err
}