import type { ButtonHTMLAttributes } from "react";

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const BaseButton = (props: BaseButtonProps) => {
	return (
		<button
			type="button"
			className={`w-full bg-white text-zinc-950 rounded text-sm font-semibold py-3 transition-opacity hover:opacity-90 focus:opacity-90 ${props.className}`}
			{...props}
		/>
	);
};
