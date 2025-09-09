import React from "react";

const TermsOfService = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-800">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-orange-600">
                Terms of Service
            </h1>
            <p className="mb-8 text-sm text-gray-500">
                Effective Date: {new Date().toLocaleDateString()}
            </p>

            {/* Introduction */}
            <p className="mb-6">
                Welcome to <span className="font-semibold">Settle Nation</span>, a provider
                of visa and immigration services. These Terms of Service ("Terms") govern
                your use of our website, services, and related offerings, including visa
                application assistance, immigration consultations, and support services
                (collectively, the "Services"). By accessing or using our Services, you
                agree to be bound by these Terms. If you do not agree, please do not use
                our Services.
            </p>

            {/* Sections */}
            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-semibold mb-3">1. Eligibility</h2>
                    <p>
                        You must be at least 18 years old and have the legal capacity to enter
                        into contracts to use our Services. By using our Services, you represent
                        that you meet these requirements and that all information you provide
                        is accurate and complete.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">2. Services Provided</h2>
                    <p className="mb-4">
                        Settle Nation offers visa and immigration-related services, including
                        but not limited to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Assistance with visa applications and documentation.</li>
                        <li>Consultations for immigration processes and requirements.</li>
                        <li>Liaison with immigration authorities on your behalf.</li>
                        <li>Support for document verification and translation services.</li>
                    </ul>
                    <p className="mt-4">
                        While we strive to provide accurate and timely assistance, we do not
                        guarantee visa approval, as decisions are made by relevant immigration
                        authorities.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">3. User Responsibilities</h2>
                    <p className="mb-4">
                        As a user of our Services, you agree to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            Provide accurate, complete, and up-to-date information, including
                            personal details, passport information, and supporting documents.
                        </li>
                        <li>
                            Comply with all applicable laws, regulations, and immigration
                            requirements.
                        </li>
                        <li>
                            Pay all applicable fees for our Services in a timely manner.
                        </li>
                        <li>
                            Use our Services only for lawful purposes and not engage in any
                            fraudulent or misleading activities.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">4. Fees and Payments</h2>
                    <p>
                        Our Services are subject to fees as outlined during the booking or
                        consultation process. All fees are non-refundable unless otherwise
                        stated. You are responsible for providing valid payment information
                        and agree to pay all applicable taxes and charges. Settle Nation
                        reserves the right to suspend or terminate Services for non-payment.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">5. No Guarantee of Visa Approval</h2>
                    <p>
                        Settle Nation provides assistance and guidance for visa applications
                        but does not control or influence decisions made by immigration
                        authorities. We are not liable for any delays, rejections, or other
                        outcomes of your visa application.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">6. Intellectual Property</h2>
                    <p>
                        All content on our website and Services, including text, graphics,
                        logos, and software, is the property of Settle Nation or its licensors
                        and is protected by copyright and other intellectual property laws.
                        You may not reproduce, distribute, or create derivative works without
                        our prior written consent.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
                    <p>
                        To the fullest extent permitted by law, Settle Nation, its affiliates,
                        and their respective officers, directors, employees, or agents shall
                        not be liable for any indirect, incidental, special, consequential, or
                        punitive damages arising out of or related to your use of our Services.
                        Our total liability shall not exceed the amount paid by you for the
                        Services.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">8. Termination</h2>
                    <p>
                        We reserve the right to suspend or terminate your access to our Services
                        at our discretion, including for violation of these Terms, non-payment,
                        or suspected fraudulent activity. You may terminate your use of our
                        Services at any time, subject to any outstanding obligations, such as
                        payment of fees.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">9. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and construed in accordance with the
                        laws of the United States. Any disputes arising under these Terms shall
                        be subject to the exclusive jurisdiction of the courts located in Global
                        City, USA.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">10. Changes to These Terms</h2>
                    <p>
                        We may update these Terms from time to time to reflect changes in our
                        practices or legal requirements. Updates will be posted on this page
                        with a revised effective date. Your continued use of our Services
                        after such changes constitutes your acceptance of the updated Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">11. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms or our Services, please
                        contact us at:
                        <br />
                        <span className="font-medium">Email:</span>{" "}
                        settlenation.in@gmail.com
                        <br />
                        <span className="font-medium">Phone:</span> +91 7347045972
                        <br />
                        <span className="font-medium">Address:</span> SCO 363, top floor
                        Sector 44-D
                        Chandigarh
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;