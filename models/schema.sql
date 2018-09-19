create database pets_db;

use pets_db;

create table users
(
    id INT(10)
    auto_increment,
    user_name varchar
    (30) NOT NULL,
    user_password varchar
    (30) NOT NULL,
    first_name varchar
    (255) NOT NULL,
    last_name varchar
    (255) NOT NULL,
    home_address_1 varchar
    (255) NOT NULL,
    home_address_2 varchar
    (255) NOT NULL,
    home_city varchar
    (255) NOT NULL,
    home_state varchar
    (2) NOT NULL,
    home_zipcode varchar
    (255) NOT NULL,
    credit_numb int
    (12),
    pet_name varchar
    (255),
    pet_id int
    (10),
    primary key
    (id)
);

    create table pets
    (
        id INT(10)
        auto_increment,
    pet_name varchar
        (255) NOT NULL,
    pet_type varchar
        (255) NOT NULL,
    pet_breed varchar
        (255) NOT NULL,
    pet_picture_url varchar
        (255),
	service_animal BOOLEAN,
    primary key
        (id)
    
);