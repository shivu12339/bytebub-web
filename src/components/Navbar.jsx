import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo6.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-blue-50 via-white to-pink-50 backdrop-blur-md shadow-lg h-16"
          : "bg-white/70 backdrop-blur-sm h-20"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4 px-6 h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="ByteBub Logo" className="w-32 h-auto" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium text-sm">
          <Link to="/" className="hover:text-blue-600 transition-colors duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-pink-500 transition-colors duration-300">
            About
          </Link>
          <Link to="/services" className="hover:text-purple-600 transition-colors duration-300">
            Services
          </Link>
          <Link to="/portfolio" className="hover:text-green-600 transition-colors duration-300">
            Portfolio
          </Link>
          <Link to="/industries" className="hover:text-indigo-600 transition-colors duration-300">
            Industries
          </Link>
          <Link to="/hire-resources" className="hover:text-orange-500 transition-colors duration-300">
            Careers
          </Link>
          <Link to="/contact" className="hover:text-yellow-600 transition-colors duration-300">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 absolute w-full top-full left-0">
          <nav className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="hover:text-pink-500" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="/services" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link to="/portfolio" className="hover:text-green-600" onClick={() => setMenuOpen(false)}>
              Portfolio
            </Link>
            <Link to="/industries" className="hover:text-indigo-600" onClick={() => setMenuOpen(false)}>
              Industries
            </Link>
            <Link to="/hire-resources" className="hover:text-orange-500" onClick={() => setMenuOpen(false)}>
              Careers
            </Link>
            <Link to="/contact" className="hover:text-yellow-600" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
