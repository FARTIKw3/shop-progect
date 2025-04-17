import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { cookies } from "next/headers";
import { isAuth } from "@/lib/server-helper";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLoggedIn = await isAuth();
  console.log("LOL", isLoggedIn);

  return (
    <html lang="en">
      <body className={`${geistInter.variable} ${geistMontserrat.variable}`}>
        <Header isLoggedIn={isLoggedIn} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
