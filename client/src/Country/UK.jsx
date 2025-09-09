import React from "react";
import { motion, useInView } from "framer-motion";

const imageVariants = {
  rest: { scale: 1, transition: { duration: 0.3 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const CountryUK = () => {
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
          src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/big-ben-clock.jpg?updatedAt=1757398999983"
          alt="Big Ben Clock"
          className="absolute inset-0 w-full h-full object-cover"
          variants={imageVariants}
          initial="rest"
          whileHover="hover"
          onError={(e) => console.error("Image failed to load:", e)}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg text-center">
            UNITED KINGDOM
          </h1>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <InViewSection>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-orange-600">
                Study and Travel in the UK
              </h2>
              <p className="mb-6">
                The United Kingdom (UK) is a unique country in Northern Europe,
                made up of England, Scotland, Wales, and Northern Ireland. Known
                for its rich history, diverse culture, and strong education
                system, the UK is a top destination for students and travelers.
                At <span className="font-semibold">Settle Nation</span>, we help
                you explore your education and travel options, providing expert
                guidance for study visas, tourist visas, and spouse visas to
                ensure a seamless experience.
              </p>
            </div>
            <motion.div
              className="md:w-1/2 order-1 md:order-2"
              variants={imageVariants}
              initial="rest"
              whileHover="hover"
            >
              <img
                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/big-ben-westminster-bridge-sunset-london-uk.jpg?updatedAt=1757398999394"
                alt="Big Ben and Westminster Bridge"
                className="w-full h-64 sm:h-80 object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </InViewSection>

        {/* Study in UK */}
        <InViewSection>
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Why Study in the UK?
              </h2>
              <p className="mb-4">
                Studying in the UK means gaining valuable skills in an engaging
                and practical way. The focus is on real-world applications,
                preparing you for your future career. UK degrees are highly
                respected globally, making it easier for you to find good job
                opportunities after graduation. Plus, you’ll enjoy a rich
                cultural experience that helps you grow as an individual.
              </p>
              <h3 className="text-lg font-medium mb-2">Work While Studying</h3>
              <p className="mb-4">
                As an international student, you can work up to 20 hours a week
                during the academic term and full-time during holiday breaks.
                This helps you gain work experience and manage your living costs
                more easily.
              </p>
            </div>
            <motion.div
              className="md:w-1/2 order-1 md:order-2"
              variants={imageVariants}
              initial="rest"
              whileHover="hover"
            >
              <img
                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/view-london-city-sunset.jpg?updatedAt=1757398998731"
                alt="London City Sunset"
                className="w-full h-64 sm:h-80 object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </InViewSection>

        {/* UK Tourist Visa */}
        <InViewSection>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                UK Tourist Visa (Visitor Visa)
              </h2>
              <p className="mb-4">
                Planning a trip to the UK? Depending on your nationality, you
                might need a UK tourist visa. This visa allows you to visit the
                UK for leisure, tourism, or to see friends and family.
              </p>
              <h3 className="text-lg font-medium mb-2">
                Who Needs a UK Tourist Visa?
              </h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <span className="font-medium">Non-Visa Nationals:</span> Some
                  citizens don’t need a visa but must still meet certain entry
                  requirements.
                </li>
                <li>
                  <span className="font-medium">Visa Nationals:</span> Citizens
                  from countries that require a visa must apply for a UK tourist
                  visa before traveling.
                </li>
              </ul>
              <h3 className="text-lg font-medium mb-2">Visa Requirements</h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <span className="font-medium">Valid Passport:</span> Your
                  passport should be valid for your entire stay in the UK.
                </li>
                <li>
                  <span className="font-medium">Financial Proof:</span> Show
                  that you can support yourself financially during your trip.
                </li>
                <li>
                  <span className="font-medium">Accommodation Information:</span>{" "}
                  Submit verification of your intended place of residence in the
                  UK.
                </li>
                <li>
                  <span className="font-medium">Travel Itinerary:</span> Outline
                  your travel plans and how long you plan to stay.
                </li>
                <li>
                  <span className="font-medium">Purpose of Visit:</span> Clearly
                  explain that you are visiting for tourism or to see
                  family/friends.
                </li>
                <li>
                  <span className="font-medium">Health Insurance:</span> It’s a
                  good idea to have travel health insurance for your trip.
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
                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pexels-raybilcliff-1706623.jpg?updatedAt=1757398990660"
                alt="UK Cityscape"
                className="w-full h-64 sm:h-80 object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </InViewSection>

        {/* UK Spouse Visa */}
        <InViewSection>
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                UK Spouse Visa
              </h2>
              <p className="mb-4">
                Reunite with your loved one in the UK with our end-to-end
                support for the Spouse Visa, designed for a smooth process.
              </p>
              <h3 className="text-lg font-medium mb-2">
                Who Can Apply for a UK Spouse Visa?
              </h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Both partners must be over 18.</li>
                <li>You need to have met face-to-face and be legally married.</li>
                <li>
                  Your sponsoring partner should have an income of at least
                  £18,600 per year or enough savings.
                </li>
                <li>
                  You need to have suitable accommodation for both partners and
                  any dependents.
                </li>
              </ul>
              <h3 className="text-lg font-medium mb-2">Application Process</h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <span className="font-medium">Check Eligibility:</span> Visit
                  the UK government’s official website to see if you qualify.
                </li>
                <li>
                  <span className="font-medium">Complete Your Application:</span>{" "}
                  Fill out the online application form honestly and accurately.
                </li>
                <li>
                  <span className="font-medium">Book Your Appointment:</span>{" "}
                  Schedule a visit at your nearest visa application center to
                  submit your documents and biometrics.
                </li>
                <li>
                  <span className="font-medium">Gather Your Documents:</span>{" "}
                  Prepare necessary documents like your passport, photographs,
                  proof of funds, and accommodation details.
                </li>
                <li>
                  <span className="font-medium">Pay Fees:</span> Pay the visa
                  application fee and any additional service charges.
                </li>
                <li>
                  <span className="font-medium">Attend Your Appointment:</span>{" "}
                  Go to your appointment for biometric data collection and
                  document submission.
                </li>
                <li>
                  <span className="font-medium">Wait for Processing:</span> Once
                  you’ve submitted your application, you’ll need to wait for it
                  to be reviewed and processed.
                </li>
                <li>
                  <span className="font-medium">Get Your Decision:</span> You
                  will be informed once a decision has been made on your
                  application.
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
                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/cityscape-view-night.jpg?updatedAt=1757397771154"
                alt="Cityscape View at Night"
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
            Start your UK journey with Settle Nation’s expert support. Contact
            us today for a consultation:
            <br />
            <span className="font-medium">Email:</span> settlenation.in@gmail.com
            <br />
            <span className="font-medium">Phone:</span> +91 7347045972
            <br />
            <span className="font-medium">Address:</span> SCO 363, Top Floor,
            Sector 44-D, Chandigarh
          </p>
        </InViewSection>
      </div>
    </div>
  );
};

// Custom component to handle in-view animations
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

export default CountryUK;
