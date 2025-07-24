"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { useState, useEffect } from "react";
import QueryProvider from "@/components/QueryProvider";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Pamoja",
//   description:
//     "A blockchainbased crowdfunding platform for social impact projects",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar on resize to md and up
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <ThirdwebProvider
            activeChain="sepolia"
            clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
          >
            <div className="flex">
              {/* Sidebar as drawer */}
              {sidebarOpen && (
                <>
                  <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setSidebarOpen(false)} />
                  <div className="fixed top-0 left-0 z-50 h-full">
                    <Sidebar />
                  </div>
                </>
              )}
              <div className="flex-1 min-h-screen">
                {!sidebarOpen && <Navbar onHamburgerClick={() => setSidebarOpen(true)} isSidebarOpen={sidebarOpen} />}
                {children}
              </div>
            </div>
          </ThirdwebProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
