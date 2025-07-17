import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // ✅ CORRECT HOOK
import bgCircle from "../onlinePresence/img/black.png";
import man from "./images/man.png";
import rocket from "./images/rocket.png";
import search from "./images/search.png";
import sms from "./images/sms.png";
import BouncyText from "../BouncyText.jsx";
import circle from "../services/images/circle.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-[600px] overflow-hidden px-4 sm:px-6 pt-[120px] pb-12 sm:pt-[120px] sm:pb-16 lg:pt-[140px] lg:pb-20 text-white flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* LEFT SIDE - TEXT */}
        <div className="xl:[700px] 2xl:w-[688px] w-full mt-5 md:mt-18 lg:mt-0 sm:mt-2 lg:w-1/2 space-y-6 text-center lg:text-left z-10">
          <BouncyText
            text={`Every Great Brand Deserves a Powerful Digital Story`}
            className="text-[29px] sm:text-5xl md:text-[38px] lg:text-[34px] xl:text-[46px] font-bold leading-tight"
          />

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg text-[#D4D4D4] leading-[29px] mx-auto lg:mx-0 max-w-xl text-start"
          >
            At VaishaliTech, we help startups and businesses go digital with
            confidence — from first-time websites to complete rebrands. We
            design engaging websites, stunning UI/UX, and growth-driven
            marketing that turn your vision into impact.
          </motion.p>

          <div className="flex justify-center lg:justify-start">
            <button
              onClick={() => navigate("/contact-us")}
              className="relative bg-[#111E33] mt-4 hover:bg-pink-600 text-white w-[240px] sm:w-[280px] h-[56px] sm:h-[62px] font-bold overflow-hidden transition-colors duration-300 cursor-pointer"
              style={{
                clipPath: "polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)",
                borderTop: "5px solid gray",
                borderRight: "5px solid gray",
              }}
            >
              <span className="absolute inset-0 flex items-center justify-center text-[18px] sm:text-[20px] md:text-[22px]">
                Tell Us Your Story
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGES */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center mt-10 lg:mt-0 lg:mr-28">
          {/* Background Circle */}
          <motion.img
            src={bgCircle}
            alt="circle"
            className="absolute w-[250px] sm:w-[350px] lg:w-[400px] xl:[475px] h-auto left-1/2 transform -translate-x-1/2 lg:left-[85px] lg:translate-x-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Circle Rotation */}
          <img
            src={circle}
            alt="circle"
            className="absolute w-[300px] sm:w-[420px] md:w-[455px] lg:w-[542px] xl:[486px] h-auto top-[-60px] left-1/2 transform -translate-x-1/2 lg:left-[124px] lg:translate-x-0 animate-[spin_35s_linear_infinite]"
          />

          {/* Man Image */}
          <motion.img
            src={man}
            alt="man"
            className="relative z-10 w-[220px] sm:w-[350px] lg:w-[420px] xl:w-[500px] h-auto object-contain"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              type: "spring",
              stiffness: 200,
            }}
          />

          {/* Rocket */}
          <motion.img
            src={rocket}
            alt="rocket"
            className="absolute top-[5%] left-[10px] md:left-[100px] lg:left-[10px] w-[50px] sm:w-[70px] md:w-[90px] lg:w-[100px] h-auto z-20 animate-[float-left-up_4s_ease-in-out_infinite]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />

          {/* Search */}
          <motion.img
            src={search}
            alt="search"
            className="absolute top-10 right-[30px] md:right-[80px] lg:right-[10px] w-[40px] sm:w-[60px] md:w-[75px] h-auto z-20 animate-[float-right-down_6s_ease-in-out_infinite]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />

          {/* SMS */}
          <motion.img
            src={sms}
            alt="sms"
            className="absolute bottom-[-5px] right-[30px] md:top-[300px] lg:top-[380px] xl:top-[412px] md:right-[170px] w-[40px] sm:w-[60px] h-auto z-20 animate-[float-right-down_5s_ease-in-out_infinite]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
