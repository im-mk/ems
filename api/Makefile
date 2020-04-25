# Create entity framework migration
.PHONY: migrate
migrate: 
	dotnet ef migrations add ${name} -p EMS.Db/ -s EMS.Api

# Create a release build
.PHONY: publish
publish: 
	dotnet publish --configuration Release

# Run api on local machine
.PHONY: start
start: 
	cd EMS.Api && dotnet run

.PHONY: watch
watch: 
	cd EMS.Api && dotnet watch run

#####################################################
#  Build and run api in a container

.PHONY: start-docker
start-docker:
	docker-compose up -d --build --force-recreate

.PHONY: stop-docker
stop-docker:
	docker-compose down
