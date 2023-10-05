CREATE DATABASE IF NOT EXISTS `MOBIforYOU_db`;
USE `MOBIforYOU_db`;


DROP TABLE IF EXISTS `users`;

CREATE TABLE IF NOT EXISTS users (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100),
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);



CREATE TABLE IF NOT EXISTS user_comments (
  id INT NOT NULL AUTO_INCREMENT UNIQUE,
  user_id INT NOT NULL,
  comment_content VARCHAR(400) NOT NULL,
  comment_date TIMESTAMP NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
