import React, { useState, useEffect } from "react";
import { ShieldCheck, Clock, Globe2, FileText, Briefcase, Scale, Users, Award, CheckCircle, Star } from "lucide-react";
import WhyChooseUs1 from "../components/WhyChooseUs";
import { motion, AnimatePresence } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Settle Nation?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine expertise, technology, and personalized service to deliver exceptional immigration solutions that exceed expectations.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div
                className="relative z-10"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    className="p-3 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl group-hover:from-orange-200 group-hover:to-orange-100 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <feature.icon className="w-8 h-8 text-orange-600" />
                  </motion.div>
                  <span className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                    {feature.stats}
                  </span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const StatsCounter = ({ end, duration = 2000 }) => {
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

  return <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {count.toLocaleString()}
  </motion.span>;
};

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-screen text-white overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.img
          src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/famous-tower-bridge-london-illuminated-with-night-lights.jpg?updatedAt=1757150741562"
          alt="Tower Bridge Hero"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>

        <motion.div
          className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center max-w-5xl mx-auto"
          variants={sectionVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            About <span className="text-orange-500 drop-shadow-lg">Settle Nation</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white leading-relaxed max-w-4xl mx-auto mb-8"
          >
            Your trusted partner for visa, immigration, and global settlement solutions. We simplify the process so you can focus on building your future abroad with confidence and peace of mind.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-4 rounded-xl shadow-lg font-semibold"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
            <motion.button
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="bg-white py-16 px-4 sm:px-6 -mt-10 relative z-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-xl p-8 sm:p-12"
            variants={itemVariants}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { end: 15000, label: "Successful Cases" },
                { end: 100, label: "Countries Covered" },
                { end: 98, label: "Success Rate", suffix: "%" },
                { end: 20, label: "Years Experience" }
              ].map((stat, index) => (
                <motion.div key={index} className="space-y-2" variants={itemVariants}>
                  <div className="text-3xl sm:text-4xl font-bold text-orange-600">
                    <StatsCounter end={stat.end} />{stat.suffix || "+"}
                  </div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Who We Are */}
      <motion.div
        className="max-w-7xl mx-auto py-20 px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div className="order-2 lg:order-1 space-y-6" variants={itemVariants}>
            <div className="space-y-4">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                variants={itemVariants}
              >
                Who We Are
              </motion.h2>
              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"
                variants={itemVariants}
              ></motion.div>
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <motion.p className="text-lg" variants={itemVariants}>
                At <span className="font-bold text-orange-600">Settle Nation</span>, we are more than just a visa consultancy — we are your partners in creating a seamless path to your global aspirations. From higher education to corporate assignments and permanent residency, we provide personalized guidance tailored to your unique journey.
              </motion.p>
              <motion.p className="text-lg" variants={itemVariants}>
                Our mission is to deliver transparent, reliable, and professional immigration solutions that eliminate stress and save time. With a proven track record of thousands of successful cases, we ensure every client feels supported at every step.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-wrap gap-4"
              variants={containerVariants}
            >
              {["Certified Consultants", "24/7 Support", "Global Network"].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 text-green-600"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.button
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-4 rounded-xl shadow-lg font-semibold"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Get Started Today
            </motion.button>
          </motion.div>
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            variants={imageVariants}
            whileHover="hover"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-100 rounded-3xl transform rotate-6 opacity-30"></div>
              <motion.img
                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/front-view-travel-agent-sitting-her-working-place-with-plane-tickets-agency-service-global-operator-manager-world-map.jpg?updatedAt=1757140294099"
                alt="Who We Are"
                className="relative z-10 rounded-3xl shadow-2xl w-full max-w-lg object-cover"
                variants={imageVariants}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="bg-gradient-to-br from-white to-gray-50 py-20 px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From tailored consultation to full-scale immigration services, we provide everything you need for a smooth global transition.
            </p>
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {[
              {
                icon: FileText,
                title: "Tailored Visa Consultation",
                description: "Personalized guidance designed to match your specific goals, be it education, work, or permanent relocation.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Briefcase,
                title: "Comprehensive Immigration Solutions",
                description: "From documentation to approvals, our end-to-end support ensures nothing is left to chance.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Scale,
                title: "Expert Legal Counsel & Support",
                description: "Access to professional legal advice that strengthens your visa and immigration applications.",
                color: "from-purple-500 to-purple-600"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform overflow-hidden"
                variants={cardVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0,0,0,0.1)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div className="relative z-10 text-center" whileHover={{ y: -5 }}>
                  <motion.div
                    className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-2xl mb-6`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-xl text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Happy Clients Section */}
      <motion.div
        className="max-w-7xl mx-auto py-20 px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="space-y-4">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                variants={itemVariants}
              >
                Our Clients, Our Pride
              </motion.h2>
              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"
                variants={itemVariants}
              ></motion.div>
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <motion.p className="text-lg" variants={itemVariants}>
                Nothing makes us happier than seeing our clients embark on their dream journeys. Thousands of families, students, and professionals have trusted <span className="font-bold text-orange-600">Settle Nation</span> to simplify their immigration journey.
              </motion.p>
              <motion.p className="text-lg" variants={itemVariants}>
                Join our growing community of satisfied clients who have built their future with confidence and peace of mind across the globe.
              </motion.p>
            </div>
            <motion.div className="grid grid-cols-2 gap-6 pt-4" variants={containerVariants}>
              <motion.div className="text-center p-4 bg-orange-50 rounded-xl" variants={itemVariants}>
                <div className="text-2xl font-bold text-orange-600">4.9/5</div>
                <div className="text-sm text-gray-600">Client Rating</div>
              </motion.div>
              <motion.div className="text-center p-4 bg-orange-50 rounded-xl" variants={itemVariants}>
                <div className="text-2xl font-bold text-orange-600">95%</div>
                <div className="text-sm text-gray-600">Referral Rate</div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center"
            variants={imageVariants}
            whileHover="hover"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-100 rounded-3xl transform -rotate-6 opacity-30"></div>
              <motion.img
                src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/day-office-travel-agency.jpg?updatedAt=1757139709961"
                alt="Happy Clients"
                className="relative z-10 rounded-3xl shadow-2xl w-full max-w-lg object-cover"
                variants={imageVariants}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Travel Assistance */}
      <motion.div
        className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              className="flex justify-center order-2 lg:order-1"
              variants={imageVariants}
              whileHover="hover"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-100 rounded-3xl transform rotate-6 opacity-30"></div>
                <motion.img
                  src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/6-Tips-for-Travel-Vendor-Negotiations-A-Focus-on-Car-Rental-Services-in-Corporate-Travel-1024x538-1(1).jpg?updatedAt=1757138964669"
                  alt="Travel Assistance"
                  className="relative z-10 rounded-3xl shadow-2xl w-full max-w-lg object-cover"
                  variants={imageVariants}
                />
              </div>
            </motion.div>
            <motion.div className="space-y-6 order-1 lg:order-2" variants={itemVariants}>
              <div className="space-y-4">
                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                  variants={itemVariants}
                >
                  Comprehensive Travel Support
                </motion.h2>
                <motion.div
                  className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                  variants={itemVariants}
                ></motion.div>
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <motion.p className="text-lg" variants={itemVariants}>
                  Beyond visas, we offer travel-related assistance including flight planning, accommodation guidance, and corporate travel solutions.
                </motion.p>
                <motion.p className="text-lg" variants={itemVariants}>
                  Whether you're relocating permanently or traveling temporarily, we ensure your journey is as smooth as your settlement.
                </motion.p>
              </div>
              <motion.div className="flex flex-wrap gap-4" variants={containerVariants}>
                {["Flight Planning", "Accommodation", "Corporate Travel"].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 text-blue-600"
                    variants={itemVariants}
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <WhyChooseUs />
      <WhyChooseUs1 />

      {/* Call to Action */}
      <motion.div
        className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white py-20 px-4 sm:px-6 text-center relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        </div>
        <motion.div className="relative z-10 max-w-4xl mx-auto" variants={itemVariants}>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            className="text-xl text-orange-100 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Let Settle Nation handle the visa complexities while you prepare for a brighter future abroad. Your dream destination awaits!
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={containerVariants}
          >
            <motion.button
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl shadow-lg font-semibold text-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Contact Us Today
            </motion.button>
            <motion.button
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
          <motion.div
            className="mt-8 text-orange-200"
            variants={itemVariants}
          >
            <p className="textPunjabi: Noto Serif Gurmukhi
            text-sm">Free consultation • No hidden fees • Expert guidance</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;