import { Pool, DatabaseError } from "pg";

type TPostgresHelper = {
	client: undefined | Pool;
	connect(): Promise<void>;
	disconnect(): Promise<void>;
};

export const PostgresHelper: TPostgresHelper = {
	client: undefined,
	async connect(): Promise<void> {
		if (this.client) return;
		this.client = new Pool({
			host: process.env.DB_HOSTNAME,
			port: 5432,
			database: process.env.DB_NAME,
			user: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
		});
		try {
			await this.client.connect();
			console.log("DB connected");
		} catch (err) {
			console.error("DB connection error", (err as DatabaseError).stack);
		}
	},
	async disconnect(): Promise<void> {
		if (!this.client) return;
		try {
			await this.client.end();
			console.log("DB has disconnected");
		} catch (err) {
			console.error(
				"DB error during disconnection",
				(err as DatabaseError).stack
			);
		}
	},
};
