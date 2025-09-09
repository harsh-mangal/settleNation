import React, { useState, useEffect } from "react";
import {
    GraduationCap,
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
    Plane,
    Home,
    Target,
    Shield,
    Clock
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <span>{count.toLocaleString()}{suffix}</span>;
};

const FloatingCard = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
            {children}
        </div>
    );
};

const StudyVisa = () => {
    const [scrollY, setScrollY] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        {
            icon: GraduationCap,
            title: "Consultation & Assessment",
            description: "Get a detailed assessment of your academic background and career goals.",
            features: ["Academic evaluation", "Career pathway planning", "University matching"],
            color: "from-orange-500 to-orange-600",
            bgColor: "from-orange-50 to-orange-100"
        },
        {
            icon: FileText,
            title: "Documentation Assistance",
            description: "We handle your paperwork carefully to avoid delays or rejections.",
            features: ["Document preparation", "Application review", "Error prevention"],
            color: "from-green-500 to-green-600",
            bgColor: "from-green-50 to-green-100"
        },
        {
            icon: Users,
            title: "Interview Preparation",
            description: "Mock interviews to boost your confidence for visa interviews.",
            features: ["Mock interviews", "Confidence building", "Success strategies"],
            color: "from-orange-500 to-orange-600",
            bgColor: "from-purple-50 to-purple-100"
        },
        {
            icon: ClipboardCheck,
            title: "PR Consulting",
            description: "Guidance on permanent residency options after your studies.",
            features: ["PR pathway planning", "Post-study options", "Long-term strategy"],
            color: "from-orange-500 to-orange-600",
            bgColor: "from-orange-50 to-orange-100"
        },
        {
            icon: Globe,
            title: "Personalized Service",
            description: "Tailored solutions for every student's unique situation.",
            features: ["Custom solutions", "One-on-one guidance", "Ongoing support"],
            color: "from-indigo-500 to-indigo-600",
            bgColor: "from-indigo-50 to-indigo-100"
        },
        {
            icon: Shield,
            title: "Complete Support",
            description: "End-to-end assistance from application to visa approval.",
            features: ["Application tracking", "Status updates", "Complete guidance"],
            color: "from-red-500 to-red-600",
            bgColor: "from-red-50 to-red-100"
        }
    ];

    const countries = [
        { name: "USA", flag: "🇺🇸", color: "from-red-500 to-blue-500" },
        { name: "United Kingdom", flag: "🇬🇧", color: "from-blue-600 to-red-500" },
        { name: "Canada", flag: "🇨🇦", color: "from-red-600 to-white" },
        { name: "Australia", flag: "🇦🇺", color: "from-blue-500 to-yellow-400" },
        { name: "New Zealand", flag: "🇳🇿", color: "from-blue-600 to-red-500" },
        { name: "Schengen", flag: "🇪🇺", color: "from-blue-600 to-yellow-400" }
    ];

    const processSteps = [
        {
            step: 1,
            title: "Initial Consultation",
            description: "Free assessment and personalized guidance",
            duration: "30 minutes",
            icon: Users
        },
        {
            step: 2,
            title: "University Selection",
            description: "Choose the best universities for your profile",
            duration: "1 week",
            icon: BookOpen
        },
        {
            step: 3,
            title: "Application Process",
            description: "Complete application submission",
            duration: "2-4 weeks",
            icon: FileText
        },
        {
            step: 4,
            title: "Visa Processing",
            description: "Visa application and approval",
            duration: "4-8 weeks",
            icon: Award
        }
    ];

    return (
        <div className="bg-gray-50 overflow-hidden">
            {/* Floating Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-1/2 right-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-100 rounded-full opacity-15 animate-bounce" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-gradient-to-br from-purple-200 to-purple-100 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Enhanced Hero Section */}
            <div className="relative w-full 
                h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] 
                text-white overflow-hidden flex items-center justify-center text-center">

                {/* Background Image */}
                <img
                    src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/young-hipster-company-friends-having-fun-together-smiling-listening-music-wireless-speakers.jpg?updatedAt=1757145362854"
                    alt="Study Abroad"
                    className="absolute inset-0 w-full h-full object-cover scale-110"
                    style={{ transform: `translateY(${scrollY * 0.5}px) scale(1.1)` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70"></div>

                {/* Animated Particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/20 rounded-full animate-ping"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 4}s`,
                                animationDuration: `${2 + Math.random() * 3}s`,
                            }}
                        ></div>
                    ))}
                </div>

                {/* Centered Content */}
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                    {/* Small Label */}
                    <FloatingCard>
                        <div className="inline-flex items-center space-x-2.5 sm:space-x-3 bg-gradient-to-r from-orange-500/20 to-orange-400/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-white/20">
                            <GraduationCap className="w-5 sm:w-6 h-5 sm:h-6 text-orange-300 animate-pulse" />
                            <span className="text-xs sm:text-sm md:text-base text-orange-200 font-semibold">
                                Leading Study Visa Consultants
                            </span>
                        </div>
                    </FloatingCard>

                    {/* Heading */}
                    <FloatingCard delay={200}>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                            Your Pathway to
                            <span className="block bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                                Global Education
                            </span>
                        </h1>
                    </FloatingCard>

                    {/* Description */}
                    <FloatingCard delay={400}>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12 font-light">
                            Expert study visa consultants in
                            <span className="text-orange-300 font-semibold"> Chandigarh </span>
                            guiding you every step of the way to achieve your dreams.
                        </p>
                    </FloatingCard>

                    {/* Buttons */}
                    <FloatingCard delay={600}>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                            <button className="group bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-2xl shadow-lg sm:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold text-sm sm:text-lg flex items-center space-x-2 sm:space-x-3"
                                onClick={() => navigate('/contact')}
                            >
                                <BookOpen className="w-5 sm:w-6 h-5 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                                <span>Start Your Journey</span>
                                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                            <button className="group border-2 border-white/30 text-white hover:bg-white/10 px-6 sm:px-10 py-3 sm:py-5 rounded-2xl transition-all duration-300 font-semibold text-sm sm:text-lg backdrop-blur-sm flex items-center space-x-2 sm:space-x-3"
                                onClick={() => navigate('/contact')}
                            >
                                <Phone className="w-5 sm:w-6 h-5 sm:h-6 group-hover:animate-pulse" />
                                <span>Free Consultation</span>
                            </button>
                        </div>
                    </FloatingCard>
                </div>
            </div>



            {/* Stats Section */}
            <div className="bg-white py-20 px-4 sm:px-6 -mt-20 relative z-20">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 sm:p-16 border border-gray-100">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            {[
                                { end: 5000, suffix: "+", label: "Students Helped", icon: Users },
                                { end: 98, suffix: "%", label: "Success Rate", icon: TrendingUp },
                                { end: 15, suffix: "+", label: "Years Experience", icon: Award },
                                { end: 50, suffix: "+", label: "Universities", icon: GraduationCap }
                            ].map((stat, index) => (
                                <FloatingCard key={index} delay={index * 100}>
                                    <div className="space-y-4 p-6 rounded-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-25 transition-all duration-300 group">
                                        <div className="inline-flex p-3 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                            <stat.icon className="w-6 h-6 text-orange-600" />
                                        </div>
                                        <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                                            <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                                        </div>
                                        <p className="text-gray-600 font-semibold">{stat.label}</p>
                                    </div>
                                </FloatingCard>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <FloatingCard>
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-orange-50 rounded-full px-4 py-2">
                                    <Star className="w-5 h-5 text-orange-600" />
                                    <span className="text-orange-700 font-medium text-sm">Why Choose Settle Nation?</span>
                                </div>
                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    Leading Study Visa
                                    <span className="block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                                        Consultants
                                    </span>
                                </h2>
                                <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></div>
                            </div>

                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p className="text-xl font-light">
                                    <span className="font-bold text-orange-600">Settle Nation</span> is recognized as the leading study visa consultants in Chandigarh. We provide expert guidance and comprehensive support to students aiming to study abroad.
                                </p>
                                <p className="text-lg">
                                    Our dedicated team of experts has helped thousands of students achieve their dreams of studying in top universities worldwide. With our personalized approach and proven track record, we ensure your success.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Award, text: "Certified Consultants" },
                                    { icon: TrendingUp, text: "98% Success Rate" },
                                    { icon: Heart, text: "Personalized Care" },
                                    { icon: Shield, text: "Trusted Partner" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center space-x-3 bg-gradient-to-r from-orange-50 to-orange-50 p-4 rounded-xl border border-green-100">
                                        <item.icon className="w-6 h-6 text-orange-600" />
                                        <span className="font-semibold text-orange-800">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FloatingCard>

                    <FloatingCard delay={300}>
                        <div className="flex justify-center">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-br from-orange-400 via-orange-300 to-orange-200 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-100 rounded-3xl transform rotate-3 opacity-30 group-hover:rotate-6 transition-transform duration-500"></div>
                                <img
                                    src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/portrait-young-woman-with-passport.jpg?updatedAt=1757141981646"
                                    alt="Student with Passport"
                                    className="relative z-10 rounded-3xl shadow-2xl w-full max-w-lg object-cover transform group-hover:scale-105 transition-transform duration-500 border-4 border-white/50"
                                />
                                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2">
                                    <GraduationCap className="w-6 h-6 text-orange-600" />
                                </div>
                            </div>
                        </div>
                    </FloatingCard>
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 px-4 sm:px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <FloatingCard>
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-orange-50 rounded-full px-6 py-3 mb-6">
                                <Sparkles className="w-5 h-5 text-orange-600" />
                                <span className="text-orange-700 font-medium">Our Expert Services</span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Comprehensive Study Visa
                                <span className="block bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                                    Solutions
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                                From initial consultation to visa approval, we provide complete support for your study abroad journey with personalized guidance every step of the way.
                            </p>
                        </div>
                    </FloatingCard>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <FloatingCard key={index} delay={index * 150}>
                                <div className={`group relative bg-gradient-to-br ${service.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 overflow-hidden`}>
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>

                                    <div className="relative z-10">
                                        <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                                            <service.icon className="w-8 h-8 text-white" />
                                        </div>

                                        <h3 className="font-bold text-2xl text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                            {service.description}
                                        </p>

                                        <div className="space-y-3">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center space-x-3 group/item">
                                                    <CheckCircle className="w-4 h-4 text-green-500 group-hover/item:scale-110 transition-transform duration-300" />
                                                    <span className="text-gray-700 font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </FloatingCard>
                        ))}
                    </div>
                </div>
            </div>

            {/* Image Gallery Section */}
            <div className="py-24 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <FloatingCard>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                                Success Stories &
                                <span className="block bg-gradient-to-r from-orange-600 to-orage-500 bg-clip-text text-transparent">
                                    Student Journey
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                See how we've helped thousands of students achieve their dreams of studying abroad
                            </p>
                        </div>
                    </FloatingCard>

                    <div className="grid md:grid-cols-2 gap-8">
                        <FloatingCard delay={200}>
                            <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                                <img
                                    src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/image.png?updatedAt=1757145654343"
                                    alt="Visa Assistance Services"
                                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Professional Visa Assistance</h3>
                                    <p className="text-gray-200">Expert guidance throughout your application process</p>
                                </div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                                    <FileText className="w-6 h-6 text-orange-600" />
                                </div>
                            </div>
                        </FloatingCard>

                        <FloatingCard delay={400}>
                            <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                                <img
                                    src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/image5.png?updatedAt=1757146043265"
                                    alt="Student Success Stories"
                                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Student Success Stories</h3>
                                    <p className="text-gray-200">Celebrating achievements of our successful students</p>
                                </div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                                    <Award className="w-6 h-6 text-orange-600" />
                                </div>
                            </div>
                        </FloatingCard>
                    </div>
                </div>
            </div>


            {/* Why Choose Us Features */}
            <div className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-24 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <FloatingCard>
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-orange-50 rounded-full px-6 py-3 mb-6">
                                <Award className="w-5 h-5 text-orange-600" />
                                <span className="text-orange-700 font-medium">Why Choose Settle Nation</span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Your Trusted Partner for
                                <span className="block bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                                    Study Abroad Success
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                                Experience the difference with our dedicated study visa specialists who understand your dreams and deliver exceptional results.
                            </p>
                        </div>
                    </FloatingCard>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Award,
                                title: "Certified Experts",
                                description: "Registered immigration consultants with proven expertise in study visa applications",
                                stat: "20+ Years",
                                color: "from-orange-500 to-orange-400",
                                bg: "from-orange-50 to-orange-25"
                            },
                            {
                                icon: TrendingUp,
                                title: "High Success Rate",
                                description: "Outstanding 98% success rate in study visa applications and approvals",
                                stat: "98% Success",
                                color: "from-green-500 to-emerald-400",
                                bg: "from-green-50 to-emerald-25"
                            },
                            {
                                icon: Users,
                                title: "Students Helped",
                                description: "Successfully guided over 5000 students to achieve their study abroad dreams",
                                stat: "5000+ Students",
                                color: "from-purple-500 to-violet-400",
                                bg: "from-purple-50 to-violet-25"
                            },
                            {
                                icon: Heart,
                                title: "Personal Care",
                                description: "Dedicated support throughout the entire process with personalized attention",
                                stat: "24/7 Support",
                                color: "from-red-500 to-pink-400",
                                bg: "from-red-50 to-pink-25"
                            }
                        ].map((feature, index) => (
                            <FloatingCard key={index} delay={index * 150}>
                                <div className={`group text-center p-8 rounded-3xl hover:bg-gradient-to-br hover:${feature.bg} transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl border border-gray-100 hover:border-white relative overflow-hidden`}>
                                    <div className="absolute inset-0 opacity-5">
                                        <div className="w-full h-full" style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f97316' fill-opacity='0.3'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                                        }}></div>
                                    </div>

                                    <div className="relative z-10">
                                        <div className={`inline-flex p-4 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                                            <feature.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div className={`text-3xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300`}>
                                            {feature.stat}
                                        </div>
                                        <h3 className="font-bold text-xl text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </FloatingCard>
                        ))}
                    </div>
                </div>
            </div>

            {/* Enhanced Call to Action Section */}
            <div className="relative py-32 px-4 sm:px-6 text-center text-white overflow-hidden">
                <img
                    src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/young-hipster-company-friends-having-fun-together-smiling-listening-music-wireless-speakers.jpg?updatedAt=1757145362854"
                    alt="Students Success"
                    className="absolute inset-0 w-full h-full object-cover transform scale-110"
                    style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.1)` }}
                />
                <div className="absolute inset-0 bg-orange-100"></div>

                {/* Animated Elements */}
                <div className="absolute inset-0">
                    {[...Array(25)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${3 + Math.random() * 2}s`
                            }}
                        ></div>
                    ))}
                </div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    <FloatingCard>
                        <div className="inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 mb-8 border border-white/20">
                            <GraduationCap className="w-6 h-6 text-orange-500" />
                            <span className="font-semibold text-orange-600 text-lg">Start Your Study Abroad Journey</span>
                            <Sparkles className="w-5 h-5 text-orange-500 animate-pulse" />
                        </div>
                    </FloatingCard>

                    <FloatingCard delay={200}>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight text-black">
                            Ready to Study
                            <span className="block bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-300 bg-clip-text text-transparent">
                                Abroad?
                            </span>
                        </h2>
                    </FloatingCard>

                    <FloatingCard delay={400}>
                        <p className="text-xl sm:text-2xl text-black mb-12 leading-relaxed font-light max-w-4xl mx-auto">
                            Take the first step towards your international education dream. Our expert consultants are here to guide you through every step of your
                            <span className="text-orange-400 font-semibold"> study visa journey.</span>
                        </p>
                    </FloatingCard>

                    <FloatingCard delay={600}>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                            <button className="group bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 hover:from-orange-700 hover:via-orange-600 hover:to-orange-500 text-white px-12 py-6 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold text-xl flex items-center space-x-3 border-2 border-orange-400/50 hover:border-orange-300"
                                onClick={() => navigate('/contact')}
                            >
                                <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                                <span>Start Application</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                            </button>
                            <button className="group border-2 border-orange-400 text-orange-700 hover:bg-orange-50 px-12 py-6 rounded-2xl transition-all duration-300 font-semibold text-xl flex items-center space-x-3 hover:border-orange-500 hover:shadow-lg bg-white"
                                onClick={() => navigate('/contact')}
                            >
                                <Phone className="w-6 h-6 group-hover:animate-bounce text-orange-600" />
                                <span>Free Consultation</span>
                            </button>
                        </div>
                    </FloatingCard>

                    <FloatingCard delay={800}>
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-orange-500">
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5" />
                                <span className="font-medium">Free assessment</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5" />
                                <span className="font-medium">Expert guidance</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5" />
                                <span className="font-medium">Guaranteed support</span>
                            </div>
                        </div>
                    </FloatingCard>

                    {/* Contact Information */}
                    <FloatingCard delay={1000}>
                        <div className="mt-16 pt-8 border-t border-orange-200">
                            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                <div className="flex items-center justify-center space-x-3 bg-white shadow-md rounded-xl px-6 py-4 border border-orange-100">
                                    <Phone className="w-5 h-5 text-orange-600" />
                                    <span className="text-gray-800 font-medium"> +91 7347045972</span>
                                </div>
                                <div className="flex items-center justify-center space-x-3 bg-white shadow-md rounded-xl px-6 py-4 border border-orange-100">
                                    <Mail className="w-5 h-5 text-orange-600" />
                                    <span className="text-gray-800 font-medium">
                                        settlenation.in@gmail.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </FloatingCard>
                </div>
            </div>
        </div>
    );
};

export default StudyVisa;