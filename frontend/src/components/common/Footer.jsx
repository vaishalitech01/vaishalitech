import React from 'react';
import logo from '../../public/Logo.png'
import vtlogo from '../../assets/vtlogo.png';
import { FaThreads } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className='bg-[#000E26] py-5 cursor-default'>
    <div className='flex justify-around lg:flex-row flex-col space-y-5 '>
      
      {/* Logo and Social Icons */}
      <div className='mx-auto lg:mx-0'>
        <div className='order-1'>
          <img src={vtlogo} alt="Logo" className="w-[130px] h-auto" />
        </div>
        <div className='flex gap-3 mt-4 order-2'>
          <a href="https://www.threads.net/@vaishalitech_offical" target='_blank' rel='noopener noreferrer'>
            <FaThreads className='text-white w-[20px] h-[20px]' />
          </a>
          <a href="https://www.instagram.com/vaishalitech_offical/" target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='text-white w-[20px] h-[20px]' />
          </a>
          <a href="https://www.linkedin.com/company/vaishalitech/posts/?feedView=all&viewAsMember=true" target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='text-white w-[20px] h-[20px]' />
          </a>
          <a href="https://x.com/Vaishali_Tech?t=PxUdyHSa219eMWC3cj9WSQ&s=08" target='_blank' rel='noopener noreferrer'>
            <FaXTwitter className='text-white w-[20px] h-[20px]' />
          </a>
          <a href="https://www.pinterest.com/vaishalitech/" target='_blank' rel='noopener noreferrer'>
            <FaPinterest className='text-white w-[20px] h-[20px]' />
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <div className='space-y-1 text-center lg:text-left order-2'>
        <h1 className='text-white font-semibold text-[18px] '>CONTACT</h1>
        <div className='font-semibold'>
          <p className='text-[#D4D4D4]'>info@vaishalitech.in</p>
          <p className='text-[#D4D4D4]'>E-2, Ashok Marg, Panch Batti, C Scheme, Ashok Nagar, Jaipur, Rajasthan, 302001</p>
          <p className='text-[#D4D4D4]'>+91 9135867021 </p>
          <Link to="/contact-us" className='text-[#D4D4D4] block hover:underline'>Contact Us</Link>
        </div>
      </div>

      {/* Product Section with Navigation */}
      <div className='space-y-1 order-3'>
        <h1 className='text-white font-semibold text-[18px] text-center lg:text-left'>PRODUCT</h1>
        <div className='font-semibold text-center lg:text-left'>
          <Link to="/web-design" className='text-[#D4D4D4] block hover:underline'>Web-designs & Devlopment</Link>
          <Link to="/web-design" className='text-[#D4D4D4] block hover:underline'>App-designs & Devlopment</Link>
          <Link to="/ui-ux" className='text-[#D4D4D4] block hover:underline'>UI/UX</Link>
          <Link to="/digital-marketing" className='text-[#D4D4D4] block hover:underline'>Digital Marketing</Link>
        </div>
      </div>

      {/* Legal Section with Navigation */}
      <div className='order-4 flex text-center lg:text-left flex-col'>
        <h1 className='text-white font-semibold text-[18px]'>LEGAL</h1>
        <div className='font-semibold'>
          <Link to="/terms" className='text-[#D4D4D4] block hover:underline'>Terms</Link>
          <Link to="/privacy" className='text-[#D4D4D4] block hover:underline'>Privacy</Link>
        </div>
      </div>

    </div>
    <p className='text-white text-center mt-3'>© 2025 Company Name. All rights reserved.</p>
  </footer>
);

export default Footer;
