"use client";
import { useForm } from "react-hook-form";

import { BaseForm, Field } from "../common";

export const SignUpAuthForm = () => {
	const { register, handleSubmit } = useForm();
	return (
		<BaseForm
			handleSubmit={handleSubmit((data) => console.log(data))}
			button={{ text: "Criar", title: "Criar conta" }}
		>
			<Field
				labelText="Email"
				id="email"
				type="email"
				placeholder="seuemail@gmail.com"
				required
				{...register("email")}
			/>
		</BaseForm>
	);
};
