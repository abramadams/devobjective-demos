CREATE DATABASE `devobjective`;

CREATE TABLE `devobjective`.`items` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `description` TEXT NULL,
  `linkId` VARCHAR(255) NULL,
  `price` DOUBLE NULL,
  `image` VARCHAR(255) NULL,
  `thumbnail` VARCHAR(255) NULL,
  PRIMARY KEY (`Id`));

CREATE TABLE `devobjective`.`orders` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `order_number` VARCHAR(45) NULL,
  `customers_Id` INT NULL,
  `order_date` DATETIME NULL,
  `total` DOUBLE NULL,
  `payment_status` TINYINT NULL,
  `payment_method` VARCHAR(45) NULL,
  `payment_date` DATETIME NULL,
  PRIMARY KEY (`Id`));

CREATE TABLE `devobjective`.`order_items` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `orders_ID` INT NULL,
  `items_ID` INT NULL,
  `quantity` INT NULL,
  `price` DOUBLE NULL,
  `subtotal` DOUBLE NULL,
  PRIMARY KEY (`Id`));

CREATE TABLE `devobjective`.`customers` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NULL,
  `last_name` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(45) NULL,
  `device_token` VARCHAR(255) NULL,
  `phone` VARCHAR(255) NULL,
  `address1` VARCHAR(255) NULL,
  `address2` VARCHAR(255) NULL,
  `city` VARCHAR(255) NULL,
  `state` VARCHAR(45) NULL,
  `zip` VARCHAR(45) NULL,
  PRIMARY KEY (`Id`));
