"use client";
import { useForm } from "react-hook-form";

import { BaseForm, Field } from "../common";

export const SignInAuthForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	return (
		<BaseForm
			handleSubmit={handleSubmit((data) => console.log(data))}
			button={{ text: "Entrar", title: "Entrar na sua conta" }}
		>
			<Field
				labelText="Email"
				id="email"
				type="email"
				placeholder="seuemail@gmail.com"
				required
				{...register("email")}
			/>
			<Field
				labelText="Senha"
				id="password"
				type="password"
				placeholder="Senha com 8 ou mais caracteres"
				required
				{...register("password")}
			/>
		</BaseForm>
	);
};
