// src/pages/UIUX.jsx
import React from 'react';
import { GoDotFill } from "react-icons/go";
import image1 from '../public/UI_UX_Design.png'
import image2 from '../assets/imgs/image.png'
import { motion } from 'framer-motion'
import BouncyText from '../components/homepage/BouncyText';
import image3 from '../assets/imgs/Group 1455.png'
import circle1 from '../assets/imgs/Group 1452.png'
import circle2 from '../assets/imgs/Group 1450.png'
import circle3 from '../assets/imgs/Group 1447.png'
import circle4 from '../assets/imgs/Group 1451.png'
import circle5 from '../assets/imgs/Group 1460.png'
import circle6 from '../assets/imgs/Group 1454.png'

const pointsData = [
  "Website UI/UX Design",
  "Mobile App UI/UX Design",
  "Logo Design",
  "Business Card / Visiting Card Design",
  "Brochure / Flyer / Banner Design",
  "Social Media Post Design"
]
const pointsData2 = [
  "First impressions happen in seconds — a clean, modern UI makes your brand instantly feel trustworthy, credible, and professional.",
  "Thoughtful UX design ensures users can navigate effortlessly, find what they need without frustration, and enjoy the overall experience.",
  "A seamless user experience reduces bounce rates, increases engagement, and drives more conversions — like purchases, signups, or inquiries.",
  "Your design reflects your brand’s quality — a poor layout can make even the best services appear unprofessional and untrustworthy.",
  "When users enjoy the experience, they remember your brand — and are more likely to return, recommend, and become loyal customers."
];



const UIUX = () => (
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

          <img src={image2} alt="Website" className='relative left-20 z-10 w-[85%]  h-auto object-contain' />
        </div>
        <div className='space-y-5 max-w-xl order-2 md:order-1 mt-12 md:mt-0'>
          <BouncyText
            text={"Why UI/UX Design Matters for Your Brand"}
            className="text-white font-bold text-[2rem] md:text-[2.875rem]"
          />
          <h6 className='text-[#A0AEC0] font-bold text-[25px]'>Your website or app is often the first impression your brand makes — and you only get one. A great UI/UX design isn’t just about looking good; it’s about earning trust, guiding users, and turning interest into action.</h6>
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

          <img src={image1} alt="Website" className='relative left-20 z-10 w-[85%]  h-auto object-contain' />
        </div>
        <div className='space-y-5 max-w-xl order-2 md:order-1 mt-12 md:mt-0'>
          <BouncyText
            text={"Graphic & UI/UX Design"}
            className="text-white font-bold text-[2rem] md:text-[2.875rem]"
          />
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
    <section className='flex flex-col items-center gap-20 md:pb-40 bg-blue-950'>
      <div>
        <BouncyText
          text={"Design Process"}
          className="text-white font-bold text-[2rem] md:text-[2.875rem]"
        />
      </div>
      <div className='flex w-full justify-center '>
        <div className='flex justify-center items-center w-full h-[200px] relative'>
          <div className='relative w-[90%] md:w-[70%]'>
            <img src={image3} alt="Image" className='w-full h-full ' />
            <img src={circle1} alt="" className='absolute top-[75%] left-[0%] w-[15%] hover:scale-[1.1] transition-all  translate-y-[-50%]' />
            <img src={circle2} alt="" className='absolute top-[1%] left-[18%] w-[15%] hover:scale-[1.1] transition-all' />
            <img src={circle3} alt="" className='absolute top-[70%] left-[37%] w-[15%] hover:scale-[1.1] transition-all translate-y-[-50%]' />
            <img src={circle4} alt="" className='absolute top-[1%] left-[54%] w-[15%] hover:scale-[1.1] transition-all' />
            <img src={circle5} alt="" className='absolute top-[72%] left-[70%] w-[15%] hover:scale-[1.1] transition-all  translate-y-[-50%]' />
            <img src={circle6} alt="" className='absolute top-[0%] left-[87%] w-[15%] hover:scale-[1.1] transition-all' />
          </div>
        </div>
      </div>
    </section>
  </div>

);

export default UIUX;
