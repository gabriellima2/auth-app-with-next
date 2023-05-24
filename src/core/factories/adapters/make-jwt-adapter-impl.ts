import { JWTAdapterImpl } from "@/core/adapters/jwt-adapter-impl";

export const makeJWTAdapterImpl = () => new JWTAdapterImpl();
