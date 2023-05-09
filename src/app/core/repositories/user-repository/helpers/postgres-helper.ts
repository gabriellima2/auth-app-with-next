import { Client } from "pg";

type TPostgresHelper = {
	client: undefined | Client;
	connect(): void;
	disconnect(): void;
};

export const PostgresHelper: TPostgresHelper = {
	client: undefined,
	connect() {
		if (this.client) return;
		this.client = new Client({
			host: process.env.DB_HOSTNAME,
			port: 5432,
			database: process.env.DB_NAME,
			user: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
		});
		this.client
			.connect()
			.then(() => console.log("DB connected"))
			.catch((err) => console.error("DB connection error", err.stack));
	},
	disconnect() {
		if (!this.client) return;
		this.client
			.end()
			.then(() => console.log("DB has disconnected"))
			.catch((err) =>
				console.error("DB error during disconnection", err.stack)
			);
	},
};
