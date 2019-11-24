package main

import (
	"log"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/im-kaleem/ems/api/library/errors"
)

//Handler handles api call
func Handler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	log.Println("Success: ", request.Body)
	return errors.StatusCode(200)
}

func main() {
	lambda.Start(Handler)
}
