import React, { useState, useEffect } from "react";
import {
    FileText,
    Users,
    ClipboardCheck,
    Globe,
    BookOpen,
    Award,
    ArrowRight,
    CheckCircle,
    Star,
    MapPin,
    Calendar,
    Phone,
    Mail,
    Sparkles,
    TrendingUp,
    Heart,
    Shield,
    Clock,
    GraduationCap
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedCounter = ({ end, duration = 2000, suffix = "", inView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, inView]);

    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {count.toLocaleString()}{suffix}
        </motion.span>
    );
};

const FloatingCard = ({ children, delay = 0, inView }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

const PRVisa = () => {
    const [scrollY, setScrollY] = useState(0);
    const navigate = useNavigate();

    const [heroRef, heroInView] = useInView({ triggerOnce: false, threshold: 0.1 });
    const [statsRef, statsInView] = useInView({ triggerOnce: false, threshold: 0.1 });
    const [whyUsRef, whyUsInView] = useInView({ triggerOnce: false, threshold: 0.1 });
    const [servicesRef, servicesInView] = useInView({ triggerOnce: false, threshold: 0.1 });
    const [galleryRef, galleryInView] = useInView({ triggerOnce: false, threshold: 0.1 });
    const [featuresRef, featuresInView] = useInView({ triggerOnce: false, threshold: 0.1 });
    const [ctaRef, ctaInView] = useInView({ triggerOnce: false, threshold: 0.2 });

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        {
            icon: FileText,
            title: "Eligibility Assessment",
            description: "Comprehensive evaluation of your eligibility for Permanent Residency.",
            features: ["Profile analysis", "Points calculation", "Program selection"],
            color: "from-orange-500 to-orange-600 dark:from-orange-700 dark:to-orange-600",
            bgColor: "from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30"
        },
        {
            icon: ClipboardCheck,
            title: "Documentation Support",
            description: "Expert assistance in preparing and reviewing PR application documents.",
            features: ["Document checklist", "Application review", "Error correction"],
            color: "from-orange-500 to-orange-600 dark:from-orange-700 dark:to-orange-600",
            bgColor: "from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30"
        },
        {
            icon: Users,
            title: "Express Entry Guidance",
            description: "Tailored support for Express Entry and Provincial Nominee Programs.",
            features: ["Profile creation", "CRS score optimization", "PNP guidance"],
            color: "from-orange-500 to-orange-600 dark:from-orange-700 dark:to-orange-600",
            bgColor: "from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30"
        },
        {
            icon: Globe,
            title: "Personalized Strategy",
            description: "Customized PR application strategy based on your unique profile.",
            features: ["Tailored planning", "One-on-one consultation", "Ongoing support"],
            color: "from-orange-500 to-orange-600 dark:from-orange-700 dark:to-orange-600",
            bgColor: "from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30"
        },
        {
            icon: Shield,
            title: "Post-Submission Support",
            description: "Continuous assistance until your PR application is approved.",
            features: ["Application tracking", "Status updates", "Response preparation"],
            color: "from-orange-500 to-orange-600 dark:from-orange-700 dark:to-orange-600",
            bgColor: "from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30"
        },
        {
            icon: Award,
            title: "Settlement Assistance",
            description: "Guidance on settling in your new country after PR approval.",
            features: ["Relocation advice", "Job search support", "Integration tips"],
            color: "from-orange-500 to-orange-600 dark:from-orange-700 dark:to-orange-600",
            bgColor: "from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30"
        }
    ];

    const countries = [
        { name: "Canada", flag: "🇨🇦", color: "from-orange-600 to-white dark:from-orange-700 dark:to-gray-700" },
        { name: "Australia", flag: "🇦🇺", color: "from-orange-500 to-yellow-400 dark:from-orange-700 dark:to-yellow-600" },
        { name: "New Zealand", flag: "🇳🇿", color: "from-orange-600 to-red-500 dark:from-orange-700 dark:to-red-700" }
    ];

    return (
        <div className="bg-gray-50 dark:bg-gray-900 overflow-hidden">
            {/* Floating Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-full opacity-20"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                <motion.div
                    className="absolute top-1/2 right-20 w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-full opacity-15"
                    animate={{ y: [-20, 20, -20], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                <motion.div
                    className="absolute bottom-40 left-1/3 w-20 h-20 bg-gradient-to-br from-orange-200 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-full opacity-25"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.35, 0.25] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                ></motion.div>
            </div>

            {/* Enhanced Hero Section */}
            <div ref={heroRef} className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] text-white overflow-hidden flex items-center justify-center text-center">
                <motion.img
                    src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/high-angle-woman-working-as-travel-agent.jpg?updatedAt=1757585179480"
                    alt="Permanent Residency"
                    className="absolute inset-0 w-full h-full object-cover scale-110"
                    style={{ transform: `translateY(${scrollY * 0.5}px) scale(1.1)` }}
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={heroInView ? { opacity: 1, scale: 1.1 } : { opacity: 0, scale: 1.2 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70 dark:from-black/70 dark:via-black/60 dark:to-black/80"></div>

                {/* Animated Particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/20 dark:bg-white/10 rounded-full"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ duration: 1, delay: Math.random() * 0.5 }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                        ></motion.div>
                    ))}
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                    <FloatingCard inView={heroInView}>
                        <motion.div
                            className="inline-flex items-center space-x-2.5 sm:space-x-3 bg-gradient-to-r from-orange-500/20 to-orange-400/20 dark:from-orange-600/20 dark:to-orange-500/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-white/20 dark:border-white/10"
                            initial={{ opacity: 0, x: -50 }}
                            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.6 }}
                        >
                            <GraduationCap className="w-5 sm:w-6 h-5 sm:h-6 text-orange-300 dark:text-orange-200 animate-pulse" />
                            <span className="text-xs sm:text-sm md:text-base text-orange-200 dark:text-orange-100 font-semibold">
                                Leading PR Visa Consultants
                            </span>
                        </motion.div>
                    </FloatingCard>

                    <FloatingCard inView={heroInView} delay={0.2}>
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white dark:text-gray-100 mb-6 sm:mb-8 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Your Journey to
                            <span className="block bg-gradient-to-r from-orange-400 to-yellow-300 dark:from-orange-500 dark:to-yellow-400 bg-clip-text text-transparent">
                                Permanent Residency
                            </span>
                        </motion.h1>
                    </FloatingCard>

                    <FloatingCard inView={heroInView} delay={0.4}>
                        <motion.p
                            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12 font-light"
                            initial={{ opacity: 0, y: 30 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            Expert PR visa consultants in
                            <span className="text-orange-300 dark:text-orange-200 font-semibold"> Chandigarh </span>
                            guiding you to secure your permanent residency with ease.
                        </motion.p>
                    </FloatingCard>

                    <FloatingCard inView={heroInView} delay={0.6}>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <button
                                className="group bg-gradient-to-r from-orange-600 to-orange-500 dark:from-orange-700 dark:to-orange-600 hover:from-orange-700 hover:to-orange-600 dark:hover:from-orange-800 dark:hover:to-orange-700 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-2xl shadow-lg sm:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold text-sm sm:text-lg flex items-center space-x-2 sm:space-x-3"
                                onClick={() => navigate('/contact')}
                            >
                                <BookOpen className="w-5 sm:w-6 h-5 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                                <span>Start Your PR Journey</span>
                                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                            <button
                                className="group border-2 border-white/30 dark:border-white/20 text-white dark:text-gray-200 hover:bg-white/10 dark:hover:bg-white/15 px-6 sm:px-10 py-3 sm:py-5 rounded-2xl transition-all duration-300 font-semibold text-sm sm:text-lg backdrop-blur-sm flex items-center space-x-2 sm:space-x-3"
                                onClick={() => navigate('/contact')}
                            >
                                <Phone className="w-5 sm:w-6 h-5 sm:h-6 group-hover:animate-pulse" />
                                <span>Free Consultation</span>
                            </button>
                        </motion.div>
                    </FloatingCard>
                </div>
            </div>

            {/* Stats Section */}
            <div ref={statsRef} className="bg-white dark:bg-gray-800 py-20 px-4 sm:px-6 -mt-20 relative z-20">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-2xl p-8 sm:p-16 border border-gray-100 dark:border-gray-700"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            {[
                                { end: 3000, suffix: "+", label: "Clients Helped", icon: Users },
                                { end: 95, suffix: "%", label: "Success Rate", icon: TrendingUp },
                                { end: 15, suffix: "+", label: "Years Experience", icon: Award },
                                { end: 10, suffix: "+", label: "PR Programs", icon: Shield }
                            ].map((stat, index) => (
                                <FloatingCard key={index} delay={index * 0.1} inView={statsInView}>
                                    <motion.div
                                        className="space-y-4 p-6 rounded-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-25 dark:hover:from-orange-900/30 dark:hover:to-orange-800/30 transition-all duration-300 group"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                    >
                                        <motion.div
                                            className="inline-flex p-3 bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/50 dark:to-orange-800/50 rounded-xl group-hover:scale-110 transition-transform duration-300"
                                            animate={statsInView ? { rotate: [0, 10, -10, 0] } : { rotate: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.2 }}
                                        >
                                            <stat.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                        </motion.div>
                                        <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 dark:from-orange-700 dark:to-orange-600 bg-clip-text text-transparent">
                                            <AnimatedCounter end={stat.end} suffix={stat.suffix} inView={statsInView} />
                                        </div>
                                        <motion.p
                                            className="text-gray-600 dark:text-gray-300 font-semibold"
                                            initial={{ opacity: 0 }}
                                            animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                                        >
                                            {stat.label}
                                        </motion.p>
                                    </motion.div>
                                </FloatingCard>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div ref={whyUsRef} className="max-w-7xl mx-auto py-24 px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <FloatingCard inView={whyUsInView}>
                        <div className="space-y-8">
                            <motion.div
                                className="space-y-6"
                                initial={{ opacity: 0, x: -50 }}
                                animate={whyUsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-900/50 dark:to-orange-800/50 rounded-full px-4 py-2">
                                    <Star className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                    <span className="text-orange-700 dark:text-orange-300 font-medium text-sm">Why Choose Settle Nation?</span>
                                </div>
                                <motion.h2
                                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={whyUsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    Leading PR Visa
                                    <span className="block bg-gradient-to-r from-orange-600 to-orange-400 dark:from-orange-700 dark:to-orange-500 bg-clip-text text-transparent">
                                        Consultants
                                    </span>
                                </motion.h2>
                                <motion.div
                                    className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-orange-400 dark:from-orange-500 dark:to-orange-300 rounded-full"
                                    initial={{ scaleX: 0 }}
                                    animate={whyUsInView ? { scaleX: 1 } : { scaleX: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                ></motion.div>
                            </motion.div>

                            <motion.div
                                className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed"
                                initial={{ opacity: 0, y: 30 }}
                                animate={whyUsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <p className="text-xl font-light">
                                    <span className="font-bold text-orange-600 dark:text-orange-400">Settle Nation</span> is the top choice for PR visa consultancy in Chandigarh. We provide expert guidance and end-to-end support for your permanent residency journey.
                                </p>
                                <p className="text-lg">
                                    Our experienced team has successfully guided thousands of clients to achieve permanent residency in their desired countries. With a personalized approach and proven expertise, we ensure your PR success.
                                </p>
                            </motion.div>

                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                initial={{ opacity: 0 }}
                                animate={whyUsInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                {[
                                    { icon: Award, text: "Certified Consultants" },
                                    { icon: TrendingUp, text: "95% Success Rate" },
                                    { icon: Heart, text: "Personalized Support" },
                                    { icon: Shield, text: "Trusted Expertise" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center space-x-3 bg-gradient-to-r from-orange-50 to-orange-50 dark:from-orange-900/50 dark:to-orange-800/50 p-4 rounded-xl border border-orange-100 dark:border-orange-700"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={whyUsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                                    >
                                        <item.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                        <span className="font-semibold text-orange-800 dark:text-orange-300">{item.text}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </FloatingCard>

                    <FloatingCard inView={whyUsInView} delay={0.3}>
                        <motion.div
                            className="flex justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={whyUsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative group">
                                <motion.div
                                    className="absolute -inset-4 bg-gradient-to-br from-orange-400 via-orange-300 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 rounded-3xl opacity-30 group-hover:opacity-50"
                                    animate={whyUsInView ? { rotate: [0, 5, -5, 0], opacity: [0.3, 0.5, 0.3] } : { opacity: 0 }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                ></motion.div>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-100 dark:from-orange-900/50 dark:to-orange-800/50 rounded-3xl transform rotate-3 opacity-30 group-hover:rotate-6"
                                    animate={whyUsInView ? { rotate: [3, 6, 3], opacity: [0.3, 0.5, 0.3] } : { opacity: 0 }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                ></motion.div>
                                <motion.img
                                    src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pr?updatedAt=1757585273987"
                                    alt="PR Consultant"
                                    className="relative z-10 rounded-3xl shadow-2xl w-full max-w-lg object-cover transform group-hover:scale-105 transition-transform duration-500 border-4 border-white/50 dark:border-white/30"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={whyUsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.8 }}
                                />
                                <motion.div
                                    className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2"
                                    animate={whyUsInView ? { rotate: [0, 360], scale: [1, 1.2, 1] } : { scale: 0 }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <GraduationCap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </FloatingCard>
                </div>
            </div>

            {/* Services Section */}
            <div ref={servicesRef} className="bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 px-4 sm:px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <FloatingCard inView={servicesInView}>
                        <motion.div
                            className="text-center mb-20"
                            initial={{ opacity: 0, y: 50 }}
                            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-900/50 dark:to-orange-800/50 rounded-full px-6 py-3 mb-6"
                                animate={servicesInView ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <Sparkles className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                <span className="text-orange-700 dark:text-orange-300 font-medium">Our Expert Services</span>
                            </motion.div>
                            <motion.h2
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                                initial={{ opacity: 0, y: 30 }}
                                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Comprehensive PR Visa
                                <span className="block bg-gradient-to-r from-orange-600 to-orange-500 dark:from-orange-700 dark:to-orange-600 bg-clip-text text-transparent">
                                    Solutions
                                </span>
                            </motion.h2>
                            <motion.p
                                className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
                                initial={{ opacity: 0, y: 30 }}
                                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                From eligibility assessment to PR approval, we provide complete support for your permanent residency journey with personalized guidance every step of the way.
                            </motion.p>
                        </motion.div>
                    </FloatingCard>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <FloatingCard key={index} delay={index * 0.15} inView={servicesInView}>
                                <motion.div
                                    className={`group relative bg-gradient-to-br ${service.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 dark:border-gray-700/50 overflow-hidden`}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                >
                                    <motion.div
                                        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent dark:from-white/10 dark:to-transparent rounded-full transform translate-x-16 -translate-y-16"
                                        animate={servicesInView ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    ></motion.div>
                                    <motion.div
                                        className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent dark:from-white/5 dark:to-transparent rounded-full transform -translate-x-12 translate-y-12"
                                        animate={servicesInView ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    ></motion.div>

                                    <div className="relative z-10">
                                        <motion.div
                                            className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                                            animate={servicesInView ? { rotate: [0, 5, -5, 0] } : { rotate: 0 }}
                                            transition={{ duration: 1, delay: index * 0.15 }}
                                        >
                                            <service.icon className="w-8 h-8 text-white" />
                                        </motion.div>

                                        <motion.h3
                                            className="font-bold text-2xl text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300"
                                            initial={{ opacity: 0 }}
                                            animate={servicesInView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                                        >
                                            {service.title}
                                        </motion.h3>

                                        <motion.p
                                            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg"
                                            initial={{ opacity: 0 }}
                                            animate={servicesInView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                                        >
                                            {service.description}
                                        </motion.p>

                                        <motion.div
                                            className="space-y-3"
                                            initial={{ opacity: 0 }}
                                            animate={servicesInView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                                        >
                                            {service.features.map((feature, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    className="flex items-center space-x-3 group/item"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={servicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                                    transition={{ duration: 0.6, delay: index * 0.15 + 0.5 + idx * 0.1 }}
                                                >
                                                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 group-hover/item:scale-110 transition-transform duration-300" />
                                                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </FloatingCard>
                        ))}
                    </div>
                </div>
            </div>

            {/* Image Gallery Section */}
            <div ref={galleryRef} className="py-24 bg-gray-100 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <FloatingCard inView={galleryInView}>
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 50 }}
                            animate={galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.h2
                                className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                                initial={{ opacity: 0, y: 30 }}
                                animate={galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Your Path to
                                <span className="block bg-gradient-to-r from-orange-600 to-orange-500 dark:from-orange-700 dark:to-orange-600 bg-clip-text text-transparent">
                                    Permanent Residency
                                </span>
                            </motion.h2>
                            <motion.p
                                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                                initial={{ opacity: 0, y: 30 }}
                                animate={galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Learn about our comprehensive PR services designed to simplify your application process
                                and help you settle abroad with confidence.
                            </motion.p>
                        </motion.div>
                    </FloatingCard>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                src: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pr?updatedAt=1757585273987",
                                alt: "PR Consultation",
                                title: "Expert PR Consultation",
                                desc: "Get personalized guidance tailored to your immigration goals",
                                icon: FileText
                            },
                            {
                                src: "https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/pr1?updatedAt=1757585274227",
                                alt: "Application Assistance",
                                title: "Application Assistance",
                                desc: "Step-by-step support to ensure your PR application is complete and accurate",
                                icon: Award
                            }
                        ].map((item, index) => (
                            <FloatingCard key={index} delay={index * 0.2} inView={galleryInView}>
                                <motion.div
                                    className="group relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={galleryInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                >
                                    <motion.img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                                        initial={{ opacity: 0 }}
                                        animate={galleryInView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent dark:from-black/80 dark:via-black/30 dark:to-transparent"></div>
                                    <motion.div
                                        className="absolute bottom-6 left-6 right-6 text-white"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                                    >
                                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-gray-200 dark:text-gray-300">{item.desc}</p>
                                    </motion.div>
                                    <motion.div
                                        className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2"
                                        animate={galleryInView ? { rotate: [0, 360], scale: [1, 1.2, 1] } : { scale: 0 }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                                    >
                                        <item.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                    </motion.div>
                                </motion.div>
                            </FloatingCard>
                        ))}
                    </div>
                </div>
            </div>


            {/* Why Choose Us Features */}
            <div ref={featuresRef} className="bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-orange-900/30 dark:via-gray-900 dark:to-orange-900/30 py-24 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <FloatingCard inView={featuresInView}>
                        <motion.div
                            className="text-center mb-20"
                            initial={{ opacity: 0, y: 50 }}
                            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-900/50 dark:to-orange-800/50 rounded-full px-6 py-3 mb-6"
                                animate={featuresInView ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <Award className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                <span className="text-orange-700 dark:text-orange-300 font-medium">Why Choose Settle Nation</span>
                            </motion.div>
                            <motion.h2
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                                initial={{ opacity: 0, y: 30 }}
                                animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Your Trusted Partner for
                                <span className="block bg-gradient-to-r from-orange-600 to-orange-500 dark:from-orange-700 dark:to-orange-600 bg-clip-text text-transparent">
                                    PR Success
                                </span>
                            </motion.h2>
                            <motion.p
                                className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
                                initial={{ opacity: 0, y: 30 }}
                                animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Experience the difference with our dedicated PR visa specialists who understand your goals and deliver exceptional results.
                            </motion.p>
                        </motion.div>
                    </FloatingCard>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Award,
                                title: "Certified Experts",
                                description: "Registered immigration consultants with expertise in PR applications",
                                stat: "20+ Years",
                                color: "from-orange-500 to-orange-400 dark:from-orange-700 dark:to-orange-600",
                                bg: "from-orange-50 to-orange-25 dark:from-orange-900/30 dark:to-orange-800/30"
                            },
                            {
                                icon: TrendingUp,
                                title: "High Success Rate",
                                description: "Outstanding 95% success rate in PR visa applications",
                                stat: "95% Success",
                                color: "from-orange-500 to-orange-400 dark:from-orange-700 dark:to-orange-600",
                                bg: "from-orange-50 to-orange-25 dark:from-orange-900/30 dark:to-orange-800/30"
                            },
                            {
                                icon: Users,
                                title: "Clients Helped",
                                description: "Guided over 3000 clients to achieve permanent residency",
                                stat: "3000+ Clients",
                                color: "from-orange-500 to-orange-400 dark:from-orange-700 dark:to-orange-600",
                                bg: "from-orange-50 to-orange-25 dark:from-orange-900/30 dark:to-orange-800/30"
                            },
                            {
                                icon: Heart,
                                title: "Personal Care",
                                description: "Dedicated support with personalized attention throughout the process",
                                stat: "24/7 Support",
                                color: "from-orange-500 to-orange-400 dark:from-orange-700 dark:to-orange-600",
                                bg: "from-orange-50 to-orange-25 dark:from-orange-900/30 dark:to-orange-800/30"
                            }
                        ].map((feature, index) => (
                            <FloatingCard key={index} delay={index * 0.15} inView={featuresInView}>
                                <motion.div
                                    className={`group text-center p-8 rounded-3xl hover:bg-gradient-to-br hover:${feature.bg} transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden`}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 opacity-5"
                                        animate={featuresInView ? { opacity: [0.05, 0.1, 0.05] } : { opacity: 0 }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <div className="w-full h-full" style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f97316' fill-opacity='0.3'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                                        }}></div>
                                    </motion.div>

                                    <div className="relative z-10">
                                        <motion.div
                                            className={`inline-flex p-4 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                                            animate={featuresInView ? { rotate: [0, 5, -5, 0] } : { rotate: 0 }}
                                            transition={{ duration: 1, delay: index * 0.15 }}
                                        >
                                            <feature.icon className="w-8 h-8 text-white" />
                                        </motion.div>
                                        <motion.div
                                            className={`text-3xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300`}
                                            initial={{ opacity: 0 }}
                                            animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                                        >
                                            {feature.stat}
                                        </motion.div>
                                        <motion.h3
                                            className="font-bold text-xl text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300"
                                            initial={{ opacity: 0 }}
                                            animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                                        >
                                            {feature.title}
                                        </motion.h3>
                                        <motion.p
                                            className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300"
                                            initial={{ opacity: 0 }}
                                            animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                                        >
                                            {feature.description}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            </FloatingCard>
                        ))}
                    </div>
                </div>
            </div>

            {/* Enhanced Call to Action Section */}
            <div ref={ctaRef} className="relative py-32 px-4 sm:px-6 text-center text-white overflow-hidden">
                <motion.img
                    src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/high-angle-woman-working-as-travel-agent.jpg?updatedAt=1757585179480"
                    alt="PR Success"
                    className="absolute inset-0 w-full h-full object-cover transform scale-110"
                    style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.1)` }}
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={ctaInView ? { opacity: 1, scale: 1.1 } : { opacity: 0, scale: 1.2 }}
                    transition={{ duration: 1 }}
                />
                <div className="absolute inset-0 bg-orange-100 dark:bg-orange-900/50"></div>

                <div className="absolute inset-0">
                    {[...Array(25)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/30 dark:bg-white/20 rounded-full"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ duration: 1, delay: Math.random() * 0.5 }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                        ></motion.div>
                    ))}
                </div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    <FloatingCard inView={ctaInView}>
                        <motion.div
                            className="inline-flex items-center justify-center space-x-3 bg-white/10 dark:bg-gray-800/20 backdrop-blur-md rounded-full px-8 py-4 mb-8 border border-white/20 dark:border-white/10"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.8 }}
                        >
                            <GraduationCap className="w-6 h-6 text-orange-500 dark:text-orange-400" />
                            <span className="font-semibold text-orange-600 dark:text-orange-300 text-lg">Start Your PR Journey</span>
                            <Sparkles className="w-5 h-5 text-orange-500 dark:text-orange-400 animate-pulse" />
                        </motion.div>
                    </FloatingCard>

                    <FloatingCard inView={ctaInView} delay={0.2}>
                        <motion.h2
                            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight text-black dark:text-white"
                            initial={{ opacity: 0, y: 30 }}
                            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8 }}
                        >
                            Ready to Secure
                            <span className="block bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-300 dark:from-orange-700 dark:via-orange-600 dark:to-yellow-400 bg-clip-text text-transparent">
                                Permanent Residency?
                            </span>
                        </motion.h2>
                    </FloatingCard>

                    <FloatingCard inView={ctaInView} delay={0.4}>
                        <motion.p
                            className="text-xl sm:text-2xl text-black dark:text-gray-300 mb-12 leading-relaxed font-light max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Take the first step towards your new life abroad. Our expert consultants are here to guide you through every step of your
                            <span className="text-orange-400 dark:text-orange-300 font-semibold"> PR visa journey.</span>
                        </motion.p>
                    </FloatingCard>

                    <FloatingCard inView={ctaInView} delay={0.6}>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <button
                                className="group bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 dark:from-orange-700 dark:via-orange-600 dark:to-orange-500 hover:from-orange-700 hover:via-orange-600 hover:to-orange-500 dark:hover:from-orange-800 dark:hover:via-orange-700 dark:hover:to-orange-600 text-white px-12 py-6 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold text-xl flex items-center space-x-3 border-2 border-orange-400/50 dark:border-orange-300/50 hover:border-orange-300 dark:hover:border-orange-200"
                                onClick={() => navigate('/contact')}
                            >
                                <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                                <span>Start Application</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                            </button>
                            <button
                                className="group border-2 border-orange-400 dark:border-orange-300 text-orange-700 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/50 px-12 py-6 rounded-2xl transition-all duration-300 font-semibold text-xl flex items-center space-x-3 hover:border-orange-500 dark:hover:border-orange-400 hover:shadow-lg bg-white dark:bg-gray-800"
                                onClick={() => navigate('/contact')}
                            >
                                <Phone className="w-6 h-6 group-hover:animate-bounce text-orange-600 dark:text-orange-400" />
                                <span>Free Consultation</span>
                            </button>
                        </motion.div>
                    </FloatingCard>

                    <FloatingCard inView={ctaInView} delay={0.8}>
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-orange-500 dark:text-orange-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <motion.div
                                className="flex items-center space-x-2"
                                animate={ctaInView ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                                transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
                            >
                                <CheckCircle className="w-5 h-5" />
                                <span className="font-medium">Free assessment</span>
                            </motion.div>
                            <motion.div
                                className="flex items-center space-x-2"
                                animate={ctaInView ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                                transition={{ duration: 1, repeat: Infinity, delay: 0.8 }}
                            >
                                <CheckCircle className="w-5 h-5" />
                                <span className="font-medium">Expert guidance</span>
                            </motion.div>
                            <motion.div
                                className="flex items-center space-x-2"
                                animate={ctaInView ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                                transition={{ duration: 1, repeat: Infinity, delay: 1 }}
                            >
                                <CheckCircle className="w-5 h-5" />
                                <span className="font-medium">Guaranteed support</span>
                            </motion.div>
                        </motion.div>
                    </FloatingCard>

                    <FloatingCard inView={ctaInView} delay={1}>
                        <motion.div
                            className="mt-16 pt-8 border-t border-orange-200 dark:border-orange-700"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={ctaInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                <motion.div
                                    className="flex items-center justify-center space-x-3 bg-white dark:bg-gray-800 shadow-md rounded-xl px-6 py-4 border border-orange-100 dark:border-orange-700"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={ctaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <Phone className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                    <span className="text-gray-800 dark:text-gray-200 font-medium"> +91 7347045972</span>
                                </motion.div>
                                <motion.div
                                    className="flex items-center justify-center space-x-3 bg-white dark:bg-gray-800 shadow-md rounded-xl px-6 py-4 border border-orange-100 dark:border-orange-700"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={ctaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <Mail className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                    <span className="text-gray-800 dark:text-gray-200 font-medium">settlenation.in@gmail.com</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </FloatingCard>
                </div>
            </div>
        </div>
    );
};

export default PRVisa;