import { ButtonHTMLAttributes } from "react";

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const BaseButton = (props: BaseButtonProps) => {
	return (
		<button
			{...props}
			type="button"
			className={`w-full bg-white text-zinc-950 rounded py-2 transition-opacity hover:opacity-90 focus:opacity-90 ${props.className}`}
		/>
	);
};
