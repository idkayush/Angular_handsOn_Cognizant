# Spring Hands-On 5 - JWT Authentication

Implements Spring Security, in-memory users, HTTP Basic token generation, JWT creation/expiry, Authorization header validation and JWT filter-based authorization.

## Run and test
```bash
cd spring-learn
mvn spring-boot:run
curl -s -u user:pwd http://localhost:8090/authenticate
TOKEN=<paste-token>
curl -H "Authorization: Bearer $TOKEN" http://localhost:8090/countries
```

Users:
- `user / pwd` -> ROLE_USER
- `admin / pwd` -> ROLE_ADMIN
