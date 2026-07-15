package com.cognizant.loanservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/loans")
public class LoanController {

    @GetMapping("/{number}")
    public Loan getLoan(@PathVariable String number) {
        return new Loan(
                number,
                "car",
                400000.0,
                3258.0,
                18
        );
    }
}
