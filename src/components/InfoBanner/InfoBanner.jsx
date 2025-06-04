import React from "react";
import { Location, InfoBannerBG } from "../../assets/assets";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InfoBanner = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <div
      id="info-banner"
      className="relative w-full transition-colors duration-300"
      ref={ref}
    >
      {/* Background Image */}
      <img
        src={InfoBannerBG}
        alt="Garden background"
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0 pointer-events-none"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Animated Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-12 text-white">
        {/* Left: Text */}
        <motion.div
          className="text-2xl font-semibold text-center md:text-left"
          variants={fadeLeft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Our gardeners are available from 
          <span className="block">Monday to Friday</span>
        </motion.div>

        {/* Right: Button */}
        <motion.button
          variants={fadeRight}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-2xl shadow-md hover:shadow-lg transition border-t-4 border-green-700 hover:border-green-700"
        >
          <div className="bg-green-700 p-2 rounded-xl">
            <img src={Location} alt="Location icon" className="h-6 w-6" />
          </div>
          <div className="text-left leading-tight">
            <div className="font-semibold">(595) 555-0123</div>
            <div className="text-sm text-gray-700">From 9am to 5pm</div>
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default InfoBanner;
