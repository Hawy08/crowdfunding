"use client";
import { ConnectWallet } from "@thirdweb-dev/react";

type NavbarProps = {
  onHamburgerClick?: () => void;
  isSidebarOpen?: boolean;
};

export default function Navbar({ onHamburgerClick, isSidebarOpen }: NavbarProps) {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white/70 shadow-md mb-6 backdrop-blur sticky top-0 z-50">
      {/* Left: Hamburger + Brand */}
      <div className="flex items-center">
        {/* Hamburger menu, only on mobile */}
        {onHamburgerClick && (
          <button
            className="md:hidden mr-3 p-2 rounded hover:bg-green-100 focus:outline-none"
            onClick={onHamburgerClick}
            aria-label="Open sidebar"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        )}
        <a href="/" className="text-2xl font-bold text-green-600 hover:text-green-800 transition">Pamoja</a>
      </div>
      {/* Center: Links */}
      <div className="flex-1 flex justify-center hidden md:flex">
        <a href="/pages/createCampaign" className="text-indigo-600 hover:text-indigo-900 font-medium transition">Create Campaign</a>
      </div>
      {/* Right: Wallet */}
      <div>
        <ConnectWallet />
      </div>
    </nav>
  );
}
