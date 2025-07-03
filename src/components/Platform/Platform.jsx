import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
  HiOutlineShoppingCart,
  HiOutlineGlobe,
  HiOutlineLightningBolt,
  HiOutlineIdentification,
} from "react-icons/hi";

const Platform = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const platformModules = [
    {
      icon: <HiOutlineCurrencyDollar className="w-8 h-8 text-green-700" />,
      title: "Token Layer",
      description:
        "Crop yields, carbon credits, land, machinery as digital assets",
    },
    {
      icon: <HiOutlineUserGroup className="w-8 h-8 text-green-700" />,
      title: "DAO Governance",
      description:
        "Mobile voting app, treasury control, on-chain decision making",
    },
    {
      icon: <HiOutlineShoppingCart className="w-8 h-8 text-green-700" />,
      title: "Smart Marketplace",
      description: "P2P crop trading, escrow-based payments",
    },
    {
      icon: <HiOutlineGlobe className="w-8 h-8 text-green-700" />,
      title: "CSR & ESG Gateway",
      description: 'Milestone-based "Impact Wallets" for corporates',
    },
    {
      icon: <HiOutlineLightningBolt className="w-8 h-8 text-green-700" />,
      title: "Impact Oracle",
      description: "Verified data via satellite, soil sensors, and IoT",
    },
    {
      icon: <HiOutlineIdentification className="w-8 h-8 text-green-700" />,
      title: "Agri Identity Hub",
      description:
        "Unified digital identity for farmers, PACS & cooperatives to access services securely",
    },
  ];

  return (
    <motion.section
      id="platform"
      ref={ref}
      className="py-10 md:py-20 relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Floating gradient glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            One Platform.{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Multiple Tools.
            </span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full" />
          <motion.p
            className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A unified infrastructure for transparency, governance, and economic
            empowerment.
          </motion.p>
        </motion.div>

        {/* Mobile View */}
        <div className="space-y-4 md:hidden">
          {platformModules.map((module, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/60 backdrop-blur-xl border border-white/20 rounded-xl p-4 flex flex-col space-y-2 shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-green-100/80 p-3 rounded-xl">
                  {module.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {module.title}
                </h3>
              </div>
              <p className="text-slate-600 text-sm">
                {module.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Desktop View (unchanged) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {platformModules.map((module, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/60 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full hover:bg-white/80 hover:border-white/30 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              <div className="bg-green-100/80 group-hover:bg-green-200/80 backdrop-blur-sm p-4 rounded-2xl w-fit mb-6 transition-colors">
                {module.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {module.title}
              </h3>
              <p className="text-slate-600">{module.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#benefits"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition duration-200"
          >
            Learn More About the Platform
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Platform;
