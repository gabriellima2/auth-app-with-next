import type { ReactNode } from "react";

type FormProps = {
	handleSubmit: () => void;
	children: ReactNode;
};

export const BaseForm = (props: FormProps) => {
	const { handleSubmit, children } = props;
	return (
		<form onSubmit={handleSubmit} className="">
			<section>{children}</section>
		</form>
	);
};
