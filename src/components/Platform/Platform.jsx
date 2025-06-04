import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
  HiOutlineShoppingCart,
  HiOutlineGlobe,
  HiOutlineLightningBolt
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
      icon: <HiOutlineCurrencyDollar className="w-12 h-12 text-green-700" />,
      title: 'Token Layer',
      description: 'Crop yields, carbon credits, land, machinery as digital assets',
    },
    {
      icon: <HiOutlineUserGroup className="w-12 h-12 text-green-700" />,
      title: 'DAO Governance',
      description: 'Mobile voting app, treasury control, on-chain decision making',
    },
    {
      icon: <HiOutlineShoppingCart className="w-12 h-12 text-green-700" />,
      title: 'Smart Marketplace',
      description: 'P2P crop trading, escrow-based payments',
    },
    {
      icon: <HiOutlineGlobe className="w-12 h-12 text-green-700" />,
      title: 'CSR & ESG Gateway',
      description: 'Milestone-based "Impact Wallets" for corporates',
    },
    {
      icon: <HiOutlineLightningBolt className="w-12 h-12 text-green-700" />,
      title: 'Impact Oracle',
      description: 'Verified data via satellite, soil sensors, and IoT',
    },
  ];

  return (
    <section
      id="platform"
      className="py-16 md:py-24 bg-[#F7F7F7]"
      ref={ref}
    >
      <div className="px-4 md:px-6 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-neutral-900 mb-4">
            One Platform. Multiple Tools. Total Transparency.
          </h2>
          <p className="text-xl text-neutral-600 mb-8 md:mb-12 max-w-3xl mx-auto">
            Our comprehensive blockchain infrastructure connects all stakeholders in the agricultural ecosystem,
            from farmers to corporations, creating verifiable trust and efficiency.
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
              className="bg-white border-t-4 border border-green-700 rounded-lg shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg"
            >
              <div className="bg-green-50 p-4 rounded-full mb-6 shadow-sm">
                {module.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                {module.title}
              </h3>
              <p className="text-neutral-600">{module.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <motion.a
            href="#benefits"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
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
