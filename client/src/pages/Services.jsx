import React, { useState, useEffect } from "react";
import {
  Plane,
  BookOpen,
  Users,
  Briefcase,
  FileText,
  Mic,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Calendar,
  Clock,
  Award
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

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);

    const navigate=useNavigate();
  const services = [
    {
      icon: Plane,
      title: "Super Visa",
      description: "Extended family visit visas for parents and grandparents with comprehensive medical coverage and streamlined processing.",
      features: ["Medical Insurance Included", "10-Year Validity", "6-Month Stays"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
      path:'/super-visa'
    },
    {
      icon: BookOpen,
      title: "Study Visa",
      description: "Complete educational pathway guidance with university selection, application support, and student visa processing.",
      features: ["University Selection", "Application Support", "Scholarship Guidance"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100"
    },
    {
      icon: Users,
      title: "Visa Counselling",
      description: "Personalized consultation with certified immigration experts to determine the best visa pathway for your goals.",
      features: ["One-on-One Consultation", "Pathway Assessment", "Document Review"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100"
    },
    {
      icon: Briefcase,
      title: "Tourist Visa",
      description: "Hassle-free leisure travel visa processing for vacations, business trips, and cultural exploration worldwide.",
      features: ["Quick Processing", "Multiple Destinations", "Travel Planning"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      hoverColor: "hover:bg-orange-100"
    },
    {
      icon: FileText,
      title: "IELTS / PTE",
      description: "Comprehensive language test preparation with expert trainers, practice materials, and guaranteed score improvement.",
      features: ["Expert Trainers", "Practice Tests", "Score Guarantee"],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      hoverColor: "hover:bg-red-100"
    },
    {
      icon: Mic,
      title: "Interview Preparation",
      description: "Professional interview coaching with mock sessions, confidence building, and success strategies for visa interviews.",
      features: ["Mock Interviews", "Confidence Building", "Success Strategies"],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      hoverColor: "hover:bg-indigo-100"
    }
  ];

  const countries = [
    { 
      name: "Canada", 
      flag: "🇨🇦", 
      description: "Study, work, and settle with comprehensive immigration programs.",
      highlights: ["Express Entry", "Provincial Programs", "Study Permits"],
      popularPrograms: ["Federal Skilled Worker", "Canadian Experience Class"],
      processingTime: "6-12 months"
    },
    { 
      name: "USA", 
      flag: "🇺🇸", 
      description: "World-leading opportunities for education, career growth, and innovation.",
      highlights: ["H1B Visa", "Student Visas", "Investment Visas"],
      popularPrograms: ["F1 Student Visa", "H1B Work Visa"],
      processingTime: "3-8 months"
    },
    { 
      name: "UK", 
      flag: "🇬🇧", 
      description: "Premier destination for world-class education and professional development.",
      highlights: ["Student Visa", "Skilled Worker", "Global Talent"],
      popularPrograms: ["Tier 4 Student", "Skilled Worker Visa"],
      processingTime: "2-6 months"
    },
    { 
      name: "Australia", 
      flag: "🇦🇺", 
      description: "Leading destination for quality education and permanent residence opportunities.",
      highlights: ["SkillSelect", "Student Visa", "Working Holiday"],
      popularPrograms: ["Skilled Independent", "Employer Nomination"],
      processingTime: "4-10 months"
    },
    { 
      name: "Germany", 
      flag: "🇩🇪", 
      description: "Europe's engineering and research hub with excellent career prospects.",
      highlights: ["EU Blue Card", "Job Seeker Visa", "Student Visa"],
      popularPrograms: ["EU Blue Card", "Job Seeker Visa"],
      processingTime: "2-4 months"
    },
    { 
      name: "New Zealand", 
      flag: "🇳🇿", 
      description: "Peaceful living environment with excellent work-life balance and career growth.",
      highlights: ["Skilled Migrant", "Work Visa", "Student Visa"],
      popularPrograms: ["Skilled Migrant Category", "Essential Skills Work Visa"],
      processingTime: "3-6 months"
    },
    { 
      name: "Singapore", 
      flag: "🇸🇬", 
      description: "Asia's premier business and education hub with strategic global connectivity.",
      highlights: ["Employment Pass", "Student Pass", "Investment Visa"],
      popularPrograms: ["Employment Pass", "Tech.Pass"],
      processingTime: "1-3 months"
    }
  ];

  return (
    <div className="bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/close-up-hands-holding-tickets.jpg?updatedAt=1757141108728"
            alt="Services Hero"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-orange-500/70"></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
        
        <div className="relative z-10 py-20 sm:py-32 px-4 sm:px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-white drop-shadow-lg">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-orange-100 leading-relaxed max-w-4xl mx-auto mb-8">
              Comprehensive visa and immigration services tailored to your global journey. From student visas to professional consultation, we've got you covered every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold">
                Explore Services
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl transition-all duration-300 font-semibold">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16 px-4 sm:px-6 -mt-10 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-orange-600">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <p className="text-gray-600 font-medium">Services Offered</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-orange-600">
                  <AnimatedCounter end={150} suffix="+" />
                </div>
                <p className="text-gray-600 font-medium">Countries Covered</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-orange-600">
                  <AnimatedCounter end={24} suffix="/7" />
                </div>
                <p className="text-gray-600 font-medium">Expert Support</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-orange-600">
                  <AnimatedCounter end={98} suffix="%" />
                </div>
                <p className="text-gray-600 font-medium">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-100 rounded-3xl transform rotate-6 opacity-30"></div>
              <img
                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/visa-application-composition-with-europe-america-flag.jpg?updatedAt=1757141109195"
                alt="Visa Application"
                className="relative z-10 rounded-3xl shadow-2xl w-full max-w-lg object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Helping You Every Step of the Way
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Whether you're applying for a student visa, preparing for interviews, or planning your dream vacation, our expert guidance ensures your process is smooth, quick, and reliable.
              </p>
              <p className="text-lg">
                Explore our comprehensive range of services designed to meet every immigration need with precision, care, and personalized attention.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Expert Consultation</span>
              </div>
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Document Support</span>
              </div>
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">End-to-End Process</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="bg-gradient-to-br from-white to-gray-50 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our specialized services to make your immigration and travel process stress-free and successful.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${service.hoverColor}`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-xl text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-3 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105 font-medium flex items-center justify-center space-x-2"
                  onClick={()=>navigate(service.path)}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Countries Section */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-50 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Countries</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore opportunities across top destinations where we provide comprehensive visa and settlement assistance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <div
                key={index}
                className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                onMouseEnter={() => setHoveredCountry(index)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-5xl sm:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {country.flag}
                  </div>
                  
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {country.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {country.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {country.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2 text-xs">
                        <Star className="w-3 h-3 text-orange-500" />
                        <span className="text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 mb-4">
                    <Clock className="w-3 h-3" />
                    <span>{country.processingTime}</span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-2 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105 font-medium text-sm flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Explore {country.name}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Our Services */}
      <div className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine expertise, technology, and personalized care to deliver exceptional results for your immigration journey.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Expert Consultants",
                description: "Certified immigration professionals with years of experience",
                color: "text-blue-600"
              },
              {
                icon: Clock,
                title: "Fast Processing",
                description: "Streamlined processes to minimize waiting times",
                color: "text-green-600"
              },
              {
                icon: CheckCircle,
                title: "High Success Rate",
                description: "98% success rate across all visa categories",
                color: "text-purple-600"
              },
              {
                icon: Users,
                title: "24/7 Support",
                description: "Round-the-clock assistance throughout your journey",
                color: "text-orange-600"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className={`inline-flex p-3 rounded-xl bg-gray-100 mb-4 ${feature.color}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white py-20 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Let our expert team guide you through every step of your visa and immigration process. Your global dreams are just a consultation away!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Book Consultation</span>
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span>Explore Services</span>
            </button>
          </div>
          
          <div className="mt-8 text-orange-200">
            <p className="text-sm">Free initial consultation • Expert guidance • Proven success</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;