// src/components/Navbar.tsx
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-white z-50 border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/icon.png"
              alt="AssistMind AI"
              width={180}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </div>

          {/* Navigation Links */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li>
              <a
                href="#"
                className="text-base text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              >
                How it works
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              >
                Pricing
              </a>
            </li>
          </ul>

          {/* CTA Button */}
          <button className="hidden lg:block bg-[#4F46E5] text-white font-semibold px-6 py-2.5 rounded-lg text-base hover:bg-indigo-700 transition-colors shadow-sm">
            Get Started
          </button>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden">
            <button className="text-gray-800 p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
