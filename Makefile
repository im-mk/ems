.PHONY: start clean start-db

clean:
	terraform destroy

start:
	terraform init
	terraform apply

start-db:
	docker-compose up -d --build

stop-db:
	docker-compose down -v