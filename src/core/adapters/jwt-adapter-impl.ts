import { SignJWT, jwtVerify } from "jose";
import {
	JWTAdapter,
	JWTAdapterCreateProtocols,
	JWTAdapterVerifyProtocols,
} from "../entities";

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

	async verify(
		params: JWTAdapterVerifyProtocols.Params
	): Promise<JWTAdapterVerifyProtocols.Return> {
		const { token } = params;
		if (!secretKey)
			throw new Error("No secret key has been defined to generate jwt");

		const { payload } = await jwtVerify(token, secretKey);
		return payload as JWTAdapterVerifyProtocols.Return;
	}
}
