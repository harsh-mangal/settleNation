import React from "react";
import { motion, useInView } from "framer-motion";

const imageVariants = {
  rest: { scale: 1, transition: { duration: 0.3 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const CountryUSA = () => {
  return (
    <div className="w-full text-gray-800">
      {/* Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen mb-12"
      >
        <motion.img
          src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/representation-american-flag-with-statue-liberty-us-national-loyalty-day-celebration.jpg?updatedAt=1757400959830"
          alt="USA Banner"
          className="absolute inset-0 w-full h-full object-cover"
          variants={imageVariants}
          initial="rest"
          whileHover="hover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg text-center">
            UNITED STATES
          </h1>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <InViewSection>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">
                USA Tourist and Study Visa
              </h2>
              <p className="mb-6">
                The United States is a leading destination for both education
                and tourism, known for its prestigious universities and globally
                recognized landmarks. At{" "}
                <span className="font-semibold">Settle Nation</span>, we offer
                expert assistance in securing USA Tourist and Study Visas,
                making the application process smooth and stress-free. Whether
                you're aiming to pursue your studies at top American
                institutions or explore the country's iconic attractions, our
                team is here to guide you through every step.
              </p>
            </div>
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
              />
            </motion.div>
          </div>
        </InViewSection>

        {/* Study Visa Section */}
        <InViewSection>
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                USA Study Visa (F-1 Visa) Eligibility Criteria
              </h2>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <span className="font-medium">Admission to a SEVP-Approved Institution:</span> The institution must be SEVP approved.
                </li>
                <li>
                  <span className="font-medium">Form I-20:</span> Confirms your acceptance and course details.
                </li>
                <li>
                  <span className="font-medium">Proof of Financial Support:</span> Show funds to cover tuition and living expenses.
                </li>
                <li>
                  <span className="font-medium">Academic Credentials:</span> Provide transcripts, degrees, or diplomas.
                </li>
                <li>
                  <span className="font-medium">English Proficiency:</span> TOEFL, IELTS, or equivalent scores.
                </li>
                <li>
                  <span className="font-medium">Non-Immigrant Intent:</span> Demonstrate intent to return home after studies.
                </li>
                <li>
                  <span className="font-medium">Valid Passport:</span> Active for at least 5–6 months beyond stay.
                </li>
                <li>
                  <span className="font-medium">Consular Interview:</span> Embassy/Consulate will assess eligibility.
                </li>
              </ul>
            </div>
            <motion.div
              className="md:w-1/2 order-1 md:order-2"
              variants={imageVariants}
              initial="rest"
              whileHover="hover"
            >
              <img
                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/green-card-passport-assortment-top-view.jpg?updatedAt=1757400960151"
                alt="Passport and Green Card"
                className="w-full h-64 sm:h-80 object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </InViewSection>

        {/* Tourist Visa Section */}
        <InViewSection>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                USA Tourist Visa - B-2 Visa
              </h2>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <span className="font-medium">Purpose of Visit:</span> 
                  B-1: Business meetings, conferences. 
                  B-2: Tourism, vacation, medical treatment, or family visits.
                </li>
                <li>
                  <span className="font-medium">Financial Proof:</span> Show resources to cover trip costs.
                </li>
                <li>
                  <span className="font-medium">Proof of Intent to Return:</span> Show ties (job, property, family).
                </li>
                <li>
                  <span className="font-medium">No Immigrant Intent:</span> Prove temporary stay.
                </li>
                <li>
                  <span className="font-medium">No Criminal Record:</span> No disqualifying offenses.
                </li>
                <li>
                  <span className="font-medium">Consular Interview:</span> Embassy/Consulate interview required.
                </li>
                <li>
                  <span className="font-medium">Valid Passport:</span> Must be active for at least 5–6 months.
                </li>
              </ul>
            </div>
            <motion.div
              className="md:w-1/2 order-1 md:order-2"
              variants={imageVariants}
              initial="rest"
              whileHover="hover"
            >
              <img
                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/portrait-confident-woman-holding-american-flag.jpg?updatedAt=1757400958078"
                alt="Tourist in USA"
                className="w-full h-64 sm:h-80 object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </InViewSection>

        {/* Contact Section */}
        <InViewSection>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Get Started with Settle Nation
          </h2>
          <p>
            Begin your USA journey with <span className="font-semibold">Settle Nation</span>’s expert support. 
            Contact us today:
            <br />
            <span className="font-medium">Email:</span> myvisapoint@gmail.com
            <br />
            <span className="font-medium">Phone:</span> +91 9876543210
            <br />
            <span className="font-medium">Address:</span> SCO 101, Sector 22, Chandigarh
          </p>
        </InViewSection>
      </div>
    </div>
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
      className="mb-12"
    >
      {children}
    </motion.section>
  );
};

export default CountryUSA;
