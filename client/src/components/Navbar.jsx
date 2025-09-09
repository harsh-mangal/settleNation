import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";


const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", dropdown: true },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/articlesBlogs", label: "Articles Blog" },
  { to: "/contact", label: "Contact" },
];

const serviceItems = [
  { to: "/services/super-visa", label: "Super Visa" },
  { to: "/services/study-visa", label: "Study Visa" },
  { to: "/services/visa-counselling", label: "Visa Counselling" },
  { to: "/services/tourist-visa", label: "Tourist Visa" },
  { to: "/services/ielts-pte", label: "IELTS/PTE" },
  { to: "/services/interview-prep", label: "Interview Preparation" },
];

const loginItems = [
  { to: "http://localhost:3002/login-client", label: "Client Login" },
  { to: "http://localhost:3002/login-staff", label: "Staff Login" },
];

const Navbar = ({ logoAlt = "Settle Nation Logo" }) => {
  const [open, setOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const dropdownRef = useRef(null);
  const loginRef = useRef(null);

  // Apply dark mode to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopDropdownOpen(false);
      }
      if (loginRef.current && !loginRef.current.contains(e.target)) {
        setLoginDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkBase =
    "px-3 py-2 rounded-lg transition-all duration-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-600 dark:focus:ring-orange-400 focus:ring-offset-1 dark:focus:ring-offset-gray-900";
  const linkActive = "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-gray-700 font-medium";
  const linkInactive = "text-gray-700 dark:text-gray-200";

  const closeMenu = () => {
    setOpen(false);
    setMobileDropdownOpen(false);
    setLoginDropdownOpen(false);
  };

  // Logo sources for light and dark modes
  const lightLogoSrc =
    "https://ik.imagekit.io/devhm/aae3cad6f319122b9a943ce0c35cb2ce71e703bc%20(1).png?updatedAt=1756022369414";
  const darkLogoSrc =
    "https://ik.imagekit.io/rasoipro212/Settle%20Nation%20/Settle-Nation-Final-logo-White-Text-.png?updatedAt=1756357426768";

  return (
    <header className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-700 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 py-3 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="shrink-0">
          <Link
            to="/"
            onClick={closeMenu}
            className="inline-flex items-center gap-2 group"
            aria-label="Navigate to Settle Nation homepage"
          >
            <img
              src={darkMode ? darkLogoSrc : lightLogoSrc}
              alt={logoAlt}
              className={`w-auto transition-all duration-200 group-hover:scale-105 group-hover:brightness-110 dark:group-hover:brightness-125 group-hover:shadow-md rounded-md 
                ${darkMode ? "h-12 md:h-12" : "h-14 md:h-16"}`}
              loading="eager"
              decoding="async"
              onError={(e) => {
                console.error("Logo failed to load:", e);
                e.currentTarget.src = lightLogoSrc; // Fallback
              }}
            />

          </Link>
        </div>

        {/* Center - Links (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map(({ to, label, dropdown }) =>
            dropdown ? (
              <div key={to} className="relative group" ref={dropdownRef}>
                <button
                  className={`${linkBase} ${desktopDropdownOpen ? linkActive : linkInactive
                    }`}
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  aria-expanded={desktopDropdownOpen}
                  aria-haspopup="true"
                >
                  {label}
                </button>

                {/* Desktop Dropdown */}
                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-100 dark:border-gray-700 py-2 z-50 transition-opacity duration-200 ${desktopDropdownOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                    }`}
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onMouseLeave={() => setDesktopDropdownOpen(false)}
                >
                  {serviceItems.map(({ to, label }) => (
                    <NavLink
                      key={to}
                      to={to}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-600 dark:hover:text-orange-400"
                      onClick={() => {
                        setDesktopDropdownOpen(false);
                        closeMenu();
                      }}
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
                }
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            )
          )}
        </div>

        {/* Right - Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Dark/Light Toggle */}
          <Link
            to="/contact"
            className="bg-orange-500 dark:bg-orange-600 text-white px-5 py-2.5 rounded-lg hover:bg-orange-600 dark:hover:bg-orange-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium"
          >
            Get an Appointment
          </Link>

          {/* Login Dropdown */}
          <div className="relative" ref={loginRef}>
            <button
              onClick={() => setLoginDropdownOpen((prev) => !prev)}
              className="border-2 border-orange-500 dark:border-orange-400 text-orange-500 dark:text-orange-400 px-5 py-2.5 rounded-lg hover:bg-orange-500 dark:hover:bg-orange-600 hover:text-white hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 font-medium"
              aria-expanded={loginDropdownOpen}
              aria-haspopup="true"
            >
              Login
            </button>

            {loginDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-100 dark:border-gray-700 py-2 z-50 animate-slideDown">
                {loginItems.map(({ to, label }) => (
                  <a
                    key={to}
                    href={to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-600 dark:hover:text-orange-400"
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-600 
             text-gray-800 dark:text-gray-200 hover:shadow-md 
             flex items-center gap-2 transition-all duration-200"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <>
                <Sun size={20} /> <span className="hidden sm:inline">Light</span>
              </>
            ) : (
              <>
                <Moon size={20} /> <span className="hidden sm:inline">Dark</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-colors duration-200 relative"
          onClick={() => setOpen((v) => !v)}
        >
          {/* Hamburger Icon */}
          <svg
            className={`w-6 h-6 transition-all duration-200 text-gray-700 dark:text-gray-200 ${open ? "scale-0 opacity-0" : "scale-100 opacity-100"
              }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          {/* Close Icon */}
          <svg
            className={`w-6 h-6 absolute transition-all duration-200 text-gray-700 dark:text-gray-200 ${open ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden transition-all duration-300 ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 py-3 space-y-2">
          {/* Dark/Light Toggle (Mobile) */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="w-full px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 
             text-gray-800 dark:text-gray-200 hover:shadow 
             flex items-center justify-center gap-2 transition-all duration-200"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <>
                <Sun size={20} /> <span>Light</span>
              </>
            ) : (
              <>
                <Moon size={20} /> <span>Dark</span>
              </>
            )}
          </button>

          {navItems.map(({ to, label, dropdown }) =>
            dropdown ? (
              <div key={to} className="relative">
                <button
                  onClick={() => setMobileDropdownOpen((prev) => !prev)}
                  className="w-full flex justify-between items-center px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700 transition-all duration-200"
                  aria-expanded={mobileDropdownOpen}
                  aria-haspopup="true"
                >
                  {label}
                  <svg
                    className={`w-5 h-5 transform transition-transform text-gray-700 dark:text-gray-200 ${mobileDropdownOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Mobile Dropdown */}
                <div
                  className={`ml-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${mobileDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  {serviceItems.map(({ to, label }) => (
                    <NavLink
                      key={to}
                      to={to}
                      onClick={closeMenu}
                      className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-600 dark:hover:text-orange-400 rounded-lg transition"
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={to}
                to={to}
                onClick={closeMenu}
                className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700 transition"
              >
                {label}
              </NavLink>
            )
          )}

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-2 pt-3">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="bg-orange-500 dark:bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-600 dark:hover:bg-orange-700 transition"
            >
              Get an Appointment
            </Link>

            {/* Mobile Login Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLoginDropdownOpen((prev) => !prev)}
                className="border-2 border-orange-500 dark:border-orange-400 text-orange-500 dark:text-orange-400 px-4 py-2 rounded-lg hover:bg-orange-500 dark:hover:bg-orange-600 hover:text-white transition w-full flex justify-between items-center"
                aria-expanded={loginDropdownOpen}
                aria-haspopup="true"
              >
                Login
                <svg
                  className={`w-5 h-5 transform transition-transform text-orange-500 dark:text-orange-400 ${loginDropdownOpen ? "rotate-180" : ""
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`ml-2 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${loginDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                {loginItems.map(({ to, label }) => (
                  <a
                    key={to}
                    href={to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-600 dark:hover:text-orange-400 rounded-lg transition"
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;