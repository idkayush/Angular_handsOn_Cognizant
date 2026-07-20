SET SERVEROUTPUT ON;

-- Exercise 5, Scenario 1:
-- Update LastModified whenever a customer record is updated.

CREATE OR REPLACE TRIGGER UpdateCustomerLastModified
BEFORE UPDATE ON Customers
FOR EACH ROW
BEGIN
    :NEW.LastModified := SYSDATE;
END;
/

-- Exercise 5, Scenario 2:
-- Insert transaction details into AuditLog after every transaction insert.

CREATE OR REPLACE TRIGGER LogTransaction
AFTER INSERT ON Transactions
FOR EACH ROW
BEGIN
    INSERT INTO AuditLog (
        TransactionID,
        AccountID,
        TransactionDate,
        Amount,
        TransactionType,
        LoggedAt
    ) VALUES (
        :NEW.TransactionID,
        :NEW.AccountID,
        :NEW.TransactionDate,
        :NEW.Amount,
        :NEW.TransactionType,
        SYSDATE
    );
END;
/

-- Exercise 5, Scenario 3:
-- Enforce withdrawal and deposit business rules before transaction insert.

CREATE OR REPLACE TRIGGER CheckTransactionRules
BEFORE INSERT ON Transactions
FOR EACH ROW
DECLARE
    v_balance    Accounts.Balance%TYPE;
BEGIN
    SELECT
        Balance
    INTO
        v_balance
    FROM
        Accounts
    WHERE
        AccountID = :NEW.AccountID;

    IF UPPER(:NEW.TransactionType) = 'WITHDRAWAL'
       AND :NEW.Amount > v_balance THEN
        RAISE_APPLICATION_ERROR(
            -20003,
            'Withdrawal amount cannot exceed account balance.'
        );
    END IF;

    IF UPPER(:NEW.TransactionType) = 'DEPOSIT'
       AND :NEW.Amount <= 0 THEN
        RAISE_APPLICATION_ERROR(
            -20004,
            'Deposit amount must be positive.'
        );
    END IF;
END;
/
