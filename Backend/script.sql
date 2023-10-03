CREATE DATABASE IF NOT EXISTS `MOBIforYOU_db`;
USE `MOBIforYOU_db`;


DROP TABLE IF EXISTS `users`;

CREATE TABLE IF NOT EXISTS users (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
