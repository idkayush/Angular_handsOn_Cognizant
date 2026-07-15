# JWT Exercise Note

The uploaded sample uses `WebSecurityConfigurerAdapter` and `jjwt 0.9.1`,
which are outdated for Spring Boot 3.

For a production-style Spring Boot 3 solution, prefer Spring Security's
OAuth2 Resource Server JWT support, shown in the sibling
`resource-server` folder. It validates signed JWTs and integrates with the
current `SecurityFilterChain` API without a custom token filter.
