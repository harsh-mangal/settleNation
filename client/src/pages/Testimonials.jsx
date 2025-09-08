import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};

// Typewriter Effect
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

// Staggered Text Animation
const StaggeredText = ({ text = "", className = "" }) => {
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


const TestimonialCard = ({ testimonial, onCardClick }) => {
  return (
    <motion.div
      className={`
        group relative overflow-hidden rounded-3xl
        flex-shrink-0 basis-[22%]
        border border-[#e8e3ff] shadow-sm
        flex flex-col items-center justify-center text-center
        cursor-pointer
      `}
      style={{ minHeight: 320, backgroundColor: '#e6f0fa' }}
      onClick={() => onCardClick(testimonial)}
    >
      {/* Circular background image */}
      <div className="w-40 h-40 rounded-full overflow-hidden mb-4 mt-2">
        <img
          src={testimonial.image || "https://via.placeholder.com/400x400"} // Replace with actual image URL
          alt={testimonial.name || "Anonymous"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col items-center">
        <div className="flex flex-col space-y-2">
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed line-clamp-2">
            {testimonial.message || "No message provided."}
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 drop-shadow mt-2">
            {testimonial.name || "Anonymous"}
          </h3>
          <div className="flex justify-center mt-2 mb-2">
            <StarRating rating={testimonial.rating || 0} />
          </div>

          <p className="text-sm text-gray-600 italic">— Client</p>
        </div>
      </div>
    </motion.div>
  );
};

const FeedbackModal = ({ isOpen, onClose, testimonial }) => {
  if (!isOpen || !testimonial) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-3xl p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto relative"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ duration: 0.4 }}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-orange-600"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Testimonial Details</h2>
        <div className="space-y-4">
          <img
            src={testimonial.image || "https://via.placeholder.com/400x400"}
            alt={testimonial.name || "Anonymous"}
            className="w-40 h-40 rounded-full mx-auto object-cover mb-4"
          />
          <p className="text-base text-gray-800">{testimonial.message}</p>
          <h3 className="text-xl font-bold text-gray-900 mt-4">{testimonial.name}</h3>
          <StarRating rating={testimonial.rating || 0} />
          <p className="text-sm text-gray-600 italic">— Client</p>
        </div>
      </motion.div>
    </motion.div>
  );
};



const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [originalTestimonials, setOriginalTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("https://apisettle.dodunsoftsolutions.com/api/testimonials");
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        const approvedTestimonials = data.filter((testimonial) => testimonial.approved === true);

        setOriginalTestimonials(approvedTestimonials);
        setTestimonials([...approvedTestimonials]);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);


  // Auto-scroll effect (right to left)
  useEffect(() => {
    if (!carouselRef.current || isPaused) return;

    const scrollStep = 1;
    const interval = setInterval(() => {
      const carousel = carouselRef.current;
      const maxScroll = carousel.scrollWidth / 2 - carousel.clientWidth;

      if (carousel.scrollLeft >= maxScroll) {
        carousel.scrollLeft = 0; // seamless loop
      } else {
        carousel.scrollLeft += scrollStep;
      }
    }, 20); // adjust speed (lower = faster)

    return () => clearInterval(interval);
  }, [isPaused]);



  if (loading) {
    return (
      <motion.div
        className="text-center py-12 sm:py-16 md:py-20 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Loading testimonials...
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        className="text-center py-12 sm:py-16 md:py-20 text-red-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Error: {error}
      </motion.div>
    );
  }

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Full-Width Banner with Text Overlay */}
      <div className="relative w-full 
                h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] 
                text-white overflow-hidden flex items-center justify-center text-center">

        {/* Background Image */}
        <EnhancedImage
          src="https://ik.imagekit.io/sqpcbo0c0/Settle%20Nation%20/testimonial?updatedAt=1757315575304"
          alt="Testimonials Banner"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>

          {/* Animated Floating Particles */}
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
                <div className="w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full blur-sm" />
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
            {/* Tag / Label */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2.5 sm:space-x-3 bg-gradient-to-r from-orange-500/30 to-orange-400/30 backdrop-blur-lg rounded-full px-6 sm:px-8 py-2 sm:py-4 border border-white/40 shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-5 sm:w-6 h-5 sm:h-6 text-orange-300" />
              </motion.div>
              <span className="text-sm sm:text-lg text-orange-200 font-bold">Client Stories</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-7xl font-black text-white drop-shadow-2xl leading-tight"
            >
              Our
              <span className="block bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
                <TypewriterText text="Testimonials" />
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed max-w-4xl mx-auto drop-shadow-lg"
            >
              <StaggeredText text="Hear from our clients who have successfully embarked on their journeys with Settle Nation's expert guidance." />
            </motion.p>
          </motion.div>
        </div>
      </div>


      {/* Testimonials Carousel and Feedback Button */}
      <section className="bg-gradient-to-br from-orange-50 via-orange-25 to-gray-50 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-400 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-16"
          >
            {/* Testimonials Carousel */}
            {originalTestimonials.length === 0 ? (
              <motion.div className="text-center text-gray-600 text-lg" variants={itemVariants}>
                No approved testimonials available at the moment.
              </motion.div>
            ) : (
              <section className="py-4 relative">
                {/* Heading */}
                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-6 sm:mb-8 md:mb-12 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Testimonials
                </motion.h2>

                {/* Carousel Container */}
                <div
                  ref={carouselRef}
                  className="relative w-full overflow-x-auto scrollbar-hide py-4 px-2 sm:px-4"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <motion.div className="flex gap-4 sm:gap-6 md:gap-8">
                    {testimonials.map((testimonial, idx) => (
                      <div
                        key={`${testimonial.id || idx}-${idx}`}
                        className="
                          flex-shrink-0
                          w-[90%]      /* mobile width */
                          h-[378px]    /* mobile height */
                          sm:w-[300px] sm:h-[320px]  /* small screens */
                          md:w-[350px] md:h-[350px]  /* medium screens */
                          lg:w-[400px] lg:h-[380px]  /* large screens */
                          xl:w-[450px] xl:h-[400px]  /* extra-large screens */
                        "
                      >
                        <TestimonialCard
                          testimonial={testimonial}
                          index={idx % originalTestimonials.length}
                          onCardClick={(t) => setSelectedTestimonial(t)}
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>

              </section>
            )}
          </motion.div>
        </div>
      </section>

      <FeedbackModal
        isOpen={!!selectedTestimonial}
        onClose={() => setSelectedTestimonial(null)}
        testimonial={selectedTestimonial}
      />

    </section>
  );
};

export default Testimonials;