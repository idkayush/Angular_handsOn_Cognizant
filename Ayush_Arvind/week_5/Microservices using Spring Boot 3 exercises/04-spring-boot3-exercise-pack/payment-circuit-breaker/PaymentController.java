package com.cognizant.payment;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;

@RestController
public class PaymentController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(PaymentController.class);

    private final RestClient restClient =
            RestClient.create("http://localhost:9999");

    @GetMapping("/payments/status")
    @CircuitBreaker(
            name = "paymentApi",
            fallbackMethod = "paymentFallback"
    )
    public String paymentStatus() {
        return restClient.get()
                .uri("/third-party/status")
                .retrieve()
                .body(String.class);
    }

    public String paymentFallback(Throwable throwable) {
        LOGGER.warn(
                "Payment fallback executed: {}",
                throwable.getMessage()
        );

        return "Payment provider is unavailable. Try again later.";
    }
}
