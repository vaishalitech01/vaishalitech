// src/pages/DigitalMarketing.jsx
import React from 'react';
import { GoDotFill } from "react-icons/go";
import image1 from '../assets/digitalMarketing_imgs/Frame 283.png';
import image2 from '../assets/digitalMarketing_imgs/Digital_Marketing.png';
import image3 from '../assets/digitalMarketing_imgs/Group 1455.png';
import circle1 from '../assets/digitalMarketing_imgs/Group 1463.png'
import circle2 from '../assets/digitalMarketing_imgs/Group 1464.png'
import circle3 from '../assets/digitalMarketing_imgs/Group 1465.png'
import circle4 from '../assets/digitalMarketing_imgs/Group 1466.png'
import circle5 from '../assets/digitalMarketing_imgs/Group 1467.png'


import { motion } from 'framer-motion'
import BouncyText from '../components/homepage/BouncyText';

const pointsData = [
  "93% of online experiences begin with a search engine — if you're not visible on Google, you're invisible to most buyers.",
  "4.8 billion people use social media worldwide — digital marketing ensures your audience finds you, not your competitors.",
  "Content marketing generates 3x more leads than traditional ads — engage and convert customers through value-driven content.",
  "Email marketing delivers an average ROI of 4200% — build long-term customer loyalty without breaking your budget.",
  "Digital campaigns are fully trackable — know what works, reduce wasted spend, and scale results with confidence.",
  "Strong digital presence builds lasting brand value — SEO, reviews, and social proof work 24/7 to build trust and visibility."
];

const pointsData2 = [
  "Meta (Facebook & Instagram) Ads",
  "Google Ads (Search, Display, Shopping)",
  "Social Media Marketing (SMM)",
  "Search Engine Optimization (SEO)",
  "Google My Business Optimization",
  "Content Writing & Blog Posting",
  "Email Marketing Campaigns"
]


const DigitalMarketing = () => (
  <div>
    <section>
      <div className='bg-blue-950 py-18 md:py-35 px-10 flex flex-col md:flex-row justify-around '>
        <div className='relative w-full max-w-lg h-auto my-8 md:my-0 right-13 order-2 md:order-1'>
          <div className='absolute -top-10 left-8 w-full aspect-square opacity-10 bg-white rounded-full z-0'></div>
          <div className='absolute left-25  md:left-35 -top-15 w-[90%] aspect-square overflow-hidden'>
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

          <img src={image1} alt="Website" className='relative left-20 z-10 w-[85%]  h-auto object-contain' />
        </div>
        <div className='space-y-5 max-w-xl order-2 md:order-1 mt-12 md:mt-0'>
          <BouncyText
            text={"Why Your Business Needs Digital Marketing — Now More Than Ever"}
            className="text-white font-bold text-[2rem] md:text-[2.875rem]"
          />
          <h6 className='text-[#A0AEC0] font-bold text-[25px]'>Today, your potential customers aren’t flipping through newspapers — they’re scrolling through Instagram, searching on Google, and watching YouTube.

Digital marketing ensures your brand shows up where it matters, builds trust with your audience, and turns online traffic into real business.</h6>
          <div className='text-[#A0AEC0] space-y-1'>
            {
              pointsData.map((title, idx) => (
                <p key={idx} className='flex items-start gap-3'><GoDotFill className='mt-1 text-sm' /><span className='text-[1rem] md:text-[1.125rem]'>{title}</span></p>
              ))
            }
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className='bg-blue-950 py-18 md:py-35 px-10 flex flex-col md:flex-row justify-around '>
        <div className='relative w-full max-w-lg h-auto my-8 md:my-0 right-13 order-1 md:order-2'>
          <div className='absolute -top-10 left-8 w-full aspect-square opacity-10 bg-white rounded-full z-0'></div>
          <div className='absolute left-25  md:left-35 -top-15 w-[90%] aspect-square overflow-hidden'>
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

          <img src={image2} alt="Website" className='relative left-20 z-10 w-[85%]  h-auto object-contain' />
        </div>
        <div className='space-y-5 max-w-xl order-2 md:order-1 mt-12 md:mt-0'>
          <BouncyText
            text={"Digital Marketing"}
            className="text-white font-bold text-[2rem] md:text-[2.875rem]"
          />
          <div className='text-[#A0AEC0] space-y-1'>
            {
              pointsData2.map((title, idx) => (
                <p key={idx} className='flex items-start gap-3'><GoDotFill className='mt-1 text-sm' /><span className='text-[1rem] md:text-[1.125rem]'>{title}</span></p>
              ))
            }
          </div>
        </div>
      </div>
    </section>
    <section className='flex flex-col items-center md:gap-20 gap-10 pb-20  md:pb-40 bg-blue-950'>
      <div>
        <BouncyText
          text={"Design Process"}
          className="text-white font-bold text-[2rem] md:text-[2.875rem]"
        />
      </div>
      <div className='flex w-full justify-center '>
        <div className='flex justify-center items-center w-full relative'>
          <div className='relative w-[90%] md:w-[70%]'>
            <img src={image3} alt="Image" className='w-full md:h-[200px] ' />
            <img src={circle1} alt="" className='absolute top-[80%] -left-[2%] md:w-[20%] w-[22%] hover:scale-[1.1] transition-all  translate-y-[-50%]' />
            <img src={circle2} alt="" className='absolute top-[0%] left-[21%] w-[18%] md:w-[15%] hover:scale-[1.1] transition-all' />
            <img src={circle3} alt="" className='absolute top-[80%] left-[44%] w-[18%] md:w-[15%] hover:scale-[1.1] transition-all translate-y-[-50%]' />
            <img src={circle4} alt="" className='absolute top-[0%] left-[63%] w-[18%] md:w-[15%] hover:scale-[1.1] transition-all' />
            <img src={circle5} alt="" className='absolute top-[72%] left-[87%] w-[18%] md:w-[15%] hover:scale-[1.1] transition-all  translate-y-[-50%]' />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default DigitalMarketing;
