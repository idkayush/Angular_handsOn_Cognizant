SET SERVEROUTPUT ON;

-- Exercise 4, Scenario 1:
-- CalculateAge returns age in years from date of birth.

CREATE OR REPLACE FUNCTION CalculateAge (
    p_dob    IN DATE
) RETURN NUMBER AS
    v_age    NUMBER;
BEGIN
    v_age := TRUNC(MONTHS_BETWEEN(SYSDATE, p_dob) / 12);

    RETURN v_age;
END;
/

-- Exercise 4, Scenario 2:
-- CalculateMonthlyInstallment returns EMI amount.

CREATE OR REPLACE FUNCTION CalculateMonthlyInstallment (
    p_loan_amount       IN NUMBER,
    p_interest_rate     IN NUMBER,
    p_duration_years    IN NUMBER
) RETURN NUMBER AS
    v_monthly_rate    NUMBER;
    v_total_months    NUMBER;
    v_installment     NUMBER;
BEGIN
    v_monthly_rate := p_interest_rate / (12 * 100);
    v_total_months := p_duration_years * 12;

    IF v_monthly_rate = 0 THEN
        v_installment := p_loan_amount / v_total_months;
    ELSE
        v_installment :=
            p_loan_amount
            * v_monthly_rate
            * POWER(1 + v_monthly_rate, v_total_months)
            / (POWER(1 + v_monthly_rate, v_total_months) - 1);
    END IF;

    RETURN ROUND(v_installment, 2);
END;
/

-- Exercise 4, Scenario 3:
-- HasSufficientBalance returns TRUE if account balance is enough.

CREATE OR REPLACE FUNCTION HasSufficientBalance (
    p_account_id    IN Accounts.AccountID%TYPE,
    p_amount        IN NUMBER
) RETURN BOOLEAN AS
    v_balance    Accounts.Balance%TYPE;
BEGIN
    SELECT
        Balance
    INTO
        v_balance
    FROM
        Accounts
    WHERE
        AccountID = p_account_id;

    RETURN v_balance >= p_amount;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RETURN FALSE;
END;
/
