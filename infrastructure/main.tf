provider "aws" {
  region = "eu-west-2"
}

data "aws_region" "current" {
}

# Lambda IAM Role
resource "aws_iam_role" "ems-lambda-role" {
  name               = "ems-lambda-role"
  assume_role_policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": {
    "Action": "sts:AssumeRole",
    "Principal": {
      "Service": "lambda.amazonaws.com"
    },
    "Effect": "Allow"
  }
}
POLICY
}

# AWS API Gateway
resource "aws_api_gateway_rest_api" "ems-api" {
  name = "ems-api"
}

# Path /bookholidays
resource "aws_api_gateway_resource" "ems-bookholidays" {
  rest_api_id = "${aws_api_gateway_rest_api.ems-api.id}"
  parent_id   = "${aws_api_gateway_rest_api.ems-api.root_resource_id}"
  path_part   = "bookholidays"
}

# POST Internet -----> API Gateway
resource "aws_api_gateway_method" "ems-bookholidays-post" {
  rest_api_id   = "${aws_api_gateway_rest_api.ems-api.id}"
  resource_id   = "${aws_api_gateway_resource.ems-bookholidays.id}"
  http_method   = "POST"
  authorization = "NONE"
}

# Lambda => bookholidays_post
resource "aws_lambda_function" "bookholidays_post" {
  function_name    = "bookholidays_post"
  filename         = "./../api/bin/bookholidays_post.zip"
  handler          = "bookholidays_post"
  source_code_hash = "${filebase64sha256("./../api/bin/bookholidays_post.zip")}"
  role             = "${aws_iam_role.ems-lambda-role.arn}"
  runtime          = "go1.x"
  memory_size      = 128
  timeout          = 1
}

# Allow API gateway to invoke the bookholidays_post Lambda function.
resource "aws_lambda_permission" "ems-bookholidays_post-permission" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = "${aws_lambda_function.bookholidays_post.arn}"
  principal     = "apigateway.amazonaws.com"
}

# API Gateway ------> Lambda
resource "aws_api_gateway_integration" "ems-bookholidays-integration" {
  rest_api_id             = "${aws_api_gateway_rest_api.ems-api.id}"
  resource_id             = "${aws_api_gateway_resource.ems-bookholidays.id}"
  http_method             = "${aws_api_gateway_method.ems-bookholidays-post.http_method}"
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = "arn:aws:apigateway:${data.aws_region.current.name}:lambda:path/2015-03-31/functions/${aws_lambda_function.bookholidays_post.arn}/invocations"
}

# API Gatewaw stage
resource "aws_api_gateway_deployment" "ems_v1" {
  depends_on = [
    "aws_api_gateway_integration.ems-bookholidays-integration"
  ]
  rest_api_id = "${aws_api_gateway_rest_api.ems-api.id}"
  stage_name  = "v1"
}

# Api URL
output "url" {
  value = "${aws_api_gateway_deployment.ems_v1.invoke_url}${aws_api_gateway_resource.ems-bookholidays.path}"
}
