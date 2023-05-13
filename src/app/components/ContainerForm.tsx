import type { ReactNode } from "react";

import { TitleForm } from "./TitleForm";
import { CenterFullScreen } from "./common";

type ContainerFormProps = {
	children: ReactNode;
	userAction: string;
};

export const ContainerForm = (props: ContainerFormProps) => {
	const { children, userAction } = props;
	return (
		<CenterFullScreen className="flex-col gap-20">
			<TitleForm action={userAction} description="para continuar" />
			{children}
		</CenterFullScreen>
	);
};
