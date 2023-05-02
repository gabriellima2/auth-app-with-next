import type { ReactNode } from "react";
import { BaseButton } from "../BaseButton";

type FormProps = {
	handleSubmit: () => void;
	children: ReactNode;
	button: {
		text: string;
		title?: string;
	};
};

export const BaseForm = (props: FormProps) => {
	const { handleSubmit, button, children } = props;
	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-10 md:max-w-[500px]"
		>
			<section>{children}</section>
			<BaseButton type="submit" title={button.title}>
				{button.text}
			</BaseButton>
		</form>
	);
};
