DROP DATABASE IF EXISTS culTourist_db;

-- Creates the "culTourist_db" database --
CREATE DATABASE culTourist_db;
-- Uses the "culTourist_db" --
USE culTourist_db;

--Creates our user table --
CREATE TABLE users(
id INTEGER NOT NULL AUTO_INCREMENT,
full_name VARCHAR(30) NOT NULL,
numOfPosts INT NOT NULL,
PRIMARY KEY (id)
);

--Creates our countries table --
CREATE TABLE countries(
id INTEGER NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

--Creates our posts table --
CREATE TABLE posts(
id INTEGER NOT NULL AUTO_INCREMENT,
countryID INT NOT NULL,
userID INT NOT NULL,
title VARCHAR(30) NOT NULL,
body VARCHAR(255) NOT NULL,
category VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);