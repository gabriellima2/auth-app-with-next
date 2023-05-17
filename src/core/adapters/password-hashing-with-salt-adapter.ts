import bcrypt from "bcrypt";

export class PasswordHashingWithSaltAdapterIml {
	async hash(password: string): Promise<string | null> {
		const saltRounds = 10;
		try {
			const passwordHash = await bcrypt.hash(password, saltRounds);
			return passwordHash;
		} catch (err) {
			return null;
		}
	}

	async compare(password: string, hash: string): Promise<boolean | null> {
		try {
			const result = bcrypt.compare(password, hash);
			return result;
		} catch (err) {
			return null;
		}
	}
}
