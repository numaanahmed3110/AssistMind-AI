// src/components/Footer.tsx
import React from "react";
import Image from "next/image";

// --- Icon Components for the Footer ---
const MailIcon = () => (
  <svg
    className="w-5 h-5 mr-3 text-indigo-300"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

// --- Footer Link Data ---
const footerLinks = {
  col1: ["Features", "How it works", "Resources", "Pricing"],
  col2: ["Get A Demo", "Start Free Trial", "Privacy Policy"],
};

const Footer = () => {
  return (
    // REFINEMENT: Set the exact dark blue background color
    <footer style={{ backgroundColor: "#0D1127" }}>
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-base">
          {/* Column 1: Logo and Description */}
          <div className="col-span-1">
            <div className="flex flex-col items-start">
              <Image
                src="/images/logo-icon.png"
                alt="AssistMind AI Logo"
                width={180}
                height={180}
                className="mb-4"
              />
            </div>
            <p className="text-indigo-200 leading-relaxed text-sm">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:ml-8">
            <h3 className="font-semibold text-white tracking-wide mb-4 text-sm">
              Quick links
            </h3>
            <ul className="space-y-3">
              {footerLinks.col1.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-indigo-200 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: More Quick Links */}
          <div>
            <h3 className="font-semibold text-white tracking-wide mb-4 text-sm">
              Quick links
            </h3>
            <ul className="space-y-3">
              {footerLinks.col2.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-indigo-200 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="font-semibold text-white tracking-wide mb-4 text-sm">
              Contact us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@assistantmindai.com"
                  className="flex items-center text-indigo-200 hover:text-white transition-colors text-sm"
                >
                  <MailIcon />
                  <span>info@assistantmindai.com</span>
                </a>
              </li>
              <li className="flex items-center space-x-3 pt-1">
                <a
                  href="#"
                  className="hover:scale-110 transition-transform flex items-center justify-center w-6 h-6"
                >
                  <Image
                    src="/images/facebook.svg"
                    alt="Facebook"
                    width={16}
                    height={16}
                    className="opacity-60 hover:opacity-100 transition-opacity object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="hover:scale-110 transition-transform flex items-center justify-center w-6 h-6"
                >
                  <Image
                    src="/images/linkedin.svg"
                    alt="LinkedIn"
                    width={22}
                    height={22}
                    className="opacity-60 hover:opacity-100 transition-opacity object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="hover:scale-110 transition-transform flex items-center justify-center w-6 h-6"
                >
                  <Image
                    src="/images/google.svg"
                    alt="Google"
                    width={18}
                    height={18}
                    className="opacity-60 hover:opacity-100 transition-opacity object-contain"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
