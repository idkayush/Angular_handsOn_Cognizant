SET SERVEROUTPUT ON;

-- Exercise 6, Scenario 1:
-- Generate monthly statements using an explicit cursor.

DECLARE
    CURSOR GenerateMonthlyStatements IS
        SELECT
            c.CustomerID,
            c.Name,
            t.TransactionID,
            t.TransactionDate,
            t.Amount,
            t.TransactionType
        FROM
            Customers c
            JOIN Accounts a ON c.CustomerID = a.CustomerID
            JOIN Transactions t ON a.AccountID = t.AccountID
        WHERE
            TRUNC(t.TransactionDate, 'MM') = TRUNC(SYSDATE, 'MM')
        ORDER BY
            c.CustomerID,
            t.TransactionDate;
BEGIN
    FOR statement_record IN GenerateMonthlyStatements LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Customer: '
            || statement_record.Name
            || ', Transaction ID: '
            || statement_record.TransactionID
            || ', Date: '
            || TO_CHAR(statement_record.TransactionDate, 'DD-MON-YYYY')
            || ', Type: '
            || statement_record.TransactionType
            || ', Amount: '
            || statement_record.Amount
        );
    END LOOP;
END;
/

-- Exercise 6, Scenario 2:
-- Apply annual fee to all accounts using an explicit cursor.

DECLARE
    CURSOR ApplyAnnualFee IS
        SELECT
            AccountID,
            Balance
        FROM
            Accounts
        FOR UPDATE;

    v_annual_fee    CONSTANT NUMBER := 100;
BEGIN
    FOR account_record IN ApplyAnnualFee LOOP
        UPDATE Accounts
        SET
            Balance = Balance - v_annual_fee,
            LastModified = SYSDATE
        WHERE
            CURRENT OF ApplyAnnualFee;

        DBMS_OUTPUT.PUT_LINE(
            'Annual fee applied to account ID: '
            || account_record.AccountID
        );
    END LOOP;

    COMMIT;
END;
/

-- Exercise 6, Scenario 3:
-- Update loan interest rates based on a new policy using an explicit cursor.

DECLARE
    CURSOR UpdateLoanInterestRates IS
        SELECT
            LoanID,
            LoanAmount,
            InterestRate
        FROM
            Loans
        FOR UPDATE;
BEGIN
    FOR loan_record IN UpdateLoanInterestRates LOOP
        IF loan_record.LoanAmount > 10000 THEN
            UPDATE Loans
            SET
                InterestRate = InterestRate + 0.5
            WHERE
                CURRENT OF UpdateLoanInterestRates;
        ELSE
            UPDATE Loans
            SET
                InterestRate = InterestRate + 0.25
            WHERE
                CURRENT OF UpdateLoanInterestRates;
        END IF;

        DBMS_OUTPUT.PUT_LINE(
            'Interest rate updated for loan ID: '
            || loan_record.LoanID
        );
    END LOOP;

    COMMIT;
END;
/
