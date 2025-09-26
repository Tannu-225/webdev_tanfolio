// src/components/Header.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="glass-header py-3 bg-light shadow-sm sticky-header">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="logo signature-font">{'< Code With Tannu />'}</div>

        {/* Desktop Nav */}
        <nav className="d-none d-md-block">
          <ul className="nav">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#stack">Stack</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact Me</a></li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="d-md-none">
          <button className="menu-btn" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu d-md-none">
          <ul className="nav flex-column text-center">
            <li className="nav-item"><a className="nav-link" href="#home" onClick={toggleMenu}>Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#education" onClick={toggleMenu}>Education</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#opensource" onClick={toggleMenu}>Open Source</a></li>
            <li className="nav-item"><a className="nav-link" href="#stack" onClick={toggleMenu}>Stack</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact" onClick={toggleMenu}>Contact Me</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
