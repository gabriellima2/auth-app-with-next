import type { ReactNode } from "react";
import Link, { type LinkProps } from "next/link";

type BaseLinkProps = LinkProps & {
	children: ReactNode;
	variants: keyof typeof modifiers;
	className?: string;
	title?: string;
};

const modifiers = {
	text: "w-fit border-0 p-0 !font-medium transition-opacity hover:underline focus:underline hover:opacity-90 focus:opacity-90",
	button:
		"w-full h-[44px] flex items-center justify-center border-2 border-white rounded text-sm font-semibold py-3 transition-colors hover:bg-white focus:bg-white hover:text-zinc-950 focus:text-zinc-950",
};

export const BaseLink = (props: BaseLinkProps) => {
	const { className, title, variants, ...rest } = props;
	const modifier = modifiers[variants];
	return (
		<Link
			{...rest}
			title={title}
			className={`font-semibold rounded text-sm ${className} ${modifier}`}
		/>
	);
};
