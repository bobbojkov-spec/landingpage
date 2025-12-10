import type { Metadata } from "next";
import { circularStd, productSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dangila - Natural Inner Beauty",
  description: "Provide deluxe hydration for those with dry or age-related skin concerns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${circularStd.variable} ${productSans.variable}`}>
      <body style={{ backgroundColor: '#ffffff', margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
