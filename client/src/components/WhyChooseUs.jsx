import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";

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

export default function WhyChooseUs({
  title = "Why Choose Settle Nation?",
  phone = " +91 7347045972",
  readMoreHref = "/about",
  images = [
    "https://ik.imagekit.io/devhm/12334.jpg?updatedAt=1756237019832",
    "https://ik.imagekit.io/devhm/2148434385.jpg?updatedAt=1756237019906",
    "https://ik.imagekit.io/devhm/144819.jpg?updatedAt=1756237020010",
  ],
}) {
  const bullets = [
    "Transparent guidance & clear timelines",
    "Expert counselors for study • work • PR • visitor",
    "Up-to-date with the latest immigration policies",
    "End-to-end services: SOPs, documentation, filing",
    "Personalized strategy to fit your goals & budget",
    "High approval track record & faster processing",
  ];

  return (
    <motion.section
      className="w-full bg-gray-50 dark:bg-gray-900"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
    >

      {/* Full width banner */}
      <div className="w-full bg-orange-500 dark:bg-orange-600 text-white dark:text-gray-100 text-center py-3 sm:py-4">
        <span className="font-bold text-lg sm:text-xl md:text-2xl tracking-wide">
          🎉 20+ Years of Experience in Immigration
        </span>
      </div>

      <div className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="mb-8 sm:mb-10" variants={itemVariants}>
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium bg-orange-50 dark:bg-orange-900/30 px-3 py-1.5 rounded-full text-orange-700 dark:text-orange-300 border border-orange-100 dark:border-orange-700/30">
            <span className="h-2 w-2 rounded-full bg-orange-500 dark:bg-orange-400" />
            Most trusted visa consultancy in Chandigarh
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: collage */}
          <motion.div className="grid grid-cols-2 gap-4 sm:gap-5" variants={containerVariants}>
            {/* Tall image */}
            <motion.div
              className="col-span-1 row-span-2 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 aspect-[3/4] group transition-transform duration-300 hover:-translate-y-1 hover:rotate-[0.5deg] hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={images[0] || "https://via.placeholder.com/300x400"}
                alt="Settle Nation counseling"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            {/* Top-right */}
            <motion.div
              className="col-span-1 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 aspect-[4/3] group transition-transform duration-300 hover:-translate-y-1 hover:-rotate-[0.5deg] hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={images[1] || "https://via.placeholder.com/400x300"}
                alt="Visa documentation support"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            {/* Bottom-right */}
            <motion.div
              className="col-span-1 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 aspect-[4/3] group transition-transform duration-300 hover:-translate-y-1 hover:rotate-[0.5deg] hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={images[2] || "https://via.placeholder.com/400x300"}
                alt="Happy clients"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <motion.div variants={containerVariants}>
            <motion.p
              className="text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed"
              variants={itemVariants}
            >
              Looking for the best immigration consultants in Chandigarh?{" "}
              <span className="font-semibold text-gray-900 dark:text-white">Settle Nation</span>{" "}
              delivers specialized immigration solutions with expert guidance
              and complete transparency. From your first consultation to
              post-approval support, we keep you informed and confident at every
              step. Whether you aim to study, work, travel, or settle abroad,
              our seasoned team streamlines documentation, strengthens your
              profile, and maximizes your chances of success.
            </motion.p>

            {/* Bullets */}
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {bullets.map((b, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                >
                  <span className="mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 dark:text-orange-400" />
                  </span>
                  <span className="text-gray-800 dark:text-gray-200">{b}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTAs */}
            <motion.div className="mt-7 flex flex-wrap items-center gap-3" variants={itemVariants}>
              <a
                href={readMoreHref}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-500 dark:bg-orange-600 text-white dark:text-gray-100 font-semibold hover:bg-orange-600 dark:hover:bg-orange-700 transition"
              >
                Read More
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-orange-200 dark:border-orange-700/30 text-orange-700 dark:text-orange-300 bg-orange-50 dark:bg-orange-900/30 hover:bg-orange-100 dark:hover:bg-orange-900/50 font-semibold transition"
              >
                <Phone className="h-5 w-5" />
                {phone}
              </a>
            </motion.div>

            {/* Trust note */}
            <motion.div
              className="mt-5 text-sm text-gray-500 dark:text-gray-400"
              variants={itemVariants}
            >
              Over a decade of experience • Thousands of successful approvals •
              Client-first, policy-aligned advice
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}