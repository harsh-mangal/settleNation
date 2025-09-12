import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    HelpCircle,
    UserCheck,
} from "lucide-react";
import axios from 'axios';

// Animation variants (unchanged)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

// Typewriter effect (unchanged)
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

// Staggered text animation (unchanged)
const StaggeredText = ({ text, className = "" }) => {
    const words = text.split(" ");
    return (
        <span className={`inline-flex flex-wrap ${className}`}>
            {words.map((word, wordIndex) => (
                <motion.span
                    key={wordIndex}
                    className="inline-flex mr-1"
                    initial={{ opacity: 0, y: 20, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: wordIndex * 0.1,
                        ease: "easeOut",
                    }}
                >
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            initial={{ opacity: 0, rotateY: 90 }}
                            animate={{ opacity: 1, rotateY: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: wordIndex * 0.1 + charIndex * 0.02,
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.span>
            ))}
        </span>
    );
};

// Enhanced Image Component (updated for dark mode)
const EnhancedImage = ({ src, alt, className = "", children, overlay = true }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className={`relative overflow-hidden ${className}`}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
        >
            <motion.img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-all duration-700"
                animate={{
                    scale: isHovered ? 1.1 : 1,
                    filter: isHovered ? "brightness(1.1) saturate(1.2)" : "brightness(1) saturate(1)",
                }}
            />
            {overlay && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent dark:from-black/80 dark:via-black/50 dark:to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0.3 }}
                    transition={{ duration: 0.4 }}
                />
            )}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent -translate-x-full"
                animate={{ translateX: isHovered ? "200%" : "-100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
            <AnimatePresence>
                {isHovered && (
                    <>
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-orange-400 dark:bg-orange-300 rounded-full"
                                style={{
                                    left: `${20 + i * 10}%`,
                                    top: `${30 + i * 5}%`,
                                }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: [0, 1.5, 0],
                                    opacity: [0, 1, 0],
                                    y: [-30, -60, -90],
                                }}
                                transition={{
                                    duration: 2.5,
                                    delay: i * 0.15,
                                    repeat: Infinity,
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

// Carousel Component (updated for dark mode)
const Carousel = () => {
    const images = [
        {
            src: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/customer-service-handsome-curly-man-office-suit-with-computer-headset-smiling-with-coffee.jpg?updatedAt=1757308968635",
            alt: "Customer Service",
            caption: "We're Here to Help You",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
            <AnimatePresence>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    <EnhancedImage
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        className="w-full h-full object-cover"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60 dark:from-black/80 dark:via-black/60 dark:to-black/70"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={containerVariants}
                                className="max-w-6xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8"
                            >
                                <motion.h1
                                    variants={itemVariants}
                                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black text-white dark:text-gray-100 drop-shadow-2xl leading-tight"
                                >
                                    Contact
                                    <span className="block bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 dark:from-orange-500 dark:via-yellow-400 dark:to-orange-600 bg-clip-text text-transparent">
                                        <TypewriterText text="Settle Nation" />
                                    </span>
                                </motion.h1>
                                <motion.p
                                    variants={itemVariants}
                                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 dark:text-gray-200 leading-relaxed max-w-4xl mx-auto drop-shadow-lg"
                                >
                                    <StaggeredText text="Reach out to our expert team for personalized assistance with your visa or admission interviews." />
                                </motion.p>
                            </motion.div>
                        </div>
                    </EnhancedImage>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const res = await axios.post("https://apisettle.dodunsoftsolutions.com/api/contact", formData);
            if (res.data.success) {
                setSuccess("✅ Thank you! Your message has been sent.");
                setFormData({ name: "", email: "", message: "" });
            }
        } catch (err) {
            setError("❌ Failed to send message. Please try again.");
            console.error(err.response?.data || err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full bg-gray-50 dark:bg-gray-900 overflow-hidden">

            {/* Hero Section with Carousel */}
            <Carousel />

            {/* Contact Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideFromLeft}
                        className="space-y-6 sm:space-y-8"
                    >
                        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-900/50 dark:to-orange-800/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg">
                            <UserCheck className="

w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" />
                            <span className="text-orange-700 dark:text-orange-300 font-bold text-base sm:text-lg">Get in Touch</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight">
                            Connect with
                            <span className="block bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600 bg-clip-text text-transparent">
                                <TypewriterText text="Settle Nation" />
                            </span>
                        </h2>
                        <motion.div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            <motion.p variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                We’re here to help you succeed in your visa or admission interviews. Reach out to our <span className="font-bold text-orange-600 dark:text-orange-400">expert team</span> for personalized support.
                            </motion.p>
                            <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-3 sm:space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" />
                                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200">settlenation.in@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" />
                                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200">+91 7347045972</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" />
                                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200">SCO 363, Top Floor, Sector 44-D, Chandigarh</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideFromRight}
                        className="relative"
                    >
                        <motion.div
                            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-white/80 dark:border-gray-700/80"
                            variants={itemVariants}
                        >
                            <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6">
                                <StaggeredText text="Send Us a Message" />
                            </h3>
                            <div className="relative">
                                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-orange-200/40 to-orange-100/20 dark:from-orange-900/30 dark:to-orange-800/30 rounded-3xl blur-2xl"></div>
                                <div className="relative space-y-4 sm:space-y-6">
                                    <motion.input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Name"
                                        className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-orange-500 dark:focus:border-orange-400 focus:ring-2 focus:ring-orange-500/30 dark:focus:ring-orange-400/30 outline-none transition-all text-sm sm:text-base text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700"
                                        variants={itemVariants}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    />
                                    <motion.input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your Email"
                                        className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-orange-500 dark:focus:border-orange-400 focus:ring-2 focus:ring-orange-500/30 dark:focus:ring-orange-400/30 outline-none transition-all text-sm sm:text-base text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700"
                                        variants={itemVariants}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    />
                                    <motion.textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Your Message"
                                        rows="4"
                                        className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-orange-500 dark:focus:border-orange-400 focus:ring-2 focus:ring-orange-500/30 dark:focus:ring-orange-400/30 outline-none transition-all text-sm sm:text-base text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700"
                                        variants={itemVariants}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    />
                                    <motion.button
                                        onClick={handleSubmit}
                                        disabled={loading}
                                        className="group bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 dark:from-orange-600 dark:via-orange-700 dark:to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-2xl font-bold text-base sm:text-lg flex items-center justify-center space-x-3 relative overflow-hidden w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 25px 50px rgba(255, 165, 0, 0.6)",
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        variants={itemVariants}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <span className="relative z-10">{loading ? "Sending..." : "Submit"}</span>
                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="relative z-10"
                                        >
                                            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </motion.div>
                                    </motion.button>
                                    {/* Success/Error messages */}
                                    {success && <p className="mt-4 text-green-600 dark:text-green-400 font-medium">{success}</p>}
                                    {error && <p className="mt-4 text-red-600 dark:text-red-400 font-medium">{error}</p>}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Map Section */}
            <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-orange-50 dark:from-gray-900 dark:to-orange-900/30">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="max-w-7xl mx-auto"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white text-center mb-8 sm:mb-12"
                    >
                        Find Us
                        <span className="block bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600 bg-clip-text text-transparent">
                            <TypewriterText text="On the Map" />
                        </span>
                    </motion.h2>
                    <motion.div
                        variants={itemVariants}
                        className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 dark:border-gray-700/80"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.217374083158!2d76.73546391511724!3d30.712314981643155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedd7a4e0b7b5%3A0x3b5e3c8e7f8b7e4!2sSCO%20363%2C%20Sector%2044-D%2C%20Chandigarh%2C%20160047%2C%20India!5e0!3m2!1sen!2sin!4v1696931234567!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Settle Nation Location"
                        ></iframe>
                        <motion.div
                            className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 dark:text-orange-400" />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center mt-6 sm:mt-8"
                    >
                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=SCO+363,+Top+Floor,+Sector+44-D,+Chandigarh,+India"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 dark:from-orange-600 dark:via-orange-700 dark:to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-2xl font-bold text-base sm:text-lg flex items-center justify-center space-x-3 relative overflow-hidden"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 25px 50px rgba(255, 165, 0, 0.6)",
                            }}
                            whileTap={{ scale: 0.95 }}
                        >


                            <span className="relative z-10">Get Directions</span>
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="relative z-10"
                            >
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </motion.div>
                        </a>
                    </motion.div>
                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg text-gray-600 dark:text-gray-300 text-center mt-4 sm:mt-8"
                    >
                        <StaggeredText text="Visit us at SCO 363, Top Floor, Sector 44-D, Chandigarh" />
                    </motion.p>
                </motion.div>
            </section>
        </div>
    );
};

export default ContactUs;