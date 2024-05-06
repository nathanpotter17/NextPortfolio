import "./globals.css";

import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/_components/home/navbar";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nathanpotter.tech"),
  keywords: [
    "nathan potter",
    "nsp",
    "nsp studios",
    "immersive design",
    "website builder",
    "web development",
    "digital marketing",
    "responsive design",
    "e-commerce solutions",
    "custom web design",
    "web development services",
    "SEO services",
    "online presence",
    "digital presence",
    "web design agency",
    "web development agency",
    "web solutions",
    "web development company",
    "web design company",
    "web development firm",
    "web design firm",
    "web development studio",
    "web design studio",
    "web development consultancy",
    "web design consultancy",
    "web development agency",
    "web design agency",
    "web development firm",
    "web design firm",
    "web development studio",
    "web design studio",
    "web development consultancy",
    "web design consultancy",
    "web development agency",
    "web design agency",
    "web development firm",
    "web design firm",
    "web development studio",
    "web design studio",
    "web development consultancy",
    "web design consultancy",
  ],
  title: {
    default: "NSP Studios",
    template: "%s | NSP Studios",
  },
  description:
    "Discover how NSP Studios can help you create custom web experiences.",
  openGraph: {
    determiner: "auto",
    title: "NSP Studios: Delivering Simple & Effective Web Solutions",
    description:
      "Discover how NSP Studios can help you create custom web experiences.",
    images: [
      {
        url: "/L1-d.svg",
        width: 54,
        height: 25,
        alt: "NSP Studios Logo",
      },
    ],
    url: "https://nathanpotter.tech",
    siteName: "NSP Studios",
    locale: "en_US",
    type: "website",
  },
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
