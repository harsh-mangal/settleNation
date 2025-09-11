import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FileText,
    CheckCircle,
    Globe,
    Plane,
    Calendar,
    UserCheck,
    Star,
    HelpCircle,
    ArrowRight,
    Shield,
    Clock,
    Award,
    MapPin,
    Users,
    Briefcase
} from "lucide-react";
import { useNavigate } from "react-router-dom";


// Enhanced animations
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
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

// Typewriter effect
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

// Staggered text animation
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
                        ease: "easeOut"
                    }}
                >
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            initial={{ opacity: 0, rotateY: 90 }}
                            animate={{ opacity: 1, rotateY: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: (wordIndex * 0.1) + (charIndex * 0.02)
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

// Enhanced Image Component
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
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent dark:from-black/80 dark:via-black/30 dark:to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0.3 }}
                    transition={{ duration: 0.4 }}
                />
            )}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-white/20 to-transparent -translate-x-full"
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
                                    left: `${20 + (i * 10)}%`,
                                    top: `${30 + (i * 5)}%`,
                                }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: [0, 1.5, 0],
                                    opacity: [0, 1, 0],
                                    y: [-30, -60, -90]
                                }}
                                transition={{
                                    duration: 2.5,
                                    delay: i * 0.15,
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

// Service Card Component
const ServiceCard = ({ service, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            variants={itemVariants}
            whileHover={{
                y: -10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                borderColor: "rgba(255, 165, 0, 0.5)"
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            transition={{ duration: 0.4 }}
            className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 border-transparent dark:border-gray-700 relative"
        >
            <EnhancedImage
                src={service.img}
                alt={service.title}
                className="w-full h-64"
            >
                <motion.div
                    className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-400 dark:from-orange-700 dark:to-orange-600 rounded-2xl flex items-center justify-center text-white dark:text-gray-100 font-black text-lg shadow-lg"
                    animate={{
                        scale: isHovered ? [1, 1.2, 1] : 1,
                        rotate: isHovered ? 360 : 0
                    }}
                    transition={{ duration: 0.6 }}
                >
                    {index + 1}
                </motion.div>
            </EnhancedImage>
            <div className="p-8 space-y-4">
                <motion.h3
                    className="text-2xl font-black text-gray-900 dark:text-white"
                    animate={{ color: isHovered ? "#ea580c" : "#111827" }}
                >
                    <StaggeredText text={service.title} className="dark:text-white"/>
                </motion.h3>
                <motion.p
                    className="text-gray-600 dark:text-gray-300 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: isHovered ? 1 : 0.8 }}
                >
                    {service.desc}
                </motion.p>
            </div>
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-orange-500/10 dark:from-orange-700/10 to-transparent opacity-0 pointer-events-none"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
};

const TouristVisa = () => {
    const [activeSection, setActiveSection] = useState(0);
    const navigate = useNavigate();

    const services = [
        {
            title: "Application Preparation",
            desc: "Expert assistance in filling out complex visa forms accurately and gathering all required documents to avoid common pitfalls that could lead to rejection.",
            img: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/joyful.png?updatedAt=1757157286285",
        },
        {
            title: "Document Review & Verification",
            desc: "Thorough review of your documents to ensure they meet embassy standards, reducing the risk of delays or rejections through our meticulous verification process.",
            img: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/portrait-excited-young-woman-dressed-summer-clothes-holding-passport-with-flying-tickets-while-standing-with-suitcase-isolated.jpg?updatedAt=1757157180155",
        },
        {
            title: "Visa Submission & Tracking",
            desc: "We handle the entire submission process and provide real-time tracking of your application status, keeping you informed every step of the way.",
            img: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pexels-nathalia-crispim-271245353-33789272.jpg?updatedAt=1757157178339",
        },
    ];

    const benefits = [
        {
            icon: <CheckCircle className="w-12 h-12 text-orange-600 dark:text-orange-400" />,
            title: "High Success Rate",
            desc: "Our meticulous approach ensures a 95%+ approval rate for tourist visas with expert guidance.",
            color: "from-green-500 to-green-400 dark:from-green-700 dark:to-green-600"
        },
        {
            icon: <Globe className="w-12 h-12 text-orange-600 dark:text-orange-400" />,
            title: "Global Expertise",
            desc: "Comprehensive knowledge of visa requirements for over 150 countries worldwide.",
            color: "from-blue-500 to-blue-400 dark:from-blue-700 dark:to-blue-600"
        },
        {
            icon: <Plane className="w-12 h-12 text-orange-600 dark:text-orange-400" />,
            title: "Fast Processing",
            desc: "Efficient services to get your visa approved in the shortest time possible with priority handling.",
            color: "from-purple-500 to-purple-400 dark:from-purple-700 dark:to-purple-600"
        },
        {
            icon: <UserCheck className="w-12 h-12 text-orange-600 dark:text-orange-400" />,
            title: "Personalized Support",
            desc: "Dedicated consultants provide one-on-one guidance throughout your entire visa journey.",
            color: "from-red-500 to-red-400 dark:from-red-700 dark:to-red-600"
        },
        {
            icon: <Calendar className="w-12 h-12 text-orange-600 dark:text-orange-400" />,
            title: "24/7 Assistance",
            desc: "Round-the-clock support for any queries, urgent needs, or last-minute changes.",
            color: "from-indigo-500 to-indigo-400 dark:from-indigo-700 dark:to-indigo-600"
        },
        {
            icon: <Star className="w-12 h-12 text-orange-600 dark:text-orange-400" />,
            title: "Affordable Pricing",
            desc: "Transparent and competitive fees with no hidden costs or surprise charges.",
            color: "from-yellow-500 to-yellow-400 dark:from-yellow-600 dark:to-yellow-500"
        },
    ];

    const stats = [
        { number: "15K+", label: "Successful Applications", icon: Award },
        { number: "95%", label: "Approval Rate", icon: CheckCircle },
        { number: "150+", label: "Countries Covered", icon: Globe },
        { number: "24/7", label: "Expert Support", icon: Clock }
    ];

    return (
        <div className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">

            {/* Enhanced Hero Section */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] text-white dark:text-gray-100 overflow-hidden flex items-center justify-center text-center">
                <EnhancedImage
                    src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pexels-thesilentman-205377.jpg?updatedAt=1757157178556"
                    alt="Tourist Visa Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60 dark:from-black/80 dark:via-black/60 dark:to-black/70"></div>
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(25)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: [0, 0.6, 0],
                                    scale: [0, 2, 0],
                                    rotate: 360,
                                    y: [0, -150, 0],
                                }}
                                transition={{
                                    duration: 8 + Math.random() * 4,
                                    repeat: Infinity,
                                    delay: Math.random() * 10,
                                }}
                            >
                                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-orange-400 to-yellow-300 dark:from-orange-500 dark:to-yellow-400 rounded-full blur-sm" />
                            </motion.div>
                        ))}
                    </div>
                </EnhancedImage>
                <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-6xl mx-auto space-y-6 sm:space-y-8"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center space-x-2.5 sm:space-x-3 bg-gradient-to-r from-orange-500/30 to-orange-400/30 dark:from-orange-600/20 dark:to-orange-500/20 backdrop-blur-lg rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/40 dark:border-white/20 shadow-xl"
                            whileHover={{ scale: 1.05, rotate: 1 }}
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            >
                                <Plane className="w-4 sm:w-6 h-4 sm:h-6 text-orange-300 dark:text-orange-200" />
                            </motion.div>
                            <span className="text-sm sm:text-base md:text-lg text-orange-200 dark:text-orange-100 font-bold">
                                Premium Tourist Visa Services
                            </span>
                        </motion.div>
                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white dark:text-gray-100 drop-shadow-2xl leading-tight"
                        >
                            Tourist Visa
                            <span className="block bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 dark:from-orange-500 dark:via-yellow-400 dark:to-orange-600 bg-clip-text text-transparent">
                                <TypewriterText text="Made Simple" />
                            </span>
                        </motion.h1>
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 sm:pt-8"
                        >
                            <motion.button
                                className="group bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 dark:from-orange-700 dark:via-orange-600 dark:to-red-600 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-2xl shadow-xl font-semibold sm:font-black text-sm sm:text-lg flex items-center space-x-2 sm:space-x-3 relative overflow-hidden"
                                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(255, 165, 0, 0.6)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                            >
                                <span className="relative z-10">Start Your Journey</span>
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="relative z-10"
                                >
                                    <ArrowRight className="w-4 sm:w-6 h-4 sm:h-6" />
                                </motion.div>
                            </motion.button>
                            <motion.button
                                className="border-2 border-orange-400 dark:border-orange-300 text-orange-300 dark:text-orange-200 hover:text-white dark:hover:text-gray-100 px-6 sm:px-10 py-3 sm:py-5 rounded-2xl font-semibold sm:font-bold text-sm sm:text-lg flex items-center space-x-2 sm:space-x-3 bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg shadow-lg relative overflow-hidden"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 165, 0, 0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                            >
                                <HelpCircle className="w-4 sm:w-6 h-4 sm:h-6" />
                                <span>Free Consultation</span>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Enhanced Intro Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideFromLeft}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-900/20 dark:to-orange-800/20 rounded-full px-6 py-3 shadow-lg">
                            <Globe className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                            <span className="text-orange-700 dark:text-orange-300 font-bold text-lg">Welcome to Settle Nation</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight">
                            Your Gateway to
                            <span className="block bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-700 dark:to-red-600 bg-clip-text text-transparent">
                                <TypewriterText text="World Exploration" />
                            </span>
                        </h2>
                        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            <motion.p variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                Exploring the world should be <span className="font-bold text-orange-600 dark:text-orange-400">exciting, not stressful</span>. At Settle Nation, we're dedicated to making your travel dreams a reality with our seamless and reliable tourist visa services.
                            </motion.p>
                            <motion.p variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
                                With years of experience handling tourist visas for destinations worldwide, we understand the nuances of each country's requirements and provide personalized assistance.
                            </motion.p>
                            <motion.p variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
                                From popular destinations like Europe and the USA to exotic locations in Asia and Africa, we've got you covered. Let us handle the paperwork while you focus on packing!
                            </motion.p>
                        </div>
                        <motion.div
                            className="flex flex-wrap gap-4 pt-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {["UK","New Zealand","Europe", "USA", "Canada", "Australia", "Asia", "Middle East"].map((destination, idx) => (
                                <motion.span
                                    key={idx}
                                    variants={itemVariants}
                                    className="bg-gradient-to-r from-orange-500 to-orange-400 dark:from-orange-700 dark:to-orange-600 text-white dark:text-gray-100 px-4 py-2 rounded-full font-semibold shadow-lg"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    {destination}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideFromRight}
                        className="relative"
                    >
                        <div className="absolute -inset-6 bg-gradient-to-br from-orange-200/40 to-orange-100/20 dark:from-orange-900/20 dark:to-orange-800/20 rounded-3xl blur-2xl"></div>
                        <EnhancedImage
                            src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/portrait-excited-young-woman-dressed-summer-clothes-holding-passport-with-flying-tickets-while-standing-with-suitcase-isolated.jpg?updatedAt=1757157180155"
                            alt="Happy Traveler"
                            className="relative rounded-3xl shadow-2xl border-4 border-white/80 dark:border-gray-700/80 overflow-hidden"
                            overlay={false}
                        >
                            <motion.div
                                className="absolute bottom-6 left-6 bg-gradient-to-r from-green-500 to-green-400 dark:from-green-700 dark:to-green-600 text-white dark:text-gray-100 px-6 py-3 rounded-xl font-bold shadow-xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                ✈️ Ready to Travel!
                            </motion.div>
                        </EnhancedImage>
                    </motion.div>
                </div>
            </section>

            {/* Why You Need Section */}
            <section className="bg-gradient-to-br from-orange-50 via-orange-25 to-gray-50 dark:from-orange-900/30 dark:via-orange-800/30 dark:to-gray-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-40 h-40 bg-orange-400 dark:bg-orange-500 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-400 dark:bg-yellow-500 rounded-full blur-2xl"></div>
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideFromLeft}
                            className="order-2 lg:order-1"
                        >
                            <EnhancedImage
                                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pexels-nathalia-crispim-271245353-33789272.jpg?updatedAt=1757157178339"
                                alt="Visa Requirements"
                                className="rounded-3xl shadow-2xl border-4 border-white/80 dark:border-gray-700/80 overflow-hidden"
                                overlay={false}
                            >
                                <motion.div
                                    className="absolute top-6 right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-4 shadow-xl"
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Shield className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                                </motion.div>
                            </EnhancedImage>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideFromRight}
                            className="order-1 lg:order-2 space-y-8"
                        >
                            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-900/20 dark:to-orange-800/20 rounded-full px-6 py-3 shadow-lg">
                                <HelpCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                <span className="text-orange-700 dark:text-orange-300 font-bold text-lg">Essential Information</span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white leading-tight">
                                Why You Need a
                                <span className="block bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-700 dark:to-red-600 bg-clip-text text-transparent">
                                    <TypewriterText text="Tourist Visa" />
                                </span>
                            </h2>
                            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                <motion.p variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                    A tourist visa is your <span className="font-bold text-orange-600 dark:text-orange-400">official permission</span> to enter and explore a foreign country. It's not just a formality—it's your gateway to incredible experiences and memories.
                                </motion.p>
                                <motion.p variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
                                    Without proper documentation, you risk being denied entry, leading to canceled plans and financial losses. Each country has unique requirements, processing times, and regulations.
                                </motion.p>
                                <motion.p variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
                                    Whether it's a Schengen visa for Europe, ESTA for the US, or eVisitor for Australia, we provide up-to-date guidance to ensure your travel is smooth and worry-free.
                                </motion.p>
                            </div>
                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {[
                                    { icon: Shield, text: "Legal Entry" },
                                    { icon: Clock, text: "Time Sensitive" },
                                    { icon: Globe, text: "Country Specific" }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-orange-100 dark:border-orange-800 shadow-md text-center"
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: "rgba(255, 165, 0, 0.1)"
                                        }}
                                    >
                                        <item.icon className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{item.text}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Enhanced Services Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="space-y-16"
                >
                    <div className="text-center space-y-6">
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white"
                        >
                            Our <span className="bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-700 dark:to-red-600 bg-clip-text text-transparent">Services</span>
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                        >
                            <StaggeredText text="Comprehensive visa solutions designed to make your travel dreams come true with expert guidance every step of the way." />
                        </motion.p>
                    </div>
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                    >
                        {services.map((service, index) => (
                            <ServiceCard key={index} service={service} index={index} />
                        ))}
                    </motion.div>
                </motion.div>
            </section>

          
            <section className="bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-gray-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-orange-400 dark:bg-orange-500 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-400 dark:bg-yellow-500 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-400 dark:bg-red-500 rounded-full blur-2xl"></div>
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="space-y-16"
                    >
                        <div className="text-center space-y-6">
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-900/20 dark:to-orange-800/20 rounded-full px-8 py-4 shadow-lg"
                            >
                                <Star className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                <span className="text-orange-700 dark:text-orange-300 font-bold text-lg">Why Choose Settle Nation</span>
                            </motion.div>
                            <motion.h2
                                variants={itemVariants}
                                className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white"
                            >
                                Unmatched <span className="bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-700 dark:to-red-600 bg-clip-text text-transparent">Excellence</span>
                            </motion.h2>
                            <motion.p
                                variants={itemVariants}
                                className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
                            >
                                <StaggeredText text="Experience the difference with our premium visa services, backed by years of expertise and thousands of successful applications." />
                            </motion.p>
                        </div>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={containerVariants}
                        >
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-transparent dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-400 transition-all duration-500 relative overflow-hidden"
                                    whileHover={{
                                        y: -10,
                                        boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                                        scale: 1.02
                                    }}
                                    onHoverStart={() => setActiveSection(index)}
                                >
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                    />
                                    <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                                        <motion.div
                                            className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl shadow-lg"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {benefit.icon}
                                        </motion.div>
                                        <motion.h3
                                            className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300"
                                        >
                                            <StaggeredText text={benefit.title} />
                                        </motion.h3>
                                        <motion.p
                                            className="text-gray-600 dark:text-gray-300 leading-relaxed"
                                            animate={{ opacity: activeSection === index ? 1 : 0.8 }}
                                        >
                                            {benefit.desc}
                                        </motion.p>
                                        <motion.div
                                            className="flex items-center text-orange-600 dark:text-orange-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            animate={{ x: activeSection === index ? 10 : 0 }}
                                        >
                                            <span>Explore Feature</span>
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div
                            variants={containerVariants}
                            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60 dark:border-gray-700/60"
                        >
                            <motion.h3
                                variants={itemVariants}
                                className="text-3xl font-black text-gray-900 dark:text-white text-center mb-12"
                            >
                                Simple 4-Step <span className="text-orange-600 dark:text-orange-400">Process</span>
                            </motion.h3>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {[
                                    { step: "01", title: "Consultation", desc: "Free initial assessment", icon: Users },
                                    { step: "02", title: "Documentation", desc: "Prepare required papers", icon: FileText },
                                    { step: "03", title: "Submission", desc: "Apply to embassy", icon: Briefcase },
                                    { step: "04", title: "Approval", desc: "Receive your visa", icon: CheckCircle }
                                ].map((process, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        className="text-center space-y-4 relative"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {idx < 3 && (
                                            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-orange-200 dark:from-orange-500 dark:to-orange-400 -translate-y-1/2"></div>
                                        )}
                                        <motion.div
                                            className="relative mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-400 dark:from-orange-700 dark:to-orange-600 rounded-2xl flex items-center justify-center text-white dark:text-gray-100 font-black text-xl shadow-lg"
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {process.step}
                                            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/30 to-orange-300/20 dark:from-orange-500/20 dark:to-orange-400/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </motion.div>
                                        <div className="space-y-2">
                                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">{process.title}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">{process.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Countries Offering Tourist Visas Section */}
            <section className="bg-orange-50 dark:bg-orange-900/20 py-20 px-4 sm:px-6 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="space-y-12 text-center"
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white"
                        >
                            Countries Offering Tourist Visas
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto"
                        >
                            Several countries welcome travelers with tourist visas, allowing you to
                            explore breathtaking landscapes, iconic landmarks, and diverse cultures.
                            Here are some of the most popular destinations loved by global travelers:
                        </motion.p>
                        <motion.div
                            variants={containerVariants}
                            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-12"
                        >
                            {[
                                { country: "USA", flag: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/usa.jpg?updatedAt=1757160698264" },
                                { country: "Canada", flag: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/canada.jfif?updatedAt=1757160698345" },
                                { country: "UK", flag: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/image.png?updatedAt=1757161515245" },
                                { country: "Australia", flag: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/australia.jfif?updatedAt=1757160697972" },
                                { country: "New Zealand", flag: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/image(2).png?updatedAt=1757161515211" },
                                { country: "France", flag: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/french.jfif?updatedAt=1757160697450" },
                                { country: "Germany", flag: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/germany.jfif?updatedAt=1757160698203" },
                                { country: "Italy", flag: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/italy.jfif?updatedAt=1757160698383" },
                                { country: "Japan", flag: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/image(1).png?updatedAt=1757161515173" },
                                { country: "Brazil", flag: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/image(3).png?updatedAt=1757161514669" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.08, rotate: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-300 hover:shadow-xl"
                                >
                                    <motion.img
                                        src={item.flag}
                                        alt={`${item.country} Flag`}
                                        className="w-full h-32 sm:h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.6, delay: i * 0.1 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent dark:from-black/80 dark:via-black/30 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <span className="text-white dark:text-gray-100 text-lg font-bold drop-shadow-lg tracking-wide">
                                            {item.country}
                                        </span>
                                    </motion.div>
                                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-400 dark:group-hover:border-orange-300 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] transition-all duration-500"></div>
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.p
                            variants={itemVariants}
                            className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mt-10"
                        >
                            Whether it's witnessing the Grand Canyon in the USA, strolling through
                            the romantic streets of France, or enjoying the beaches of Australia,
                            obtaining a tourist visa is your first step toward unforgettable
                            adventures. With <span className="font-semibold text-orange-600 dark:text-orange-400">SETTLE NATION</span>,
                            the process becomes simple, secure, and stress-free.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="relative w-full h-[50vh] min-h-[24rem] max-h-[500px] overflow-hidden">
                <EnhancedImage
                    src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pexels-nathalia-crispim-271245353-33789272.jpg?updatedAt=1757157178339"
                    alt="Start Your Journey"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-orange-400/30 to-orange-600/40 dark:from-orange-700/40 dark:via-orange-600/30 dark:to-orange-800/40" />
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -80, 0],
                                x: [0, Math.random() * 80 - 40, 0],
                                opacity: [0.1, 0.4, 0.1],
                                scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                                duration: 8 + Math.random() * 4,
                                repeat: Infinity,
                                delay: Math.random() * 4,
                            }}
                        >
                            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white/20 dark:bg-white/10 rounded-full blur-sm" />
                        </motion.div>
                    ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                    <div className="relative z-10 max-w-4xl mx-auto space-y-4 sm:space-y-6">
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center space-x-2 bg-orange-500 dark:bg-orange-600 backdrop-blur-lg rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 border border-white/40 dark:border-white/20 shadow-xl mx-auto"
                            whileHover={{ scale: 1.05, rotate: 2 }}
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                                <Plane className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-orange-200 dark:text-orange-100" />
                            </motion.div>
                            <span className="text-orange-100 dark:text-orange-50 font-bold text-xs sm:text-sm md:text-base">
                                Your Adventure Awaits
                            </span>
                        </motion.div>
                        <motion.h2
                            variants={itemVariants}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight drop-shadow-2xl text-white dark:text-gray-100"
                        >
                            <span>Ready to Explore</span>
                            <span className="block bg-gradient-to-r from-white via-orange-200 to-yellow-200 dark:from-gray-100 dark:via-orange-300 dark:to-yellow-300 bg-clip-text text-transparent">
                                <TypewriterText text="The World?" className="text-orange-500 dark:text-orange-400" />
                            </span>
                        </motion.h2>
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-3 sm:pt-4"
                        >
                            <motion.button
                                className="group bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-700 dark:to-orange-600 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3.5 rounded-xl shadow-xl font-bold text-sm sm:text-base md:text-lg flex items-center space-x-1 sm:space-x-2 relative overflow-hidden"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)",
                                }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate("/contact")}
                            >
                                <span className="relative z-10">Get Started Now</span>
                                <motion.div
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="relative z-10"
                                >
                                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                </motion.div>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/20 dark:via-orange-500/20 to-orange-400/0 dark:to-orange-500/0"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.6 }}
                                />
                            </motion.button>
                            <motion.button
                                className="border-2 border-white dark:border-orange-300 text-white dark:text-orange-200 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3.5 rounded-xl font-semibold text-sm sm:text-base md:text-lg flex items-center space-x-1 sm:space-x-2 bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg shadow-xl relative overflow-hidden"
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate("/contact")}
                            >
                                <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                <span>Free Consultation</span>
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TouristVisa;