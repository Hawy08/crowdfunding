"use client";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useState, useRef, useEffect } from "react";

type NavbarProps = {
  onHamburgerClick?: () => void;
  isSidebarOpen?: boolean;
};

export default function Navbar({ onHamburgerClick, isSidebarOpen }: NavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav className={`w-full flex items-center justify-between px-10 bg-white shadow-md mb-6 backdrop-blur sticky top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'py-4' : 'py-8'}`}>
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
      {/* Center: Empty */}
      <div className="flex-1 flex justify-center"></div>
      {/* Right: Wallet + Dropdown Menu */}
      <div className="flex items-center gap-2">
        <div className="connect-wallet-green">
          <ConnectWallet />
        </div>
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded hover:bg-green-100 focus:outline-none"
            onClick={() => setDropdownOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            {/* Custom three-line icon with unequal lengths */}
            <span className="flex flex-col justify-center items-center">
              <span style={{ width: '20px', height: '3px', background: '#22c55e', borderRadius: '2px', marginBottom: '3px', display: 'block' }}></span>
              <span style={{ width: '14px', height: '3px', background: '#22c55e', borderRadius: '2px', marginBottom: '3px', display: 'block' }}></span>
              <span style={{ width: '8px', height: '3px', background: '#22c55e', borderRadius: '2px', display: 'block' }}></span>
            </span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
              <a
                href="/pages/createCampaign"
                className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
                onClick={() => setDropdownOpen(false)}
              >
                Create Campaign
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
