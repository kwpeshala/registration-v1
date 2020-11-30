# registration-server

## Prerequisites ##

* Java 1.8+
* Maven 3.x
* MySQL 5.7

#Db setup

Configure the db connection in the registration-v1/modules/registration-server/src/main/resources/application.properties

CREATE DATABASE registration;

Apply the given scripts in order.

Run registration-v1/data/schema.sql
Run registration-v1/data/initial_data.sql

## Run the server ##

Go to the registration-v1/modules/registration-server

`mvn spring-boot:run`