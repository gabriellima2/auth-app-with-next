import type { ReactNode } from "react";

type CenterProps = {
	children: ReactNode;
	className?: string;
};

export const Center = (props: CenterProps) => {
	const { children, className } = props;
	return (
		<div
			className={`w-full h-full flex items-center justify-center ${className}`}
		>
			{children}
		</div>
	);
};
