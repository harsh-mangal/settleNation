import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FileText,
    CheckCircle,
    Globe,
    UserCheck,
    Star,
    HelpCircle,
    ArrowRight,
    Shield,
    Clock,
    Award,
    Users,
    Briefcase,
    BookOpen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Animation variants
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

// Service Card Component
const ServiceCard = ({ service, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            variants={itemVariants}
            whileHover={{
                y: -10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                borderColor: "rgba(255, 165, 0, 0.5)",
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
                <motion.div
                    className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg"
                    animate={{
                        scale: isHovered ? [1, 1.2, 1] : 1,
                        rotate: isHovered ? 360 : 0,
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
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 pointer-events-none"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
};

const InterviewPreparation = () => {
    const [activeSection, setActiveSection] = useState(0);
    const navigate=useNavigate();

    const services = [
        {
            title: "Student Visa Interviews",
            desc: "We help you prepare for questions related to your academic background, study plans, and intentions to return to your home country after completing your education.",
            img: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/visa-application-composition-with-american-flag.jpg?updatedAt=1757307276314",
        },
        {
            title: "Work Visa Interviews",
            desc: "Our coaches guide you through common questions about your job qualifications, skills, and employer expectations.",
            img: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/business?updatedAt=1757307397281",
        },
        {
            title: "Immigration Visa Interviews",
            desc: "Learn how to confidently address questions about your background, family, and reasons for immigrating.",
            img: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/african-applicant-make-hr-laugh-job-interview-good-impression.jpg?updatedAt=1757307280872",
        },
    ];

    const benefits = [
        {
            icon: <UserCheck className="w-12 h-12 text-orange-600" />,
            title: "Customized Coaching",
            desc: "Tailored sessions to suit your specific interview type, ensuring you’re fully prepared.",
            color: "from-orange-500 to-orange-400",
        },
        {
            icon: <Award className="w-12 h-12 text-orange-600" />,
            title: "Experienced Trainers",
            desc: "Our coaches provide valuable insights and practical advice to handle questions effectively.",
            color: "from-blue-500 to-blue-400",
        },
        {
            icon: <BookOpen className="w-12 h-12 text-orange-600" />,
            title: "Mock Interviews",
            desc: "Simulate real-world scenarios to practice and refine your responses in a stress-free environment.",
            color: "from-green-500 to-green-400",
        },
        {
            icon: <Star className="w-12 h-12 text-orange-600" />,
            title: "Detailed Feedback",
            desc: "Receive constructive feedback on communication, body language, and response clarity.",
            color: "from-red-500 to-red-400",
        },
    ];

    const stats = [
        { number: "10K+", label: "Successful Interviews", icon: Award },
        { number: "95%", label: "Success Rate", icon: CheckCircle },
        { number: "100+", label: "Expert Coaches", icon: Users },
        { number: "24/7", label: "Support Available", icon: Clock },
    ];

    return (
        <div className="w-full bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            {/* Hero Section */}
            <div className="relative w-full 
                h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] 
                text-white overflow-hidden flex items-center justify-center text-center">

                {/* Background Image */}
                <EnhancedImage
                    src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/business?updatedAt=1757307397281"
                    alt="Interview Preparation Banner"
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
                                <UserCheck className="w-4 sm:w-6 h-4 sm:h-6 text-orange-300" />
                            </motion.div>
                            <span className="text-sm sm:text-base md:text-lg text-orange-200 font-bold">
                                Expert Interview Preparation
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white drop-shadow-2xl leading-tight"
                        >
                            Ace Your
                            <span className="block bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
                                <TypewriterText text="Visa Interview" />
                            </span>
                        </motion.h1>

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
                                 onClick={()=>navigate('/contact')}
                            >
                                <span className="relative z-10">Start Preparing Now</span>
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
                                 onClick={()=>navigate('/contact')}
                            >
                                <HelpCircle className="w-4 sm:w-6 h-4 sm:h-6" />
                                <span>Free Consultation</span>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>


            {/* Intro Section */}
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
                            Your Path to
                            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                                <TypewriterText text="Interview Success" />
                            </span>
                        </h2>
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <motion.p variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                At Settle Nation, we provide <span className="font-bold text-orange-600">expert interview preparation</span> to help you confidently present yourself and succeed in interviews for visas, jobs, or university admissions abroad.
                            </motion.p>
                            <motion.p variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
                                Our customized coaching equips you with the tools, techniques, and confidence to leave a lasting impression, ensuring you’re fully prepared for any interview scenario.
                            </motion.p>
                            <motion.p variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
                                Whether it’s a student visa, work visa, or immigration interview, we’ve got you covered with tailored guidance and practical strategies.
                            </motion.p>
                        </div>
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
                            src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/african-applicant-make-hr-laugh-job-interview-good-impression.jpg?updatedAt=1757307280872"
                            alt="Interview Preparation"
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
                                🎤 Ace Your Interview!
                            </motion.div>
                        </EnhancedImage>
                    </motion.div>
                </div>
            </section>

            {/* Why Interview Prep Section */}
            <section className="bg-gradient-to-br from-orange-50 via-orange-25 to-gray-50 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
                                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/visa-application-composition-with-american-flag.jpg?updatedAt=1757307276314"
                                alt="Interview Preparation Needs"
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
                                <span className="text-orange-700 font-bold text-lg">Why Prepare?</span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
                                Why You Need
                                <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                                    <TypewriterText text="Interview Preparation" />
                                </span>
                            </h2>
                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                <motion.p variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                    A successful interview is your <span className="font-bold text-orange-600">key to opportunities</span> abroad, whether for a visa, job, or university admission.
                                </motion.p>
                                <motion.p
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    Without proper preparation, you risk missing critical questions or failing to convey your qualifications, which could lead to rejections.
                                </motion.p>
                                <motion.p
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                >
                                    Our expert coaching ensures you’re ready to tackle any question with confidence, clarity, and poise, maximizing your chances of success.
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="space-y-16"
                >
                    <motion.div className="text-center space-y-6">
                        <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900">
                            Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Services</span>
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            <StaggeredText text="Comprehensive interview preparation tailored to your specific needs, ensuring you shine in any scenario." />
                        </motion.p>
                    </motion.div>
                    <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-8" variants={containerVariants}>
                        {services.map((service, index) => (
                            <ServiceCard key={index} service={service} index={index} />
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* Benefits Section */}
            <section className="bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-400 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="space-y-16"
                    >
                        <motion.div className="text-center space-y-6">
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-100 to-orange-50 rounded-full px-8 py-4 shadow-lg"
                            >
                                <Star className="w-6 h-6 text-orange-600" />
                                <span className="text-orange-700 font-bold text-lg">Why Choose Us</span>
                            </motion.div>
                            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900">
                                Unmatched <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Excellence</span>
                            </motion.h2>
                            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                <StaggeredText text="Experience the difference with our premium interview preparation services, backed by expert coaches and proven results." />
                            </motion.p>
                        </motion.div>
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants}>
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-orange-300 transition-all duration-500 relative overflow-hidden"
                                    whileHover={{
                                        y: -10,
                                        boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                                        scale: 1.02,
                                    }}
                                    onHoverStart={() => setActiveSection(index)}
                                >
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
                                    { step: "01", title: "Consultation", desc: "Assess your needs", icon: Users },
                                    { step: "02", title: "Preparation", desc: "Customized coaching", icon: BookOpen },
                                    { step: "03", title: "Mock Interviews", desc: "Practice sessions", icon: Briefcase },
                                    { step: "04", title: "Feedback", desc: "Improve performance", icon: CheckCircle },
                                ].map((process, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        className="text-center space-y-4 relative"
                                        whileHover={{ scale: 1.05 }}
                                    >
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
                <EnhancedImage
                    src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/business?updatedAt=1757307397281"
                    alt="Start Your Preparation"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70" />

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
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="relative z-10 max-w-5xl mx-auto space-y-8 px-4">
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center space-x-3 bg-orange-500 backdrop-blur-lg rounded-full px-8 py-4 border border-white/40 shadow-2xl mx-auto"
                            whileHover={{ scale: 1.05, rotate: 2 }}
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                                <UserCheck className="w-6 h-6 text-orange-200" />
                            </motion.div>
                            <span className="text-orange-100 font-bold text-lg">Your Success Awaits</span>
                        </motion.div>
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight drop-shadow-2xl"
                        >
                            <span className="text-white">Ready to Succeed</span>
                            <span className="block bg-gradient-to-r from-white via-orange-200 to-yellow-200 bg-clip-text text-transparent">
                                <TypewriterText text="in Your Interview?" className="text-orange-500" />
                            </span>
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl sm:text-2xl text-gray-100 leading-relaxed max-w-4xl mx-auto drop-shadow-lg"
                        >
                            <StaggeredText text="Don’t let nerves hold you back. Start your journey with Settle Nation’s expert interview preparation today." />
                        </motion.p>
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
                        >
                            <motion.button
                                className="group bg-gradient-to-r from-orange-600 to-orange-700 text-white px-12 py-6 rounded-2xl shadow-2xl font-black text-xl flex items-center space-x-3 relative overflow-hidden"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 30px 60px rgba(255, 255, 255, 0.3)",
                                }}
                                whileTap={{ scale: 0.95 }}
                                 onClick={()=>navigate('/contact')}
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
                                 onClick={()=>navigate('/contact')}
                            >
                                <HelpCircle className="w-6 h-6" />
                                <span>Free Consultation</span>
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InterviewPreparation;