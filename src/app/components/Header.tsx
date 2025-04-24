"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Business Verticals", href: "/business" },
  { name: "Investors", href: "/investors" },
  { name: "About Us", href: "/about" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 md:px-25 py-4 bg-white/1 backdrop-blur-md text-white fixed top-0 left-0 z-50">
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4 md:space-x-14 flex-shrink-0">
        <Image
          src="/SudhanandLogo.svg"
          alt="Company Logo"
          width={40}
          height={40}
        />
      </div>

      <div className="hidden md:flex items-center space-x-6 text-lg font-normal">
        {navLinks.map(({ name, href }) => (
          <Link key={name} href={href}>
            {name}
          </Link>
        ))}
      </div>

      <button
        className="md:hidden focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {menuOpen && (
      <div className="mt-4 md:hidden flex flex-col items-center space-y-4 text-base text-center">
        {navLinks.map(({ name, href }) => (
          <Link key={name} href={href} className="hover:underline">
            {name}
          </Link>
        ))}

      </div>
    )}
  </header>
  );
};

export default Header;
