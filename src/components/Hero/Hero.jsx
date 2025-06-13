import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ShieldCheck } from "lucide-react";
import Navbar from "../Navbar/Navbar";

import {
  HeroBG,
  Rating1,
  Rating2,
  Rating3,
  HeroBanner,
} from "../../assets/assets";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div
      id="home"
      ref={ref}
      className="relative w-full lg:min-h-screen pb-18 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Image with Glass Blur */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HeroBG})` }}
        />
        <div className="absolute inset-0 backdrop-blur-sm bg-black/10" />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Navbar */}
      <div className="relative z-30 pt-4">
        <Navbar />
      </div>

   {/* Centered Badge with Motion */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
  className="relative z-30 mt-8 flex justify-center"
>
  <div className="inline-flex items-center gap-2 px-4 py-2 sm:text-sm text-xs font-semibold text-emerald-600 bg-white/20 backdrop-blur-md border border-emerald-500/30 rounded-full shadow">
    <ShieldCheck className="w-4 h-4" />
    Blockchain Powered Agri Procurement
  </div>
</motion.div>


      {/* Main Content */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-6 pt-6 md:pt-8 lg:pt-14 flex flex-col lg:flex-row items-center justify-between gap-10"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Left Section */}
        <motion.div className="w-full lg:w-1/2 text-white" variants={fadeInUp}>
          <div className="space-y-8 max-w-xl mx-auto lg:mx-0">
            {/* Ratings */}
            <div className="flex justify-center lg:justify-start items-center gap-3">
              <div className="flex -space-x-2">
                {[Rating1, Rating2, Rating3].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`User ${i + 1}`}
                    className="h-10 w-10 lg:h-12 lg:w-12 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <div className="text-yellow-300">⭐⭐⭐⭐⭐</div>
                <div className="text-white text-sm">From 2000+ ratings</div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-center lg:text-left">
              From Crop to Cooperative –{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
                Procurement, Perfected.
              </span>
            </h1>

            <p className="text-lg text-white/80 text-center lg:text-left">
              A blockchain-powered procurement network that links farmers, PACS
              & NABARD on one tamper-proof ledger—unlocking higher rural incomes
              at the national scale.
            </p>

            {/* CTA Buttons */}
 <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6 items-center lg:items-start justify-center lg:justify-start">
  <button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-600 hover:to-green-600 text-white px-6 py-3 rounded-md font-semibold w-full sm:w-auto transition-all shadow-md hover:shadow-lg cursor-pointer">
    Request a Pilot Demo
  </button>
  <button className="bg-white/10 border border-white/20 text-emerald-300 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-md font-semibold w-full sm:w-auto transition-all cursor-pointer">
    See How It Works
  </button>
</div>

          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="w-full lg:w-1/2  justify-center relative lg:flex hidden"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-lg">
            <img
              src={HeroBanner}
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
