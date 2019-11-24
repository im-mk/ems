# Employee Management System

Manage employee records, including holidays, documents, absense etc through this system.

## System

This solution consist of a web UI with REST based API.

Required software

Windows

choco: https://chocolatey.org/
gnu make: choco install make
terraform: choco install terraform
golang: choco install golang
node: choco install nodejs
awscli: choco install awscli

Set gopath for lambdas to build: https://github.com/golang/go/wiki/SettingGOPATH

### UI

A react app based on typescript variation of popular react-boilerplate template.

### API

#### infrstructure

Infrasture has been developed using terraform.

#### dotnet
RESTFul Api designed using dotnet core.

#### lambda
RESTFul Api designed using Api gateway with golang lambdas.