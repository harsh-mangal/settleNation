// Enhanced Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// Usage:
// import logo from "/assets/logo.png";
// <Navbar logoSrc={logo} logoAlt="Your Brand" />

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

const Navbar = ({ logoSrc, logoAlt = "Brand" }) => {
  const [open, setOpen] = useState(false);

  const linkBase =
    "px-3 py-2 rounded-lg transition-all duration-200 hover:text-[#F68625] hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-[#F68625] focus:ring-offset-1";
  const linkActive = "text-[#F68625] bg-orange-50 font-medium";
  const linkInactive = "text-gray-700 hover:text-[#F68625]";

  const closeMenu = () => setOpen(false);

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 py-3 flex items-center justify-between">
        {/* Left - Logo Image */}
        <div className="shrink-0">
          <Link
            to="/"
            onClick={closeMenu}
            className="inline-flex items-center gap-2 group"
          >
            <img
              src="https://ik.imagekit.io/devhm/aae3cad6f319122b9a943ce0c35cb2ce71e703bc%20(1).png?updatedAt=1756022369414"
              alt={logoAlt}
              className="h-14 w-auto md:h-16 transition-transform duration-200 group-hover:scale-105"
              loading="eager"
              decoding="async"
            />
          </Link>
        </div>

        {/* Center - Links (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map(({ to, label }) => (
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
          ))}
        </div>

        {/* Right - Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/appointment"
            className="bg-[#F68625] text-white px-5 py-2.5 rounded-lg hover:bg-[#e5761f] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium"
          >
            Get an Appointment
          </Link>
          <Link
            to="/login"
            className="border-2 border-[#F68625] text-[#F68625] px-5 py-2.5 rounded-lg hover:bg-[#F68625] hover:text-white hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 font-medium"
          >
            Login
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F68625] transition-colors duration-200"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-200 ${
              open ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
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
          <svg
            className={`w-6 h-6 absolute transition-transform duration-200 ${
              open ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
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
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          open
            ? "max-h-[500px] opacity-100 border-t border-gray-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-4 space-y-3 bg-white/95 backdrop-blur-sm">
          {/* Links */}
          <div className="flex flex-col space-y-1">
            {navItems.map(({ to, label }, index) => (
              <NavLink
                key={to}
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `py-3 px-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-[#F68625] font-semibold bg-orange-50 border-l-4 border-[#F68625]"
                      : "text-gray-700 hover:text-[#F68625] hover:bg-gray-50 hover:pl-4"
                  }`
                }
                style={{
                  animationDelay: open ? `${index * 50}ms` : "0ms",
                }}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Buttons */}
          <div className="pt-4 space-y-3">
            <Link
              to="/appointment"
              onClick={closeMenu}
              className="w-full text-center bg-[#F68625] text-white px-5 py-3 rounded-lg hover:bg-[#e5761f] hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium block"
            >
              Get an Appointment
            </Link>
            <Link
              to="/login"
              onClick={closeMenu}
              className="w-full text-center border-2 border-[#F68625] text-[#F68625] px-5 py-3 rounded-lg hover:bg-[#F68625] hover:text-white hover:shadow-md transform hover:scale-105 transition-all duration-200 font-medium block"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
