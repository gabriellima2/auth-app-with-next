import { SignJWT } from "jose";
import { JWTAdapter, JWTAdapterCreateProtocols } from "../entities";

const secretKey = new TextEncoder().encode(process.env.SECRET_KEY_TO_GEN_JWT);

export class JWTAdapterImpl implements JWTAdapter {
	async create(
		payload: JWTAdapterCreateProtocols.Params
	): Promise<JWTAdapterCreateProtocols.Return> {
		if (!secretKey)
			throw new Error("No secret key has been defined to generate jwt");

		const currentTimestamp = Math.floor(Date.now() / 1000);
		const token = await new SignJWT({ payload })
			.setProtectedHeader({ alg: "HS256", typ: "JWT" })
			.setExpirationTime("1h")
			.setIssuedAt(currentTimestamp)
			.setNotBefore(currentTimestamp)
			.sign(secretKey);
		return token;
	}
}
