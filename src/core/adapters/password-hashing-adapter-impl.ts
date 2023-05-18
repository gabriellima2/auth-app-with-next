import bcrypt from "bcrypt";
import {
	PasswordHashingAdapter,
	PasswordHashingAdapterCompareProtocols,
	PasswordHashingAdapterHashProtocols,
} from "../entities";

export class PasswordHashingAdapterImpl implements PasswordHashingAdapter {
	async hash(
		params: PasswordHashingAdapterHashProtocols.Params
	): Promise<PasswordHashingAdapterHashProtocols.Return> {
		const { password } = params;
		const saltRounds = 10;
		try {
			const passwordHash = await bcrypt.hash(password, saltRounds);
			return passwordHash;
		} catch (err) {
			return null;
		}
	}

	async compare(
		params: PasswordHashingAdapterCompareProtocols.Params
	): Promise<PasswordHashingAdapterCompareProtocols.Return> {
		const { password, hash } = params;
		try {
			const result = bcrypt.compare(password, hash);
			return result;
		} catch (err) {
			return null;
		}
	}
}
