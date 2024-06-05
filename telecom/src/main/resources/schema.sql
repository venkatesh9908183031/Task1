-- Define the Customer table
CREATE TABLE IF NOT EXISTS customer (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    address VARCHAR(255) NOT NULL,
    plan_id BIGINT,
    FOREIGN KEY (plan_id) REFERENCES plan(id)
);

-- Define the Plan table
CREATE TABLE IF NOT EXISTS plan (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    price DOUBLE NOT NULL,
    data_limit INT NOT NULL,
    call_minutes INT NOT NULL,
    sms_limit INT NOT NULL
);

-- Define the Subscription table
CREATE TABLE IF NOT EXISTS subscription (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    customer_id BIGINT,
    plan_id BIGINT,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customer(id),
    FOREIGN KEY (plan_id) REFERENCES plan(id)
);
