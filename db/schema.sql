-- Creates the database burgers_db and specifies it for use.
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(75) NOT NULL,
devour boolean DEFAULT FALSE,
date_created DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);