import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Games", "Contact"];

  return (
    <nav
      className={`fixed max-w-[100vw] top-0 left-0 right-0 w-full overflow-x-hidden z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 shadow-md py-2"
          : "bg-white/80 dark:bg-slate-900/80 py-4"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo
            className="h-10 sm:h-12 md:h-12 w-auto"
            variant={isDarkMode ? "light" : "dark"}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="group relative text-sm font-semibold uppercase tracking-widest text-gray-700 dark:text-gray-200 hover:text-red-600 transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/70 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700 dark:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-full border border-gray-200 dark:border-slate-700 flex items-center justify-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a.75.75 0 01.75.75V4a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2zM10 16a.75.75 0 01.75.75v1.25a.75.75 0 01-1.5 0V16.75A.75.75 0 0110 16zM4.22 4.22a.75.75 0 011.06 0l.88.88a.75.75 0 01-1.06 1.06l-.88-.88a.75.75 0 010-1.06zM14.84 14.84a.75.75 0 011.06 0l.88.88a.75.75 0 01-1.06 1.06l-.88-.88a.75.75 0 010-1.06zM2 10a.75.75 0 01.75-.75H4a.75.75 0 010 1.5H2.75A.75.75 0 012 10zM16 10a.75.75 0 01.75-.75H18a.75.75 0 010 1.5h-1.25A.75.75 0 0116 10zM4.22 15.78a.75.75 0 011.06-1.06l.88.88a.75.75 0 01-1.06 1.06l-.88-.88zM14.84 5.16a.75.75 0 011.06-1.06l.88.88a.75.75 0 01-1.06 1.06l-.88-.88z"
                />
                <path d="M10 6.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-900" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293a8 8 0 11-10.586-10.586 8 8 0 0010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="w-full md:hidden bg-white dark:bg-slate-900 border-t shadow-lg overflow-x-hidden">
          <div className="flex flex-col w-full px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-base font-semibold uppercase text-gray-700 dark:text-gray-200 hover:text-red-600 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;