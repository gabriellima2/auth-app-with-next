import { NextRequest, NextResponse } from "next/server";

import { USER_TOKEN } from "./constants/user-token";
import { makeJWTAdapterImpl } from "./core/factories/adapters/make-jwt-adapter-impl";

const jwtAdapterImpl = makeJWTAdapterImpl();
const PATHNAMES = {
	ROOT: "/",
	HOME: "/home",
	LOGIN: "/login",
};

export async function middleware(request: NextRequest) {
	const token = request.cookies.get(USER_TOKEN)?.value;
	if (!token) return NextResponse.redirect(new URL("/"));

	const currentUrl = request.url;
	const isAuthPath =
		currentUrl.endsWith(PATHNAMES.ROOT) || currentUrl.endsWith(PATHNAMES.LOGIN);
	try {
		const decoded = await jwtAdapterImpl.verify({ token });
		if (!decoded) throw new Error();
		if (isAuthPath)
			return NextResponse.redirect(new URL(PATHNAMES.HOME, currentUrl));

		return NextResponse.next();
	} catch (err) {
		if (currentUrl.endsWith(PATHNAMES.ROOT)) return NextResponse.next();
		if (
			Object.values(PATHNAMES).some((pathname) => currentUrl.endsWith(pathname))
		) {
			if (!currentUrl.endsWith(PATHNAMES.LOGIN))
				return NextResponse.redirect(new URL(PATHNAMES.LOGIN, currentUrl));
		}
	}
}

export const config = {
	matcher: [PATHNAMES.ROOT, PATHNAMES.LOGIN, PATHNAMES.HOME],
};
