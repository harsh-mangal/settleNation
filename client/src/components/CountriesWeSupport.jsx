import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { ArrowRight } from "lucide-react";


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

const countries = [
  {
    name: "Canada",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop",
    about:
      "Top study & PR destination with high-quality education, PGWP, and clear PR pathways.",
    href: "/country/canada",
  },
  {
    name: "Australia",
    img: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/aus.webp?updatedAt=1757397650074",
    about:
      "World-class universities, skilled migration routes, and a great work-life balance.",
    href: "/country/australia",
  },
  {
    name: "United Kingdom",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop",
    about:
      "Globally recognised degrees, Graduate Route visas, and strong career outcomes.",
    href: "/country/uk",
  },
  {
    name: "United States",
    img: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/view-statue-liberty-new-york-city.jpg?updatedAt=1757334591595",
    about:
      "Explore visa options, including F-1 student, H-1B work, and OPT/STEM extensions, with guidance on applications and requirements.",
    href: "/country/usa",
  },

  {
    name: "New Zealand",
    img: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/big-ben-clock.jpg?updatedAt=1757398999983",
    about:
      "Safe, scenic, and student-friendly with pathways for skilled migrants.",
    href: "/country/new-zealand",
  },
];

export default function CountriesWeSupport() {
  return (
    <motion.section
      className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-8 sm:mb-10" variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Countries We Support
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Explore top destinations where we offer end-to-end visa assistance.
          </p>
        </motion.div>

        {/* Gallery row (Desktop) */}
        <motion.div
          className="hidden md:flex gap-4"
          variants={containerVariants}
        >
          {countries.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              className="
                group relative overflow-hidden rounded-3xl
                basis-[22%] hover:basis-[48%]
                transition-all duration-500 ease-out
                border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl
                flex
              "
              style={{ minHeight: 320 }}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background image */}
              <img
                src={c.img || "https://via.placeholder.com/1400x900"}
                alt={c.name}
                className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />

              {/* Gradient wash for readability */}
              <div className="absolute inset-0 bg-[rgba(244,241,255,0.65)] dark:bg-[rgba(55,65,81,0.65)] group-hover:bg-[rgba(255,237,213,0.45)] dark:group-hover:bg-[rgba(255,237,213,0.35)] transition-colors duration-500" />

              {/* Content */}
              <div className="relative z-10 p-6 sm:p-7 md:p-8 flex flex-col justify-end w-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white drop-shadow">
                    {c.name}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-orange-500 dark:text-orange-400 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </div>

                {/* About block — hidden until hover, then expands */}
                <div
                  className="
                    mt-3 max-h-0 opacity-0
                    group-hover:max-h-40 group-hover:opacity-100
                    transition-all duration-500 ease-out
                  "
                >
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 bg-white/70 dark:bg-gray-800/70 backdrop-blur rounded-2xl p-4 border border-white/60 dark:border-gray-600/60 shadow">
                    {c.about}
                  </p>
                </div>
              </div>

              {/* Soft bottom gradient to enhance legibility */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/70 dark:from-gray-900/70 via-white/20 dark:via-gray-900/20 to-transparent" />
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile: stacked cards */}
        <motion.div
          className="md:hidden grid grid-cols-1 gap-4"
          variants={containerVariants}
        >
          {countries.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-[16/9]">
                <img
                  src={c.img || "https://via.placeholder.com/1400x900"}
                  alt={c.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {c.name}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-orange-500 dark:text-orange-400" />
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{c.about}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}