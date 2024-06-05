-- Insert plans
INSERT INTO plan (name, description, price, data_limit, call_minutes, sms_limit) VALUES ('Basic Plan', 'Basic plan description', 29.99, 10, 100, 50);
INSERT INTO plan (name, description, price, data_limit, call_minutes, sms_limit) VALUES ('Standard Plan', 'Standard plan description', 49.99, 50, 500, 200);
INSERT INTO plan (name, description, price, data_limit, call_minutes, sms_limit) VALUES ('Premium Plan', 'Premium plan description', 99.99, 100, 1000, 500);

-- Insert customers
INSERT INTO customer (name, email, phone_number, address, plan_id) VALUES ('John Doe', 'john@example.com', '1234567890', '123 Main St', 1);
INSERT INTO customer (name, email, phone_number, address, plan_id) VALUES ('Jane Smith', 'jane@example.com', '0987654321', '456 Elm St', 2);

-- Insert subscriptions
INSERT INTO subscription (customer_id, plan_id, start_date, end_date, status) VALUES (1, 1, '2024-01-01', '2024-12-31', 'ACTIVE');
INSERT INTO subscription (customer_id, plan_id, start_date, end_date, status) VALUES (2, 2, '2024-01-01', '2024-12-31', 'ACTIVE');
