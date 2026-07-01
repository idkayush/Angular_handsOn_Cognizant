package com.cognizant.springlearn.security;
import java.nio.charset.StandardCharsets; import java.util.*; import javax.crypto.SecretKey; import org.springframework.stereotype.Component; import io.jsonwebtoken.*; import io.jsonwebtoken.security.Keys;
@Component public class JwtUtil {
 private static final String SECRET="digital-nurture-jwt-secret-key-which-is-long-enough"; private final SecretKey key=Keys.hmacShaKeyFor(SECRET.getBytes(StandardCharsets.UTF_8));
 public String generateToken(String username, Collection<String> roles){ return Jwts.builder().subject(username).claim("roles", roles).issuedAt(new Date()).expiration(new Date(System.currentTimeMillis()+20*60*1000)).signWith(key).compact(); }
 public Claims validateToken(String token){ return Jwts.parser().verifyWith(key).build().parseSignedClaims(token).getPayload(); }
}
