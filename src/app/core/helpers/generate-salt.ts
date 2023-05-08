import crypto from "crypto";

export function generateSalt() {
	return crypto.randomBytes(16).toString("hex");
}
