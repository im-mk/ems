#Deploy api - s3 data bucket
.PHONY: init-api
init-api:
	cd api/s3 && terraform init

.PHONY: destory-api
destroy-api:
	cd api/s3 && terraform destroy

.PHONY: plan-api
plan-api:
	cd api/s3 && terraform plan

.PHONY: deploy-api
deploy-api:
	cd api/s3 && terraform apply


# Deploy api - ec2

.PHONY: init-api
init-api:
	cd api && terraform init

.PHONY: destory-api
destroy-api:
	cd api && terraform destroy

.PHONY: plan-api
plan-api:
	cd api && terraform plan

.PHONY: deploy-api
deploy-api:
	cd api && terraform apply

.PHONY: connect
connect:
	ssh ec2-user@${ip} -i ./aws.pem

# Deploy Web
.PHONY: init-web
init-web:
	cd web && terraform init

.PHONY: destroy-web
destroy-web:
	cd web && terraform destroy

.PHONY: plan-web
plan-web:
	cd web && terraform plan

.PHONY: deploy-web
deploy-web:
	cd web && terraform apply
	
# Local docker deployment
# .PHONY: start-db
# start-db:
# 	docker-compose up -d --build

# .PHONY: stop-db
# stop-db:
# 	docker-compose down -v
