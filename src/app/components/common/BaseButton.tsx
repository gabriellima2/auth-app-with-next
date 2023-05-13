import type { ButtonHTMLAttributes } from "react";

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const BaseButton = (props: BaseButtonProps) => {
	const { disabled, className } = props;
	return (
		<button
			type="button"
			disabled={disabled}
			className={`w-full bg-white text-zinc-950 rounded text-sm font-semibold py-3 transition-opacity hover:opacity-90 focus:opacity-90 ${
				disabled && "opacity-50 pointer-events-none"
			} ${className}`}
			{...props}
		/>
	);
};
