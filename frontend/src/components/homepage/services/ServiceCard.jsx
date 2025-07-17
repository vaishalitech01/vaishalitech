import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import cardBg from "./images/cardBg.png";
import brush from "./images/Brush.png";

export default function ServiceCard({
  icon,
  circle,
  title,
  description,
  index,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2,
      }}
      viewport={{ once: true }}
      className="relative group flex flex-col w-[345px] sm:w-[275px] md:w-[385px] lg:w-[400px] h-fit mt-4 mx-auto gap-6"
    >
      {/* Spinning circle background — hidden on mobile, shown on sm+ */}
      <img
        src={circle}
        alt="img"
        className="hidden lg:block absolute w-[320px] sm:w-[406px] h-[375px] rounded-full top-0 left-1/2 transform -translate-x-1/2 group-hover:-translate-y-30 animate-[spin_55s_linear_infinite]"
      />

      {/* Card container */}
      <div className="relative sm:w-[422px] md:w-[355px] lg:w-[275px] h-[480px] pl-3 pb-6 flex flex-col items-start pt-4 lg:left-[56px] overflow-hidden">
        {/* Background image on hover */}
        <div
          className="absolute inset-0 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${cardBg})` }}
        />

        {/* Brush icon */}
        <img
          src={brush}
          alt=""
          className="w-[80px] h-[80px] absolute left-[118px] top-2 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"
        />

        {/* Icon */}
        <div className="w-[60px] h-[58px] mb-4 z-10">
          <img src={icon} alt={title} className="w-full h-full" />
        </div>

        {/* Title */}
        <h3 className="text-[34px] leading-[39px] font-bold text-left z-10">
          {title}
        </h3>

        {/* Description */}
<p className="mt-4 w-full max-w-[260px] font-semibold text-left z-10">
          {description}
        </p>

        {/* Button */}
        <button className="mt-6 flex items-center justify-center w-[144px] h-[42px] bg-[#002E7C] hover:bg-pink-800 text-white font-semibold text-[16px] rounded transition-colors duration-300 z-10">
          Read More
          <FaArrowRightLong
            size={10}
            className="inline-block ml-1 transition-transform duration-300 ease-out group-hover:translate-x-1"
          />
        </button>
      </div>
    </motion.div>
  );
}
