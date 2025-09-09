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

const CountryNZ = () => {
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
          src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/nz.jpg?updatedAt=1757423559363"
          alt="New Zealand Landscape"
          className="absolute inset-0 w-full h-full object-cover"
          variants={imageVariants}
          initial="rest"
          whileHover="hover"
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
            aria-label="Explore New Zealand with Settle Nation"
          >
            NEW ZEALAND
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
                Study and Travel in New Zealand
              </h2>
              <p className="mb-6">
                Discover the vibrant educational landscape and breathtaking
                travel experiences that New Zealand has to offer! At{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Settle Nation
                </span>
                , we specialize in guiding you through the visa application
                process, whether you're seeking to study or explore this beautiful
                country.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/2 order-1 md:order-2"
              variants={imageVariants}
              initial="rest"
              whileHover="hover"
            >
              <img
                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/wide-shot-building-where-workers-are-cleaning-walls-windows.jpg?updatedAt=1757404273732"
                alt="New Zealand City View"
                className="w-full h-64 sm:h-80 object-cover rounded-lg"
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
                New Zealand Study Visa – Elevate Your Education
              </h2>
              <p className="mb-4">
                New Zealand boasts a government-funded education system that
                emphasizes a well-rounded curriculum. From academic studies to
                sports and vocational training, students thrive in a supportive
                environment. Many schools feature excellent facilities such as
                playing fields, gymnasiums, and swimming pools, enhancing the
                overall learning experience.
              </p>
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                A High-Quality Education
              </h3>
              <p className="mb-4">
                At{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Settle Nation
                </span>
                , we help you navigate your study visa application and guide you
                in selecting the right university and program. With relatively low
                tuition costs and opportunities for part-time work, studying in
                New Zealand is both enriching and accessible.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/2 order-1 md:order-2"
              variants={imageVariants}
              initial="rest"
              whileHover="hover"
            >
              <img
                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/visa-application-composition-with-australian-flag.jpg?updatedAt=1757404269898"
                alt="Education in New Zealand"
                className="w-full h-64 sm:h-80 object-cover rounded-lg"
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
                New Zealand Tourist Visa
              </h2>
              <p className="mb-4">
                The New Zealand Tourist Visa is designed for those wishing to
                explore the country for leisure, visit friends or family, or
                take part in short-term courses.
              </p>
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                Who Needs a Tourist Visa?
              </h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  Citizens from{" "}
                  <span className="font-medium text-gray-900 dark:text-white">
                    visa waiver countries
                  </span>{" "}
                  can enjoy up to three months visa-free.
                </li>
                <li>
                  Citizens from{" "}
                  <span className="font-medium text-gray-900 dark:text-white">
                    non-visa waiver countries
                  </span>{" "}
                  must apply for a Visitor Visa.
                </li>
              </ul>
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                Application Process
              </h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Check Eligibility</li>
                <li>Complete Online Application</li>
                <li>Gather Required Documents</li>
                <li>Pay Applicable Fees</li>
                <li>Submit Application</li>
                <li>Attend Biometrics Appointment (if required)</li>
              </ul>
            </motion.div>
            <motion.div
              className="md:w-1/2 order-1 md:order-2"
              variants={imageVariants}
              initial="rest"
              whileHover="hover"
            >
              <img
                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/nz.jpg?updatedAt=1757423559363"
                alt="New Zealand Tourist Visa Application"
                className="w-full h-64 sm:h-80 object-cover rounded-lg"
                loading="lazy"
                decoding="async"
                role="img"
              />
            </motion.div>
          </div>
        </InViewSection>

        {/* PR Section */}
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
                New Zealand Permanent Residency (PR)
              </h2>
              <p className="mb-4">
                New Zealand offers multiple pathways for individuals and families
                seeking permanent residency.
              </p>
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                Pathways to PR
              </h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Skilled Migrant Category (SMC)</li>
                <li>Family Sponsorship</li>
                <li>Business and Investor Immigration</li>
                <li>Long-Term Skill Shortage List (LTSSL)</li>
              </ul>
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                Application Process
              </h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Select a pathway</li>
                <li>Gather necessary documents</li>
                <li>Complete the online application</li>
                <li>Attend medical or biometric appointments (if required)</li>
              </ul>
            </motion.div>
            <motion.div
              className="md:w-1/2 order-1 md:order-2"
              variants={imageVariants}
              initial="rest"
              whileHover="hover"
            >
              <img
                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/beautiful-view-kepler-track-fiordland-national-park-new-zealand.jpg?updatedAt=1757404610485"
                alt="Fiordland National Park"
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
                loading="lazy"
                decoding="async"
                role="img"
              />
            </motion.div>
          </div>
        </InViewSection>

        {/* Spouse Visa Section */}
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
                New Zealand Spouse Visa – Reunite with Your Loved One
              </h2>
              <p className="mb-4">
                The New Zealand Spouse Visa allows partners of New Zealand citizens
                or residents to live together as a family.
              </p>
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                Our Services
              </h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Initial Assessment of your situation</li>
                <li>Comprehensive Application Submission</li>
                <li>Ongoing Communication and Follow-up</li>
                <li>Interview Preparation</li>
                <li>Post-Approval Support</li>
              </ul>
              <p>
                Contact{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Settle Nation
                </span>{" "}
                to schedule a consultation and take the first step towards your
                journey in New Zealand. Let us help make your dreams a reality!
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
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/2 order-1 md:order-2"
              variants={imageVariants}
              initial="rest"
              whileHover="hover"
            >
              <img
                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/nz?updatedAt=1757404691400"
                alt="New Zealand Landscape"
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
                loading="lazy"
                decoding="async"
                role="img"
              />
            </motion.div>
          </div>
        </InViewSection>
      </div>
    </motion.div>
  );
};

// In-view wrapper
const InViewSection = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pb-8"
    >
      {children}
    </motion.section>
  );
};

export default CountryNZ;