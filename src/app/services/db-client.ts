import { Pool, DatabaseError } from "pg";
import { dbConfig } from "@/config/db-config";

const dbClient = new Pool(dbConfig);

dbClient
	.connect()
	.then(() => console.log("DB connected"))
	.catch((err) =>
		console.error("DB connection error", (err as DatabaseError).stack)
	);

export { dbClient };
