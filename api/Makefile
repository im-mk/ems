.PHONY: start
start: 
	cd EMS.Api && dotnet run

.PHONY: watch
watch: 
	cd EMS.Api && dotnet watch run

.PHONY: migrate
migrate: 
	dotnet ef migrations add ${name} -p EMS.Db/ -s EMS.Api

