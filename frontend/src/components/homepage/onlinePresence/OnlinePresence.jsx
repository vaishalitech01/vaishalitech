import React from "react";
import circle from "../services/images/circle.png";
import { useNavigate } from "react-router-dom"; // ✅ CORRECT HOOK
import bar from "./img/bar.png";
import black from "./img/black.png";
import lineGraph from "./img/lineGraph.png";
import men from "./img/men.png";
import { FaArrowRightLong } from "react-icons/fa6";
import BouncyText from "../BouncyText";
import brush from "../services/images/Brush.png";
import { motion } from "framer-motion";

export default function OnlinePresence() {
    const navigate = useNavigate();
  
  return (
    <section className="relative text-white py-16 sm:py-20 overflow-hidden">
      <BouncyText
        text={`Put Your Brand on the Digital Map`}
        className="text-2xl sm:text-4xl md:text-5xl px-4 mt-3 font-extrabold leading-tight text-center  "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12">
        {/* Left side - illustration */}
        <div className="relative w-full max-w-[400px] aspect-[1/1] mx-auto flex-shrink-0">
          {/* Use responsive img styles */}
          <img
            src={circle}
            alt="circle"
            className="absolute hidden sm:block w-full h-full object-contain animate-[spin_35s_linear_infinite] left-0 top-9"
          />
          <img
            src={men}
            alt="man"
            className="absolute top-[16%] md:top-[-8%] left-1/2 transform -translate-x-1/2 w-[58%]  md:w-[80%] h-auto z-10"
          />
          <img
            src={lineGraph}
            alt="lineGraph"
            className="absolute left-3.5 md:left-[-20%] top-[185px] md:top-[32%] w-[14%] sm:w-[28%] h-auto rotate-[3deg] animate-[float-left-up_6s_ease-in-out_infinite]"
          />
          <img
            src={brush}
            alt="brush"
            className="absolute  left-[7px] md:left-[-10%] top-[70%] w-[10%] sm:w-[20%] md:w-[22%] h-auto rotate-[3deg] animate-[float-left-up_5s_ease-in-out_infinite]"
          />
          <img
            src={black}
            alt="black"
            className="absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 w-[70%] lg:w-[90%] h-auto rotate-6"
          />
          <img
            src={bar}
            alt="bar"
            className="absolute top-[80%] md:top-[50%] left-[78%] w-[16%] sm:w-[30%] md:w-[33%] h-auto rotate-2 animate-[float-right-down_6s_ease-in-out_infinite]"
          />
        </div>

        {/* Right side - animated text block */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-[668px] w-full relative px-2"
        >
          <p className="text-[#D4D4D4] text-base md:text-lg font-semibold leading-relaxed mt-4 mb-6">
            Today, customers discover, trust, and choose businesses online
            first. A strong digital presence isn’t optional — it’s essential.
            With VaishaliTech, you’ll build more than just an online profile —
            you’ll build a digital identity that attracts, connects, and
            converts. <br />🔹 Let’s start building your presence — Book a quick
            consultation now.
          </p>

          {/* Button */}
          <button
            onClick={() => navigate("/contact-us")}
            className="group mt-4 md:absolute md:top-[200px] left-0 flex items-center justify-center w-[150px] sm:w-[174px] h-[38px] sm:h-[42px] bg-[#002E7C] hover:bg-pink-800 text-white font-semibold text-sm sm:text-[16px] rounded transition-colors duration-300 z-10 cursor-pointer"
          >
            Schedule a Call
            <FaArrowRightLong
              size={12}
              className="inline-block ml-1 transition-transform duration-300 ease-out group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
