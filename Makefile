# start both api and web application in docker container
.PHONY: start
start: 
	cd api && make start-docker
	cd web && make start-docker

.PHONY: stop
stop: 
	cd api && make stop-docker
	cd web && make stop-docker
	
