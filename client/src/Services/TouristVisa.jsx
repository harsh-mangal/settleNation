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

            {/* Enhanced overlay effects */}
            {overlay && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0.3 }}
                    transition={{ duration: 0.4 }}
                />
            )}

            {/* Shimmer effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                animate={{ translateX: isHovered ? "200%" : "-100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />

            {/* Floating particles */}
            <AnimatePresence>
                {isHovered && (
                    <>
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-orange-400 rounded-full"
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
            className="group bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-transparent relative"
        >
            <EnhancedImage
                src={service.img}
                alt={service.title}
                className="w-full h-64"
            >
                {/* Service number badge */}
                <motion.div
                    className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg"
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
                    className="text-2xl font-black text-gray-900"
                    animate={{ color: isHovered ? "#ea580c" : "#111827" }}
                >
                    <StaggeredText text={service.title} />
                </motion.h3>

                <motion.p
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: isHovered ? 1 : 0.8 }}
                >
                    {service.desc}
                </motion.p>
            </div>

            {/* Gradient overlay on hover */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 pointer-events-none"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>

    );
};

const TouristVisa = () => {
    const [activeSection, setActiveSection] = useState(0);

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
            icon: <CheckCircle className="w-12 h-12 text-orange-600" />,
            title: "High Success Rate",
            desc: "Our meticulous approach ensures a 95%+ approval rate for tourist visas with expert guidance.",
            color: "from-green-500 to-green-400"
        },
        {
            icon: <Globe className="w-12 h-12 text-orange-600" />,
            title: "Global Expertise",
            desc: "Comprehensive knowledge of visa requirements for over 150 countries worldwide.",
            color: "from-blue-500 to-blue-400"
        },
        {
            icon: <Plane className="w-12 h-12 text-orange-600" />,
            title: "Fast Processing",
            desc: "Efficient services to get your visa approved in the shortest time possible with priority handling.",
            color: "from-purple-500 to-purple-400"
        },
        {
            icon: <UserCheck className="w-12 h-12 text-orange-600" />,
            title: "Personalized Support",
            desc: "Dedicated consultants provide one-on-one guidance throughout your entire visa journey.",
            color: "from-red-500 to-red-400"
        },
        {
            icon: <Calendar className="w-12 h-12 text-orange-600" />,
            title: "24/7 Assistance",
            desc: "Round-the-clock support for any queries, urgent needs, or last-minute changes.",
            color: "from-indigo-500 to-indigo-400"
        },
        {
            icon: <Star className="w-12 h-12 text-orange-600" />,
            title: "Affordable Pricing",
            desc: "Transparent and competitive fees with no hidden costs or surprise charges.",
            color: "from-yellow-500 to-yellow-400"
        },
    ];

    const stats = [
        { number: "15K+", label: "Successful Applications", icon: Award },
        { number: "95%", label: "Approval Rate", icon: CheckCircle },
        { number: "150+", label: "Countries Covered", icon: Globe },
        { number: "24/7", label: "Expert Support", icon: Clock }
    ];

    return (
        <div className="w-full bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            {/* Enhanced Hero Section */}
            <div className="relative w-full h-[90vh] overflow-hidden">
                {/* Background Image */}
                <EnhancedImage
                    src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pexels-thesilentman-205377.jpg?updatedAt=1757157178556"
                    alt="Tourist Visa Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>

                    {/* Animated background elements */}
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
                                <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full blur-sm" />
                            </motion.div>
                        ))}
                    </div>
                </EnhancedImage>

                {/* Centered Content */}
                <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-6xl mx-auto space-y-8"
                    >
                        {/* Tag */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500/30 to-orange-400/30 backdrop-blur-lg rounded-full px-8 py-4 border border-white/40 shadow-2xl"
                            whileHover={{ scale: 1.05, rotate: 1 }}
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            >
                                <Plane className="w-6 h-6 text-orange-300" />
                            </motion.div>
                            <span className="text-orange-200 font-bold text-lg">
                                Premium Tourist Visa Services
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl sm:text-6xl lg:text-8xl font-black text-white drop-shadow-2xl leading-tight"
                        >
                            Tourist Visa
                            <span className="block bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
                                <TypewriterText text="Made Simple" />
                            </span>
                        </motion.h1>

                        {/* Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
                        >
                            <motion.button
                                className="group bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white px-12 py-5 rounded-2xl shadow-2xl font-black text-lg flex items-center space-x-3 relative overflow-hidden"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 25px 50px rgba(255, 165, 0, 0.6)",
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10">Start Your Journey</span>
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="relative z-10"
                                >
                                    <ArrowRight className="w-6 h-6" />
                                </motion.div>
                            </motion.button>

                            <motion.button
                                className="border-3 border-orange-400 text-orange-300 hover:text-white px-12 py-5 rounded-2xl font-bold text-lg flex items-center space-x-3 bg-white/10 backdrop-blur-lg shadow-xl relative overflow-hidden"
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(255, 165, 0, 0.2)",
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <HelpCircle className="w-6 h-6" />
                                <span>Free Consultation</span>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>


            {/* Enhanced Intro Section - Side by Side Layout */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideFromLeft}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-100 to-orange-50 rounded-full px-6 py-3 shadow-lg">
                            <Globe className="w-6 h-6 text-orange-600" />
                            <span className="text-orange-700 font-bold text-lg">Welcome to Settle Nation</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                            Your Gateway to
                            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                                <TypewriterText text="World Exploration" />
                            </span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <motion.p
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                Exploring the world should be <span className="font-bold text-orange-600">exciting, not stressful</span>. At Settle Nation, we're dedicated to making your travel dreams a reality with our seamless and reliable tourist visa services.
                            </motion.p>

                            <motion.p
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                With years of experience handling tourist visas for destinations worldwide, we understand the nuances of each country's requirements and provide personalized assistance.
                            </motion.p>

                            <motion.p
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
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
                            {["Europe", "USA", "Canada", "Australia", "Asia", "Middle East"].map((destination, idx) => (
                                <motion.span
                                    key={idx}
                                    variants={itemVariants}
                                    className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-2 rounded-full font-semibold shadow-lg"
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
                        <div className="absolute -inset-6 bg-gradient-to-br from-orange-200/40 to-orange-100/20 rounded-3xl blur-2xl"></div>
                        <EnhancedImage
                            src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/portrait-excited-young-woman-dressed-summer-clothes-holding-passport-with-flying-tickets-while-standing-with-suitcase-isolated.jpg?updatedAt=1757157180155"
                            alt="Happy Traveler"
                            className="relative rounded-3xl shadow-2xl border-4 border-white/80 overflow-hidden"
                            overlay={false}
                        >
                            <motion.div
                                className="absolute bottom-6 left-6 bg-gradient-to-r from-green-500 to-green-400 text-white px-6 py-3 rounded-xl font-bold shadow-xl"
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

            {/* Why You Need Section - Enhanced Layout */}
            <section className="bg-gradient-to-br from-orange-50 via-orange-25 to-gray-50 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-400 rounded-full blur-2xl"></div>
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
                                className="rounded-3xl shadow-2xl border-4 border-white/80 overflow-hidden"
                                overlay={false}
                            >
                                <motion.div
                                    className="absolute top-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl"
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Shield className="w-8 h-8 text-orange-600" />
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
                            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-100 to-orange-50 rounded-full px-6 py-3 shadow-lg">
                                <HelpCircle className="w-6 h-6 text-orange-600" />
                                <span className="text-orange-700 font-bold text-lg">Essential Information</span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
                                Why You Need a
                                <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                                    <TypewriterText text="Tourist Visa" />
                                </span>
                            </h2>

                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                <motion.p
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    A tourist visa is your <span className="font-bold text-orange-600">official permission</span> to enter and explore a foreign country. It's not just a formality—it's your gateway to incredible experiences and memories.
                                </motion.p>

                                <motion.p
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    Without proper documentation, you risk being denied entry, leading to canceled plans and financial losses. Each country has unique requirements, processing times, and regulations.
                                </motion.p>

                                <motion.p
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                >
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
                                        className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-orange-100 shadow-md text-center"
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: "rgba(255, 165, 0, 0.1)"
                                        }}
                                    >
                                        <item.icon className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                                        <span className="text-sm font-semibold text-gray-700">{item.text}</span>
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
                            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900"
                        >
                            Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Services</span>
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
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

            {/* Enhanced Benefits Section */}
            <section className="bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Background patterns */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-400 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-400 rounded-full blur-2xl"></div>
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
                                className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-100 to-orange-50 rounded-full px-8 py-4 shadow-lg"
                            >
                                <Star className="w-6 h-6 text-orange-600" />
                                <span className="text-orange-700 font-bold text-lg">Why Choose Settle Nation</span>
                            </motion.div>

                            <motion.h2
                                variants={itemVariants}
                                className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900"
                            >
                                Unmatched <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Excellence</span>
                            </motion.h2>

                            <motion.p
                                variants={itemVariants}
                                className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
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
                                    className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-orange-300 transition-all duration-500 relative overflow-hidden"
                                    whileHover={{
                                        y: -10,
                                        boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                                        scale: 1.02
                                    }}
                                    onHoverStart={() => setActiveSection(index)}
                                >
                                    {/* Background gradient on hover */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                    />

                                    <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                                        <motion.div
                                            className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-lg"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {benefit.icon}
                                        </motion.div>

                                        <motion.h3
                                            className="text-2xl font-black text-gray-900 group-hover:text-orange-600 transition-colors duration-300"
                                        >
                                            <StaggeredText text={benefit.title} />
                                        </motion.h3>

                                        <motion.p
                                            className="text-gray-600 leading-relaxed"
                                            animate={{ opacity: activeSection === index ? 1 : 0.8 }}
                                        >
                                            {benefit.desc}
                                        </motion.p>

                                        <motion.div
                                            className="flex items-center text-orange-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            animate={{ x: activeSection === index ? 10 : 0 }}
                                        >
                                            <span>Explore Feature</span>
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Process Timeline */}
                        <motion.div
                            variants={containerVariants}
                            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60"
                        >
                            <motion.h3
                                variants={itemVariants}
                                className="text-3xl font-black text-gray-900 text-center mb-12"
                            >
                                Simple 4-Step <span className="text-orange-600">Process</span>
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
                                        {/* Connecting line */}
                                        {idx < 3 && (
                                            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-orange-200 -translate-y-1/2"></div>
                                        )}

                                        <motion.div
                                            className="relative mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg"
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {process.step}
                                            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/30 to-orange-300/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </motion.div>

                                        <div className="space-y-2">
                                            <h4 className="text-lg font-bold text-gray-900">{process.title}</h4>
                                            <p className="text-sm text-gray-600">{process.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="relative min-h-screen w-full h-[40rem] overflow-hidden">
                {/* Background Image */}
                <EnhancedImage
                    src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pexels-nathalia-crispim-271245353-33789272.jpg?updatedAt=1757157178339"
                    alt="Start Your Journey"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-orange-400/30 to-orange-600/40" />


                {/* Floating Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -100, 0],
                                x: [0, Math.random() * 100 - 50, 0],
                                opacity: [0.1, 0.5, 0.1],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 10 + Math.random() * 5,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                            }}
                        >
                            <div className="w-6 h-6 bg-white/20 rounded-full blur-sm"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Centered Text Content */}
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="relative z-10 max-w-5xl mx-auto space-y-8 px-4">
                        {/* Tagline */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center space-x-3 bg-orange-500 backdrop-blur-lg rounded-full px-8 py-4 border border-white/40 shadow-2xl mx-auto"
                            whileHover={{ scale: 1.05, rotate: 2 }}
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                                <Plane className="w-6 h-6 text-orange-200" />
                            </motion.div>
                            <span className="text-orange-100 font-bold text-lg">Your Adventure Awaits</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight drop-shadow-2xl"
                        >
                            <span className="text-white">Ready to Explore</span>
                            <span className="block bg-gradient-to-r from-white via-orange-200 to-yellow-200 bg-clip-text text-transparent">
                                <TypewriterText text="The World?" className="text-orange-500" />
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-xl sm:text-2xl text-gray-100 leading-relaxed max-w-4xl mx-auto drop-shadow-lg"
                        >
                            <StaggeredText text="Don't let visa complexities hold back your dreams. Start your journey with Settle Nation's expert guidance today." />
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
                        >
                            <motion.button
                                className="group bg-gradient-to-r from-orange-600 to-orange-700 text-white  px-12 py-6 rounded-2xl shadow-2xl font-black text-xl flex items-center space-x-3 relative overflow-hidden"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 30px 60px rgba(255, 255, 255, 0.3)",
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10">Get Started Now</span>
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="relative z-10"
                                >
                                    <ArrowRight className="w-6 h-6" />
                                </motion.div>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/20 to-orange-400/0"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.6 }}
                                />
                            </motion.button>

                            <motion.button
                                className="border-3 border-white text-white hover:text-orange-200 px-12 py-6 rounded-2xl font-bold text-xl flex items-center space-x-3 bg-white/10 backdrop-blur-lg shadow-2xl relative overflow-hidden"
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <HelpCircle className="w-6 h-6" />
                                <span>Free Consultation</span>
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="bg-orange-50 py-20 px-4 sm:px-6 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="space-y-12 text-center"
                    >
                        {/* Heading */}
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl font-extrabold text-gray-900"
                        >
                            Countries Offering Tourist Visas
                        </motion.h2>

                        {/* Intro paragraph */}
                        <motion.p
                            variants={itemVariants}
                            className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
                        >
                            Several countries welcome travelers with tourist visas, allowing you to
                            explore breathtaking landscapes, iconic landmarks, and diverse cultures.
                            Here are some of the most popular destinations loved by global travelers:
                        </motion.p>

                        {/* Countries Grid */}
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
                                    className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-gray-200 hover:border-orange-400 hover:shadow-xl"
                                >
                                    {/* Image with zoom on hover */}
                                    <motion.img
                                        src={item.flag}
                                        alt={`${item.country} Flag`}
                                        className="w-full h-32 sm:h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.6, delay: i * 0.1 }}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Country Name */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <span className="text-white text-lg font-bold drop-shadow-lg tracking-wide">
                                            {item.country}
                                        </span>
                                    </motion.div>

                                    {/* Glow Border */}
                                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-400 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] transition-all duration-500"></div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Closing paragraph */}
                        <motion.p
                            variants={itemVariants}
                            className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mt-10"
                        >
                            Whether it's witnessing the Grand Canyon in the USA, strolling through
                            the romantic streets of France, or enjoying the beaches of Australia,
                            obtaining a tourist visa is your first step toward unforgettable
                            adventures. With <span className="font-semibold text-orange-600">SETTLE NATION</span>,
                            the process becomes simple, secure, and stress-free.
                        </motion.p>
                    </motion.div>
                </div>
            </section>



        </div>
    );
};


export default TouristVisa;