# Initialize secret-store for local dev
.PHONY: secret
secret:
	dotnet user-secrets init -p EMS.Api/
	dotnet user-secrets set "TokenKey" "super sectet key" -p EMS.Api/

# Create entity framework migration
.PHONY: migrate
migrate: 
	dotnet ef migrations add ${name} -p EMS.Db/ -s EMS.Api

# Create a release build
.PHONY: publish
publish: 
	dotnet publish --configuration Release

# ##################################################

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

#####################################################

# Create s3 bucket and assign a policy
.PHONY: create-s3
create-s3:
	aws --endpoint-url=http://localhost:4572 s3 mb s3://ems-data-bucket
	aws --endpoint-url=http://localhost:4572 s3api put-bucket-acl --bucket ems-data-bucket --acl public-read 

# Start s3 service locally
.PHONY: start-s3
start-s3:
	docker-compose up -d --build --force-recreate localstack-s3 

# List bucket contents
.PHONY: list-s3
list-s3:
	aws --endpoint-url=http://localhost:4572 s3 ls s3://ems-data-bucket/