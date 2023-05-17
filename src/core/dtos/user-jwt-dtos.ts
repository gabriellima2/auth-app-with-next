import { UserDTOOutput } from "./user-dtos";

export interface UserJWTInputDTO
	extends Pick<UserDTOOutput, "id" | "username"> {}

