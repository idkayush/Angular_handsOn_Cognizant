package com.cognizant.example;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExampleController {

    private final String port;

    public ExampleController(
            @Value("${local.server.port:${server.port}}") String port
    ) {
        this.port = port;
    }

    @GetMapping("/hello")
    public String hello() {
        return "Response from example-service on port " + port;
    }
}
