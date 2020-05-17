# Employee Management System

Manage employee records, including holidays, documents, absense etc through this system.

## Getting started

To run this software locally on your machine using docker, run the following command to start. Just make sure you have Docker and Make utility installed.

`make start`

This will run the api and web app in separate containers. Open the following url to access the app after running the above command.

http://localhost:3000

username: test@test.com
password: Pa$$w0rd


To stop the app simply run

`make stop`

# Specifications

This solution consist of a web UI with REST based API.

### UI

A react app based on typescript variation of popular create-react-app template.

### API

RESTFul Api designed using dotnet core.

### infrstructure

Infrasture has been developed using terraform.
