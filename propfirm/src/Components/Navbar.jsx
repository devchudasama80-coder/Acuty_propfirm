import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-11.5 left-0 w-full `z-[9998] px-4 sm:px-6 lg:px-8 py-4 bg-black/90 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-6 lg:gap-10 flex-1">
          <Link to="/" className="shrink-0">
            <img
              src="https://acuitytrading.com/hubfs/acuity-new/logos/acuity-logo.svg"
              alt="Acuity Logo"
              className="h-7 sm:h-8 cursor-pointer"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-white font-medium">
            <li>
              <Link
                to="/about"
                className="hover:text-orange-500 transition-colors cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-orange-500 transition-colors cursor-pointer"
              >
                Products
              </Link>
            </li>

            {/* Markets Dropdown */}
            <li className="relative group">
              <div className="flex items-center gap-1 hover:text-orange-500 transition-colors cursor-pointer">
                <span>Markets</span>
                <ChevronDown
                  size={16}
                  className="group-hover:rotate-180 transition-transform duration-300"
                />
              </div>

              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-black rounded-xl border border-orange-500 shadow-lg py-2 min-w-40">
                  <Link
                    to="/Markets/Crypto"
                    className="block px-4 py-2 text-white hover:bg-orange-500 transition-colors"
                  >
                    Crypto
                  </Link>
                  <Link
                    to="/Markets/Indices"
                    className="block px-4 py-2 text-white hover:bg-orange-500 transition-colors"
                  >
                    Indices
                  </Link>
                  <Link
                    to="/Markets/Forex"
                    className="block px-4 py-2 text-white hover:bg-orange-500 transition-colors"
                  >
                    Forex
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <Link
                to="/partner"
                className="hover:text-orange-500 transition-colors cursor-pointer"
              >
                Partner
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className="hover:text-orange-500 transition-colors cursor-pointer"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                to="/ContactUs"
                className="hover:text-orange-500 transition-colors cursor-pointer"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT: CTA Button (Desktop) */}
        <button className="hidden lg:block flex-shrink-0 border border-orange-500 text-white px-5 xl:px-6 py-2 rounded-full hover:bg-orange-500 transition-colors whitespace-nowrap">
          Request a demo
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white flex-shrink-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-6 flex flex-col items-center gap-6 pb-4 animate-fadeIn">
          <ul className="flex flex-col items-center gap-6 text-white font-medium">
            <li>
              <Link
                to="/about"
                className="hover:text-orange-500 transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-orange-500 transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
            </li>

            {/* Mobile Markets Section */}
            <li className="flex flex-col items-center gap-3">
              <span className="text-orange-500 font-semibold">Markets</span>
              <Link
                to="/Markets/Crypto"
                className="hover:text-orange-500 transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Crypto
              </Link>
              <Link
                to="/Markets/Indices"
                className="hover:text-orange-500 transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Indices
              </Link>
              <Link
                to="/Markets/Forex"
                className="hover:text-orange-500 transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Forex
              </Link>
            </li>

            <li>
              <Link
                to="/partner"
                className="hover:text-orange-500 transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Partner
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className="hover:text-orange-500 transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                to="/ContactUs"
                className="hover:text-orange-500 transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <button className="border border-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-500 transition-colors">
            Request a demo
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;