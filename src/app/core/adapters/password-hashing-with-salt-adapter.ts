import bcrypt from "bcrypt";

import { EncryptedPasswordDTO } from "../dtos/encrypted-password-dto";
import { generateSalt } from "../helpers/generate-salt";

export class PasswordHashingWithSaltAdapterIml {
	hash(password: string): EncryptedPasswordDTO | null {
		let passwordHash: undefined | string;
		const salt = generateSalt();
		bcrypt.hash(password, salt, (err, hash) => {
			if (err) return;
			passwordHash = hash;
		});
		if (!passwordHash) return null;
		return { hash: passwordHash, salt };
	}
}
