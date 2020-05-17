
.PHONY: upload
upload:
	npm run build && aws s3 sync ./build s3://ems-web

.PHONY: start-docker
start-docker:
	docker-compose up -d --build

.PHONY: stop-docker
stop-docker:
	docker-compose down
