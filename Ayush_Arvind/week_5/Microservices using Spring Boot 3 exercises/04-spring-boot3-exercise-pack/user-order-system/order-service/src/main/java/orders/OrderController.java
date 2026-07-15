package com.cognizant.orders;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderRepository repository;
    private final UserClient userClient;

    public OrderController(
            OrderRepository repository,
            UserClient userClient
    ) {
        this.repository = repository;
        this.userClient = userClient;
    }

    @PostMapping
    public ResponseEntity<?> create(
            @RequestBody CustomerOrder order
    ) {
        UserResponse user = userClient.getUser(order.getUserId());
        CustomerOrder savedOrder = repository.save(order);

        return ResponseEntity.ok(
                Map.of(
                        "order", savedOrder,
                        "user", user
                )
        );
    }
}
