
DROP DATABASE IF EXISTS robBay_db;
CREATE DATABASE robBay_db;
USE robBay_db;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
department VARCHAR(45) NULL,
itemDesc VARCHAR(45) NULL,
price DECIMAL(10,2) NULL,
quantity INT NOT NULL,
primary key (id)
);

INSERT  INTO products (department, itemDesc, price, quantity)
VALUES ("sporting goods", "football", 10, 23), ("hardware", "shovel", 12.99, 14), 
	("hardware", "ant Killer", 2.99, 67), ("clothing", "dungarees", 19.99, 16),
    ("clothing", "gloves", 12.95, 3), ("housewares", "towl", 1.03, 45), 
    ("housewares", "couch", 34.09, 16);
    

CREATE TABLE departments(
    id INT AUTO_INCREMENT NOT NULL,
    department VARCHAR(50) NOT NULL,
    costs DECIMAL(10,2) NOT NULL,
    sales DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(id));

INSERT INTO departments (department, costs, sales)
VALUES ('housewares', 50000.00, 15000.00),
    ('hardware', 20000.00, 12000.00),
    ('sporting goods ', 30000.00, 15000.00),
    ('beauty', 3000.00, 12000.00),
    ('automotive', 1200.00, 15000.00),
    ('toys', 40000.00, 12000.00),
    ('clothing', 35000.00, 15000.00);
   select * from departments;
   