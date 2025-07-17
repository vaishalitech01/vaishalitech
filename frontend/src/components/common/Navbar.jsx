// src/components/common/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/Logo.png'
import vtlogo from '../../assets/vtlogo.png';
import { AnimatePresence, motion } from 'framer-motion';
import { FaAngleRight, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDigitalMarketingDropdown, setShowDigitalMarketingDropdown] = useState(false);
  const [showUIDropdown, setShowUIDropdown] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = (
    <>
      <Link to={'/web-design'}><li
        className="relative group cursor-pointer"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <span className="hover:text-red-800 py-2 block">Web-Design</span>
        <AnimatePresence>
          {showDropdown && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-full w-64 bg-gray-900 text-white border-t border-r border-gray-400 space-y-2 z-50 shadow-lg"
            >
              <Link to={'/web-design'}><li className="py-3 px-4 hover:bg-gray-800 flex justify-between items-center">Website Development <FaAngleRight /></li></Link>
              <Link to={'/web-design'}><li className="py-3 px-4 hover:bg-gray-800 flex justify-between items-center">App Development <FaAngleRight /></li></Link>
              <Link to={'/web-design'}><li className="py-3 px-4 hover:bg-gray-800 flex justify-between items-center">WordPress Solutions <FaAngleRight /></li></Link>
            </motion.ul>
          )}
        </AnimatePresence>
        </li>
      </Link>

      <Link to={'/ui-ux'}><li
        className="relative group cursor-pointer"
        onMouseEnter={() => setShowUIDropdown(true)}
        onMouseLeave={() => setShowUIDropdown(false)}
      >
        <span className="hover:text-red-800 py-2 block">UI/UX</span>
        <AnimatePresence>
          {showUIDropdown && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-full w-72 bg-blue-950 text-white z-50 shadow-lg"
            >
              {[
                "Website UI/UX Design",
                "Mobile App UI/UX Design",
                "Logo Design",
                "Business Card / Visiting Card Design",
                "Brochure / Flyer / Banner Design",
                "Social Media Post Design"
              ].map((item, idx) => (
                <Link to={'/ui-ux'}><li key={idx} className="py-3 px-4 border-b border-gray-400 hover:bg-gray-800">{item}</li></Link>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </li></Link>

      {/* <li className="hover:text-red-800 py-2"><Link to="/mploy">Employ</Link></li> */}

      <Link to = {'/digital-marketing'}><li
        className="relative group cursor-pointer"
        onMouseEnter={() => setShowDigitalMarketingDropdown(true)}
        onMouseLeave={() => setShowDigitalMarketingDropdown(false)}
      >
        <span className="hover:text-red-800 py-2 block">Digital Marketing</span>
        <AnimatePresence>
          {showDigitalMarketingDropdown && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-full w-80 bg-blue-950 text-white z-50 shadow-lg"
            >
              {[
                "Meta (Facebook & Instagram) Ads",
                "Google Ads (Search, Display, Shopping)",
                "Social Media Marketing (SMM)",
                "Search Engine Optimization (SEO)",
                "Google My Business Optimization",
                "Content Writing & Blog Posting",
                "Email Marketing Campaigns"
              ].map((item, idx) => (
                <Link to = {'/digital-marketing'}><li key={idx} className="py-3 px-4 border-b border-gray-400 hover:bg-gray-800">{item}</li></Link>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </li></Link>

      <li className="hover:text-red-800 py-2"><Link to="/about-us">About Us</Link></li>
        <li className="hover:text-red-800 py-2"><Link to="/portfolio">Portfolio</Link></li>

      {/* <li><Link to="/contact-us"  className="bg-[#000E26] text-white px-5 py-2 rounded-lg block">Contact Us</Link></li> */}
      <li className="lg:hidden">
  <Link
    to="/contact-us"
    className="w-full block text-center bg-white text-[#000E26] font-semibold py-3 rounded-md hover:bg-gray-200 transition duration-300"
  >
    Contact Us
  </Link>
</li>

<li className="hidden lg:block">
  <Link
    to="/contact-us"
    className="bg-[#000E26] text-white px-5 py-2 rounded-lg block hover:bg-[#111e33] transition"
  >
    Contact Us
  </Link>
</li>

    </>
  );


  return (
    // <nav className="bg-[#fff8d3] text-black px-6 py-3 mx-auto flex justify-between items-center relative z-50">
    <nav className="fixed top-0 left-0 w-full  bg-[#fff8d3] text-black px-6 py-3 flex justify-between items-center z-50 shadow-md">

      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
        <img src={vtlogo} alt="Logo" className="w-[130px] h-auto" />
        </Link>
      </div>
{/* bg-[#000E26] */}
      {/* Desktop Nav */}
      <ul className="hidden lg:flex gap-6 font-semibold items-center">
        {navLinks}
      </ul>

      {/* Mobile Toggle */}
      <div className="lg:hidden z-50">
  <button onClick={toggleMobileMenu}>
    {isMobileMenuOpen ? (
      <FaTimes size={24} className="text-white" />
    ) : (
      <FaBars size={24} />
    )}
  </button>
</div>


      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.ul
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-[#000E26] z-40 p-6 space-y-6 overflow-y-auto font-semibold text-white shadow-lg"
          >
            {navLinks}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
