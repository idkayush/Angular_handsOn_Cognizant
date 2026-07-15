package com.cognizant.orders;

public record UserResponse(
        Long id,
        String name,
        String email
) {
}
