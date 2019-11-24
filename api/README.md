# API

## Building and uploading lambdas
See readme in foundation_stacks folder for full instructions
* https://github.com/emisgroup/se-snowden-api/tree/master/foundation_stacks

## Testing API Gateway
After building a stack, the API Gateway call can be tested by going to the API Gateway section of AWS and looking for the appropriate entry there (each gateway should have the stack environment appended to it). Select the gateway, click on 'stages' and then find the element you want to test in the tree. AWS should provide an 'invoke URL' which you can cut and paste into a browser or Postman in order to test that particular call (you will need to replace any variables in the URL such as version and person with appropriate values).

## Mock authoriser
All API calls expect an authorisation token in the header, which will currently be passed onto a mock authoriser lambda. The key for this token is 'Authorization' and the value should be either 'ALLOW' or 'DENY'.

| Token Value | Expected Result  |
|-------------|------------------|
| ALLOW       | 200/201 Success  |
| DENY        | 403 Forbidden    |
| -missing-   | 401 Unauthorized |
