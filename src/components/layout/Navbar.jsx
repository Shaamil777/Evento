import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
 import logo from '../../assets/logo.png';

// Placeholder logo component (replace with your actual logo import)
const LogoPlaceholder = ({ className }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <img src={logo} alt="Logo" className="w-full h-full object-contain" />
  </div>
);

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT US' },
    { href: '#facilities', label: 'FACILITIES' },
    { href: '#contact', label: 'CONTACT' }
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/10 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden lg:block max-w-6xl mx-auto px-6">
          <div
            className={`flex items-center justify-center transition-all duration-500 ${
              isScrolled ? 'h-20' : 'h-44'
            }`}
          >
            {/* Left Links */}
            <div className="flex items-center space-x-10 mr-20">
              <a
                href="#home"
                className={`font-medium transition-all duration-300 hover:text-purple-300 text-white ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}
              >
                HOME
              </a>
              <a
                href="#about"
                className={`font-medium transition-all duration-300 hover:text-purple-300 text-white ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}
              >
                ABOUT US
              </a>
            </div>

            {/* Center Logo */}
            <div className="flex-shrink-0">
              <div
                className={`flex items-center justify-center transition-all duration-500 ${
                  isScrolled ? 'w-16 h-16' : 'w-36 h-36'
                }`}
              >
                <LogoPlaceholder className="w-full h-full" />
              </div>
            </div>

            {/* Right Links */}
            <div className="flex items-center space-x-10 ml-20">
              <a
                href="#facilities"
                className={`font-medium transition-all duration-300 hover:text-purple-300 text-white ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}
              >
                FACILITIES
              </a>
              <a
                href="#contact"
                className={`font-medium transition-all duration-300 hover:text-purple-300 text-white ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between px-6 h-16">
            {/* Mobile Logo */}
            <div className="flex-shrink-0">
              <LogoPlaceholder className="w-12 h-12" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-md px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white font-medium py-2 hover:text-purple-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;