import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, Sprout, Menu, X } from "lucide-react";
import { Logo, HeroBG, Rating1, Rating2, Rating3, HeroBanner } from "../../assets/assets";
import Navbar from "../Navbar/Navbar";

// HERO COMPONENT
export const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeInUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: "easeOut" } },
  });

  return (
    <section
      id="home"
      ref={ref}
      className="relative w-full h-auto lg:h-screen overflow-hidden"
    >
      {/* Background + Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HeroBG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 backdrop-blur-sm" />
      </div>

      {/* Ambient Floating Blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-10 right-20 w-40 h-40 bg-green-400 rounded-full opacity-20 filter blur-3xl"
      />
      <motion.div
        animate={{ x: [-20, 20, -20], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute bottom-16 left-10 w-32 h-32 bg-emerald-300 rounded-full opacity-20 filter blur-2xl"
      />

      {/* Navbar & Badge */}
      <div className="relative z-20">
        <Navbar/>
        <div className="mt-4 flex justify-center lg:justify-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <Sprout className="h-5 w-5 text-green-200" />
            <span className="text-sm font-medium text-white">Blockchain Powered Agriculture</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between pt-10 lg:pt-22 pb-10">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 lg:space-y-8">
          <motion.div
            variants={fadeInUp(0.2)}
            initial="hidden"
            animate={inView && "visible"}
          >
            {/* Ratings */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
              <div className="flex -space-x-2">
                {[Rating1, Rating2, Rating3].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-yellow-300 font-medium">⭐⭐⭐⭐⭐</span>
              <span className="text-white/80 text-xs md:text-sm">2000+ ratings</span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp(0.4)}
            initial="hidden"
            animate={inView && "visible"}
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white"
          >
            From Crop to Cooperative –
            <br />
            <span className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
              Procurement, Perfected.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp(0.6)}
            initial="hidden"
            animate={inView && "visible"}
            className="max-w-lg mx-auto lg:mx-0 text-white/80 text-sm md:text-base"
          >
            A blockchain‑powered procurement network linking farmers, PACS &
            NABARD on one tamper‑proof ledger—unlocking higher rural incomes at
            national scale.
          </motion.p>

          <motion.div
            variants={fadeInUp(0.8)}
            initial="hidden"
            animate={inView && "visible"}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4"
          >
            <button className="px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition">
              Request a Pilot Demo
            </button>
            <button className="px-5 py-3 bg-white hover:bg-gray-100 text-green-700 font-semibold rounded-lg shadow-lg transform hover:scale-105 transition border border-green-600">
              See How It Works
            </button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE (only on lg and above) */}
        <motion.div
          variants={fadeInUp(1)}
          initial="hidden"
          animate={inView && "visible"}
          className="hidden lg:block lg:w-1/2 mt-10 lg:mt-0"
        >
          <div className="relative rounded-3xl bg-white/20 backdrop-blur-lg p-2 shadow-2xl border border-white/20">
            <img
              src={HeroBanner}
              alt="Hero"
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute lg:flex hidden bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex-col items-center text-white/70 hover:text-white"
      >
        <ChevronDown size={28} />
        <span className="mt-1 text-xs">Scroll down</span>
      </motion.a>
    </section>
  );
};
export default Hero;
