"use client";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <Image
                  src="/JCDS LOGO 27 YEARS.jpg"
                  alt="JCDS Logo 1"
                  width={50}
                  height={50}
                  className="rounded-full ring-2 ring-gray-200 group-hover:ring-teal-500 transition-all duration-300"
                />
              </div>
              <div className="relative group">
                <Image
                  src="/JCDS LOGO 27 YEARS.png"
                  alt="JCDS Logo 2"
                  width={50}
                  height={50}
                  className="rounded-full ring-2 ring-gray-200 group-hover:ring-teal-500 transition-all duration-300"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-800">JCDS</h1>
              <p className="text-xs text-gray-500">27 Years of Excellence</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <a
              href="/"
              className="relative px-4 py-2 text-gray-700 font-medium hover:text-teal-600 transition-all duration-300 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/registration"
              className="relative px-4 py-2 text-gray-700 font-medium hover:text-teal-600 transition-all duration-300 group"
            >
              Registration
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/contact"
              className="relative px-4 py-2 text-gray-700 font-medium hover:text-teal-600 transition-all duration-300 group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/map"
              className="relative px-4 py-2 text-gray-700 font-medium hover:text-teal-600 transition-all duration-300 group"
            >
              Map
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-teal-600 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
