"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
          navbar.classList.add('bg-transparent', 'shadow-md');
        } else {
          navbar.classList.remove('bg-transparent', 'shadow-md');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 ${isMenuOpen ? 'bg-black opacity-50 transition-opacity' : 'hidden'}`}
        onClick={closeMenu}
      ></div>
      <nav className={`bg-white p-4 z-50 sticky top-0 ${isMenuOpen ? 'bg-white shadow-md' : ''}`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="font-bold text-xl"><img src="/image/logo.png" width="30px" height="30px" alt="logo" /></span>
          </Link>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`h-6 w-6 transition-transform transform ${isMenuOpen ? 'rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          {/* Mobile Menu Items */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 right-0 bg-sky-100 w-full mt-2 transition-opacity">
              <NavLinkMobile href="/" onClick={closeMenu}>
                Home
              </NavLinkMobile>
              <NavLinkMobile href="/About" onClick={closeMenu}>
                About
              </NavLinkMobile>
              <NavLinkMobile href="/Kids" onClick={closeMenu}>
                Kids
              </NavLinkMobile>
              <NavLinkMobile href="/Gallery" onClick={closeMenu}>
                Gallery
              </NavLinkMobile>
              {/* Add other menu items here */}
            </div>
          )}
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/About">About</NavLink>
            <NavLink href="/Kids">Kids</NavLink>
            <NavLink href="/Gallery">Gallery</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <span className="text-black hover:border-b-2 border-black transition-all duration-300">{children}</span>
    </Link>
  );
};

const NavLinkMobile = ({ href, children, onClick }) => {
  return (
    <div onClick={onClick} className="block p-2 hover:bg-sky-100 transition">
      <Link href={href}>
        <span>{children}</span>
      </Link>
    </div>
  );
};

export default Navbar;
