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
        className={`${inter.className} ${platypi.className} max-w-5xl mx-auto`}
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
