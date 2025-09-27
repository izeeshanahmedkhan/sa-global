import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { content } from '../assets/content';
import { logo, logoWhite } from '../assets/imageLinks';

const Layout = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* SA Global Website Created By Xapner.com - https://xapner.com */}
      <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#0A1E3E] to-[#1E3A8A] text-white py-1 sm:py-2">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm space-y-1 sm:space-y-0">
            <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              <span className="flex items-center space-x-2 text-white font-medium">
                <span>📞</span>
                <a 
                  href={`tel:${content.contactInfo.phone}`}
                  className="text-xs sm:text-sm hover:underline transition-colors duration-300"
                >
                  {content.contactInfo.phone}
                </a>
              </span>
              <span className="flex items-center space-x-2 text-white font-medium">
                <span>✉️</span>
                <a 
                  href={`mailto:${content.contactInfo.email}`}
                  className="text-xs sm:text-sm break-all hover:underline transition-colors duration-300"
                >
                  {content.contactInfo.email}
                </a>
              </span>
            </div>
            <div className="hidden sm:block text-white font-medium text-xs lg:text-sm">
              <span>{content.contactInfo.hours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="logo flex-shrink-0 flex items-center justify-center h-full">
              <Link to="/" className="text-decoration-none flex items-center justify-center h-full" onClick={closeMobileMenu}>
                <img 
                  src={logo} 
                  alt="SA Global Logo" 
                  className="h-12 sm:h-14 lg:h-16 w-auto object-contain pt-1"
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                    maxHeight: '100%',
                    width: 'auto'
                  }}
                />
              </Link>
            </div>

            {/* Desktop Navigation - Hidden on smaller screens, visible on lg and up */}
            <nav className="hidden lg:flex space-x-3 xl:space-x-4 2xl:space-x-6">
              <Link 
                to="/" 
                className={`text-sm 2xl:text-base font-medium transition-colors duration-200 whitespace-nowrap ${
                  location.pathname === '/' 
                    ? 'text-primary-600 border-b-2 border-primary-600 pb-1' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {content.navigation.home}
              </Link>
              <Link 
                to="/about" 
                className={`text-sm 2xl:text-base font-medium transition-colors duration-200 whitespace-nowrap ${
                  location.pathname === '/about' 
                    ? 'text-primary-600 border-b-2 border-primary-600 pb-1' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {content.navigation.about}
              </Link>
              <Link 
                to="/services" 
                className={`text-sm 2xl:text-base font-medium transition-colors duration-200 whitespace-nowrap ${
                  location.pathname === '/services' 
                    ? 'text-primary-600 border-b-2 border-primary-600 pb-1' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {content.navigation.services}
              </Link>
              <Link 
                to="/universities" 
                className={`text-sm 2xl:text-base font-medium transition-colors duration-200 whitespace-nowrap ${
                  location.pathname === '/universities' 
                    ? 'text-primary-600 border-b-2 border-primary-600 pb-1' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {content.navigation.universities}
              </Link>
              <Link 
                to="/blog" 
                className={`text-sm 2xl:text-base font-medium transition-colors duration-200 whitespace-nowrap ${
                  location.pathname === '/blog' 
                    ? 'text-primary-600 border-b-2 border-primary-600 pb-1' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {content.navigation.blog}
              </Link>
              <Link 
                to="/contact" 
                className={`text-sm 2xl:text-base font-medium transition-colors duration-200 whitespace-nowrap ${
                  location.pathname === '/contact' 
                    ? 'text-primary-600 border-b-2 border-primary-600 pb-1' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {content.navigation.contact}
              </Link>
            </nav>

            {/* Compact Navigation for Medium screens - Hidden on smaller and larger screens */}
            <nav className="hidden md:flex lg:hidden space-x-2">
              <Link 
                to="/" 
                className={`text-xs font-medium transition-colors duration-200 whitespace-nowrap px-2 py-1 ${
                  location.pathname === '/' 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`text-xs font-medium transition-colors duration-200 whitespace-nowrap px-2 py-1 ${
                  location.pathname === '/about' 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`text-xs font-medium transition-colors duration-200 whitespace-nowrap px-2 py-1 ${
                  location.pathname === '/services' 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/universities" 
                className={`text-xs font-medium transition-colors duration-200 whitespace-nowrap px-2 py-1 ${
                  location.pathname === '/universities' 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Universities
              </Link>
              <Link 
                to="/blog" 
                className={`text-xs font-medium transition-colors duration-200 whitespace-nowrap px-2 py-1 ${
                  location.pathname === '/blog' 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className={`text-xs font-medium transition-colors duration-200 whitespace-nowrap px-2 py-1 ${
                  location.pathname === '/contact' 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <nav className="py-4 space-y-2">
                <Link 
                  to="/" 
                  className={`block px-4 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === '/' 
                      ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {content.navigation.home}
                </Link>
                <Link 
                  to="/about" 
                  className={`block px-4 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === '/about' 
                      ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {content.navigation.about}
                </Link>
                <Link 
                  to="/services" 
                  className={`block px-4 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === '/services' 
                      ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {content.navigation.services}
                </Link>
                <Link 
                  to="/universities" 
                  className={`block px-4 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === '/universities' 
                      ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {content.navigation.universities}
                </Link>
                <Link 
                  to="/blog" 
                  className={`block px-4 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === '/blog' 
                      ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {content.navigation.blog}
                </Link>
                <Link 
                  to="/contact" 
                  className={`block px-4 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === '/contact' 
                      ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {content.navigation.contact}
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#0A1E3E] to-[#123A7D] text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile: Single column layout, Desktop: Multi-column layout */}
          <div className="flex flex-col space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:space-y-0">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <div className="flex flex-col items-center md:flex-row md:items-start space-y-3 md:space-y-0 mb-4">
                <div className="p-2">
                  <img 
                    src={logoWhite} 
                    alt="SA Global Logo" 
                    className="h-14 sm:h-16 lg:h-18 w-auto"
                  />
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-center md:text-left">{content.siteTagline}</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://facebook.com" className="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                  <span className="text-sm font-bold text-white">f</span>
                </a>
                <a href="https://twitter.com" className="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                  <span className="text-sm font-bold text-white">t</span>
                </a>
                <a href="https://linkedin.com" className="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                  <span className="text-xs font-bold text-white">in</span>
                </a>
                <a href="https://instagram.com" className="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                  <span className="text-xs font-bold text-white">ig</span>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-200 hover:text-white transition-colors duration-300" onClick={() => { closeMobileMenu(); scrollToTop(); }}>About Us</Link></li>
                <li><Link to="/services" className="text-gray-200 hover:text-white transition-colors duration-300" onClick={() => { closeMobileMenu(); scrollToTop(); }}>Our Services</Link></li>
                <li><Link to="/universities" className="text-gray-200 hover:text-white transition-colors duration-300" onClick={() => { closeMobileMenu(); scrollToTop(); }}>Universities</Link></li>
                <li><Link to="/blog" className="text-gray-200 hover:text-white transition-colors duration-300" onClick={() => { closeMobileMenu(); scrollToTop(); }}>Blog</Link></li>
              </ul>
            </div>
            
            {/* Services */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-gray-200 hover:text-white transition-colors duration-300" onClick={() => { closeMobileMenu(); scrollToTop(); }}>University Selection</Link></li>
                <li><Link to="/services" className="text-gray-200 hover:text-white transition-colors duration-300" onClick={() => { closeMobileMenu(); scrollToTop(); }}>Visa Assistance</Link></li>
                <li><Link to="/services" className="text-gray-200 hover:text-white transition-colors duration-300" onClick={() => { closeMobileMenu(); scrollToTop(); }}>Student Counseling</Link></li>
                <li><Link to="/services" className="text-gray-200 hover:text-white transition-colors duration-300" onClick={() => { closeMobileMenu(); scrollToTop(); }}>Accommodation Help</Link></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
              <div className="space-y-2 text-gray-200">
                <p className="break-words">
                  <a 
                    href={`tel:${content.contactInfo.phone}`}
                    className="text-gray-200 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {content.contactInfo.phone}
                  </a>
                </p>
                <p className="break-words">
                  <a 
                    href={`mailto:${content.contactInfo.email}`}
                    className="text-gray-200 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {content.contactInfo.email}
                  </a>
                </p>
                <p className="break-words">{content.contactInfo.address}</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-white border-opacity-20 mt-8 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center sm:text-left">
              <p className="text-gray-200 text-sm">&copy; 2024 {content.siteName}. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
};

export default Layout;
