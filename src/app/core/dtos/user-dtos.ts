export interface UserDTOInput {
	username: string;
	email: string;
	password: string;
}

export interface UserSignUpDTOOutput {
	id: string;
	username: string;
	email: string;
	token: string;
}

export interface UserSignInDTOOutput {
	id: string;
	username: string;
	email: string;
}
