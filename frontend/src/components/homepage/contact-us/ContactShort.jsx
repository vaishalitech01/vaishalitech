import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaBuilding,
  FaMapMarkerAlt,
  FaPen,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import agent from "./img/agent.png";
import BouncyText from "../BouncyText";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    businessType: "",
    location: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      if (!/^\d{0,10}$/.test(value)) return; // Only allow digits, max 10
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const { name, email, mobile, message } = formData;

    if (!name || !email || !mobile || !message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      setStatus("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;

      const response = await fetch(`${backendUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        setIsSubmitted(true);
        setStatus("Thank you for filling this form. Our team will contact you soon!");
        console.log("Form submitted successfully", responseData);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          businessType: "",
          location: "",
          message: "",
        });
      } else {
        console.error("Failed to submit form", response.status);
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Something went wrong. Please try again.");
    }

    setTimeout(() => setStatus(""), 6000);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#031430] text-white mx-auto py-16 px-12 md:px-16 md:mt-20"
    >
      <div className="max-w-[1454px] mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full max-w-xs md:max-w-md group mx-auto md:mx-0"
        >
          <img
            src={agent}
            alt="Support Agent"
            className="w-full h-auto mx-auto rounded shadow-lg object-cover mt-16 transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
            <div className="relative top-[200px] flex items-start gap-3 transform -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <div className="w-1 h-20 bg-white rounded-full"></div>
              <h3 className="text-white w-[269px] text-xl sm:text-2xl md:text-3xl leading-9 font-semibold whitespace-pre-line">
                Leave A{"\n"}Message
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-2/3 space-y-6"
        >
          <BouncyText
            text="Contact Us"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-left mb-12 text-white"
          />
          <h3 className="text-2xl sm:text-3xl md:text-4xl mt-2 font-semibold text-[#E6007A]">
            Send A Message
          </h3>

          <form className="space-y-6" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="w-full bg-[#001F4D] text-white p-3 pl-10 rounded-md focus:outline-none"
                />
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E6007A]" />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-[#001F4D] text-white p-3 pl-10 rounded-md focus:outline-none"
                />
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E6007A]" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="w-full bg-[#001F4D] text-white p-3 pl-10 rounded-md focus:outline-none"
                  maxLength={10}
                />
                <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E6007A]" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  placeholder="Business Type"
                  className="w-full bg-[#001F4D] text-white p-3 pl-10 rounded-md focus:outline-none"
                />
                <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E6007A]" />
              </div>

              <div className="relative col-span-full">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Business Location"
                  className="w-full bg-[#001F4D] text-white p-3 pl-10 rounded-md focus:outline-none"
                />
                <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E6007A]" />
              </div>
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Send Message"
                className="w-full bg-[#001F4D] text-white p-3 pl-10 rounded-md focus:outline-none"
              ></textarea>
              <FaPen className="absolute left-3 top-4 text-[#E6007A]" />
            </div>

            {status && (
              <div className={`text-sm font-medium ${status.startsWith("Thank") ? "text-green-400" : "text-yellow-300"}`}>
                {status}
              </div>
            )}

            <button
              type="submit"
              className="bg-[#0044cc] hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-md transition-all flex items-center gap-2"
            >
              Send A Message <span className="text-xl">→</span>
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
