.ONESHELL:
.PHONY: build-and-package
build-and-package:	
	set GOOS=linux
	go build -o ../../../bin/bookholidays_post ./	
	%GOPATH%/bin/build-lambda-zip.exe -o ../../../bin/bookholidays_post.zip ../../../bin/bookholidays_post

.PHONY: copy-s3
copy-s3:
	aws s3 cp ../../../bin/bookholidays_post.zip s3://lambda-artefacts 

.PHONY: update-function
update-function: 
	aws lambda update-function-code --function-name bookholidays_post --zip-file fileb://../../../bin/bookholidays_post.zip