"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) { 
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="absolute top-0 left-0 w-full flex flex-row bg-transparent z-50">
      {/* Left Section */}
      <div className="flex relative  flex-col bg-transparent text-white px-0 xs:px-2 md:px-5 py-4 w-1/3 xs:scale-100 scale-[0.85]">
        <div className="flex ">    
          
          <img
            className="w-12 h-12 rounded-full sm:mr-6 xs:mr-2 mr-1 -my-2"
            src="/images/NSS-LOGO.png"
            alt="Logo"
          />
          <div className="uppercase text-sm font-bold tracking-wider font-poppins self-center md:m-0 -mt-1">
            NSS NIT Calicut
          </div>
        </div>
    
        <img
          className="text-2xl md:hidden cursor-pointer absolute xs:left-6 left-4 top-16 scale-150"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          src="\images\Bar Menu Items - iconSvg.co.svg"
        >
          
        </img>
      </div>

      {/* Right Section */}
      <div
        className={`${isMenuOpen ? "flex bg-[#1f293ee4] absolute w-1/3 top-20 text-white h-[220px] sm:h-[300px]" : "hidden w-2/3 bg-transparent text-black"
          } flex-col md:flex md:flex-row   items-center px-5 py-4 md:py-0`}
      >
        <nav className="flex flex-col md:flex-row w-full md:w-auto justify-end md:gap-5 gap-3 ml-auto md:items-center">
          <Link
            href="/about"
            className="text-base font-bold hover:text-[#ffa500] transition duration-300"
          >
            About
          </Link>
          
          <Link
            href="/events"
            className="text-base font-bold hover:text-[#ffa500] transition duration-300"
          >
            Events
          </Link>
          <Link
            href="/team"
            className="text-base font-bold hover:text-[#ffa500] transition duration-300"
          >
            Team
          </Link>
          <Link
            href="/gallery"
            className="text-base font-bold hover:text-[#ffa500] transition duration-300"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="text-base font-bold hover:text-[#ffa500] transition duration-300"
          >
            Contact Us
          </Link>
        </nav>
       
      </div>
      <button className="mt-4 md:mt-0 md:ml-5">
          <Link
            href="/login"
            className="md:relative absolute md:right-2 md:top-0 right-3 top-3 bg-[#001f3f] text-white py-2 px-6 rounded-full text-base font-bold hover:bg-[#000d1a] transition duration-300"
          >
            Login
          </Link>
        </button>
    </header>
  );
};

export default Navbar;
