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

const CountryCanada = () => {
  return (
    <div className="w-full text-gray-800">
      {/* Banner */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen mb-12">
        <motion.img
          src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/toronto-street-view.jpg?updatedAt=1757394649905"
          alt="Toronto Street View"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            CANADA
          </motion.h1>
        </div>
      </div>

      {/* Content wrapper */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="md:w-1/2 order-2 md:order-1"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-orange-600">
              Visa and Immigration Services for Canada
            </h2>
            <p className="mb-6">
              Canada is a premier destination for students, tourists, and future
              residents, offering world-class education, stunning landscapes, and
              a vibrant culture. At{" "}
              <span className="font-semibold">Settle Nation</span>, we specialize in
              streamlining your visa and immigration journey to Canada. Our expert
              team provides personalized guidance for study visas, tourist visas,
              permanent residency, and spouse open work permits, ensuring a seamless
              experience.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 order-1 md:order-2"
            variants={imageHover}
            initial="rest"
            whileHover="hover"
          >
            <img
              src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/people-celebrating-canada-day.jpg?updatedAt=1757394903222"
              alt="People Celebrating Canada Day"
              className="w-full h-64 sm:h-80 object-cover rounded-lg"
            />
          </motion.div>
        </section>

        {/* Study Visa */}
        <section className="mb-12 flex flex-col md:flex-row-reverse items-center gap-8">
          <motion.div
            className="md:w-1/2 order-2 md:order-1"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Canada Study Visa
            </h2>
            <p className="mb-4">
              Study at Canada’s top institutions with our expert assistance in
              securing a Study Visa. We guide you through every requirement to ensure
              compliance and success.
            </p>
            <h3 className="text-lg font-medium mb-2">Requirements for a Study Visa</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <span className="font-medium">Letter of Acceptance:</span> From a
                Designated Learning Institution (DLI).
              </li>
              <li>
                <span className="font-medium">Proof of Funds:</span> Tuition, living
                expenses, return travel.
              </li>
              <li>
                <span className="font-medium">Valid Passport:</span> For duration of
                study.
              </li>
              <li>
                <span className="font-medium">Letter of Explanation:</span> Study
                goals and plans.
              </li>
              <li>
                <span className="font-medium">Medical & Police Clearance:</span>{" "}
                Required sometimes.
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="md:w-1/2 order-1 md:order-2"
            variants={imageHover}
            initial="rest"
            whileHover="hover"
          >
            <img
              src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/people-celebrating-canada-day%20(1).jpg?updatedAt=1757396485656"
              alt="Toronto Skyline"
              className="w-full h-64 sm:h-80 object-cover rounded-lg"
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
              Canada Tourist Visa (TRV)
            </h2>
            <p className="mb-4">
              Discover Canada’s beauty with a Temporary Resident Visa (TRV). Settle
              Nation simplifies the process, making your travel plans effortless.
            </p>
            <h3 className="text-lg font-medium mb-2">Requirements for a Tourist Visa</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <span className="font-medium">Valid Passport:</span> For your stay.
              </li>
              <li>
                <span className="font-medium">Proof of Funds:</span> To support your
                visit.
              </li>
              <li>
                <span className="font-medium">Purpose of Visit:</span> Travel plan /
                documents.
              </li>
              <li>
                <span className="font-medium">Ties to Home Country:</span> Job,
                property, family evidence.
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="md:w-1/2 order-1 md:order-2"
            variants={imageHover}
            initial="rest"
            whileHover="hover"
          >
            <img
              src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/toronto-street-view.jpg?updatedAt=1757394649905"
              alt="Toronto Street View"
              className="w-full h-64 sm:h-80 object-cover rounded-lg"
            />
          </motion.div>
        </section>

        {/* Permanent Residency */}
        <section className="mb-12 flex flex-col md:flex-row-reverse items-center gap-8">
          <motion.div
            className="md:w-1/2 order-2 md:order-1"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Canada Permanent Residency
            </h2>
            <p className="mb-4">
              Build your future in Canada with our expert guidance on permanent
              residency (PR) pathways, tailored to your unique goals.
            </p>
            <h3 className="text-lg font-medium mb-2">Pathways to PR</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <span className="font-medium">Express Entry:</span> Points-based
                skilled worker system.
              </li>
              <li>
                <span className="font-medium">Provincial Nominee Programs:</span>{" "}
                Province-specific.
              </li>
              <li>
                <span className="font-medium">Family Sponsorship:</span> For family
                members.
              </li>
              <li>
                <span className="font-medium">Business Immigration:</span>{" "}
                Entrepreneurs & investors.
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="md:w-1/2 order-1 md:order-2"
            variants={imageHover}
            initial="rest"
            whileHover="hover"
          >
            <img
              src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/canada-day-celebration-with-maple-leaf-symbol.jpg?updatedAt=1757396482000"
              alt="Toronto Skyline"
              className="w-full h-64 sm:h-80 object-cover rounded-lg"
            />
          </motion.div>
        </section>

        {/* Spouse Open Work Permit */}
        <section className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="md:w-1/2 order-2 md:order-1"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Canada Spouse Open Work Permit (SOWP)
            </h2>
            <p className="mb-4">
              Reunite with your loved one in Canada with our end-to-end support for
              the Spouse Open Work Permit, designed for a smooth process.
            </p>
            <h3 className="text-lg font-medium mb-2">Our Services</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Eligibility assessments.</li>
              <li>Application preparation and submission.</li>
              <li>Communication with immigration authorities.</li>
              <li>Interview preparation and support.</li>
              <li>Post-approval guidance.</li>
            </ul>
          </motion.div>
          <motion.div
            className="md:w-1/2 order-1 md:order-2"
            variants={imageHover}
            initial="rest"
            whileHover="hover"
          >
            <img
              src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/people-celebrating-canada-day.jpg?updatedAt=1757394903222"
              alt="People Celebrating Canada Day"
              className="w-full h-64 sm:h-80 object-cover rounded-lg"
            />
          </motion.div>
        </section>

        {/* Contact Section */}
        <section>
          <motion.h2
            className="text-xl sm:text-2xl font-semibold mb-4"
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
            Start your Canadian journey with Settle Nation’s expert support.
            Contact us today for a consultation:
            <br />
            <span className="font-medium">Email:</span>{" "}
            settlenation.in@gmail.com
            <br />
            <span className="font-medium">Phone:</span> +91 7347045972
            <br />
            <span className="font-medium">Address:</span> SCO 363, Top Floor,
            Sector 44-D, Chandigarh
          </motion.p>
        </section>
      </div>
    </div>
  );
};

export default CountryCanada;
