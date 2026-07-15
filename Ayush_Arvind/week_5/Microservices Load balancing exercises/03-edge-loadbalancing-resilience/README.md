# Edge Service, Load Balancing and Resilience

Run Eureka, then start two service instances:

```powershell
cd example-service
$env:PORT=8081
mvn spring-boot:run
```

Open another terminal:

```powershell
cd example-service
$env:PORT=8082
mvn spring-boot:run
```

Then start the gateway.

Repeatedly open:

http://localhost:9090/loadbalanced/hello

Responses should alternate between registered instances. Stop both service
instances to test the circuit-breaker fallback.
