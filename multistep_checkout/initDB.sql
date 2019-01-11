DROP DATABASE IF EXISTS checkout;
CREATE DATABASE checkout;
USE checkout;

CREATE TABLE purchases
(
  purchase_id INT NOT NULL
  AUTO_INCREMENT,
  name VARCHAR
  (100),
  email VARCHAR
  (100),
  password VARCHAR
  (100),
  address_1 VARCHAR
  (150),
  address_2 VARCHAR
  (150),
  city VARCHAR
  (50),
  state VARCHAR
  (30),
  zip_code VARCHAR
  (15),
  phone VARCHAR
  (15),
  cc_number INT,
  cc_expiration VARCHAR
  (10),
  cc_cvv INT,
  billing_zip VARCHAR
  (15),
  PRIMARY KEY
  ( purchase_id )
);