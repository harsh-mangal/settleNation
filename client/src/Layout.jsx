// src/Layout.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import SuperVisa from "./Services/SuperVisa";
import StudyVisa from "./Services/StudyVisa";
import VisaCounselingPage from "./Services/VisaCounsling";
import TouristVisa from "./Services/TouristVisa";
import IELTSPage from "./Services/Ielts";
// import ScrollToTop from "./components/ScrollToTop";

const Layout = () => {
  return (
    <Router>
      <div className="app-container flex flex-col min-h-screen">
        {/* Navbar at the top */}
        <Navbar />
       {/* <ScrollToTop /> */}
        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
             <Route path="/contact" element={<Contact />} />

            <Route path="/services/super-visa" element={<SuperVisa />} />
            <Route path="/services/study-visa" element={<StudyVisa />} />
            <Route path="/services/visa-counselling" element={<VisaCounselingPage />} />
            <Route path="/services/tourist-visa" element={<TouristVisa />} />
            <Route path="/services/ielts-pte" element={<IELTSPage />} />
          </Routes>
        </main>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default Layout;
