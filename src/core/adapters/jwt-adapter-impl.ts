import jwt from "jsonwebtoken";
import { JWTAdapter, JWTAdapterCreateProtocols } from "../entities";

export class JWTAdapterImpl implements JWTAdapter {
	create(
		payload: JWTAdapterCreateProtocols.Params
	): JWTAdapterCreateProtocols.Return {
		const secretKey = process.env.SECRET_KEY_TO_GEN_JWT;
		if (!secretKey)
			throw new Error("No secret key has been defined to generate jwt");
		return jwt.sign(payload, secretKey, {
			expiresIn: 600, // 10 Minutos
		});
	}
}
