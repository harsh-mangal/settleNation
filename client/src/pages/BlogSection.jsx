import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";


// Animation Variants (unchanged)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const BlogSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("https://apisettle.dodunsoftsolutions.com/api/articles");
        if (!res.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await res.json();
        setArticles(data); // Expecting array from API
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const openModal = (article) => setSelectedArticle(article);
  const closeModal = () => setSelectedArticle(null);

  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">

      {/* Heading */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Latest <span className="bg-gradient-to-r from-orange-600 to-orange-400 dark:from-orange-700 dark:to-orange-500 bg-clip-text text-transparent">Articles & Blogs</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          Discover the latest tips, insights, and guides to fuel your journey abroad.
        </p>
      </motion.div>

      {/* Loader */}
      {loading && (
        <div className="text-center text-gray-500 dark:text-gray-300 text-lg">
          <span className="inline-block animate-pulse">Loading articles...</span>
        </div>
      )}

      {/* Articles Grid */}
      {!loading && articles.length > 0 ? (
        <motion.div
          className="max-w-7xl mx-auto flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:overflow-visible pb-4 sm:pb-0 scrollbar-thin scrollbar-thumb-orange-300 dark:scrollbar-thumb-orange-500 scrollbar-track-gray-100 dark:scrollbar-track-gray-800"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {articles.map((article) => (
            <motion.div
              key={article._id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 flex-shrink-0 w-[85vw] sm:w-full min-w-[280px] max-w-[400px] sm:max-w-none flex flex-col"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Image */}
              <motion.div
                className="relative h-48 sm:h-56 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={article.image || "https://via.placeholder.com/400x300"}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent dark:from-black/70 dark:to-transparent" />
                <div className="absolute bottom-3 left-3 text-sm text-white dark:text-gray-100 bg-black/50 dark:bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">
                  {new Date(article.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </motion.div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <motion.h3
                  className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2"
                  whileHover={{ color: "#F97316" }}
                >
                  {article.title}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4 flex-grow line-clamp-3">
                  {article.content}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{article.category}</span>
                  <motion.button
                    onClick={() => openModal(article)}
                    className="inline-flex items-center text-orange-600 dark:text-orange-400 font-semibold text-sm group"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        !loading && (
          <div className="text-center text-gray-500 dark:text-gray-300 text-lg">
            No articles found.
          </div>
        )
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative border border-gray-200 dark:border-gray-700"
              variants={modalVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedArticle.image || "https://via.placeholder.com/400x300"}
                alt={selectedArticle.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {selectedArticle.title}
              </h3>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>
                  {new Date(selectedArticle.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="mx-2">•</span>
                <span>{selectedArticle.category}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed">
                {selectedArticle.content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BlogSection;