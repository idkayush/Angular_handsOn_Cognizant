SET SERVEROUTPUT ON;

-- Exercise 1, Scenario 1:
-- Apply 1% discount to loan interest rates for customers above 60 years old.

BEGIN
    FOR customer_loan IN (
        SELECT
            c.CustomerID,
            c.Name,
            c.DOB,
            l.LoanID,
            l.InterestRate
        FROM
            Customers c
            JOIN Loans l ON c.CustomerID = l.CustomerID
    ) LOOP
        IF TRUNC(MONTHS_BETWEEN(SYSDATE, customer_loan.DOB) / 12) > 60 THEN
            UPDATE Loans
            SET
                InterestRate = InterestRate - 1
            WHERE
                LoanID = customer_loan.LoanID;

            DBMS_OUTPUT.PUT_LINE(
                'Discount applied for customer: '
                || customer_loan.Name
                || ', Loan ID: '
                || customer_loan.LoanID
            );
        END IF;
    END LOOP;

    COMMIT;
END;
/

-- Exercise 1, Scenario 2:
-- Promote customers to VIP if balance is greater than 10000.

BEGIN
    FOR customer_record IN (
        SELECT
            CustomerID,
            Name,
            Balance
        FROM
            Customers
    ) LOOP
        IF customer_record.Balance > 10000 THEN
            UPDATE Customers
            SET
                IsVIP = 'TRUE'
            WHERE
                CustomerID = customer_record.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                customer_record.Name || ' promoted to VIP status.'
            );
        END IF;
    END LOOP;

    COMMIT;
END;
/

-- Exercise 1, Scenario 3:
-- Print reminders for customers whose loans are due within the next 30 days.

BEGIN
    FOR due_loan IN (
        SELECT
            c.Name,
            l.LoanID,
            l.EndDate
        FROM
            Customers c
            JOIN Loans l ON c.CustomerID = l.CustomerID
        WHERE
            l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Dear '
            || due_loan.Name
            || ', your loan ID '
            || due_loan.LoanID
            || ' is due on '
            || TO_CHAR(due_loan.EndDate, 'DD-MON-YYYY')
            || '.'
        );
    END LOOP;
END;
/
