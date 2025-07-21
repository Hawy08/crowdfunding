"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import QueryProvider from "@/components/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Pamoja",
//   description:
//     "A blockchainbased crowdfunding platform for social impact projects",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <ThirdwebProvider
            activeChain="sepolia"
            clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
          >
            {children}
          </ThirdwebProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
