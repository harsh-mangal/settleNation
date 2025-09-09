import React from "react";
import { motion, useInView } from "framer-motion";


// Animation Variants (aligned with StudyVisa)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  rest: { scale: 1, transition: { duration: 0.3 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const CountryUSA = () => {
  return (
    <motion.div
      className="w-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
    >

      {/* Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen mb-12"
      >
        <motion.img
          src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/representation-american-flag-with-statue-liberty-us-national-loyalty-day-celebration.jpg?updatedAt=1757400959830"
          alt="Statue of Liberty with American Flag"
          className="absolute inset-0 w-full h-full object-cover"
          variants={imageVariants}
          initial="rest"
          whileHover="hover"
          onError={(e) => {
            console.error("Image failed to load:", e);
            e.target.src = "https://via.placeholder.com/1200x800";
          }}
          loading="lazy"
          decoding="async"
          role="img"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 dark:bg-black/50">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white dark:text-gray-100 drop-shadow-lg text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            aria-label="Explore the United States with Settle Nation"
          >
            UNITED STATES
          </motion.h1>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <InViewSection>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              className="md:w-1/2 order-2 md:order-1"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-orange-600 dark:text-orange-400">
                USA Tourist and Study Visa
              </h2>
              <p className="mb-6">
                The United States is a leading destination for both education
                and tourism, known for its prestigious universities and globally
                recognized landmarks. At{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Settle Nation
                </span>
                , we offer expert assistance in securing USA Tourist and Study
                Visas, making the application process smooth and stress-free.
                Whether you're aiming to pursue your studies at top American
                institutions or explore the country's iconic attractions, our
                team is here to guide you through every step.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/2 order-1 md:order-2"
              variants={imageVariants}
              initial="rest"
              whileHover="hover"
            >
              <img
                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/portrait-confident-woman-holding-american-flag.jpg?updatedAt=1757400958078"
                alt="Student with American Flag"
                className="w-full h-64 sm:h-80 object-cover rounded-lg"
                onError={(e) => {
                  console.error("Image failed to load:", e);
                  e.target.src = "https://via.placeholder.com/1200x800";
                }}
                loading="lazy"
                decoding="async"
                role="img"
              />
            </motion.div>
          </div>
        </InViewSection>

        {/* Study Visa Section */}
        <InViewSection>
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <motion.div
              className="md:w-1/2 order-2 md:order-1"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                USA Study Visa (F-1 Visa) Eligibility Criteria
              </h2>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Admission to a SEVP-Approved Institution:
                  </span>{" "}
                  The institution must be SEVP approved.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Form I-20:
                  </span>{" "}
                  Confirms your acceptance and course details.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Proof of Financial Support:
                  </span>{" "}
                  Show funds to cover tuition and living expenses.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Academic Credentials:
                  </span>{" "}
                  Provide transcripts, degrees, or diplomas.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">
                    English Proficiency:
                  </span>{" "}
                  TOEFL, IELTS, or equivalent scores.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Non-Immigrant Intent:
                  </span>{" "}
                  Demonstrate intent to return home after studies.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Valid Passport:
                  </span>{" "}
                  Active for at least 5–6 months beyond stay.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Consular Interview:
                  </span>{" "}
                  Embassy/Consulate will assess eligibility.
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="md:w-1/2 order-1 md:order-2"
              variants={imageVariants}
              initial="rest"
              whileHover="hover"
            >
              <img
                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/green-card-passport-assortment-top-view.jpg?updatedAt=1757400960151"
                alt="USA Study Visa Documents"
                className="w-full h-64 sm:h-80 object-cover rounded-lg"
                onError={(e) => {
                  console.error("Image failed to load:", e);
                  e.target.src = "https://via.placeholder.com/1200x800";
                }}
                loading="lazy"
                decoding="async"
                role="img"
              />
            </motion.div>
          </div>
        </InViewSection>

        {/* Tourist Visa Section */}
        <InViewSection>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              className="md:w-1/2 order-2 md:order-1"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                USA Tourist Visa (B-2 Visa)
              </h2>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Purpose of Visit:
                  </span>{" "}
                  B-1: Business meetings, conferences. B-2: Tourism, vacation,
                  medical treatment, or family visits.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Financial Proof:
                  </span>{" "}
                  Show resources to cover trip costs.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Proof of Intent to Return:
                  </span>{" "}
                  Show ties (job, property, family).
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">
                    No Immigrant Intent:
                  </span>{" "}
                  Prove temporary stay.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">
                    No Criminal Record:
                  </span>{" "}
                  No disqualifying offenses.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Consular Interview:
                  </span>{" "}
                  Embassy/Consulate interview required.
                </li>
                <li>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Valid Passport:
                  </span>{" "}
                  Must be active for at least 5–6 months.
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="md:w-1/2 order-1 md:order-2"
              variants={imageVariants}
              initial="rest"
              whileHover="hover"
            >
              <img
                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/portrait-confident-woman-holding-american-flag.jpg?updatedAt=1757400958078"
                alt="USA Tourist Attraction"
                className="w-full h-64 sm:h-80 object-cover rounded-lg"
                onError={(e) => {
                  console.error("Image failed to load:", e);
                  e.target.src = "https://via.placeholder.com/1200x800";
                }}
                loading="lazy"
                decoding="async"
                role="img"
              />
            </motion.div>
          </div>
        </InViewSection>

        {/* Contact Section */}
       
        <InViewSection>
           <motion.div className="pb-6 dark:bg-gray-900 text-gray-800 dark:text-gray-200 ">
          <motion.h2
            className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 dark:text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            Get Started with Settle Nation
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            Begin your USA journey with{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Settle Nation
            </span>
            ’s expert support. Contact us today:
            <br />
            <span className="font-medium text-gray-900 dark:text-white">
              Email:
            </span>{" "}
            <a
              href="mailto:settlenation.in@gmail.com"
              className="text-orange-600 dark:text-orange-400 hover:underline"
              aria-label="Email Settle Nation at settlenation.in@gmail.com"
            >
              settlenation.in@gmail.com
            </a>
            <br />
            <span className="font-medium text-gray-900 dark:text-white">
              Phone:
            </span>{" "}
            <a
              href="tel:+917347045972"
              className="text-orange-600 dark:text-orange-400 hover:underline"
              aria-label="Call Settle Nation at +91 7347045972"
            >
              +91 7347045972
            </a>
            <br />
            <span className="font-medium text-gray-900 dark:text-white">
              Address:
            </span>{" "}
            SCO 363, Top Floor, Sector 44-D, Chandigarh
          </motion.p>
                  </motion.div>
        </InViewSection>
      </div>
    </motion.div>
  );
};

// In-view wrapper for scroll animations
const InViewSection = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-full  mt-4 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      {children}
    </motion.section>
  );
};

export default CountryUSA;