CREATE TABLE gender
(
  gender_id   INT(1),
  gender_name CHAR(10),
  PRIMARY KEY (gender_id)
);

CREATE TABLE bank_info
(
  bank_id   INT(2),
  bank_code CHAR(5),
  bank_name VARCHAR(100),
  PRIMARY KEY (bank_id)
);

CREATE TABLE user
(
  user_id        CHAR(10),
  first_name     VARCHAR(32),
  last_name      VARCHAR(32),
  nic            CHAR(20),
  date_of_birth  DATE,
  gender_id      INT(1),
  msisdn         CHAR(20),
  email          VARCHAR(100),
  bank_id        INT(2),
  account_number VARCHAR(30),
  PRIMARY KEY (user_id),
  FOREIGN KEY (gender_id) REFERENCES gender (gender_id),
  FOREIGN KEY (bank_id) REFERENCES bank_info (bank_id)
);