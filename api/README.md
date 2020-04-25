### Pre-Req 

Install Dotnet Core entity framekwork tool using the following command to create entity framework migrations:

dotnet tool install --global dotnet-ef

### System config

When you hit the https endpoint using a browser or through javascript call you will get invalid certificate error due to the certificate issued by the localhost. To fix this issue Run the following command in the terminal.

dotnet dev-certs https --trust

### Run the api

Check the Makefile for a list of all the commands available to run this api.

Make sure to install the dotnet sdk before running the following commands.

<https://dotnet.microsoft.com/download>

`make start`

### Run the api in a docker container

Make sure to install docker on your computer before running the following commands.

<https://docs.docker.com/docker-for-windows/install/>

Start/Stop the api using the following commands.

`make start-docker`

`make stop-docker`
