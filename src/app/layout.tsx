import "./globals.css";
import { Inter } from "next/font/google";

import { Providers } from "./contexts/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--main-font" });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body className={`${inter.className} ${inter.variable}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
