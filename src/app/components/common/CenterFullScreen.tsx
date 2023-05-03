import type { ReactNode } from "react";
import { Center } from "./Center";

type CenterFullScreenProps = {
	children: ReactNode;
	className?: string;
};

export const CenterFullScreen = (props: CenterFullScreenProps) => {
	const { children, className } = props;
	return (
		<div className="w-full h-screen min-h-[600px]">
			<Center
				className={`w-full h-full flex items-center justify-center ${className}`}
			>
				{children}
			</Center>
		</div>
	);
};
