import { JWTAdapter } from "@/core/adapters/jwt-adapter";

export const makeJWTAdapter = () => new JWTAdapter();
