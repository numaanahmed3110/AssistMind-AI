// src/components/Navbar.tsx
"use client";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  // Enhanced smooth scroll function with custom 1-second animation
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 70; // Account for navbar height
      const targetPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 bg-white z-50 border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div
          className="flex items-center"
          style={{
            width: "1240px",
            height: "46px",
            justifyContent: "space-between",
            opacity: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/icon.png"
              alt="AssistMind AI"
              width={201}
              height={32}
              className="h-8 w-auto"
              style={{
                width: "201px",
                height: "32px",
                opacity: 1,
              }}
              priority
            />
          </div>

          {/* Navigation Links */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li>
              <button
                onClick={() => scrollToSection("hero")}
                className="text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer bg-transparent border-none"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "27px",
                  letterSpacing: "0%",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer bg-transparent border-none"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "27px",
                  letterSpacing: "0%",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer bg-transparent border-none"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "27px",
                  letterSpacing: "0%",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                How it works
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer bg-transparent border-none"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "27px",
                  letterSpacing: "0%",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                Resources
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer bg-transparent border-none"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "27px",
                  letterSpacing: "0%",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                Pricing
              </button>
            </li>
          </ul>

          {/* CTA Button */}
          <button
            className="hidden lg:block bg-[#4F46E5] text-white hover:bg-indigo-700 transition-colors shadow-sm"
            style={{
              width: "130px",
              height: "40px",
              opacity: 1,
              gap: "16px",
              borderRadius: "12px",
              padding: "12px",
              fontFamily: "Manrope",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
