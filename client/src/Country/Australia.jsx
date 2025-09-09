import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageHover = {
  rest: { scale: 1, transition: { duration: 0.3 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const CountryAustralia = () => {
  return (
    <div className="w-full text-gray-800">
      {/* Banner */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen mb-12">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/cityscape-view-night.jpg?updatedAt=1757397771154"
            alt="Australia Cityscape"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            AUSTRALIA
          </motion.h1>
        </div>
      </div>

      {/* Wrapper */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <section className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="md:w-1/2 order-2 md:order-1"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-orange-600">
              Study and Travel in Australia
            </h2>
            <p className="mb-6">
              Explore your education and travel options with us! Australia stands
              out as a top choice for both education and travel, renowned for its
              prestigious universities, welcoming atmosphere, and breathtaking
              natural landscapes. At{" "}
              <span className="font-semibold">MyVisa Point</span>, we specialize
              in helping individuals navigate the visa process for both Study
              and Tourist Visas to Australia. Whether you're aiming to enhance
              your academic credentials or explore the beauty and culture of
              Australia, our dedicated team provides expert assistance to ensure
              your application is seamless and successful.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 order-1 md:order-2 overflow-hidden rounded-lg"
            variants={imageHover}
            initial="rest"
            whileHover="hover"
          >
            <img
              src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pexels-patrick-995764.jpg?updatedAt=1757397754117"
              alt="Australia Landscape"
              className="w-full h-64 sm:h-80 object-cover"
            />
          </motion.div>
        </section>

        {/* Qualifications Offered */}
        <section className="mb-12 flex flex-col md:flex-row-reverse items-center gap-8">
          <motion.div
            className="md:w-1/2 order-2 md:order-1"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Qualifications Offered
            </h2>
            <p className="mb-4">
              Australia has a unified system of qualifications, known as the{" "}
              <span className="font-medium">
                Australian Qualification Framework (AQF)
              </span>
              . The AQF ensures quality and allows students to move from one
              level to another easily.
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <span className="font-medium">
                  VET Education or Diploma Course:
                </span>{" "}
                Diploma, Associate Degree, Advanced Diploma
              </li>
              <li>
                <span className="font-medium">Undergraduate:</span> Bachelor
                Degree, Bachelor Degree (Honors)
              </li>
              <li>
                <span className="font-medium">Post-Graduate Courses:</span>{" "}
                Master’s Degree (extended, coursework, research), Doctorate
              </li>
            </ul>
            <h3 className="text-lg font-medium mb-2">
              Vocational and Technical Schools
            </h3>
            <p>
              Australia offers Vocational and Technical studies through TAFE and
              VET institutes, providing short courses, certificates, diplomas,
              and advanced diplomas to prepare students for the workforce.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 order-1 md:order-2 overflow-hidden rounded-lg"
            variants={imageHover}
            initial="rest"
            whileHover="hover"
          >
            <img
              src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/aus1.png?updatedAt=1757397655506"
              alt="Australian Education"
              className="w-full h-64 sm:h-80 object-cover"
            />
          </motion.div>
        </section>

        {/* Tourist Visa */}
        <section className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="md:w-1/2 order-2 md:order-1"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Australia Tourist Visa - Visitor Visa (Subclass 600)
            </h2>
            <p className="mb-4">
              Planning a holiday or visiting family in Australia? You may need a
              tourist visa, officially known as a Visitor Visa (Subclass 600).
            </p>

            <h3 className="text-lg font-medium mb-2">
              Who Needs an Australian Tourist Visa?
            </h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>ETA Eligible Passport Holders</li>
              <li>Non-ETA Eligible Passport Holders</li>
            </ul>

            <h3 className="text-lg font-medium mb-2">Application Process</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Check Eligibility</li>
              <li>Apply Online</li>
              <li>Pay Visa Fee</li>
              <li>Submit Documents</li>
              <li>Provide Biometrics (if applicable)</li>
            </ul>

            <h3 className="text-lg font-medium mb-2">Visa Requirements</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Valid passport</li>
              <li>Proof of funds</li>
              <li>Travel itinerary</li>
              <li>Health insurance</li>
              <li>Meet character and health requirements</li>
            </ul>
          </motion.div>
          <motion.div
            className="md:w-1/2 order-1 md:order-2 overflow-hidden rounded-lg"
            variants={imageHover}
            initial="rest"
            whileHover="hover"
          >
            <img
              src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/aus.webp?updatedAt=1757397650074"
              alt="Australia Tourist"
              className="w-full h-64 sm:h-80 object-cover"
            />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default CountryAustralia;
