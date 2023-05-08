import bcrypt from "bcrypt";

import { EncryptedPasswordDTO } from "../dtos/encrypted-password-dto";

export class PasswordHashingWithSaltAdapterIml {
	constructor(private readonly generateSalt: () => string) {}

	hash(password: string): EncryptedPasswordDTO | null {
		let passwordHash: undefined | string;
		const salt = this.generateSalt();
		bcrypt.hash(password, salt, (err, hash) => {
			if (err) return;
			passwordHash = hash;
		});
		if (!passwordHash) return null;
		return { hash: passwordHash, salt };
	}
}
