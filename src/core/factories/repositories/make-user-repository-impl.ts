import { UserRepositoryImpl } from "@/core/repositories/user-repository";

export const makeUserRepositoryImpl = () => new UserRepositoryImpl();
