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
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

// Animation Variants (aligned with StudyVisa)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Footer = ({ mapImageSrc, darkMode }) => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  const serviceItems = [
    { to: "/services/super-visa", label: "Super Visa" },
    { to: "/services/study-visa", label: "Study Visa" },
    { to: "/services/visa-counselling", label: "Visa Counselling" },
    { to: "/services/tourist-visa", label: "Tourist Visa" },
    { to: "/services/ielts-pte", label: "IELTS/PTE" },
    { to: "/services/interview-prep", label: "Interview Preparation" },
  ];

  return (
    <motion.footer
      className="relative bg-[#6A6593] dark:bg-gray-800 text-white dark:text-gray-100 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
    >

      {/* Transparent Map Background */}
      {mapImageSrc && (
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <img
            src={mapImageSrc || "https://pngimg.com/d/world_map_PNG28.png"}
            alt="World Map"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      {/* Travel Footer Image Background with Overlay */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <img
          src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/futuristic-view-high-tech-earth-planet.jpg?updatedAt=1757666581314"
          alt="Travel Footer Background"
          className="w-full h-full object-cover object-center opacity-30 dark:opacity-40"
          loading="lazy"
          decoding="async"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/40"></div>
      </div>


      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-16">
        {/* Top Section with center divider */}
        <motion.div className="relative mb-16" variants={containerVariants}>
          {/* Vertical center line for md+ */}
          <div className="pointer-events-none hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20 dark:bg-gray-700/20"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Support Box */}
            <motion.div
              className="relative z-10 bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 dark:border-gray-700/30 hover:bg-white/10 dark:hover:bg-gray-800/70 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/20 dark:bg-orange-900/30 rounded-full flex items-center justify-center group-hover:bg-orange-500/30 dark:group-hover:bg-orange-900/50 transition-colors">
                  <HeadphonesIcon className="w-6 h-6 text-orange-400 dark:text-orange-300" />
                </div>
                <h3 className="text-xl font-medium text-white dark:text-gray-100 group-hover:text-orange-200 dark:group-hover:text-orange-300 transition-colors">
                  Need any support for tour and visa?
                </h3>
              </div>
            </motion.div>

            {/* Mobile-only divider between the two cards */}
            <div className="md:hidden h-px bg-white/20 dark:bg-gray-700/20 rounded my-1"></div>

            {/* Travel Box */}
            <motion.div
              className="relative z-10 bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 dark:border-gray-700/30 hover:bg-white/10 dark:hover:bg-gray-800/70 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/20 dark:bg-orange-900/30 rounded-full flex items-center justify-center group-hover:bg-orange-500/30 dark:group-hover:bg-orange-900/50 transition-colors">
                  <PlaneTakeoff className="w-6 h-6 text-orange-400 dark:text-orange-300" />
                </div>
                <h3 className="text-xl font-medium text-white dark:text-gray-100 group-hover:text-orange-200 dark:group-hover:text-orange-300 transition-colors">
                  Are you ready to get started travelling?
                </h3>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10 dark:border-gray-700/30"
          variants={containerVariants}
        >
          {/* About Section */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="flex items-center gap-2">
              <img
                src="https://ik.imagekit.io/devhm/aae3cad6f319122b9a943ce0c35cb2ce71e703bc%20(1).png?updatedAt=1756022369414"
                alt="Settle Nation Logo Light"
                className="h-16 w-auto dark:hidden transition-all duration-200"
                loading="lazy"
                decoding="async"
              />

              {/* Dark Logo */}
              <img
                src="https://ik.imagekit.io/rasoipro212/Settle%20Nation%20/Settle-Nation-Final-logo-White-Text-.png?updatedAt=1756357426768"
                alt="Settle Nation Logo Dark"
                className="h-12 w-auto hidden dark:block transition-all duration-200"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-gray-300 dark:text-gray-300 text-sm leading-relaxed">
              Your trusted travel companion for unforgettable journeys around
              the world. Discover amazing destinations with expert guidance and
              personalized service.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 dark:bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-orange-500 dark:hover:bg-orange-600 hover:scale-105 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white dark:text-gray-100" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 dark:bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-orange-500 dark:hover:bg-orange-600 hover:scale-105 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white dark:text-gray-100" />
              </a>
              <a
                href="https://www.instagram.com/settle_nation/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 dark:bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-orange-500 dark:hover:bg-orange-600 hover:scale-105 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white dark:text-gray-100" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 dark:bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-orange-500 dark:hover:bg-orange-600 hover:scale-105 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white dark:text-gray-100" />
              </a>
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white dark:text-gray-100">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceItems.map(({ to, label }) => (
                <motion.li key={label} variants={itemVariants}>
                  <Link
                    to={to}
                    className="group flex items-center text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-all duration-200 text-sm"
                  >
                    <Check className="w-4 h-4 mr-2 shrink-0 text-orange-500 dark:text-orange-400 opacity-90 group-hover:translate-x-0.5 transition-transform" />
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Useful Links Section */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white dark:text-gray-100">
              Useful Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
                { label: "Privacy Policy", to: "/privacy-policy" },
                { label: "Terms of Service", to: "/terms" },
                { label: "Support", to: "/contact" },
                { label: "Blog", to: "/articlesBlogs" },
              ].map(({ label, to }) => (
                <motion.li key={label} variants={itemVariants}>
                  <Link
                    to={to}
                    className="group flex items-center text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-all duration-200 text-sm"
                  >
                    <Check className="w-4 h-4 mr-2 shrink-0 text-orange-500 dark:text-orange-400 opacity-90 group-hover:translate-x-0.5 transition-transform" />
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white dark:text-gray-100">
              Newsletter
            </h3>
            <p className="text-gray-300 dark:text-gray-300 text-sm leading-relaxed">
              Stay updated with our latest travel deals and destinations.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 bg-white/10 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-300 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-500 text-white dark:text-gray-100 text-sm"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-orange-500 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-700 text-white dark:text-gray-100 px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
              >
                Subscribe
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          className="py-8 flex flex-col md:flex-row justify-between text-center gap-4"
          variants={itemVariants}
        >
          <p className="text-gray-300 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} Settle Nation. All rights reserved.
          </p>
          <p className="text-xs tracking-wide text-gray-300 dark:text-gray-300">
            Developed by{" "}
            <a
              href="https://www.dodunsoftsolutions.com/"
              className="font-semibold text-orange-400 dark:text-orange-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dodun Soft Solutions
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;