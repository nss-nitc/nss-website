"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col md:flex-row w-full shadow-md">
      {/* Left Section */}
      <div className="flex items-center bg-[#1F293E] text-white px-5 md:w-1/3">
        <img
          className="w-[90px] h-[83px] rounded-full mr-6"
          src="/images/NSS-LOGO.png"
          alt="Logo"
        />
        <div className="uppercase text-sm font-bold Momcake tracking-wider">
          NSS NIT Calicut
        </div>
        <div
          className="text-2xl ml-auto md:hidden cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          &#9776;
        </div>
      </div>

      {/* Right Section */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:w-2/3 bg-[#F9F3E6] items-center px-5 py-4`}
      >
        <nav
          className={`flex flex-col md:flex-row w-full md:w-auto items-center justify-end gap-5 Poppins ml-auto ${
            isMenuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <Link
            href="/about"
            className="text-[#001f3f] text-base  hover:text-[#ffa500] transition duration-300"
          >
            About
          </Link>
          <Link
            href="/events"
            className="text-[#001f3f] text-base  hover:text-[#ffa500] transition duration-300"
          >
            Events
          </Link>
          <Link
            href="/team"
            className="text-[#001f3f] text-base  hover:text-[#ffa500] transition duration-300"
          >
            Team
          </Link>
          <Link
            href="/gallery"
            className="text-[#001f3f] text-base  hover:text-[#ffa500] transition duration-300"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="text-[#001f3f] text-base  hover:text-[#ffa500] transition duration-300"
          >
            Contact Us
          </Link>
        </nav>
        <button className="mt-4 md:mt-0 md:ml-5 Poppins">
          <Link
            href="/login"
            className="bg-[#001f3f] text-white py-2 px-6 rounded-full text-base  hover:bg-[#000d1a] transition duration-300"
          >
            Login
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
