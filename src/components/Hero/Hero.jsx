import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ShieldCheck } from "lucide-react";
import Navbar from "../Navbar/Navbar";

import {
  HeroBG,
  GreenLogo
} from "../../assets/assets";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Typewriter effect
  const [typedText, setTypedText] = useState("");
  const fullText = ["Procurement,", "Perfected."];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (textIndex < fullText.length) {
      if (charIndex < fullText[textIndex].length) {
        const timeout = setTimeout(() => {
          setTypedText((prev) => prev + fullText[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const pause = setTimeout(() => {
          if (textIndex < fullText.length - 1) {
            setTypedText((prev) => prev + " ");
            setTextIndex((prev) => prev + 1);
            setCharIndex(0);
          }
        }, 600);
        return () => clearTimeout(pause);
      }
    }
  }, [charIndex, textIndex]);

  return (
    <div
      id="home"
      ref={ref}
      className="relative w-full lg:min-h-screen pb-18 transition-colors duration-300 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HeroBG})` }}
        />
        <div className="absolute inset-0 backdrop-blur-sm bg-black/10" />
      </div>
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Navbar */}
      <div className="relative z-30 pt-4">
        <Navbar />
      </div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 mt-8 flex justify-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 sm:text-sm text-xs font-semibold text-emerald-400 bg-white/20 backdrop-blur-md border border-emerald-500/30 rounded-full shadow transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-emerald-400/50 hover:shadow-lg">
          <ShieldCheck className="w-4 h-4" />
          Blockchain Powered Agri Procurement
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-6 pt-6 md:pt-8 lg:pt-14 flex flex-col lg:flex-row items-center justify-between gap-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Left */}
        <motion.div className="w-full lg:w-1/2 text-white" variants={containerVariants}>
          <div className="space-y-6 sm:space-y-8 max-w-2xl mx-auto lg:mx-0">


            {/* Heading with typewriter effect */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight text-center lg:text-left"
              variants={itemVariants}
            >
              From Crop to Cooperative{" "}
              <span className="bg-gradient-to-br from-emerald-800 font-extrabold tracking-wider via-green-500 to-teal-800  bg-clip-text  text-transparent">
                {typedText}
                <span className="inline-block w-[1px] h-6 bg-emerald-300 ml-1 animate-pulse" />
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-white/80 text-center lg:text-left"
              variants={itemVariants}
            >
              A blockchain-powered procurement network that links farmers, PACS
              & NABARD on one tamper-proof ledger—unlocking higher rural incomes
              at the national scale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 md:pt-6 items-center lg:items-start justify-center lg:justify-start"
              variants={itemVariants}
            >
              <button className="text-sm sm:text-base bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-600 hover:to-green-600 text-white px-6 py-3 rounded-md font-semibold w-full sm:w-auto transition-all shadow-md hover:shadow-lg cursor-pointer">
                Request a Pilot Demo
              </button>
              <button className="text-sm sm:text-base bg-white/10 border border-white/20 text-emerald-300 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-md font-semibold w-full sm:w-auto transition-all cursor-pointer">
                See How It Works
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full lg:w-1/2 justify-center relative lg:flex hidden"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-lg">
            <img
              src={GreenLogo}
              alt="Hero Illustration"
              className="relative z-10 w-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
