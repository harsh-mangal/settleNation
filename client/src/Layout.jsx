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
import InterviewPreparation from "./Services/Interview";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ContactUs from "./pages/ContactUs";
import BlogSection from "./pages/BlogSection";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermOfService";
import CountryCanada from "./Country/Canada";
import CountryAustralia from "./Country/Australia";
import CountryUK from "./Country/UK";
import CountryUSA from "./Country/Usa";
import CountryNZ from "./Country/Nz";


const Layout = () => {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <ScrollToTop />
      <ScrollToTopButton />
      <div className="app-container flex flex-col min-h-screen">
        {/* Navbar at the top */}
        <Navbar />
        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/articlesBlogs" element={<BlogSection />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />


            <Route path="/services/super-visa" element={<SuperVisa />} />
            <Route path="/services/study-visa" element={<StudyVisa />} />
            <Route path="/services/visa-counselling" element={<VisaCounselingPage />} />
            <Route path="/services/tourist-visa" element={<TouristVisa />} />
            <Route path="/services/ielts-pte" element={<IELTSPage />} />
            <Route path="/services/interview-prep" element={<InterviewPreparation />} />


            <Route path="/country/canada" element={<CountryCanada />} />
            <Route path="/country/australia" element={<CountryAustralia />} />
            <Route path="/country/uk" element={<CountryUK />} />
            <Route path="/country/usa" element={<CountryUSA />} />
            <Route path="/country/new-zealand" element={<CountryNZ />} />
          </Routes>
        </main>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default Layout;
