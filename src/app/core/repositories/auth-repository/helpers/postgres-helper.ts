import { Client } from "pg";

export const PostgresHelper = {
	client: undefined || Client.prototype,
	connect() {
		if (this.client) return;
		this.client = new Client({});
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
