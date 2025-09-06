import React, { useState, useEffect } from "react";
import {
    Clock,
    RefreshCw,
    Zap,
    CheckCircle,
    FileText,
    Shield,
    Send,
    Bell,
    Star,
    Users,
    Calendar,
    Phone,
    Mail,
    Award,
    ArrowRight,
    Heart,
    Home,
    Plane,
    Sparkles,
    Globe,
    MapPin,
    TrendingUp,
    Check
} from "lucide-react";

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

const SuperVisa = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const benefits = [
        {
            icon: Clock,
            title: "Extended Stay Duration",
            description: "Stay in Canada for up to 2 years without renewal",
            features: ["Up to 2 years per visit", "No frequent renewals needed", "More quality time with family"],
            color: "from-blue-500 to-cyan-400",
            bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50"
        },
        {
            icon: RefreshCw,
            title: "Multiple Entry Privilege",
            description: "Valid for up to 10 years with unlimited entries",
            features: ["10-year validity", "Multiple entries allowed", "Flexible travel plans"],
            color: "from-emerald-500 to-green-400",
            bgColor: "bg-gradient-to-br from-emerald-50 to-green-50"
        },
        {
            icon: Zap,
            title: "Faster Processing",
            description: "Quicker than regular visitor visas for family reunification",
            features: ["Priority processing", "Faster approval times", "Quick family reunification"],
            color: "from-purple-500 to-violet-400",
            bgColor: "bg-gradient-to-br from-purple-50 to-violet-50"
        }
    ];

    const services = [
        {
            icon: CheckCircle,
            title: "Eligibility Assessment",
            description: "Comprehensive evaluation of your profile and requirements",
            features: ["Complete profile assessment", "Requirements verification", "Success probability analysis"],
            color: "text-blue-600",
            accent: "blue"
        },
        {
            icon: FileText,
            title: "Document Preparation",
            description: "Professional assistance with all required documentation",
            features: ["Invitation letter drafting", "Financial documentation", "Supporting documents review"],
            color: "text-emerald-600",
            accent: "emerald"
        },
        {
            icon: Shield,
            title: "Insurance Guidance",
            description: "Help finding suitable medical insurance coverage",
            features: ["Insurance comparison", "Coverage verification", "Compliance assistance"],
            color: "text-purple-600",
            accent: "purple"
        },
        {
            icon: Send,
            title: "Application Submission",
            description: "Professional submission with attention to detail",
            features: ["Error-free submission", "Deadline management", "Quality assurance"],
            color: "text-orange-600",
            accent: "orange"
        },
        {
            icon: Bell,
            title: "Application Tracking",
            description: "Regular updates and monitoring until approval",
            features: ["Real-time updates", "Status monitoring", "Response handling"],
            color: "text-red-600",
            accent: "red"
        },
        {
            icon: Users,
            title: "Family Support",
            description: "Guidance for both sponsors and applicants",
            features: ["Sponsor assistance", "Applicant guidance", "Family coordination"],
            color: "text-indigo-600",
            accent: "indigo"
        }
    ];

    const processSteps = [
        {
            step: 1,
            title: "Initial Consultation",
            description: "Free assessment of your case and requirements",
            duration: "30 minutes",
            icon: Users
        },
        {
            step: 2,
            title: "Document Collection",
            description: "Gather all necessary documents and paperwork",
            duration: "1-2 weeks",
            icon: FileText
        },
        {
            step: 3,
            title: "Application Preparation",
            description: "Professional preparation of your application",
            duration: "3-5 days",
            icon: Shield
        },
        {
            step: 4,
            title: "Submission & Tracking",
            description: "Submit application and monitor progress",
            duration: "2-4 months",
            icon: Send
        }
    ];

    return (
        <div className="bg-gray-50 overflow-hidden">
            {/* Floating Elements */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute top-1/3 right-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-100 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3s' }}></div>
                <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-br from-purple-200 to-purple-100 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Enhanced Hero Section */}
            <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
                <img
                    src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/image(1).png?updatedAt=1757142270123"
                    alt="Super Visa"
                    className="absolute inset-0 w-full h-full object-cover transform scale-110"
                    style={{ transform: `translateY(${scrollY * 0.5}px) scale(1.1)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70"></div>

                {/* Animated Particles */}
                <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        ></div>
                    ))}
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                    <FloatingCard>
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-orange-400/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                            <Sparkles className="w-5 h-5 text-orange-300 animate-pulse" />
                            <span className="text-orange-200 font-medium">Canada's #1 Super Visa Specialists</span>
                        </div>
                    </FloatingCard>

                    <FloatingCard delay={200}>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                            Super Visa
                            <span className="block bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                                Services
                            </span>
                        </h1>
                    </FloatingCard>

                    <FloatingCard delay={400}>
                        <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-12 font-light">
                            Helping parents and grandparents stay connected with family in Canada through
                            <span className="text-orange-300 font-semibold"> smooth and reliable </span>
                            Super Visa processing.
                        </p>
                    </FloatingCard>

                    <FloatingCard delay={600}>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <button className="group bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center space-x-3">
                                <Plane className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                                <span>Start Application</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                            <button className="group border-2 border-white/30 text-white hover:bg-white/10 px-10 py-5 rounded-2xl transition-all duration-300 font-semibold text-lg backdrop-blur-sm flex items-center space-x-3">
                                <Phone className="w-6 h-6 group-hover:animate-pulse" />
                                <span>Free Consultation</span>
                            </button>
                        </div>
                    </FloatingCard>
                </div>
            </div>


            {/* Enhanced About Section */}
            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <FloatingCard>
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-orange-50 rounded-full px-4 py-2">
                                    <Globe className="w-5 h-5 text-orange-600" />
                                    <span className="text-orange-700 font-medium text-sm">What is a Super Visa?</span>
                                </div>
                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    Reunite with
                                    <span className="block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                                        Your Family
                                    </span>
                                </h2>
                                <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></div>
                            </div>

                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p className="text-xl font-light">
                                    At <span className="font-bold text-orange-600">Settle Nation</span>, we understand how important family connections are, especially when it comes to bringing parents and grandparents to visit you in Canada.
                                </p>
                                <p className="text-lg">
                                    The Super Visa allows parents and grandparents of Canadian citizens and permanent residents to stay for up to
                                    <span className="font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-lg mx-1">two years</span>
                                    at a time without renewal. Our expert team will help you navigate the application process with complete ease and confidence.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    { icon: Award, text: "Expert Guidance" },
                                    { icon: TrendingUp, text: "High Success Rate" },
                                    { icon: Heart, text: "Family Reunification" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center space-x-3 bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
                                        <item.icon className="w-6 h-6 text-green-600" />
                                        <span className="font-semibold text-green-800">{item.text}</span>
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
                                    src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/image.png?updatedAt=1757142269958"
                                    alt="Super Visa Info"
                                    className="relative z-10 rounded-3xl shadow-2xl w-full max-w-lg object-cover transform group-hover:scale-105 transition-transform duration-500 border-4 border-white/50"
                                />
                                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2">
                                    <MapPin className="w-6 h-6 text-orange-600" />
                                </div>
                            </div>
                        </div>
                    </FloatingCard>
                </div>
            </div>

            {/* Enhanced Benefits Section */}
            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 px-4 sm:px-6 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <FloatingCard>
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-orange-50 rounded-full px-6 py-3 mb-6">
                                <Star className="w-5 h-5 text-orange-600" />
                                <span className="text-orange-700 font-medium">Key Advantages</span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Benefits of the
                                <span className="block bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                                    Super Visa
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                                Why choose the Super Visa for your parents and grandparents? Discover the advantages that make family reunification easier and more convenient.
                            </p>
                        </div>
                    </FloatingCard>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <FloatingCard key={index} delay={index * 200}>
                                <div className={`group relative ${benefit.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 overflow-hidden`}>
                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>

                                    <div className="relative z-10">
                                        <div className={`inline-flex p-4 bg-gradient-to-br ${benefit.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                                            <benefit.icon className="w-8 h-8 text-white" />
                                        </div>

                                        <h3 className="font-bold text-2xl text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                                            {benefit.title}
                                        </h3>

                                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                            {benefit.description}
                                        </p>

                                        <div className="space-y-3">
                                            {benefit.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center space-x-3 group/item">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
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

            {/* Enhanced Services Section */}
            <div className="py-24 px-4 sm:px-6 relative overflow-hidden bg-white">
                {/* Subtle Background Shapes */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "1s" }}
                    ></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <FloatingCard>
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center space-x-2 bg-orange-50 rounded-full px-6 py-3 mb-6 border border-orange-100">
                                <Sparkles className="w-5 h-5 text-orange-500" />
                                <span className="text-orange-600 font-medium">Complete Solutions</span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Our Super Visa
                                <span className="block bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                                    Services
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                                From eligibility assessment to approval – we guide you through every
                                step with expert care and unwavering attention to detail.
                            </p>
                        </div>
                    </FloatingCard>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <FloatingCard key={index} delay={index * 150}>
                                <div className="group relative bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10">
                                        <div className="inline-flex p-4 bg-orange-50 rounded-2xl mb-6 group-hover:bg-orange-100 transition-all duration-300 border border-orange-100">
                                            <service.icon
                                                className={`w-8 h-8 ${service.color} group-hover:text-orange-500 transition-colors duration-300`}
                                            />
                                        </div>

                                        <h3 className="font-bold text-xl text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        <div className="space-y-3">
                                            {service.features.map((feature, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center space-x-3 group/item"
                                                >
                                                    <Check className="w-4 h-4 text-green-500 group-hover/item:scale-110 transition-transform duration-300" />
                                                    <span className="text-gray-500 text-sm group-hover/item:text-gray-700 transition-colors duration-300">
                                                        {feature}
                                                    </span>
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


            {/* Enhanced Process Steps */}
            <div className="bg-white py-24 px-4 sm:px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <FloatingCard>
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-orange-50 rounded-full px-6 py-3 mb-6">
                                <Calendar className="w-5 h-5 text-orange-600" />
                                <span className="text-orange-700 font-medium">Step by Step</span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Our Streamlined
                                <span className="block bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                                    Process
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                                Simple, transparent, and efficient - our streamlined process ensures your Super Visa application is handled with the utmost professionalism.
                            </p>
                        </div>
                    </FloatingCard>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Connection Lines */}
                        <div className="hidden lg:block absolute top-20 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent z-0"></div>

                        {processSteps.map((step, index) => (
                            <FloatingCard key={index} delay={index * 200}>
                                <div className="relative text-center z-10">
                                    <div className="relative mb-8">
                                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-500 text-white rounded-2xl text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            {step.step}
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-300 rounded-full flex items-center justify-center">
                                            <step.icon className="w-3 h-3 text-white " />
                                        </div>
                                    </div>

                                    <h3 className="font-bold text-xl text-gray-900 mb-4">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {step.description}
                                    </p>

                                    <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-100 to-orange-50 px-4 py-2 rounded-full">
                                        <Calendar className="w-4 h-4 text-orange-600" />
                                        <span className="text-sm font-semibold text-orange-700">{step.duration}</span>
                                    </div>
                                </div>
                            </FloatingCard>
                        ))}
                    </div>
                </div>
            </div>

            {/* Enhanced Why Choose Us */}
            <div className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-24 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <FloatingCard>
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-orange-50 rounded-full px-6 py-3 mb-6">
                                <Award className="w-5 h-5 text-orange-600" />
                                <span className="text-orange-700 font-medium">Why Settle Nation</span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Why Choose Us for
                                <span className="block bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                                    Super Visa?
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                                Experience the difference with our dedicated Super Visa specialists who understand the importance of family reunification and deliver exceptional results.
                            </p>
                        </div>
                    </FloatingCard>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Award,
                                title: "Certified Experts",
                                description: "Registered immigration consultants with proven expertise in Super Visa applications",
                                stat: "15+ Years",
                                color: "from-blue-500 to-blue-400",
                                bg: "from-blue-50 to-blue-25"
                            },
                            {
                                icon: Heart,
                                title: "Family Focus",
                                description: "Specialized exclusively in family reunification cases with personal attention",
                                stat: "1000+ Families",
                                color: "from-red-500 to-pink-400",
                                bg: "from-red-50 to-pink-25"
                            },
                            {
                                icon: Star,
                                title: "High Success Rate",
                                description: "Outstanding 95% success rate in Super Visa applications and approvals",
                                stat: "95% Success",
                                color: "from-yellow-500 to-orange-400",
                                bg: "from-yellow-50 to-orange-25"
                            },
                            {
                                icon: Users,
                                title: "Personal Care",
                                description: "Dedicated support throughout the entire process with 24/7 assistance",
                                stat: "24/7 Support",
                                color: "from-green-500 to-emerald-400",
                                bg: "from-green-50 to-emerald-25"
                            }
                        ].map((feature, index) => (
                            <FloatingCard key={index} delay={index * 150}>
                                <div className={`group text-center p-8 rounded-3xl hover:bg-gradient-to-br hover:${feature.bg} transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl border border-gray-100 hover:border-white relative overflow-hidden`}>
                                    {/* Background Pattern */}
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

            {/* Enhanced Closing Section */}
            <div className="relative py-32 px-4 sm:px-6 text-center overflow-hidden bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50">
                {/* Decorative Shapes */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-10 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "1s" }}
                    ></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    <FloatingCard>
                        <div className="inline-flex items-center justify-center space-x-3 bg-white shadow-lg rounded-full px-6 py-3 mb-8 border border-orange-200">
                            <Home className="w-6 h-6 text-orange-600" />
                            <span className="font-semibold text-orange-700">
                                Family Reunification Specialists
                            </span>
                            <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
                        </div>
                    </FloatingCard>

                    <FloatingCard delay={200}>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900">
                            Ready to Apply for a
                            <span className="block bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                                Super Visa?
                            </span>
                        </h2>
                    </FloatingCard>

                    <FloatingCard delay={400}>
                        <p className="text-xl sm:text-2xl text-gray-700 mb-12 leading-relaxed font-light max-w-4xl mx-auto">
                            Let us help you reunite with your loved ones in Canada. Contact us today
                            and take the first step towards
                            <span className="text-orange-600 font-semibold">
                                {" "}
                                bringing your family together.
                            </span>
                        </p>
                    </FloatingCard>

                    <FloatingCard delay={600}>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                            <button className="group bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 hover:from-orange-700 hover:via-orange-600 hover:to-orange-500 text-white px-12 py-6 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold text-xl flex items-center space-x-3">
                                <Plane className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                                <span>Get Started Today</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                            </button>
                            <button className="group border-2 border-orange-400 text-orange-700 hover:bg-orange-50 px-12 py-6 rounded-2xl transition-all duration-300 font-semibold text-xl flex items-center space-x-3 hover:border-orange-500 hover:shadow-lg bg-white">
                                <Phone className="w-6 h-6 group-hover:animate-bounce text-orange-600" />
                                <span>Free Consultation</span>
                            </button>
                        </div>
                    </FloatingCard>

                    <FloatingCard delay={800}>
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-orange-700">
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                <span className="font-medium">Free assessment</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                <span className="font-medium">Expert guidance</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                <span className="font-medium">Family reunification</span>
                            </div>
                        </div>
                    </FloatingCard>

                    {/* Contact Information */}
                    <FloatingCard delay={1000}>
                        <div className="mt-16 pt-8 border-t border-orange-200">
                            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                <div className="flex items-center justify-center space-x-3 bg-white shadow-md rounded-xl px-6 py-4 border border-orange-100">
                                    <Phone className="w-5 h-5 text-orange-600" />
                                    <span className="text-gray-800 font-medium">+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center justify-center space-x-3 bg-white shadow-md rounded-xl px-6 py-4 border border-orange-100">
                                    <Mail className="w-5 h-5 text-orange-600" />
                                    <span className="text-gray-800 font-medium">
                                        info@settlenation.ca
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

export default SuperVisa;