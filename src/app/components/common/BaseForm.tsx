import type { ReactNode } from "react";

import { BaseButton } from "./BaseButton";
import { BaseLink } from "./BaseLink";
import { Loading } from "./Loading";

type FormProps = {
	handleSubmit: () => void;
	children: ReactNode;
	isSubmitting?: boolean;
	button: {
		text: string;
		title?: string;
	};
	link: {
		text: string;
		title?: string;
		href: string;
	};
};

export const BaseForm = (props: FormProps) => {
	const { handleSubmit, button, link, children, isSubmitting } = props;
	return (
		<form
			onSubmit={handleSubmit}
			className="w-full flex flex-col items-center gap-10 md:max-w-[500px]"
		>
			<section className="w-full flex flex-col gap-7">{children}</section>
			<BaseButton type="submit" title={button.title} disabled={isSubmitting}>
				{isSubmitting ? <Loading /> : button.text}
			</BaseButton>
			<BaseLink href={link.href} title={link.title} variants="text">
				{link.text}
			</BaseLink>
		</form>
	);
};
