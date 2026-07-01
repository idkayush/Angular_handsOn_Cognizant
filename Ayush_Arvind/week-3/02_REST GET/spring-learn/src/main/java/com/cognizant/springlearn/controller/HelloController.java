package com.cognizant.springlearn.controller;
import org.slf4j.*; import org.springframework.web.bind.annotation.*;
@RestController
public class HelloController {
    private static final Logger LOGGER = LoggerFactory.getLogger(HelloController.class);
    @GetMapping("/hello")
    public String sayHello(){ LOGGER.info("START"); LOGGER.info("END"); return "Hello World!!"; }
}
