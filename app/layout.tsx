import "./globals.css";

import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/_components/home/navbar";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NSP Studios",
  description: "CNA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
