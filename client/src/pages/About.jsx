import React, { useState, useEffect } from "react";
import { ShieldCheck, Clock, Globe2, FileText, Briefcase, Scale, Users, Award, Star, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/TheameToggle"; // Import the ThemeToggle component

// Define variants (unchanged)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
    transition: { duration: 0.3 }
  }
};

// WhyChooseUs component (updated with dark mode styles)
const WhyChooseUs = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Trusted Guidance",
      description: "Decades of combined expertise to guide you through every immigration challenge with clarity and confidence.",
      stats: "10,000+ Cases"
    },
    {
      icon: Clock,
      title: "Fast & Reliable",
      description: "Efficient processing and dedicated support to minimize delays and ensure peace of mind throughout your journey.",
      stats: "98% Success Rate"
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Expertise across 100+ countries with a growing international network of trusted partners.",
      stats: "100+ Countries"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Dedicated consultants assigned to your case for personalized attention and seamless communication.",
      stats: "24/7 Support"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning immigration consultancy with certifications from leading industry organizations.",
      stats: "15+ Awards"
    },
    {
      icon: Star,
      title: "Client Satisfaction",
      description: "Consistently high client satisfaction ratings with testimonials from successful immigrants worldwide.",
      stats: "4.9/5 Rating"
    }
  ];

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Settle Nation?</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We combine expertise, technology, and personalized service to deliver exceptional immigration solutions that exceed expectations.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden"
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent dark:from-orange-900/30 dark:to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div
                className="relative z-10"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <motion.div
                    className="p-2 sm:p-3 bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900 dark:to-orange-800 rounded-xl group-hover:from-orange-200 group-hover:to-orange-100 dark:group-hover:from-orange-800 dark:group-hover:to-orange-700 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 dark:text-orange-400" />
                  </motion.div>
                  <motion.span
                    className="text-xs sm:text-sm font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/50 px-2 sm:px-3 py-1 rounded-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.stats}
                  </motion.span>
                </div>
                <motion.h3
                  className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

// StatsCounter component (unchanged)
const StatsCounter = ({ end, duration = 2000, startCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCount) return;

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
  }, [end, duration, startCount]);

  return <motion.span>{count.toLocaleString()}</motion.span>;
};

