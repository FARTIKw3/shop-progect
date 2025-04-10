import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const geistInter = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});

const geistMontserrat = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistInter.variable} ${geistMontserrat.variable}`}>
        {children}
        <Header />
      </body>
    </html>
  );
}
