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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const platformModules = [
    {
      icon: <HiOutlineCurrencyDollar className="w-12 h-12 text-primary-500" />,
      title: "Token Layer",
      description: "Crop yields, carbon credits, land, machinery as digital assets",
      delay: 0,
    },
    {
      icon: <HiOutlineUserGroup className="w-12 h-12 text-primary-500" />,
      title: "DAO Governance",
      description: "Mobile voting app, treasury control, on-chain decision making",
      delay: 0.1,
    },
    {
      icon: <HiOutlineShoppingCart className="w-12 h-12 text-primary-500" />,
      title: "Smart Marketplace",
      description: "P2P crop trading, escrow-based payments",
      delay: 0.2,
    },
    {
      icon: <HiOutlineGlobe className="w-12 h-12 text-primary-500" />,
      title: "CSR & ESG Gateway",
      description: "Milestone-based \"Impact Wallets\" for corporates",
      delay: 0.3,
    },
    {
      icon: <HiOutlineLightningBolt className="w-12 h-12 text-primary-500" />,
      title: "Impact Oracle",
      description: "Verified data via satellite, soil sensors, and IoT",
      delay: 0.4,
    },
  ];

  return (
    <section id="platform" className="section bg-neutral-50" ref={ref}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">One Platform. Multiple Tools. Total Transparency.</h2>
          <p className="section-subtitle mx-auto">
            Our comprehensive blockchain infrastructure connects all stakeholders in the agricultural ecosystem,
            from farmers to corporations, creating verifiable trust and efficiency.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {platformModules.map((module, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card text-center p-8 flex flex-col items-center hover:border-primary-300 hover:border"
            >
              <div className="bg-primary-50 p-4 rounded-full mb-6">
                {module.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
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
            className="btn-primary"
          >
            Learn More About the Platform
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Platform;