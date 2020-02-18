
.PHONY: start-db
start-db:
	docker-compose up -d --build

stop-db:
	docker-compose down -v

.PHONY: start-api
start-api: 
	cd api && make start
