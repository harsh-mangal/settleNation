import React from "react";
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

const PrivacyPolicy = () => {
  return (
    <div className="w-full h-full dark:bg-gray-900 text-gray-800 dark:text-gray-200">
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
    >

      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-6 text-orange-600 dark:text-orange-400"
        variants={itemVariants}
      >
        Privacy Policy
      </motion.h1>
      <motion.p
        className="mb-8 text-sm text-gray-500 dark:text-gray-400"
        variants={itemVariants}
      >
        Effective Date: {new Date().toLocaleDateString()}
      </motion.p>

      {/* Introduction */}
      <motion.p className="mb-6" variants={itemVariants}>
        At <span className="font-semibold text-gray-900 dark:text-white">Settle Nation</span>, a visa and
        immigration services provider, your privacy is our top priority. This
        Privacy Policy outlines how we collect, use, disclose, and safeguard your
        personal information when you engage with our services, including visa
        application assistance, immigration consultations, and related support.
      </motion.p>

      {/* Sections */}
      <div className="space-y-8">
        <motion.section variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            To provide our visa and immigration services, we collect the following
            types of information:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-medium text-gray-900 dark:text-white">Personal Information:</span>{" "}
              Name, date of birth, nationality, passport details, contact information
              (email address, phone number, mailing address), and other details
              provided during visa applications or consultations.
            </li>
            <li>
              <span className="font-medium text-gray-900 dark:text-white">Immigration-Related Data:</span>{" "}
              Employment history, educational qualifications, financial records,
              travel history, and other documents required for visa processing.
            </li>
            <li>
              <span className="font-medium text-gray-900 dark:text-white">Non-Personal Information:</span>{" "}
              Browser type, IP address, device information, and usage data for
              analytics to improve our platform.
            </li>
          </ul>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">
            We use your information to provide, manage, and enhance our visa and
            immigration services, including:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Processing and submitting visa applications on your behalf.</li>
            <li>
              Communicating with immigration authorities and third-party service
              providers to facilitate your application.
            </li>
            <li>
              Providing personalized consultation and updates on visa processes.
            </li>
            <li>Responding to your inquiries and support requests.</li>
            <li>Sending important updates, such as visa status notifications.</li>
            <li>Improving our services through analytics and user feedback.</li>
            <li>Ensuring compliance with applicable laws and regulations.</li>
          </ul>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            3. Sharing Your Information
          </h2>
          <p>
            Settle Nation does not sell, trade, or rent your personal information.
            We may share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              With immigration authorities, embassies, or consulates as required
              for visa processing.
            </li>
            <li>
              With trusted third-party service providers (e.g., document
              verification services, translation providers) who assist in
              delivering our services, subject to strict confidentiality
              agreements.
            </li>
            <li>
              When required by law, such as in response to a court order or legal
              request.
            </li>
            <li>
              With your consent, for example, when sharing information with a
              legal representative or sponsor.
            </li>
          </ul>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            4. International Data Transfers
          </h2>
          <p>
            As a visa services provider, we may transfer your personal information
            to immigration authorities or partners located in other countries. We
            ensure that such transfers comply with applicable data protection laws
            and that appropriate safeguards, such as standard contractual clauses,
            are in place to protect your data.
          </p>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            5. Data Security
          </h2>
          <p>
            We employ industry-standard security measures, including encryption
            and secure servers, to protect your sensitive information, such as
            passport details and financial records. However, no method of
            transmission over the internet or electronic storage is entirely
            secure, and we cannot guarantee absolute security.
          </p>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            6. Data Retention
          </h2>
          <p>
            We retain your personal information only for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, comply with legal
            obligations, or resolve disputes. Immigration-related data may be
            retained for the duration required by relevant immigration authorities
            or as needed to provide ongoing support.
          </p>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            7. Your Rights
          </h2>
          <p>
            Depending on your jurisdiction, you may have the following rights
            regarding your personal data:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Access and obtain a copy of your personal information.</li>
            <li>Request correction of inaccurate or incomplete data.</li>
            <li>Request deletion of your data, subject to legal requirements.</li>
            <li>Object to or restrict the processing of your data.</li>
            <li>
              Opt out of receiving promotional communications at any time by
              clicking the unsubscribe link in our emails.
            </li>
            <li>
              Request data portability to transfer your data to another provider.
            </li>
          </ul>
          <p className="mt-2">
            To exercise these rights, please contact us at the details provided
            below.
          </p>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            8. Compliance with Immigration Regulations
          </h2>
          <p>
            Settle Nation complies with all applicable immigration laws and
            regulations in the jurisdictions where we operate. We ensure that your
            personal and immigration-related data is handled in accordance with
            these legal requirements to facilitate lawful visa processing.
          </p>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            9. Cookies and Tracking Technologies
          </h2>
          <p>
            Our website uses cookies and similar technologies to enhance user
            experience, analyze usage, and improve our services. You can manage
            your cookie preferences through your browser settings or by contacting
            us.
          </p>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            10. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in
            our practices or legal requirements. Updates will be posted on this
            page with a revised effective date. We encourage you to review this
            policy regularly.
          </p>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            11. Contact Us
          </h2>
          <p>
            If you have questions or concerns about this Privacy Policy or how we
            handle your data, please contact us at:
            <br />
            <span className="font-medium text-gray-900 dark:text-white">Email:</span>{" "}
            <a
              href="mailto:settlenation.in@gmail.com"
              className="text-orange-600 dark:text-orange-400 hover:underline"
            >
              settlenation.in@gmail.com
            </a>
            <br />
            <span className="font-medium text-gray-900 dark:text-white">Phone:</span>{" "}
            <a
              href="tel:+917347045972"
              className="text-orange-600 dark:text-orange-400 hover:underline"
            >
              +91 7347045972
            </a>
            <br />
            <span className="font-medium text-gray-900 dark:text-white">Address:</span>{" "}
            SCO 363, top floor, Sector 44-D, Chandigarh
          </p>
        </motion.section>
      </div>
    </motion.div>
    </div>
  );
};

export default PrivacyPolicy;