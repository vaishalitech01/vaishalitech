import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ CORRECT HOOK
import cardImage1 from "./imgs/1.png";
import cardImage2 from "./imgs/2.png";
import cardImage3 from "./imgs/3.png";
import cardImage4 from "./imgs/4.png";
import BouncyText from "../BouncyText.jsx";

const digitalData = [
  {
    text: "Boost Your Reach\n& Visibility",
    image: cardImage1,
  },
  {
    text: "Secure Your Virtual\nInteractions",
    image: cardImage2,
  },
  {
    text: "Elevate Your Brand\nValue",
    image: cardImage3,
  },
  {
    text: "Streamline Your \nPerformance",
    image: cardImage4,
  },
];

const services = [
  {
    number: "01",
    title: "One-Stop Solution",
    description:
      "From UI/UX and branding to SEO and full-stack development — we offer everything you need for a powerful digital presence, all under one roof.",
  },
  {
    number: "02",
    title: "Client-Centric Approach",
    description:
      "Your goals guide our work. We offer dedicated support during and after the project to ensure you feel confident, heard, and supported at every step.",
  },
  {
    number: "03",
    title: "Proven \nResults",
    description:
      "We don’t just promise results — we deliver them. Our SEO and marketing strategies have consistently increased visibility, traffic, and conversions for businesses across industries.",
  },
  {
    number: "04",
    title: "Transparent Pricing",
    description:
      "No hidden fees, no guesswork. Our pricing is transparent and tailored to fit your budget — whether you’re a startup or a growing enterprise.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

export default function DigitalMarketing() {
  const navigate = useNavigate();

  return (
    <section className=" text-white py-16 px-4 md:px-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <BouncyText
          text={`Stand Out. Get Found. Grow Faster.`}
          className="text-5xl font-extrabold leading-tight text-center mb-8 text-white"
        />
        <p className="text-gray-300 max-w-7xl mx-auto text-xl text-left">
          Tired of juggling vendors and slow results? The expert team at
          VaishaliTech handles everything — design, SEO, marketing, and more —
          so you don’t have to stress. We build your complete online presence,
          hassle-free.
        </p>
      </div>

      {/* Digital Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-2">
        {digitalData.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={item.image}
              alt={`card-${index}`}
              className="w-full h-[386px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
              <div className="relative top-[110px] flex items-start gap-3 transform -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <div className="w-1 h-18 bg-white rounded-full"></div>
                <h3 className="text-white w-[269px] text-3xl leading-9 font-semibold whitespace-pre-line">
                  {item.text}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Services Section */}
      <div className="mt-32 text-center">
        <BouncyText
          text={`What We Bring to the Table`}
          className="text-5xl font-extrabold leading-tight text-center mb-2 text-white"
        />
        <p className="text-[#CACACA] text-3xl mb-12">
          Complete Solutions. Proven Results. Built Around You.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ delay: index * 0.15 }}
              className="relative mt-8 w-[304px] h-[500px ] mx-auto bg-[#1C2A45] rounded-[70px_70px_20px_20px] p-8 pb-10 flex flex-col justify-between min-h-[380px] shadow-lg overflow-hidden half-moon-right"
            >
              <div className="relative z-10 text-right mb-5">
                <div className="text-[90px] font-bold text-[#ccc] mb-4">
                  {service.number}
                </div>
                <h3 className="text-[#880E4F] font-extrabold mt-5 text-3xl leading-7 mb-2 text-left">
                  {service.title}
                </h3>
                <p className="text-gray-300 font-semibold leading-5 text-sm text-left mt-4">
                  {service.description}
                </p>
              </div>
              <button
                onClick={() => navigate("/contact-us")}
                className=" top-[15px] self-start px-6 py-1 bg-[#00308F] text-white font-extrabold rounded-full text-xl hover:bg-[#e6007a] transition duration-300 relative z-10 cursor-pointer"
              >
                Know More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
