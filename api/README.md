### Pre-Req 

Install Dotnet Core entity framekwork tool using the following command to create entity framework migrations:

dotnet tool install --global dotnet-ef


### System config

When you hit the https endpoint using a browser or through javascript call you will get invalid certificate error due to the certificate issued by the localhost. To fix this issue Run the following command in the terminal.


dotnet dev-certs https --trust