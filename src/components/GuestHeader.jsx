import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";


// Header Component
const GuestHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerOpacity, setHeaderOpacity] = useState(0.95);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (scrolled > 100) {
        setHeaderOpacity(0.98);
      } else {
        setHeaderOpacity(0.95);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-md shadow-lg transition-all duration-300"
      style={{ 
        backgroundColor: `rgba(255, 255, 255, ${headerOpacity})` 
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8">
        <a href="#" className="flex items-center text-2xl font-bold text-gray-800 no-underline">
          <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-orange-400 rounded-lg mr-2 flex items-center justify-center text-white font-bold">S</div>
          Sedap
        </a>
        
        <nav className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full md:top-auto left-0 md:left-auto right-0 md:right-auto bg-white md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none gap-4 md:gap-8 items-center`}>
          <a href="#home" className="text-gray-600 hover:text-indigo-500 font-medium transition-colors duration-300 relative group">
            Beranda
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#membership" className="text-gray-600 hover:text-indigo-500 font-medium transition-colors duration-300">Keanggotaan</a>
          <a href="#about" className="text-gray-600 hover:text-indigo-500 font-medium transition-colors duration-300">Tentang</a>
          <a href="#products" className="text-gray-600 hover:text-indigo-500 font-medium transition-colors duration-300">Menu</a>
          <a href="#testimonials" className="text-gray-600 hover:text-indigo-500 font-medium transition-colors duration-300">Ulasan</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-500 font-medium transition-colors duration-300">Kontak</a>
        </nav>

        <NavLink id="register" to="/register">
      <a 
          href="#" 
          className="hidden md:inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30"
        >
          Daftar Sekarang
        </a>
          </NavLink>

        <button 
          className="md:hidden flex flex-col p-2"
          onClick={toggleMobileMenu}
        >
          <span className="w-6 h-0.5 bg-gray-600 mb-1 transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-gray-600 mb-1 transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-gray-600 transition-all duration-300"></span>
        </button>
      </div>
    </header>
  );
};
export default GuestHeader;