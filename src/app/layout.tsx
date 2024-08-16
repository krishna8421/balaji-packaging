import type { Metadata } from "next";
import { Providers } from "./providers";
import "@/styles/globals.css";
import { inter, platypi } from "@/lib/fonts";
import NavBar from "@/components/nav-bar";
import { Toaster } from "sonner";

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
        className={`${platypi.variable} ${inter.variable} font-inter max-w-6xl min-h-screen mx-auto`}
      >
        <Providers>
          <NavBar />
          <main className="p-4">{children}</main>
          <Toaster position="bottom-right" />
        </Providers>
      </body>
    </html>
  );
}
