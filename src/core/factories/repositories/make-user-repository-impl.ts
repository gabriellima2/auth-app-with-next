import { UserRepositoryImpl } from "@/core/repositories";

export const makeUserRepositoryImpl = () => new UserRepositoryImpl();
