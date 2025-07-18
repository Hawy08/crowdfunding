"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pamoja",
  description:
    "A blockchainbased crowdfunding platform for social impact projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider activeChain="ethereum">
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}
