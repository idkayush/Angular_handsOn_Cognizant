# Spring Hands-On 4 - REST POST PUT DELETE and Validation

Implements REST URL naming, POST/PUT/DELETE methods, `@RequestBody`, `@Valid`, bean validation and global exception handling.

## Run and test
```bash
cd spring-learn
mvn test
mvn spring-boot:run
curl -i -H "Content-Type: application/json" -X POST -d '{"code":"FR","name":"France"}' http://localhost:8090/countries
curl -i -X DELETE http://localhost:8090/countries/FR
```
