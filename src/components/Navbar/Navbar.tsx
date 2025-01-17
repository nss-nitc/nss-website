
"use client"
import Link from "next/link";
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>

      <div className="left-section">
        <img className="nss-logo" src="/images/NSS-LOGO.png" alt="Logo" />
        <div className="logo">NSS NIT Calicut</div>
        <div className="hamburger-icon" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
      <div className={`right-section ${isMenuOpen ? "open" : "closed"}`}>
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/team">Team</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact Us</Link>
          <button className="login-btn"><Link href="/login">Login </Link></button>
        </nav>  
      </div>
    </header>
  );
};

export default Navbar;


