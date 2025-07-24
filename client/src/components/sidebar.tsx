"use client";

import React from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/pages/createCampaign", label: "Create Campaign" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-56 bg-white/70 backdrop-blur shadow-lg flex flex-col py-8 px-4 sticky top-0 z-40">
      <div className="mb-10 text-2xl font-bold text-green-600 text-center">Pamoja</div>
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`px-4 py-2 rounded transition font-medium text-lg
              ${pathname === link.href ? "bg-green-100 text-green-700" : "text-gray-700 hover:bg-green-50 hover:text-green-700"}
            `}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
  );
} 