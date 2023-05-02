"use client";
import { BaseForm } from "./BaseForm";

export const SignUpForm = () => {
	return (
		<BaseForm handleSubmit={() => console.log("Hello")}>Hello World</BaseForm>
	);
};