// About component (updated with ThemeToggle and dark mode styles)
const About = () => {
  const navigate = useNavigate();
  const [startCount, setStartCount] = useState(false);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 overflow-hidden relative">

      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen text-white overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.img
          src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/view-statue-liberty-new-york-city.jpg?updatedAt=1757334591595"
          alt="Tower Bridge Hero"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
        <div className="absolute top-6 sm:top-10 right-6 sm:right-10 w-16 sm:w-20 h-16 sm:h-20 bg-white/10 dark:bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-6 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-white/5 dark:bg-white/3 rounded-full blur-2xl animate-pulse"></div>

        <motion.div
          className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 text-center max-w-5xl mx-auto"
          variants={sectionVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            About <span className="text-orange-500 dark:text-orange-400 drop-shadow-lg">Settle Nation</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-white dark:text-gray-200 leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8"
          >
            Your trusted partner for visa, immigration, and global settlement solutions.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <motion.button
              className="bg-orange-500 dark:bg-orange-600 text-white hover:bg-orange-600 dark:hover:bg-orange-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg font-semibold text-sm sm:text-base"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="bg-white dark:bg-gray-800 py-12 sm:py-16 md:py-20 px-4 sm:px-6 -mt-6 sm:-mt-10 relative z-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        onViewportEnter={() => setStartCount(true)}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12"
            variants={itemVariants}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
              {[
                { end: 15000, label: "Successful Cases" },
                { end: 100, label: "Countries Covered" },
                { end: 98, label: "Success Rate", suffix: "%" },
                { end: 20, label: "Years Experience" },
              ].map((stat, index) => (
                <motion.div key={index} className="space-y-2" variants={itemVariants}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400">
                    <StatsCounter end={stat.end} startCount={startCount} />
                    {stat.suffix || "+"}
                  </div>
                  <motion.p
                    className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.label}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Who We Are */}
      <motion.div
        className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div className="order-2 lg:order-1 space-y-6" variants={itemVariants}>
            <div className="space-y-4">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                variants={itemVariants}
              >
                Who We Are
              </motion.h2>
              <motion.div
                className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-600 to-orange-400 dark:from-orange-500 dark:to-orange-300 rounded-full"
                variants={itemVariants}
              ></motion.div>
            </div>
            <div className="space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              <motion.p variants={itemVariants}>
                At <span className="font-bold text-orange-600 dark:text-orange-400">Settle Nation</span>, we are more than just a visa consultancy — we are your partners in creating a seamless path to your global aspirations. From higher education to corporate assignments and permanent residency, we provide personalized guidance tailored to your unique journey.
              </motion.p>
              <motion.p variants={itemVariants}>
                Our mission is to deliver transparent, reliable, and professional immigration solutions that eliminate stress and save time. With a proven track record of thousands of successful cases, we ensure every client feels supported at every step.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4"
              variants={containerVariants}
            >
              {["Certified Consultants", "24/7 Support", "Global Network"].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 text-green-600 dark:text-green-400"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                  <motion.span className="font-medium text-sm sm:text-base">{item}</motion.span>
                </motion.div>
              ))}
            </motion.div>
            <motion.button
              className="bg-gradient-to-r from-orange-600 to-orange-500 dark:from-orange-700 dark:to-orange-600 hover:from-orange-700 hover:to-orange-600 dark:hover:from-orange-800 dark:hover:to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg font-semibold text-sm sm:text-base"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
              onClick={() => navigate('/contact')}
            >
              Get Started Today
            </motion.button>
          </motion.div>
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            variants={imageVariants}
            whileHover="hover"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-3xl transform rotate-6 opacity-30"></div>
              <motion.img
                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/front-view-travel-agent-sitting-her-working-place-with-plane-tickets-agency-service-global-operator-manager-world-map.jpg?updatedAt=1757140294099"
                alt="Who We Are"
                className="relative z-10 rounded-3xl shadow-2xl w-full object-cover"
                variants={imageVariants}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-10 sm:mb-12 md:mb-16" variants={itemVariants}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
              variants={itemVariants}
            >
              Our Core Services
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              From tailored consultation to full-scale immigration services, we provide everything you need for a smooth global transition.
            </motion.p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
          >
            {[
              {
                icon: FileText,
                title: "Tailored Visa Consultation",
                description: "Personalized guidance designed to match your specific goals, be it education, work, or permanent relocation.",
                color: "from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-600"
              },
              {
                icon: Briefcase,
                title: "Comprehensive Immigration Solutions",
                description: "From documentation to approvals, our end-to-end support ensures nothing is left to chance.",
                color: "from-green-500 to-green-600 dark:from-green-700 dark:to-green-600"
              },
              {
                icon: Scale,
                title: "Expert Legal Counsel & Support",
                description: "Access to professional legal advice that strengthens your visa and immigration applications.",
                color: "from-purple-500 to-purple-600 dark:from-purple-700 dark:to-purple-600"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform overflow-hidden"
                variants={cardVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0,0,0,0.1)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent dark:from-gray-900/30 dark:to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div className="relative z-10 text-center" whileHover={{ y: -5 }}>
                  <motion.div
                    className={`inline-flex p-3 sm:p-4 bg-gradient-to-br ${service.color} rounded-2xl mb-4 sm:mb-6`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                  <motion.h3
                    className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300"
                    variants={itemVariants}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed"
                    variants={itemVariants}
                  >
                    {service.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Happy Clients Section */}
      <motion.div
        className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="space-y-4">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                variants={itemVariants}
              >
                Our Clients, Our Pride
              </motion.h2>
              <motion.div
                className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-600 to-orange-400 dark:from-orange-500 dark:to-orange-300 rounded-full"
                variants={itemVariants}
              ></motion.div>
            </div>
            <div className="space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              <motion.p variants={itemVariants}>
                Nothing makes us happier than seeing our clients embark on their dream journeys. Thousands of families, students, and professionals have trusted <span className="font-bold text-orange-600 dark:text-orange-400">Settle Nation</span> to simplify their immigration journey.
              </motion.p>
              <motion.p variants={itemVariants}>
                Join our growing community of satisfied clients who have built their future with confidence and peace of mind across the globe.
              </motion.p>
            </div>
            <motion.div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4" variants={containerVariants}>
              <motion.div className="text-center p-3 sm:p-4 bg-orange-50 dark:bg-orange-900/50 rounded-xl" variants={itemVariants}>
                <motion.div className="text-xl sm:text-2xl font-bold text-orange-600 dark:text-orange-400">4.9/5</motion.div>
                <motion.div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Client Rating</motion.div>
              </motion.div>
              <motion.div className="text-center p-3 sm:p-4 bg-orange-50 dark:bg-orange-900/50 rounded-xl" variants={itemVariants}>
                <motion.div className="text-xl sm:text-2xl font-bold text-orange-600 dark:text-orange-400">95%</motion.div>
                <motion.div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Referral Rate</motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center"
            variants={imageVariants}
            whileHover="hover"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-3xl transform -rotate-6 opacity-30"></div>
              <motion.img
                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/day-office-travel-agency.jpg?updatedAt=1757139709961"
                alt="Happy Clients"
                className="relative z-10 rounded-3xl shadow-2xl w-full object-cover"
                variants={imageVariants}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Travel Assistance */}
      <motion.div
        className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              className="flex justify-center order-2 lg:order-1"
              variants={imageVariants}
              whileHover="hover"
            >
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-3xl transform rotate-6 opacity-30"></div>
                <motion.img
                  src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/6-Tips-for-Travel-Vendor-Negotiations-A-Focus-on-Car-Rental-Services-in-Corporate-Travel-1024x538-1(1).jpg?updatedAt=1757138964669"
                  alt="Travel Assistance"
                  className="relative z-10 rounded-3xl shadow-2xl w-full object-cover"
                  variants={imageVariants}
                />
              </div>
            </motion.div>
            <motion.div className="space-y-6 order-1 lg:order-2" variants={itemVariants}>
              <div className="space-y-4">
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                  variants={itemVariants}
                >
                  Comprehensive Travel Support
                </motion.h2>
                <motion.div
                  className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full"
                  variants={itemVariants}
                ></motion.div>
              </div>
              <div className="space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                <motion.p variants={itemVariants}>
                  Beyond visas, we offer travel-related assistance including flight planning, accommodation guidance, and corporate travel solutions.
                </motion.p>
                <motion.p variants={itemVariants}>
                  Whether you're relocating permanently or traveling temporarily, we ensure your journey is as smooth as your settlement.
                </motion.p>
              </div>
              <motion.div className="flex flex-wrap gap-3 sm:gap-4" variants={containerVariants}>
                {["Flight Planning", "Accommodation", "Corporate Travel"].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400"
                    variants={itemVariants}
                  >
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                    <motion.span className="font-medium text-sm sm:text-base">{item}</motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Contact Us Section */}
      <motion.div
        className="bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-900 dark:to-orange-900/30 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-10 sm:mb-12 md:mb-16" variants={itemVariants}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
              variants={itemVariants}
            >
              Contact <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Settle Nation</span>
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Reach out to our expert team for personalized assistance with your visa, job, or admission interviews.
            </motion.p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center"
            variants={containerVariants}
          >
            <motion.div className="space-y-3 sm:space-y-4" variants={itemVariants}>
              <motion.div className="inline-flex p-3 sm:p-4 bg-orange-100 dark:bg-orange-900/50 rounded-xl">
                <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-orange-600 dark:text-orange-400" />
              </motion.div>
              <motion.p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">settlenation.in@gmail.com</motion.p>
            </motion.div>
            <motion.div className="space-y-3 sm:space-y-4" variants={itemVariants}>
              <motion.div className="inline-flex p-3 sm:p-4 bg-orange-100 dark:bg-orange-900/50 rounded-xl">
                <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-orange-600 dark:text-orange-400" />
              </motion.div>
              <motion.p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">+91 7347045972</motion.p>
            </motion.div>
            <motion.div className="space-y-3 sm:space-y-4" variants={itemVariants}>
              <motion.div className="inline-flex p-3 sm:p-4 bg-orange-100 dark:bg-orange-900/50 rounded-xl">
                <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-orange-600 dark:text-orange-400" />
              </motion.div>
              <motion.p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                SCO 363, Top Floor, Sector 44-D, Chandigarh
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <WhyChooseUs />

      {/* Call to Action */}
      <motion.div
        className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 dark:from-orange-700 dark:via-orange-600 dark:to-orange-700 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="absolute inset-0">
          <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 dark:bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 dark:bg-white/5 rounded-full blur-xl animate-pulse"></div>
        </div>
        <motion.div className="relative z-10 max-w-4xl mx-auto" variants={itemVariants}>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            variants={itemVariants}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-orange-100 dark:text-orange-200 mb-6 sm:mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Let Settle Nation handle the visa complexities while you prepare for a brighter future abroad. Your dream destination awaits!
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            variants={containerVariants}
          >
            <motion.button
              className="bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg font-semibold text-sm sm:text-base"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
              onClick={() => navigate('/contact')}
            >
              Contact Us Today
            </motion.button>
            <motion.button
              className="border-2 border-white/30 dark:border-white/20 text-white dark:text-gray-200 hover:bg-white/10 dark:hover:bg-white/15 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
              onClick={() => navigate('/contact')}
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
          <motion.div
            className="mt-6 sm:mt-8 text-orange-200 dark:text-orange-300"
            variants={itemVariants}
          >
            <motion.p className="text-xs sm:text-sm">
              Free consultation • No hidden fees • Expert guidance
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;