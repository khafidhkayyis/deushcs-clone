export default function Footer() {
  return (
    <footer className="bg-[#122430] text-white relative overflow-hidden">
      {/* Wavy Pattern Background */}
      <div className="absolute inset-0 opacity-15">
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
          style={{ height: "100%" }}
        >
          <path
            d="M0,150 Q200,100 400,150 T800,150 T1200,150 L1200,300 L0,300 Z"
            fill="#5ba3f5"
            opacity="0.6"
          />
          <path
            d="M0,180 Q300,130 600,180 T1200,180 L1200,300 L0,300 Z"
            fill="#4a90e2"
            opacity="0.8"
          />
          <path
            d="M0,200 Q250,150 500,200 T1000,200 T1200,200 L1200,300 L0,300 Z"
            fill="#6bb6ff"
            opacity="0.4"
          />
        </svg>
      </div>

      <div className="container mx-auto md:mx-25 px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Left Column */}
          <div className="flex gap-4">
            <a href="#" className="font-bold text-white hover:text-yellow-400 transition-colors uppercase">
              HOME
            </a>
            <div>
              <h3 className="font-bold text-white mb-3 uppercase">ABOUT US</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Our Journey
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Values
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Core Team
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle-Left Column */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-bold text-white mb-3 uppercase">OUR PRODUCTS</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    DEUS Discover
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    DEUS Enhance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Eagle Vision
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle-Right Section - CTA Button */}
          <div className="flex items-start justify-center lg:justify-start">
            <button className="bg-yellow-200 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-full transition-colors w-full text-lg lg:w-auto">
              FREE HR CONSULTATION
            </button>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white uppercase">DEUS CORNER</h3>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-300 text-sm">
              © DEUS Human Capital Services
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="Email"
              >
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="Phone"
              >
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

