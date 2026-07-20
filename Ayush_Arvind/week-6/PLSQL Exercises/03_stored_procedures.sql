SET SERVEROUTPUT ON;

-- Exercise 3, Scenario 1:
-- ProcessMonthlyInterest applies 1% interest to all savings accounts.

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    UPDATE Accounts
    SET
        Balance = Balance + (Balance * 0.01),
        LastModified = SYSDATE
    WHERE
        UPPER(AccountType) = 'SAVINGS';

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Monthly interest processed for savings accounts.');
END;
/

-- Exercise 3, Scenario 2:
-- UpdateEmployeeBonus adds bonus percentage to employees in a department.

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department          IN Employees.Department%TYPE,
    p_bonus_percentage    IN NUMBER
) AS
BEGIN
    UPDATE Employees
    SET
        Salary = Salary + (Salary * p_bonus_percentage / 100)
    WHERE
        UPPER(Department) = UPPER(p_department);

    DBMS_OUTPUT.PUT_LINE(SQL%ROWCOUNT || ' employee salary records updated.');

    COMMIT;
END;
/

-- Exercise 3, Scenario 3:
-- TransferFunds transfers amount after checking sufficient balance.

CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account_id    IN Accounts.AccountID%TYPE,
    p_to_account_id      IN Accounts.AccountID%TYPE,
    p_amount             IN NUMBER
) AS
    v_balance    Accounts.Balance%TYPE;
BEGIN
    SELECT
        Balance
    INTO
        v_balance
    FROM
        Accounts
    WHERE
        AccountID = p_from_account_id
    FOR UPDATE;

    IF v_balance < p_amount THEN
        DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance.');
        RETURN;
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

    DBMS_OUTPUT.PUT_LINE('Transfer completed successfully.');
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Transfer failed: Account not found.');

    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Transfer failed: ' || SQLERRM);
END;
/
