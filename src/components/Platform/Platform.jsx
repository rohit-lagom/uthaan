import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
  HiOutlineShoppingCart,
  HiOutlineGlobe,
  HiOutlineLightningBolt,
  HiOutlineIdentification,
} from 'react-icons/hi';

const Platform = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const platformModules = [
    {
      icon: <HiOutlineCurrencyDollar className="w-10 h-10 text-green-700" />,
      title: 'Token Layer',
      description: 'Crop yields, carbon credits, land, machinery as digital assets',
    },
    {
      icon: <HiOutlineUserGroup className="w-10 h-10 text-green-700" />,
      title: 'DAO Governance',
      description: 'Mobile voting app, treasury control, on-chain decision making',
    },
    {
      icon: <HiOutlineShoppingCart className="w-10 h-10 text-green-700" />,
      title: 'Smart Marketplace',
      description: 'P2P crop trading, escrow-based payments',
    },
    {
      icon: <HiOutlineGlobe className="w-10 h-10 text-green-700" />,
      title: 'CSR & ESG Gateway',
      description: 'Milestone-based "Impact Wallets" for corporates',
    },
    {
      icon: <HiOutlineLightningBolt className="w-10 h-10 text-green-700" />,
      title: 'Impact Oracle',
      description: 'Verified data via satellite, soil sensors, and IoT',
    },
    {
      icon: <HiOutlineIdentification className="w-10 h-10 text-green-700" />,
      title: 'Agri Identity Hub',
      description: 'Unified digital identity for farmers, PACS & cooperatives to access services securely',
    },
  ];

  return (
    <section
      id="platform"
      ref={ref}
      className="py-20 relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
    >
      {/* Floating gradient glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            One Platform. <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Multiple Tools.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full" />
          <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
            A unified infrastructure for transparency, governance, and economic empowerment.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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

        <div className="mt-14 text-center">
          <motion.a
            href="#benefits"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium text-white bg-green-700 hover:bg-green-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Learn More About the Platform
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Platform;
