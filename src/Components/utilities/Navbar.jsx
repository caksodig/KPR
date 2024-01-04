"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link href="/"><Image src="/image/logo.png" alt='logo' width={20} height={20} /></Link>
        </div>

        {/* Mobile Navigation Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`sm:flex space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Kids">Kids</Link>
          </li>
          <li>
            <Link href="/Gallery">Gallery</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
