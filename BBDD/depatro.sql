CREATE DATABASE depatro DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE depatro;

CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR (100) NOT NULL,
    email VARCHAR (150) NOT NULL UNIQUE,
    password VARCHAR (255) NOT NULL
);

INSERT INTO users (name,email,password) VALUES
    ('Juan Ginés','prueba@prueba.com','$2y$10$6JqABKJKwBkUWbfw7GV6Z.kIaEDOYFssZvCa3pd9ExMBoPSRuQ9oq'),
    ('Ariadna','prueba2@prueba.com','$2y$10$6JqABKJKwBkUWbfw7GV6Z.kIaEDOYFssZvCa3pd9ExMBoPSRuQ9oq'),
    ('Raquel','prueba3@prueba.com','$2y$10$6JqABKJKwBkUWbfw7GV6Z.kIaEDOYFssZvCa3pd9ExMBoPSRuQ9oq');