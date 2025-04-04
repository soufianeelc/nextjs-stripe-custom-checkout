import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const instrumentSans = Instrument_Sans({
	weight: "400",
	variable: "--font-instrument-sans",
	subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
	weight: "400",
	variable: "--font-instrument-serif",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Stripe Custom Checkout",
	description: "Build custom checkout experiences with Stripe",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${instrumentSans.variable} ${instrumentSerif.variable} antialiased font-sans`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
