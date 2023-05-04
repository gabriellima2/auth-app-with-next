import type { ReactNode } from "react";

import { AuthTitle } from "./AuthTitle";
import { CenterFullScreen } from "./common";

type AuthFormContainerProps = {
	children: ReactNode;
	userAction: string;
};

export const AuthFormContainer = (props: AuthFormContainerProps) => {
	const { children, userAction } = props;
	return (
		<CenterFullScreen className="flex-col gap-20">
			<AuthTitle action={userAction} description="para continuar" />
			{children}
		</CenterFullScreen>
	);
};
