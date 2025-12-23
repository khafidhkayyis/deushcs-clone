"use client";

import { useState, useEffect, useRef } from "react";
import logo from "./images/deus_human_capital_services_logo.jpeg";
import Image from "next/image";

export default function Header() {
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutUsRef.current && !aboutUsRef.current.contains(event.target as Node)) {
        setAboutUsOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-[#122430] text-white w-full sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <Image src={logo} alt="DEUS Logo" width={50} height={50} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold">DEUS</span>
              <span className="text-xs text-gray-300">Human Capital Services</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Home
            </a>
            <div className="relative" ref={aboutUsRef}>
              <button
                onClick={() => {
                  setAboutUsOpen(!aboutUsOpen);
                  setProductsOpen(false);
                }}
                className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
              >
                About Us
                <svg
                  className={`w-4 h-4 transition-transform ${aboutUsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {aboutUsOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded shadow-lg py-2 min-w-[200px] z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Company
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Team
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Mission
                  </a>
                </div>
              )}
            </div>
            <div className="relative" ref={productsRef}>
              <button
                onClick={() => {
                  setProductsOpen(!productsOpen);
                  setAboutUsOpen(false);
                }}
                className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
              >
                Our Products
                <svg
                  className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded shadow-lg py-2 min-w-[200px] z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Product 1
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Product 2
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Product 3
                  </a>
                </div>
              )}
            </div>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              DEUS Corner
            </a>
          </nav>

          {/* CTA Button */}
          <button className="hidden lg:block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-lg transition-colors">
            Free HR Consultation
          </button>

          {/* Language Flags */}
          <div className="flex items-center gap-2 ml-4">
            <button
              className="w-8 h-6 border border-gray-400 hover:border-yellow-400 transition-colors overflow-hidden"
              title="United States"
            >
              <svg width="32" height="24" viewBox="0 0 32 24" className="w-full h-full">
                <rect width="32" height="24" fill="#B22234" />
                <rect y="1.85" width="32" height="1.85" fill="white" />
                <rect y="5.55" width="32" height="1.85" fill="white" />
                <rect y="9.25" width="32" height="1.85" fill="white" />
                <rect y="12.95" width="32" height="1.85" fill="white" />
                <rect y="16.65" width="32" height="1.85" fill="white" />
                <rect y="20.35" width="32" height="1.85" fill="white" />
                <rect width="10.67" height="9.25" fill="#3C3B6E" />
                <text x="5.33" y="6" fontSize="3" fill="white" textAnchor="middle" fontFamily="Arial">★</text>
              </svg>
            </button>
            <button
              className="w-8 h-6 border border-gray-400 hover:border-yellow-400 transition-colors overflow-hidden"
              title="Indonesia"
            >
              <div className="w-full h-full flex flex-col">
                <div className="h-1/2 bg-red-600"></div>
                <div className="h-1/2 bg-white"></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-4 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-600 pt-4">
            <nav className="flex flex-col gap-4">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Home
              </a>
              <div>
                <button
                  onClick={() => setAboutUsOpen(!aboutUsOpen)}
                  className="flex items-center justify-between w-full hover:text-yellow-400 transition-colors"
                >
                  About Us
                  <svg
                    className={`w-4 h-4 transition-transform ${aboutUsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {aboutUsOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <a href="#" className="text-gray-300 hover:text-yellow-400">
                      Company
                    </a>
                    <a href="#" className="text-gray-300 hover:text-yellow-400">
                      Team
                    </a>
                    <a href="#" className="text-gray-300 hover:text-yellow-400">
                      Mission
                    </a>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center justify-between w-full hover:text-yellow-400 transition-colors"
                >
                  Our Products
                  <svg
                    className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {productsOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <a href="#" className="text-gray-300 hover:text-yellow-400">
                      Product 1
                    </a>
                    <a href="#" className="text-gray-300 hover:text-yellow-400">
                      Product 2
                    </a>
                    <a href="#" className="text-gray-300 hover:text-yellow-400">
                      Product 3
                    </a>
                  </div>
                )}
              </div>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                DEUS Corner
              </a>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-lg transition-colors w-full mt-2">
                Free HR Consultation
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

