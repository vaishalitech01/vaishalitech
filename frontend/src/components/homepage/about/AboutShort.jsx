import React from "react";
import { motion } from "framer-motion";
import circle from "../services/images/circle.png";
import black from "../onlinePresence/img/black.png";
import ceo from "./img/ceo.jpg";
import BouncyText from "../BouncyText";

function AboutShort() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-[320px] sm:w-[350px] md:w-[400px] h-[384px] flex-shrink-0 mx-auto md:mx-0 mt-16"
    >
      <img
        src={circle}
        alt="circle"
        className="absolute hidden sm:block w-full h-full top-[-12px] left-[11px] rounded-full animate-[spin_35s_linear_infinite]"
      />
      <img
        src={ceo}
        alt="ceo"
        className="absolute left-[53%] top-[17px] transform -translate-x-1/2 z-10 w-[260px] sm:w-[90%] sm:max-w-[322px] h-auto object-cover rounded-full border-4 border-white shadow-xl"
      />
      <img
        src={black}
        alt="black background"
        className="absolute top-[-87px] left-1/2 transform -translate-x-1/2 w-[94%] max-w-[450px] h-auto mt-16 md:rotate-6"
      />
    </motion.div>
  );
}

export default function AboutUs() {
  return (
    <>
      <section className="bg-[#031430] text-white py-6 px-4 md:px-10 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-center">
          {/* Left: Animated Image */}
          <AboutShort />

          {/* Right: Animated Text */}
          <motion.div
            className="md:w-1/2 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <BouncyText
              text="About Us"
              className="text-4xl md:text-5xl font-bold leading-tight"
            />
            <h3 className="text-3xl md:text-4xl text-[#E6007A] font-semibold">
              A Virtual Workplace for Professionals
            </h3>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose font-medium max-w-[738px] w-full mx-auto md:mx-0 px-4 sm:px-0 text-start">
              Welcome to VaishaliTech, where innovation meets creativity.
              Founded by Abhishek Kumar, a BTech graduate from IIIT Lucknow, our
              mission is to empower businesses through cutting-edge digital
              solutions. At VaishaliTech, we specialize in website design, SEO,
              social media management, and app design, tailored to meet the
              unique needs of each client. Our team is dedicated to delivering
              high-quality services that enhance your online presence and drive
              growth. We believe in building lasting relationships with our
              clients and providing exceptional support every step of the way.
              Let us help you navigate the digital landscape and achieve your
              business goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer Quote Section */}
      <motion.div
        className="bg-[#031430] max-w-[1275px] h-auto px-4 md:px-10 py-10 mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="italic text-[#D4D4D4] text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose font-medium px-4 sm:px-0">
          At VaishaliTech, we’re not just a tech company — we’re your digital
          growth partner. Our mission is to deliver smart, innovative, and
          client-focused solutions that help you thrive in a rapidly evolving
          digital world. From custom website development and UI/UX design to
          network marketing and brand strategy, we provide a full suite of
          services designed to turn your ideas into impact. Whether you're
          building your first online presence or scaling a growing brand, we’re
          here to support your journey every step of the way — with creativity,
          expertise, and dedication.
        </p>
      </motion.div>
    </>
  );
}
