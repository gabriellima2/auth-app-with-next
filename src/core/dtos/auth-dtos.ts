import { UserDTOInput, UserDTOOutput } from "./user-dtos";

export interface UserSignUpDTOInput extends UserDTOInput {}

export interface UserSignUpDTOOutput extends UserDTOOutput {}

export interface UserSignInDTOOutput extends UserDTOOutput {
	token: string;
}

export interface UserSignInDTOInput
	extends Pick<UserDTOInput, "email" | "password"> {}
