import crypto from "crypto";

export function generateSalt() {
	return crypto.randomBytes(32).toString("hex");
}
