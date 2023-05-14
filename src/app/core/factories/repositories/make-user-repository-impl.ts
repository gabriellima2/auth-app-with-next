import { UserRepositoryImpl } from "../../repositories/user-repository";

export const makeUserRepositoryImpl = () => new UserRepositoryImpl();
