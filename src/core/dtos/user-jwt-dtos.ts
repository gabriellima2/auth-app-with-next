import { UserDTOOutput } from "./user-dtos";

export interface UserJWTInputDTO extends Pick<UserDTOOutput, "id" | "email"> {}

export type UserJWTOutputDTO = Promise<string | null>;
