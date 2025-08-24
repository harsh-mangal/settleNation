import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Send,
  HeadphonesIcon,
  PlaneTakeoff,
  Check,
} from "lucide-react";

const Footer = ({ mapImageSrc }) => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-[#6A6593] text-white overflow-hidden">
      {/* Transparent Map Background */}
      {mapImageSrc && (
        <div className="absolute inset-0 ">
          <img
            src="https://pngimg.com/d/world_map_PNG28.png"
            alt="World Map"
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-16">
        {/* Top Section with center divider */}
        <div className="relative mb-16">
          {/* Vertical center line for md+ */}
          <div className="pointer-events-none hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Support Box */}
            <div className="relative z-10 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                  <HeadphonesIcon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-medium text-white group-hover:text-orange-200 transition-colors">
                  Need any support for tour and visa?
                </h3>
              </div>
            </div>

            {/* mobile-only divider between the two cards */}
            <div className="md:hidden h-px bg-white/20 rounded my-1"></div>

            {/* Travel Box */}
            <div className="relative z-10 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                  <PlaneTakeoff className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-medium text-white group-hover:text-orange-200 transition-colors">
                  Are you ready to get started travelling?
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img
                src="https://ik.imagekit.io/devhm/aae3cad6f319122b9a943ce0c35cb2ce71e703bc%20(1).png?updatedAt=1756022369414"
                alt="Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted travel companion for unforgettable journeys around
              the world. Discover amazing destinations with expert guidance and
              personalized service.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:scale-105 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:scale-105 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:scale-105 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:scale-105 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              {[
                "Tour Packages",
                "Visa Processing",
                "Hotel Booking",
                "Flight Tickets",
                "Travel Insurance",
                "Car Rental",
                "Group Tours",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-200 text-sm"
                  >
                    <Check className="w-4 h-4 mr-2 shrink-0 text-orange-500 opacity-90 group-hover:translate-x-0.5 transition-transform" />
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {service}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Useful Links</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Contact",
                "Privacy Policy",
                "Terms of Service",
                "FAQ",
                "Support",
                "Blog",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-200 text-sm"
                  >
                    <Check className="w-4 h-4 mr-2 shrink-0 text-orange-500 opacity-90 group-hover:translate-x-0.5 transition-transform" />
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Stay updated with our latest travel deals and destinations.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent placeholder-gray-400 text-white text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                Subscribe
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="py-8 flex flex-row justify-between text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Travel Agency. All rights reserved.
          </p>
          <p className="text-xs tracking-wide text-gray-300">
            Developed by{" "}
            <span className="font-semibold text-orange-400">
                <a href="https://www.dodunsoftsolutions.com/">  Dodun Soft Solutions</a>
            
            </span>
          </p>
        </div>

        {/* Bottom divider + Dev credit */}
       
      </div>
    </footer>
  );
};

export default Footer;
