// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Home from '../pages/Home';
import WebDesign from '../pages/WebDesign';
import UIUX from '../pages/UIUX';
import DigitalMarketing from '../pages/DigitalMarketing';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Portfolio from '../pages/Portfolio';

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-design" element={<WebDesign />} />
        <Route path="/ui-ux" element={<UIUX />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/about-us" element={<AboutUs />} />
         <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact-us" element={<ContactUs />} />
       

      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
