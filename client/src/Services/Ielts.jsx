import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { GraduationCap, ArrowRight, HelpCircle } from 'lucide-react';
import { UserCheck, BookOpen, Award, Clock, FileText, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

const scaleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const slideVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const GradientText = ({ children, className = "" }) => (
    <span className={`bg-gradient-to-r from-orange-600 via-red-500 to-orange-700 bg-clip-text text-transparent ${className}`}>
        {children}
    </span>
);

const TypewriterText = ({ text, className = "" }) => (
    <motion.span
        initial={{ width: 0 }}
        animate={{ width: "auto" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className={`overflow-hidden whitespace-nowrap inline-block ${className}`}
    >
        {text}
    </motion.span>
);

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
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0.3 }}
                    transition={{ duration: 0.4 }}
                />
            )}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                animate={{ translateX: isHovered ? "200%" : "-100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
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

const IELTSPage = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const navigate = useNavigate();

    const features = [
        {
            title: "Expert Trainers",
            desc: "Our certified and experienced trainers are well-versed in the IELTS and PTE formats, helping you grasp essential strategies for scoring high.",
            icon: <UserCheck className="w-8 h-8 text-orange-600" />,
            gradient: "from-orange-500 to-purple-600",
        },
        {
            title: "Personalized Study Plans",
            desc: "We understand that each student is unique, so we design customized learning plans based on your strengths, weaknesses, and goals.",
            icon: <BookOpen className="w-8 h-8 text-green-600" />,
            gradient: "from-green-500 to-orange-600",
        },
        {
            title: "Proven Success",
            desc: "With a track record of helping students achieve their desired scores, we focus on both improving language skills and test-taking techniques.",
            icon: <Award className="w-8 h-8 text-orange-600" />,
            gradient: "from-yellow-500 to-orange-600",
        },
        {
            title: "Flexible Schedules",
            desc: "We offer flexible class timings, including weekend and evening batches, to fit your busy schedule.",
            icon: <Clock className="w-8 h-8 text-purple-600" />,
            gradient: "from-orange-500 to-rose-600",
        },
        {
            title: "Comprehensive Study Material",
            desc: "Access our in-depth study guides, practice tests, and mock exams that mimic real test conditions, ensuring you're fully prepared.",
            icon: <FileText className="w-8 h-8 text-red-600" />,
            gradient: "from-indigo-500 to-orange-600",
        },
        {
            title: "Small Batch Sizes",
            desc: "Our small class sizes ensure personalized attention, enabling you to clarify doubts and progress faster.",
            icon: <Users className="w-8 h-8 text-orange-500" />,
            gradient: "from-purple-500 to-orange-600",
        },
    ];

    const ieltsModules = [
        {
            title: "Listening",
            desc: "Master techniques to understand spoken English in various accents and contexts with interactive practice sessions.",
            img: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pte1?updatedAt=1757162471366",

        },
        {
            title: "Reading",
            desc: "Excel in comprehension with diverse text types and advanced time management strategies.",
            img: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pte2?updatedAt=1757162471393",

        },
        {
            title: "Writing",
            desc: "Perfect your essay and report writing with structured approaches and coherent arguments.",
            img: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pte4?updatedAt=1757162471075",

        },
        {
            title: "Speaking",
            desc: "Build confidence and fluency through personalized one-on-one speaking practice sessions.",
            img: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pte1?updatedAt=1757162471366",

        },
    ];

    const pteModules = [
        {
            title: "Speaking & Writing",
            desc: "Master integrated tasks and enhance your fluency with advanced expression techniques.",
            img: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pte2?updatedAt=1757162471393",

        },
        {
            title: "Reading",
            desc: "Strengthen your academic text handling skills with comprehensive practice modules.",
            img: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pte4?updatedAt=1757162471075",

        },
        {
            title: "Listening",
            desc: "Excel in diverse question types and improve understanding of spoken English in various situations.",
            img: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pte1?updatedAt=1757162471366",

        },
        {
            title: "Time Management",
            desc: "Develop strategic approaches to handle PTE's fast-paced format effectively.",
            img: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pte3?updatedAt=1757162471349",

        },
    ];

    return (
        <div className="w-full bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
            {/* Hero Section with Parallax Effect */}
            <div className="relative w-full 
                h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] 
                text-white overflow-hidden flex items-center justify-center text-center">

                {/* Background Image */}
                <EnhancedImage
                    src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pte3?updatedAt=1757162471349"
                    alt="IELTS Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>

                    {/* Animated Background Particles */}
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
                                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full blur-sm" />
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
                        className="max-w-6xl mx-auto space-y-6 sm:space-y-8"
                    >
                        {/* Tag */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center space-x-2.5 sm:space-x-3 bg-gradient-to-r from-orange-500/30 to-orange-400/30 backdrop-blur-lg rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/40 shadow-xl"
                            whileHover={{ scale: 1.05, rotate: 1 }}
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            >
                                <GraduationCap className="w-4 sm:w-6 h-4 sm:h-6 text-orange-300" />
                            </motion.div>
                            <span className="text-sm sm:text-base md:text-lg text-orange-200 font-bold">
                                IELTS & PTE Coaching
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white drop-shadow-2xl leading-tight"
                        >
                            IELTS & PTE
                            <span className="block bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
                                <TypewriterText text="Coaching Excellence" />
                            </span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            variants={itemVariants}
                            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed"
                        >
                            Unlock your{" "}
                            <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent font-bold">
                                global opportunities
                            </span>{" "}
                            with <span className="font-extrabold text-white">Settle Nation</span>
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 sm:pt-8"
                        >
                            {/* Primary Button */}
                            <motion.button
                                className="group bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-2xl shadow-xl font-semibold sm:font-black text-sm sm:text-lg flex items-center space-x-2 sm:space-x-3 relative overflow-hidden"
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

                            {/* Secondary Button */}
                            <motion.button
                                className="border-2 border-orange-400 text-orange-300 hover:text-white px-6 sm:px-10 py-3 sm:py-5 rounded-2xl font-semibold sm:font-bold text-sm sm:text-lg flex items-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-lg shadow-lg relative overflow-hidden"
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


            {/* Intro Section - Updated to Remove Up-and-Down Animation */}
            <section className="relative py-28 px-4 sm:px-6 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                        className="text-center space-y-16"
                    >
                        <motion.div variants={scaleVariants} className="space-y-8">
                            <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
                                <span>Achieve Your Dreams with </span>
                                <GradientText>
                                    <TypewriterText text="Settle Nation" />
                                </GradientText>
                            </motion.h2>
                            <motion.div
                                variants={itemVariants}
                                className="w-28 h-1 bg-gradient-to-r from-orange-600 to-red-500 mx-auto rounded-full shadow-md"
                            />
                        </motion.div>

                        <motion.div variants={slideVariants} className="max-w-3xl mx-auto space-y-4">
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
                                Achieving your dreams of studying, working, or migrating abroad starts with a strong foundation in English proficiency.
                            </p>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
                                At <span className="font-bold text-orange-600"><TypewriterText text="Settle Nation" /></span>, we offer comprehensive coaching for both <span className="font-semibold"><TypewriterText text="IELTS" /></span> and <span className="font-semibold"><TypewriterText text="PTE" /></span>, helping you excel in these globally recognized exams.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="relative py-24 px-4 sm:px-6 md:px-8">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50" />
                <div className="relative max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="space-y-16"
                    >
                        <motion.div variants={scaleVariants} className="text-center space-y-6">
                            <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                                <span>Why Choose </span>
                                <GradientText>
                                    <TypewriterText text="Settle Nation" />
                                </GradientText>
                                <span>?</span>
                            </motion.h2>
                            <motion.div className="w-32 h-1 bg-gradient-to-r from-orange-600 to-red-500 mx-auto rounded-full shadow-md" />
                        </motion.div>

                        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
                                    }}
                                    className="group relative bg-white p-8 rounded-3xl shadow-md border border-gray-100 overflow-hidden transition-all duration-500"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 rounded-3xl pointer-events-none`} />
                                    <motion.div
                                        className="text-5xl mb-6 text-white drop-shadow-lg"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {item.icon}
                                    </motion.div>
                                    <motion.h3
                                        className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300"
                                    >
                                        <span>{item.title}</span>
                                    </motion.h3>
                                    <motion.p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        <span>{item.desc}</span>
                                    </motion.p>
                                    <motion.div
                                        className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full`}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* IELTS Coaching Program */}
            <section className="relative py-24 px-4 sm:px-6 md:px-8">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-300 to-orange-200" />
                <div className="relative max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="space-y-16"
                    >
                        <motion.div variants={scaleVariants} className="text-center space-y-6">
                            <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white">
                                <span>Our </span>
                                <span className="text-orange-400">
                                    <TypewriterText text="IELTS" className="text-orange-600" />
                                </span>
                                <span> Coaching Program</span>
                            </motion.h2>
                            <motion.p
                                variants={itemVariants}
                                className="text-xl text-black leading-relaxed max-w-4xl mx-auto"
                            >
                                <span>Master all four skills with our comprehensive IELTS preparation program designed for both Academic and General Training versions.</span>
                            </motion.p>
                        </motion.div>

                        <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {ieltsModules.map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    className="group relative bg-gray-100 rounded-3xl overflow-hidden shadow-2xl"
                                >
                                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-3xl">
                                        <motion.img
                                            src={item.img}
                                            alt={`${item.title} Module`}
                                            className="w-full  object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <motion.div
                                            className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-70 group-hover:opacity-50 transition-opacity duration-500`}
                                        />
                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <motion.h3
                                                className="text-4xl font-black text-white text-center drop-shadow-lg"
                                                animate={hoveredCard === `ielts-${i}` ? { scale: [1, 1.05, 1] } : {}}
                                                transition={{ duration: 0.5 }}
                                                onHoverStart={() => setHoveredCard(`ielts-${i}`)}
                                                onHoverEnd={() => setHoveredCard(null)}
                                            >
                                                <span>{item.title}</span>
                                            </motion.h3>
                                        </motion.div>
                                    </div>
                                    <motion.div className="p-8" variants={itemVariants}>
                                        <motion.p className="text-gray-600 leading-relaxed text-lg">
                                            <span>{item.desc}</span>
                                        </motion.p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* PTE Coaching Program */}
            <section className="relative py-24 px-4 sm:px-6 md:px-8">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50" />
                <div className="relative max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="space-y-16"
                    >
                        <motion.div variants={scaleVariants} className="text-center space-y-6">
                            <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900">
                                <span>Our </span>
                                <GradientText>
                                    <TypewriterText text="PTE" />
                                </GradientText>
                                <span> Coaching Program</span>
                            </motion.h2>
                            <motion.p
                                variants={itemVariants}
                                className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
                            >
                                <span>Excel in the computer-based PTE exam with our specialized training focused on integrated skills assessment.</span>
                            </motion.p>
                        </motion.div>

                        <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {pteModules.map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    initial={{ y: 0 }}
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                                    whileHover={{ scale: 1.03, y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                                    className="group relative bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border border-orange-100 transition-all duration-500"
                                >
                                    {/* Image with gradient overlay */}
                                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-3xl">
                                        <motion.img
                                            src={item.img}
                                            alt={`${item.title} Module`}
                                            className="w-full  object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <motion.div
                                            className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-70 group-hover:opacity-50 transition-opacity duration-500`}
                                        />
                                        {/* Title with glow effect */}
                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                        >
                                            <motion.h3
                                                className="text-4xl font-black text-white text-center drop-shadow-lg"
                                                animate={hoveredCard === `pte-${i}` ? { scale: [1, 1.08, 1], textShadow: ["0 0 10px rgba(255,255,255,0.5)", "0 0 25px rgba(255,165,0,0.8)", "0 0 10px rgba(255,255,255,0.5)"] } : {}}
                                                transition={{ duration: 0.7, repeat: Infinity, repeatType: "mirror" }}
                                                onHoverStart={() => setHoveredCard(`pte-${i}`)}
                                                onHoverEnd={() => setHoveredCard(null)}
                                            >
                                                {item.title}
                                            </motion.h3>
                                        </motion.div>
                                    </div>

                                    {/* Description with slide-up effect */}
                                    <motion.div
                                        className="p-8"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.p className="text-gray-600 leading-relaxed text-lg">
                                            {item.desc}
                                        </motion.p>
                                    </motion.div>

                                    {/* Bottom glow bar */}
                                    <motion.div
                                        className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full`}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                    </motion.div>
                </div>
            </section>

            {/* Enhanced Call to Action */}
            <section className="relative py-16 px-4 sm:px-6 md:px-8 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pte2?updatedAt=1757162471393')",
                    }}
                />

                {/* Light Black Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Animated Circles */}
                <motion.div
                    className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-white/10 rounded-full blur-2xl"
                    animate={{
                        x: [-80, 80, -80],
                        y: [-40, 40, -40],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 18, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-56 h-56 sm:w-64 sm:h-64 bg-yellow-300/20 rounded-full blur-2xl"
                    animate={{
                        x: [80, -80, 80],
                        y: [40, -40, 40],
                        scale: [1.1, 1, 1.1],
                    }}
                    transition={{ duration: 14, repeat: Infinity }}
                />

                {/* Main Content */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="relative max-w-4xl mx-auto text-center space-y-8"
                >
                    <motion.div variants={scaleVariants} className="space-y-4">
                        <motion.h2
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black"
                            animate={{
                                textShadow: [
                                    "0 0 15px rgba(255,255,255,0.3)",
                                    "0 0 30px rgba(255,255,255,0.5)",
                                    "0 0 15px rgba(255,255,255,0.3)",
                                ],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <span>Ready to Excel in </span>
                            <span className="text-yellow-300">
                                <TypewriterText text="IELTS or PTE" className="text-orange-400" />
                            </span>
                            <span>?</span>
                        </motion.h2>
                        <motion.div className="w-24 h-1 bg-white/80 mx-auto rounded-full" />
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg md:text-xl leading-relaxed text-white/95"
                    >
                        <span>Join </span>
                        <span className="font-black text-yellow-200">
                            <TypewriterText text="Settle Nation" className="text-orange-400" />
                        </span>
                        <span> today and take the first step towards your </span>
                        <span className="font-bold text-yellow-300">
                            <TypewriterText text="global success!" className="text-orange-400" />
                        </span>
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/contact')}
                            className="group relative bg-white text-orange-600 px-8 py-3 sm:px-10 sm:py-4 rounded-full font-black text-base sm:text-lg shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                            />
                            <span className="relative group-hover:text-white transition-colors duration-300">
                                <span>Enroll Now</span>
                            </span>
                        </motion.button>

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255,255,255,0.2)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/contact')}
                            className="border-2 sm:border-3 border-white text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                        >
                            <span>Contact Us</span>
                        </motion.button>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
                    >
                        {[
                            { number: "5000+", label: "Students Trained" },
                            { number: "98%", label: "Success Rate" },
                            { number: "50+", label: "Expert Trainers" },
                        ].map((stat, i) => (
                            <motion.div key={i} variants={itemVariants} className="space-y-2">
                                <motion.div
                                    className="text-2xl sm:text-3xl md:text-4xl font-black text-yellow-300"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                >
                                    <span className="text-orange-400">{stat.number}</span>
                                </motion.div>
                                <div className="text-sm sm:text-base md:text-lg text-white/90 font-medium">
                                    <span>{stat.label}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

        </div>
    );
};

export default IELTSPage;