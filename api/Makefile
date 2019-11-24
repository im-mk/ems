.PHONY: clean
clean:
	rm -f ./bin/*	

########## windows build

.PHONY: deploy
deploy: build-win copy-s3

.PHONY: build
build:
	go get -u github.com/aws/aws-lambda-go/cmd/build-lambda-zip
	cd ./lambdas/bookholidays/post && make build-and-package

.PHONY: copy-s3
copy-s3:
	cd ./lambdas/bookholidays/post && make copy-s3
