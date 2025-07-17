// src/pages/WebDesign.jsx
import React from 'react';
import image1 from '../public/Frame.png';
import image2 from '../public/Frame2.png';
import image3 from '../public/Frame3.png';
import { GoDotFill } from "react-icons/go";
import { motion } from 'framer-motion';
import BouncyText from '../components/homepage/BouncyText';

const pointsForSection1 = [
  "Business Website Design (Static/Dynamic)",
  "Portfolio Website",
  "E-commerce Website (with payment gateway)",
  "Custom Web Application Development",
  "Landing Page Design",
  "School Website",
  "Coaching Institute Website (with course listings)",
  "College/University Website",
  "E-Learning Platform Website",
  "Blog/News Website",
  "Website Maintenance & Support",
  "Website Speed Optimization",
  "Domain & Hosting Support"
];

const pointsForSection2 = [
  "Android App Development (Native/Hybrid)",
  "iOS App Development",
  "Cross-platform App Development (React Native, Flutter)",
  "E-commerce Mobile App",
  "Booking & Service Apps",
  "Custom App Solutions (Education, Laundry, Hotel, etc.)",
  "School Management App (Student, Teacher, Admin Login)"
];

const pointsForSection3 = [
  "WordPress Website Design",
  "WordPress E-commerce (WooCommerce)",
  "Theme Customization",
  "Plugin Integration & Setup",
  "Blog Website Creation",
  "WordPress Maintenance"
];

const WebDesign = () => (
  <div className='bg-blue-950 px-4 py-12 md:space-y-15'>
    {/* Section 1 */}
    <section className='flex flex-col-reverse md:flex-row justify-around items-center py-10'>
      <div className='relative w-full max-w-lg h-auto my-10 md:my-0 right-8 order-2 md:order-1'>
        <div className='absolute top-0 left-8 w-[90%] aspect-square opacity-10 bg-white rounded-full z-0'></div>
        <div className='absolute left-17  md:left-20 -top-10 w-[90%] aspect-square overflow-hidden'>
          <motion.div
            className="relative w-full h-full border border-gray-600 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <motion.div
                className="bg-red-700 rounded-full"
                animate={{ width: ["10px", "17px", "10px"], height: ["10px", "17px", "10px"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <motion.div
                className="bg-red-700 rounded-full"
                animate={{ width: ["10px", "17px", "10px"], height: ["10px", "17px", "10px"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.75 }}
              />
            </div>
          </motion.div>
        </div>

        <img src={image1} alt="Website" className='relative z-10 w-full h-auto object-contain' />
      </div>
      <div className='space-y-5 max-w-xl order-1 md:order-2 mt-12 md:mt-0'>
        <BouncyText
            text={"Website Development"}
            className="text-white font-bold text-[2rem] md:text-[2.875rem]"
          />
        <div className='text-[#A0AEC0] space-y-1'>
          {
            pointsForSection1.map((title, idx) => (
              <p key={idx} className='flex items-start gap-3'><GoDotFill className='mt-1 text-sm' /><span className='text-[1rem] md:text-[1.125rem]'>{title}</span></p>
            ))
          }
        </div>
      </div>

    </section>

    {/* Section 2 */}
    <section className='flex flex-col md:flex-row justify-around items-center py-10'>

      <div className='space-y-5 max-w-xl order-2 md:order-1 mt-10 md:mt-0'>
        <BouncyText
            text={"App Development"}
            className="text-white font-bold text-[2rem] md:text-[2.875rem]"
          />
        <div className='text-[#A0AEC0] space-y-1'>
          {
            pointsForSection2.map((title, idx) => (
              <p key={idx} className='flex items-start gap-3'><GoDotFill className='mt-1 text-sm' /><span className='text-[1rem] md:text-[1.125rem]'>{title}</span></p>
            ))
          }
        </div>
      </div>
      <div className='relative w-full max-w-lg h-auto my-10 md:my-0 right-7 order-1 md:order-2'>

        <div className='absolute top-0 left-8 w-[90%] aspect-square opacity-10 bg-white rounded-full z-0'></div>

        <div className='absolute left-17  md:left-20 -top-10 w-[90%] aspect-square overflow-hidden'>
          <motion.div
            className="relative w-full h-full border border-gray-600 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <motion.div
                className="bg-red-700 rounded-full"
                animate={{ width: ["10px", "17px", "10px"], height: ["10px", "17px", "10px"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <motion.div
                className="bg-red-700 rounded-full"
                animate={{ width: ["10px", "17px", "10px"], height: ["10px", "17px", "10px"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.75 }}
              />
            </div>
          </motion.div>
        </div>

        <img src={image2} alt="Website" className='relative left-15 md:left-23 top-10 z-10 w-[70%] h-auto object-contain' />
      </div>
    </section>

    {/* Section 3 */}
    <section className='flex flex-col-reverse md:flex-row justify-around items-center md:py-10 '>
      <div className='relative w-full max-w-lg h-auto my-10 md:my-0 right-7 order-2 md:order-1' >
        <div className='absolute top-0 left-8 w-[90%] aspect-square opacity-10 bg-white rounded-full z-0'></div>

        <div className='absolute left-17  md:left-20 -top-10 w-[90%] aspect-square overflow-hidden'>
          <motion.div
            className="relative w-full h-full border border-gray-600 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <motion.div
                className="bg-red-700 rounded-full"
                animate={{ width: ["10px", "17px", "10px"], height: ["10px", "17px", "10px"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <motion.div
                className="bg-red-700 rounded-full"
                animate={{ width: ["10px", "17px", "10px"], height: ["10px", "17px", "10px"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.75 }}
              />
            </div>
          </motion.div>
        </div>
        <img src={image3} alt="Website" className='relative left-12 z-10 w-[80%] h-auto object-contain' />
      </div>
      <div className='space-y-5 max-w-xl order-1 md:order-1 mt-5 md:mt-0'>
        <BouncyText
            text={"WordPress Solutions"}
            className="text-white font-bold text-[2rem] md:text-[2.875rem]"
          />
        <div className='text-[#A0AEC0] space-y-1'>
          {
            pointsForSection3.map((title, idx) => (
              <p key={idx} className='flex items-start gap-3'><GoDotFill className='mt-1 text-sm' /><span className='text-[1rem] md:text-[1.125rem]'>{title}</span></p>
            ))
          }
        </div>
      </div>
    </section>
  </div>
);

export default WebDesign;
