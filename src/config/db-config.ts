import type { PoolConfig } from "pg";

export const dbConfig: PoolConfig = {
	host: process.env.DB_HOSTNAME,
	port: 5432,
	database: process.env.DB_NAME,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
};
