import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "../../assets/assets";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const navLinks = ["Home", "About", "Services", "Blog"];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Animate navbar when in view
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

  const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeInDown}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="pt-4 lg:pt-4 mx-auto max-w-7xl px-6"
    >
      <nav
        className="rounded-2xl p-4 text-white shadow-xl z-50 bg-white/15 backdrop-blur-xs border border-white/10 
      relative"
      >
        <div className=" mx-auto flex items-center relative">
          {/* Logo on the left */}
          <a href="/" className="mr-4">
            <img
              src={Logo}
              alt="Logo"
              className="lg:h-12 md:h-11 sm:h-10 h-8 p-1 bg-cover "
            />
          </a>

          {/* Spacer to push rest to the right */}
          <div className="flex-1" />

          {/* Nav links - shown on medium and above */}
          <ul className="hidden md:flex space-x-8 text-md text-white">
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

          <div className="hidden md:flex items-center space-x-4 ml-6">
            <a
              href="#"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 border border-white/20 backdrop-blur-xl text-emerald-300 text-sm font-semibold rounded-xl hover:bg-white/20 hover:text-white transition-all shadow-lg"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ml-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
              className="focus:outline-none cursor-pointer"
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
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full md:hidden mt-6 z-50"
          >
            <div className="w-full mx-auto rounded-xl bg-white backdrop-blur-3xl shadow-lg p-6 flex flex-col gap-4 text-gray-700 border border-white/20 z-30 text-center">
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
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 border border-white/20 backdrop-blur-xl text-emerald-300 text-sm font-semibold rounded-xl hover:bg-white/20 hover:text-white transition-all shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.div>
  );
};

export default Navbar;
