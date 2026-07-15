# Customer and Billing API Gateway

The included YAML demonstrates service routing and path rewriting.

For Redis-backed rate limiting, add:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis-reactive</artifactId>
</dependency>
```

Then add `RequestRateLimiter` to the desired route. Caching should be
implemented in Customer/Billing services with Spring Cache or at the
infrastructure layer rather than blindly caching every gateway response.
