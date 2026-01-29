"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "./images/deus_human_capital_services_logo.jpeg";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setAboutUsOpen(false);
    setProductsOpen(false);
  };

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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="bg-[#122430] text-white w-full sticky top-0 z-50 font-sans">
      <div className="container mx-auto md:mx-10 px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="relative w-23 h-23 flex items-center justify-center">
              <Image src={logo} alt="DEUS Logo" width={100} height={100} />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-17 font-medium">
            <Link href="/" className="hover:text-gray-300 transition-colors text-xl">
              Home
            </Link>
            <div className="relative" ref={aboutUsRef}>
              <button
                onClick={() => {
                  setAboutUsOpen(!aboutUsOpen);
                  setProductsOpen(false);
                }}
                className="flex items-center gap-1 hover:text-gray-300 transition-colors text-xl"
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
                  <Link href="/whoweare" className="block px-4 py-2 hover:bg-gray-100">
                    Who We Are
                  </Link>
                  <Link href="/whoweare#our-journey" className="block px-4 py-2 hover:bg-gray-100">
                    Our Journey
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Values
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Core Team
                  </Link>
                </div>
              )}
            </div>
            <div className="relative" ref={productsRef}>
              <button
                onClick={() => {
                  setProductsOpen(!productsOpen);
                  setAboutUsOpen(false);
                }}
                className="flex items-center gap-1 hover:text-gray-300 transition-colors text-xl"
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
                  <Link href="/discover" className="block px-4 py-2 hover:bg-gray-100">
                    DEUS Discover
                  </Link>
                  <Link href="/enhance" className="block px-4 py-2 hover:bg-gray-100">
                    DEUS Enhance
                  </Link>
                  <Link href="/eaglevision" className="block px-4 py-2 hover:bg-gray-100">
                    DEUS Eagle Vision
                  </Link>
                </div>
              )}
            </div>
            {/* CTA Button */}
            <Link href="/consultation" className="hidden lg:block text-xl bg-yellow-200 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-2 rounded-full transition-colors text-center">
              Free HR Consultation
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors text-xl">
              DEUS Corner
            </Link>
          </nav>



          {/* Language Flags */}
          <div className="flex items-center gap-2 ml-4">
            <button
              className="w-6 h-4 border border-gray-400 hover:border-yellow-400 transition-colors overflow-hidden"
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
              className="w-6 h-4 border border-gray-400 hover:border-yellow-400 transition-colors overflow-hidden"
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

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden top-[73px]"
            onClick={closeMobileMenu}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-[73px] left-0 right-0 bottom-0 bg-[#122430] z-50 md:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <nav className="flex flex-col px-6 py-6">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`py-4 px-4 text-lg font-medium transition-colors border-b border-gray-700 ${pathname === "/"
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-400"
                }`}
            >
              Home
            </Link>

            <div className="border-b border-gray-700">
              <button
                onClick={() => {
                  setAboutUsOpen(!aboutUsOpen);
                  setProductsOpen(false);
                }}
                className={`flex items-center justify-between w-full py-4 px-4 text-lg font-medium transition-colors ${pathname.startsWith("/whoweare")
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                  }`}
              >
                <span>About Us</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${aboutUsOpen ? "rotate-180" : ""
                    }`}
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
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${aboutUsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="bg-gray-900/50 flex flex-col py-2">
                  <Link
                    href="/whoweare"
                    onClick={closeMobileMenu}
                    className={`py-3 px-8 text-base transition-colors ${pathname === "/whoweare"
                        ? "text-yellow-400 font-semibold bg-gray-800/50"
                        : "text-gray-300 hover:text-yellow-400 hover:bg-gray-800/30"
                      }`}
                  >
                    Who We Are
                  </Link>
                  <Link
                    href="/whoweare#our-journey"
                    onClick={closeMobileMenu}
                    className="py-3 px-8 text-base text-gray-300 hover:text-yellow-400 hover:bg-gray-800/30 transition-colors"
                  >
                    Our Journey
                  </Link>
                  <Link
                    href="#"
                    onClick={closeMobileMenu}
                    className="py-3 px-8 text-base text-gray-300 hover:text-yellow-400 hover:bg-gray-800/30 transition-colors"
                  >
                    Values
                  </Link>
                  <Link
                    href="#"
                    onClick={closeMobileMenu}
                    className="py-3 px-8 text-base text-gray-300 hover:text-yellow-400 hover:bg-gray-800/30 transition-colors"
                  >
                    Core Team
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-700">
              <button
                onClick={() => {
                  setProductsOpen(!productsOpen);
                  setAboutUsOpen(false);
                }}
                className={`flex items-center justify-between w-full py-4 px-4 text-lg font-medium transition-colors ${pathname === "/discover" || pathname === "/enhance" || pathname === "/eaglevision"
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                  }`}
              >
                <span>Our Products</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""
                    }`}
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
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${productsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="bg-gray-900/50 flex flex-col py-2">
                  <Link
                    href="/discover"
                    onClick={closeMobileMenu}
                    className={`py-3 px-8 text-base transition-colors ${pathname === "/discover"
                        ? "text-yellow-400 font-semibold bg-gray-800/50"
                        : "text-gray-300 hover:text-yellow-400 hover:bg-gray-800/30"
                      }`}
                  >
                    DEUS Discover
                  </Link>
                  <Link
                    href="/enhance"
                    onClick={closeMobileMenu}
                    className={`py-3 px-8 text-base transition-colors ${pathname === "/enhance"
                        ? "text-yellow-400 font-semibold bg-gray-800/50"
                        : "text-gray-300 hover:text-yellow-400 hover:bg-gray-800/30"
                      }`}
                  >
                    DEUS Enhance
                  </Link>
                  <Link
                    href="/eaglevision"
                    onClick={closeMobileMenu}
                    className={`py-3 px-8 text-base transition-colors ${pathname === "/eaglevision"
                        ? "text-yellow-400 font-semibold bg-gray-800/50"
                        : "text-gray-300 hover:text-yellow-400 hover:bg-gray-800/30"
                      }`}
                  >
                    DEUS Eagle Vision
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="#"
              onClick={closeMobileMenu}
              className={`py-4 px-4 text-lg font-medium transition-colors border-b border-gray-700 ${pathname === "#"
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-400"
                }`}
            >
              DEUS Corner
            </Link>

            <Link
              href="/consultation"
              onClick={closeMobileMenu}
              className={`mt-4 py-4 px-6 text-lg font-semibold rounded-lg transition-colors text-center ${pathname === "/consultation"
                  ? "bg-yellow-500 text-gray-900"
                  : "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                }`}
            >
              Free HR Consultation
            </Link>

            <div className="mt-6 pt-6 border-t border-gray-700 flex items-center justify-center gap-4">
              <button
                className="w-8 h-6 border border-gray-400 hover:border-yellow-400 transition-colors overflow-hidden rounded"
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
                className="w-8 h-6 border border-gray-400 hover:border-yellow-400 transition-colors overflow-hidden rounded"
                title="Indonesia"
              >
                <div className="w-full h-full flex flex-col">
                  <div className="h-1/2 bg-red-600"></div>
                  <div className="h-1/2 bg-white"></div>
                </div>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

