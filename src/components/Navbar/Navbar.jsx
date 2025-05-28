import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "../../assets/assets";

const navLinks = ["Home", "About", "Services", "Blog"];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="pt-8 lg:pt-12 mx-auto max-w-7xl">
      <nav className="rounded-2xl p-4 mx-4 text-white shadow-xl z-50 bg-white/10 backdrop-blur-md border border-white/20">
        <div className="container mx-auto max-w-7xl flex justify-between items-center relative">
          <a href="/">
            <img src={Logo} alt="Logo" className="h-8" />
          </a>

          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link} className="relative group">
                <a
                  href={`#${link.toLowerCase()}`}
                  className="transition-colors duration-300"
                >
                  {link}
                </a>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://tidycal.com/hspuri26/30-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-black text-sm rounded-full hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
              className="focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-8 w-8 text-white" />
              ) : (
                <Menu className="h-8 w-8 text-white" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            ref={menuRef}
            className="absolute top-full left-0 w-full md:hidden mt-6 px-4 z-50"
          >
            <div className="w-full max-w-7xl mx-auto rounded-xl bg-white/10 backdrop-blur-md shadow-lg p-6 flex flex-col items-start space-y-4 text-white border border-white/20">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-base font-medium w-full relative group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}

              <a
                href="https://tidycal.com/hspuri26/30-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-black text-sm rounded-full hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
