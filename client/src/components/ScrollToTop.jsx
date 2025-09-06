// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { ChevronUpIcon } from "lucide-react"; 

// const ScrollToTop = () => {
//   const { pathname } = useLocation();
//   const [showButton, setShowButton] = useState(false);

//   // Scroll to top on navigation
//   useEffect(() => {
//     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//   }, [pathname]);

//   // Show button when user scrolls down
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setShowButton(true);
//       } else {
//         setShowButton(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       {showButton && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-all z-50"
//         >
//           <ChevronUpIcon className="w-6 h-6" />
//         </button>
//       )}
//     </>
//   );
// };

// export default ScrollToTop;
