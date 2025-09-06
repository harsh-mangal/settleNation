import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, FileText, Users, ClipboardCheck, Globe, Award, Star, ArrowRight, CheckCircle, Phone, Mail, MapPin } from "lucide-react";

const services = [
    {
        title: "Determine Eligibility",
        description:
            "Our counselors verify your background, travel purpose, and qualifications to ensure you meet visa requirements. " +
            "This ensures you save time and effort by focusing only on the visas you are eligible for.",
        icon: Users,
        image: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/ima.png?updatedAt=1757152349351",
        features: ["Background Verification", "Document Assessment", "Eligibility Analysis"]
    },
    {
        title: "Document Review",
        description:
            "We meticulously review all documents to ensure they meet the standards set by relevant authorities. " +
            "Proper documentation increases your chances of visa approval and avoids unnecessary delays.",
        icon: FileText,
        image: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/visa-application-form-laptop.jpg?updatedAt=1757152348964",
        features: ["Document Verification", "Quality Check", "Compliance Review"]
    },
    {
        title: "Submission Guidance",
        description:
            "Detailed instructions for submitting your visa application, whether online or in-person. " +
            "Our guidance ensures no step is missed, helping your application process be smooth and error-free.",
        icon: ClipboardCheck,
        image: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/imag(1).png?updatedAt=1757152348817",
        features: ["Step-by-step Guidance", "Timeline Management", "Follow-up Support"]
    },
];

const stats = [
    { number: "5000+", label: "Successful Applications", icon: Award },
    { number: "98%", label: "Success Rate", icon: CheckCircle },
    { number: "50+", label: "Countries Covered", icon: Globe },
    { number: "24/7", label: "Expert Support", icon: Users }
];

// Enhanced Typewriter effect
const TypewriterText = ({ text, className = "" }) => {
    return (
        <motion.span
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`overflow-hidden whitespace-nowrap inline-block ${className}`}
        >
            {text}
        </motion.span>
    );
};

// Enhanced Staggered text animation
const StaggeredText = ({ text, className = "" }) => {
    const words = text.split(" ");
    return (
        <span className={`inline-flex flex-wrap ${className}`}>
            {words.map((word, wordIndex) => (
                <motion.span
                    key={wordIndex}
                    className="inline-flex mr-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: wordIndex * 0.1 }}
                >
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            initial={{ opacity: 0, rotateX: 90 }}
                            animate={{ opacity: 1, rotateX: 0 }}
                            transition={{ duration: 0.4, delay: (wordIndex * 0.1) + (charIndex * 0.02) }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.span>
            ))}
        </span>
    );
};

// Enhanced Image Component with better hover effects
const EnhancedImage = ({ src, alt, className = "", children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className={`relative overflow-hidden ${className}`}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
        >
            <motion.img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-all duration-500"
                animate={{
                    scale: isHovered ? 1.1 : 1,
                    brightness: isHovered ? 1.1 : 1,
                }}
            />

            {/* Overlay effects */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            {/* Shimmer effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={{ translateX: isHovered ? "200%" : "-100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            {/* Floating particles */}
            <AnimatePresence>
                {isHovered && (
                    <>
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-orange-400 rounded-full"
                                style={{
                                    left: `${20 + (i * 15)}%`,
                                    top: `${30 + (i * 10)}%`,
                                }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: [0, 1, 0],
                                    opacity: [0, 1, 0],
                                    y: [-20, -40, -60]
                                }}
                                transition={{
                                    duration: 2,
                                    delay: i * 0.1,
                                    repeat: Infinity
                                }}
                            />
                        ))}
                    </>
                )}
            </AnimatePresence>

            {children}
        </motion.div>
    );
};

