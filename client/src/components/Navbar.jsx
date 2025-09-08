// Enhanced Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

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

const Navbar = ({ logoSrc, logoAlt = "Brand" }) => {
  const [open, setOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const loginRef = useRef(null);

  const linkBase =
    "px-3 py-2 rounded-lg transition-all duration-200 hover:text-[#F68625] hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-[#F68625] focus:ring-offset-1";
  const linkActive = "text-[#F68625] bg-orange-50 font-medium";
  const linkInactive = "text-gray-700 hover:text-[#F68625]";

  const closeMenu = () => {
    setOpen(false);
    setMobileDropdownOpen(false);
    setLoginDropdownOpen(false);
  };

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

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 py-3 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="shrink-0">
          <Link
            to="/"
            onClick={closeMenu}
            className="inline-flex items-center gap-2 group"
          >
            <img
              src={
                logoSrc ||
                "https://ik.imagekit.io/devhm/aae3cad6f319122b9a943ce0c35cb2ce71e703bc%20(1).png?updatedAt=1756022369414"
              }
              alt={logoAlt}
              className="h-14 w-auto md:h-16 transition-transform duration-200 group-hover:scale-105"
              loading="eager"
              decoding="async"
            />
          </Link>
        </div>

        {/* Center - Links (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map(({ to, label, dropdown }) =>
            dropdown ? (
              <div key={to} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDesktopDropdownOpen((prev) => !prev)}
                  className={`${linkBase} ${desktopDropdownOpen ? linkActive : linkInactive
                    }`}
                >
                  {label}
                </button>

                {/* Desktop Dropdown */}
                {desktopDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-100 py-2 z-50 animate-slideDown">
                    {serviceItems.map(({ to, label }) => (
                      <NavLink
                        key={to}
                        to={to}
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-[#F68625]"
                        onClick={() => setDesktopDropdownOpen(false)}
                      >
                        {label}
                      </NavLink>
                    ))}
                  </div>
                )}
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
          <Link
            to="/contact"
            className="bg-[#F68625] text-white px-5 py-2.5 rounded-lg hover:bg-[#e5761f] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium"
          >
            Get an Appointment
          </Link>

          {/* Login Dropdown */}
          <div className="relative" ref={loginRef}>
            <button
              onClick={() => setLoginDropdownOpen((prev) => !prev)}
              className="border-2 border-[#F68625] text-[#F68625] px-5 py-2.5 rounded-lg hover:bg-[#F68625] hover:text-white hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 font-medium"
            >
              Login
            </button>

            {loginDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-100 py-2 z-50 animate-slideDown">
                {loginItems.map(({ to, label }) => (
                  <a
                    key={to}
                    href={to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-[#F68625]"
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F68625] transition-colors duration-200 relative"
          onClick={() => setOpen((v) => !v)}
        >
          {/* Hamburger Icon */}
          <svg
            className={`w-6 h-6 transition-all duration-200 ${open ? "scale-0 opacity-0" : "scale-100 opacity-100"
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
            className={`w-6 h-6 absolute transition-all duration-200 ${open ? "scale-100 opacity-100" : "scale-0 opacity-0"
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
        className={`md:hidden bg-white border-t border-gray-100 shadow-sm overflow-hidden transition-all duration-300 ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 py-3 space-y-2">
          {navItems.map(({ to, label, dropdown }) =>
            dropdown ? (
              <div key={to} className="relative">
                <button
                  onClick={() => setMobileDropdownOpen((prev) => !prev)}
                  className="w-full flex justify-between items-center px-3 py-2 rounded-lg text-gray-700 hover:text-[#F68625] hover:bg-orange-50 transition-all duration-200"
                >
                  {label}
                  <svg
                    className={`w-5 h-5 transform transition-transform ${mobileDropdownOpen ? "rotate-180" : ""
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
                  className={`ml-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${mobileDropdownOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                    }`}
                >
                  {serviceItems.map(({ to, label }) => (
                    <NavLink
                      key={to}
                      to={to}
                      onClick={closeMenu}
                      className="block px-3 py-2 text-gray-600 hover:bg-orange-50 hover:text-[#F68625] rounded-lg transition"
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
                className="block px-3 py-2 rounded-lg text-gray-700 hover:text-[#F68625] hover:bg-orange-50 transition"
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
              className="bg-[#F68625] text-white px-4 py-2 rounded-lg hover:bg-[#e5761f] transition"
            >
              Get an Appointment
            </Link>

            {/* Mobile Login Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLoginDropdownOpen((prev) => !prev)}
                className="border-2 border-[#F68625] text-[#F68625] px-4 py-2 rounded-lg hover:bg-[#F68625] hover:text-white transition w-full flex justify-between items-center"
              >
                Login
                <svg
                  className={`w-5 h-5 transform transition-transform ${loginDropdownOpen ? "rotate-180" : ""
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
                    className="block px-3 py-2 text-gray-600 hover:bg-orange-50 hover:text-[#F68625] rounded-lg transition"
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
