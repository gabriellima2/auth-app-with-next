CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(30) NOT NULL UNIQUE,
	email VARCHAR(150) NOT NULL UNIQUE,
	password CHAR(60) NOT NULL
)
