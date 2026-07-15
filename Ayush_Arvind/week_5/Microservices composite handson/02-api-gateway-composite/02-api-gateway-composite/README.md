# API Gateway Composite Hands-on

Start:

1. `eureka-server`
2. `greet-service`
3. `api-gateway`

Test:

- Direct: http://localhost:8080/greet
- Through gateway: http://localhost:9090/greet-service/greet
- Eureka: http://localhost:8761

The API Gateway console logs every incoming request through `LogFilter`.
