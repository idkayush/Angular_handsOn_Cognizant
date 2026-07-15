package com.cognizant.loanservice;

public record Loan(
        String number,
        String type,
        double loan,
        double emi,
        int tenure
) {
}
