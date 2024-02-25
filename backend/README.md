## notes-app backend

### How to run locally?
```
mvn clean verify
java -jar notes-app/target/notes-app-1.0.0.jar
```
Server started at `localhost:8080`

You can verify with GET endpoint http://localhost:8080/hello  
You can access swagger UI at http://localhost:8080/swagger-ui/index.html  

#### How to start DynamoDB locally?
```
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
```
#### How to run locally by skipping unit test, jacoco, checkstyle?
```
mvnw.cmd clean verify -Dmaven.test.skip=true -Djacoco.skip=true -Dcheckstyle.skip=true && java -jar notes-app/target/notes-app-1.0.0.jar
```