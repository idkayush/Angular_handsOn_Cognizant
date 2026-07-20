SET SERVEROUTPUT ON;

-- Exercise 2, Scenario 1:
-- SafeTransferFunds transfers money and rolls back if any error occurs.

CREATE OR REPLACE PROCEDURE SafeTransferFunds (
    p_from_account_id    IN Accounts.AccountID%TYPE,
    p_to_account_id      IN Accounts.AccountID%TYPE,
    p_amount             IN NUMBER
) AS
    v_from_balance    Accounts.Balance%TYPE;
BEGIN
    SELECT
        Balance
    INTO
        v_from_balance
    FROM
        Accounts
    WHERE
        AccountID = p_from_account_id
    FOR UPDATE;

    IF v_from_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds.');
    END IF;

    UPDATE Accounts
    SET
        Balance = Balance - p_amount,
        LastModified = SYSDATE
    WHERE
        AccountID = p_from_account_id;

    UPDATE Accounts
    SET
        Balance = Balance + p_amount,
        LastModified = SYSDATE
    WHERE
        AccountID = p_to_account_id;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Funds transferred successfully.');
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        ROLLBACK;

        INSERT INTO ErrorLog (
            ErrorMessage,
            ErrorDate
        ) VALUES (
            'SafeTransferFunds failed: Account not found.',
            SYSDATE
        );

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Error: Account not found.');

    WHEN OTHERS THEN
        ROLLBACK;

        INSERT INTO ErrorLog (
            ErrorMessage,
            ErrorDate
        ) VALUES (
            'SafeTransferFunds failed: ' || SQLERRM,
            SYSDATE
        );

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/

-- Exercise 2, Scenario 2:
-- UpdateSalary increases salary and logs an error if employee does not exist.

CREATE OR REPLACE PROCEDURE UpdateSalary (
    p_employee_id    IN Employees.EmployeeID%TYPE,
    p_percentage     IN NUMBER
) AS
    v_count    NUMBER;
BEGIN
    SELECT
        COUNT(*)
    INTO
        v_count
    FROM
        Employees
    WHERE
        EmployeeID = p_employee_id;

    IF v_count = 0 THEN
        RAISE_APPLICATION_ERROR(-20002, 'Employee ID does not exist.');
    END IF;

    UPDATE Employees
    SET
        Salary = Salary + (Salary * p_percentage / 100)
    WHERE
        EmployeeID = p_employee_id;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Salary updated successfully.');
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;

        INSERT INTO ErrorLog (
            ErrorMessage,
            ErrorDate
        ) VALUES (
            'UpdateSalary failed: ' || SQLERRM,
            SYSDATE
        );

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/

-- Exercise 2, Scenario 3:
-- AddNewCustomer handles duplicate customer ID errors.

CREATE OR REPLACE PROCEDURE AddNewCustomer (
    p_customer_id    IN Customers.CustomerID%TYPE,
    p_name           IN Customers.Name%TYPE,
    p_dob            IN Customers.DOB%TYPE,
    p_balance        IN Customers.Balance%TYPE
) AS
BEGIN
    INSERT INTO Customers (
        CustomerID,
        Name,
        DOB,
        Balance,
        IsVIP,
        LastModified
    ) VALUES (
        p_customer_id,
        p_name,
        p_dob,
        p_balance,
        'FALSE',
        SYSDATE
    );

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Customer added successfully.');
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        ROLLBACK;

        INSERT INTO ErrorLog (
            ErrorMessage,
            ErrorDate
        ) VALUES (
            'AddNewCustomer failed: Customer ID already exists - '
            || p_customer_id,
            SYSDATE
        );

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Error: Customer ID already exists.');

    WHEN OTHERS THEN
        ROLLBACK;

        INSERT INTO ErrorLog (
            ErrorMessage,
            ErrorDate
        ) VALUES (
            'AddNewCustomer failed: ' || SQLERRM,
            SYSDATE
        );

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/
