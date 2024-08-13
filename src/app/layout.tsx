import type { Metadata } from "next";
import { Providers } from "./providers";
import "@/styles/globals.css";
import { inter, platypi } from "@/utils/fonts";
import ThemeSwitcher from "@/components/theme-switcher";

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
          <nav className="flex items-center justify-between p-2">
            <span className="font-platypi font-bold">Balaji Packaging</span>
            <ThemeSwitcher />
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  );
}
