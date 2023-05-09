import bcrypt from "bcrypt";

export class PasswordHashingWithSaltAdapterIml {
	hash(password: string): string | null {
		let passwordHash: undefined | string;
		const saltRounds = 10;
		bcrypt.hash(password, saltRounds, (err, hash) => {
			if (err) return;
			passwordHash = hash;
		});
		if (!passwordHash) return null;
		return passwordHash;
	}
}
