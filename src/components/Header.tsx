import React, { useState } from "react";
import Logo from "../assets/Introot logo white.png"; // ✅ Correct import for Vite

type MenuLink = {
  name: string;
  href: string;
};

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const menuLinks: MenuLink[] = [
    { name: "Contact", href: "#Footer" },
    { name: "Service", href: "#Services" },
    { name: "Story", href: "#VisionMission" },
    { name: "Works", href: "#Works" },
  ];

  return (
    <>
      <nav className="bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <a href="#Home" className="flex items-center">
              <img
                src={Logo}
                alt="Introot Logo"
                className="h-6 w-auto"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-blue-400 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
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
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 pt-2 pb-3 space-y-2">
              {menuLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed header */}
      <div className="pt-16"></div>
    </>
  );
};

export default Header;
