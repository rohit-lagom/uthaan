import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../Navbar/Navbar";
import { HeroBG, Rating1, Rating2, Rating3 } from "../../assets/assets";

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
      className="relative lg:min-h-screen pb-24 w-full transition-colors duration-300"
      ref={ref}
    >
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HeroBG})` }}
        />
        <div className="absolute inset-0 backdrop-blur-xs bg-black/10" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Navbar */}
      <div className="relative z-30 lg:pt-6">
        <Navbar />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-7xl w-full mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between lg:gap-14 pt-16 lg:pt-24"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Left Section */}
        <motion.div
          className="w-full md:w-1/2 md:pr-10 lg:pr-16 text-white mt-10 md:mt-0"
          variants={fadeInUp}
        >
          <div className="space-y-8 max-w-xl w-full">
            {/* Ratings */}
            <div className="flex justify-center md:justify-start gap-2 items-center">
              <div className="flex -space-x-2">
                <img
                  src={Rating1}
                  alt="User 1"
                  className="lg:h-12 lg:w-12 h-10 w-10 rounded-full border-2 border-white"
                />
                <img
                  src={Rating2}
                  alt="User 2"
                  className="lg:h-12 lg:w-12 h-10 w-10 rounded-full border-2 border-white z-10"
                />
                <img
                  src={Rating3}
                  alt="User 3"
                  className="lg:h-12 lg:w-12 h-10 w-10 rounded-full border-2 border-white z-20"
                />
              </div>
              <div>
                <div className="text-yellow-300">⭐⭐⭐⭐⭐</div>
                <div className="text-white text-sm">From 2000+ ratings</div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-center md:text-left text-white">
              From Crop to Cooperative –{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
                Procurement, Perfected.
              </span>
            </h1>

            <p className="text-lg text-white/80 text-center md:text-left">
              A blockchain-powered procurement network that links farmers, PACS & NABARD on one tamper-proof ledger—unlocking higher rural incomes at the national scale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-8 items-center md:items-start justify-center md:justify-start">
              <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-semibold w-full sm:w-auto transition cursor-pointer">
                Request a Pilot Demo
              </button>
              <button className="bg-white hover:bg-gray-100 text-green-700 px-6 py-3 rounded-md font-semibold w-full sm:w-auto transition border border-green-700 cursor-pointer">
                See How It Works
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Section (Form) */}
        <motion.div
          className="hidden md:flex justify-end w-full md:w-1/2 lg:max-w-xl"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <form className="backdrop-blur-lg bg-white/10 border border-white/30 shadow-xl text-white w-full lg:w-[540px] p-6 px-8 rounded-xl space-y-4">
            <label className="block text-xl py-4 pb-6 text-center font-semibold">
              Book a call with our experts
            </label>

            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-4 rounded-md text-white bg-white/20 placeholder-white/70 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-4 rounded-md text-white bg-white/20 placeholder-white/70 focus:outline-none"
            />
            <textarea
              placeholder="How we can help?"
              required
              className="w-full px-4 py-4 pb-16 rounded-md text-white bg-white/20 placeholder-white/70 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white px-6 py-3 mb-3 rounded-md transition font-semibold"
            >
              Request a call
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