const VisaCounseling = () => {
    const [activeService, setActiveService] = useState(0);

    return (
        <div className="w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            {/* Enhanced Hero Banner */}
            <div className="relative w-full h-[90vh] text-white overflow-hidden">
                <EnhancedImage
                    src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/imge.png?updatedAt=1757152349219"
                    alt="Visa Counseling Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>
                </EnhancedImage>

                {/* Centered Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10 max-w-6xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-2xl"
                    >
                        Visa Counseling with
                        <span className="block bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
                            <TypewriterText text="Settle Nation" className="text-orange-600" />
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="mt-6 text-lg sm:text-xl text-gray-200 max-w-3xl drop-shadow-lg"
                    >
                        Transform your visa journey into a smooth, stress-free, and successful experience with our expert guidance.
                    </motion.p>
                </div>
            </div>


            {/* Enhanced What is Visa Counseling Section */}
            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute -inset-4 bg-gradient-to-br from-orange-100/50 to-orange-50/30 rounded-3xl blur-sm"></div>
                        <div className="relative bg-gradient-to-br from-gray-50/90 to-white/80 p-8 rounded-3xl shadow-xl border border-white/60 backdrop-blur-sm">
                            <motion.div
                                className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-100 to-orange-50 rounded-full px-6 py-3 mb-6 shadow-lg"
                                whileHover={{ scale: 1.05, rotate: 1 }}
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Star className="w-6 h-6 text-orange-600" />
                                </motion.div>
                                <span className="text-orange-700 font-bold text-lg">Why Choose Us?</span>
                            </motion.div>

                            <motion.h2
                                className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                What is
                                <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-red-500 bg-clip-text text-transparent">
                                    <TypewriterText text="Visa Counseling?" />
                                </span>
                            </motion.h2>

                            <motion.p
                                className="text-xl text-gray-700 leading-relaxed mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                At <span className="font-black text-orange-600 text-2xl">Settle Nation</span>, we transform your journey abroad into a seamless experience with expert visa counseling tailored to your unique needs.
                            </motion.p>

                            <motion.p
                                className="text-lg text-gray-600 leading-relaxed mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <StaggeredText text="Our experienced team combines professionalism with personalized care to ensure your visa process is smooth and successful." />
                            </motion.p>

                            {/* Feature list */}
                            <div className="space-y-4">
                                {["Personalized Consultation", "Expert Documentation", "24/7 Support"].map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex items-center space-x-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-gray-700 font-semibold">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="absolute -inset-4 bg-gradient-to-br from-orange-200/30 to-orange-100/20 rounded-3xl blur-lg"></div>
                        <EnhancedImage
                            src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/visa-application-form-laptop.jpg?updatedAt=1757152348964"
                            alt="Visa Counseling"
                            className="relative rounded-3xl shadow-2xl border-4 border-white/80 overflow-hidden"
                        >
                            <motion.div
                                className="absolute top-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl"
                                whileHover={{ rotate: 360, scale: 1.2 }}
                                transition={{ duration: 0.5 }}
                            >
                                <GraduationCap className="w-8 h-8 text-orange-600" />
                            </motion.div>

                            {/* Success badge */}
                            <motion.div
                                className="absolute bottom-6 left-6 bg-gradient-to-r from-green-500 to-green-400 text-white px-4 py-2 rounded-xl font-bold shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                98% Success Rate
                            </motion.div>
                        </EnhancedImage>
                    </motion.div>
                </div>
            </div>

            {/* Enhanced Services Section */}
            <div className="bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50 py-24 px-4 sm:px-6 relative overflow-hidden">
                {/* Background patterns */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-32 h-32 bg-orange-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-400 rounded-full blur-2xl"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
                            Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Services</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            <StaggeredText text="Comprehensive visa counseling services designed to make your application process seamless and successful." />
                        </p>
                    </motion.div>

                    <div className="space-y-24">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.2 }}
                                onHoverStart={() => setActiveService(idx)}
                            >
                                {/* Enhanced Image */}
                                <motion.div
                                    className="relative w-full lg:w-1/2"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <div className="absolute -inset-6 bg-gradient-to-br from-orange-200/40 to-orange-100/20 rounded-3xl blur-2xl"></div>
                                    <EnhancedImage
                                        src={service.image}
                                        alt={service.title}
                                        className="relative w-full h-80 lg:h-96 rounded-3xl border-4 border-white/80 shadow-2xl overflow-hidden"
                                    >
                                        <motion.div
                                            className="absolute top-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl"
                                            whileHover={{ rotate: 360, scale: 1.2 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <service.icon className="w-8 h-8 text-orange-600" />
                                        </motion.div>

                                        {/* Service number */}
                                        <motion.div
                                            className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg"
                                            animate={{
                                                scale: activeService === idx ? [1, 1.2, 1] : 1,
                                                rotate: activeService === idx ? 360 : 0
                                            }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {idx + 1}
                                        </motion.div>
                                    </EnhancedImage>
                                </motion.div>

                                {/* Enhanced Content */}
                                <div className="lg:w-1/2 space-y-8">
                                    <div className="flex items-center space-x-4">
                                        <motion.div
                                            className="p-4 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl shadow-lg"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <service.icon className="w-8 h-8 text-white" />
                                        </motion.div>
                                        <h3 className="text-3xl sm:text-4xl font-black text-gray-900">
                                            <StaggeredText text={service.title} />
                                        </h3>
                                    </div>

                                    <motion.p
                                        className="text-lg text-gray-600 leading-relaxed"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                    >
                                        {service.description}
                                    </motion.p>

                                    {/* Feature highlights */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {service.features.map((feature, featureIdx) => (
                                            <motion.div
                                                key={featureIdx}
                                                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-orange-100 shadow-md"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.3 + (featureIdx * 0.1) }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    backgroundColor: "rgba(255, 165, 0, 0.1)",
                                                    borderColor: "rgba(255, 165, 0, 0.3)"
                                                }}
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <span className="text-sm font-semibold text-gray-700">{feature}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Enhanced Call to Action Section */}
            <div className="relative py-32 px-4 sm:px-6 text-center text-white overflow-hidden">
                {/* Background Image */}
                <img
                    src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/imge.png?updatedAt=1757152349219"
                    alt="Call to Action"
                    className="absolute inset-0 w-full h-full object-cover"
                />


                {/* Animated background shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-white/10"
                            style={{
                                width: `${20 + Math.random() * 80}px`,
                                height: `${20 + Math.random() * 80}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -100, 0],
                                x: [0, Math.random() * 50 - 25, 0],
                                opacity: [0.1, 0.3, 0.1],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 8 + Math.random() * 4,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                            }}
                        />
                    ))}
                </div>

                {/* Foreground Content */}
                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        className="inline-flex items-center space-x-3 bg-orange-500 backdrop-blur-lg rounded-full px-8 py-4 mb-8 border border-white/40 shadow-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ scale: 1.1, rotate: 2, boxShadow: "0 25px 50px rgba(255, 255, 255, 0.2)" }}
                    >
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                            <GraduationCap className="w-6 h-6 text-orange-200" />
                        </motion.div>
                        <span className="text-orange-100 font-bold text-lg">Start Your Success Story</span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 text-white drop-shadow-2xl leading-tight"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Ready to Begin Your
                        <span className="block bg-gradient-to-r from-white via-orange-200 to-yellow-200 bg-clip-text text-transparent">
                            <TypewriterText text="Dream Journey?" className="text-orange-600" />
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-xl sm:text-2xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <StaggeredText text="Take the first confident step towards your international dreams with Settle Nation's expert guidance and proven success record." />
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.button
                            className="group bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white px-12 py-6 rounded-2xl shadow-2xl font-black text-xl flex items-center space-x-3 relative overflow-hidden border-2 border-transparent"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 30px 60px rgba(255, 165, 0, 0.7)",
                                borderColor: "rgba(255, 255, 255, 0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Phone className="w-6 h-6 relative z-10 group-hover:animate-bounce" />
                            <span className="relative z-10">Contact Us Now</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/40 to-yellow-400/0"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.6 }}
                            />
                        </motion.button>

                        <motion.button
                            className="group border-3 border-white text-white hover:text-orange-200 px-12 py-6 rounded-2xl font-black text-xl flex items-center space-x-3 bg-white/10 backdrop-blur-lg shadow-2xl relative overflow-hidden"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255, 255, 255, 0.2)",
                                borderColor: "rgba(255, 165, 0, 0.6)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                            <span className="relative z-10">Free Consultation</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/20 to-orange-400/0"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.8 }}
                            />
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        {[
                            { icon: Phone, title: "Call Us", info: "+1 (555) 123-4567", color: "from-green-500 to-green-400" },
                            { icon: Mail, title: "Email Us", info: "info@myvisapoint.com", color: "from-blue-500 to-blue-400" },
                            { icon: MapPin, title: "Visit Us", info: "123 Visa Street, City", color: "from-purple-500 to-purple-400" }
                        ].map((contact, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl text-center"
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(255, 255, 255, 0.25)",
                                    borderColor: "rgba(255, 165, 0, 0.5)"
                                }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                            >
                                <motion.div
                                    className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <contact.icon className="w-8 h-8 text-white" />
                                </motion.div>
                                <h3 className="text-lg font-bold text-black mb-2">{contact.title}</h3>
                                <p className="text-black font-medium">{contact.info}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-80"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <div className="flex items-center space-x-2">
                            <Award className="w-6 h-6 text-yellow-300" />
                            <span className="text-white font-semibold">Certified Consultants</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-6 h-6 text-green-300" />
                            <span className="text-white font-semibold">Government Approved</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Globe className="w-6 h-6 text-blue-300" />
                            <span className="text-white font-semibold">Global Network</span>
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    );
};

export default VisaCounseling