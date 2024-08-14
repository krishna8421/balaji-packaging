import type { Metadata } from "next";
import { Providers } from "./providers";
import "@/styles/globals.css";
import { inter, platypi } from "@/lib/fonts";
import ThemeSwitcher from "@/components/theme-switcher";
import Link from "next/link";
import NavBar from "@/components/nav-bar";

export const metadata: Metadata = {
  title: "Balaji Packaging",
  description: "Balaji Packaging Internal Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${platypi.variable} ${inter.variable} font-inter max-w-4xl min-h-screen mx-auto`}
      >
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
