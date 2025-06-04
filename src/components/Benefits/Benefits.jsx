import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import HeroBG from './bermuda-diamond.svg';
// import HeroBG from './rose-petals.svg';
import HeroBG from './dragon-scales.svg';
import {
  HiOutlineUsers,
  HiOutlineOfficeBuilding,
  HiOutlineCash,
  HiOutlineGlobe,
} from 'react-icons/hi';

const Benefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const beneficiaries = [
    {
      icon: <HiOutlineUsers className="w-8 h-8 text-green-700" />,
      title: 'For Cooperatives',
      benefits: [
        'Transparent records with immutable history',
        'Fast payments and reduced transaction costs',
        'Democratic digital voting for all members',
        'Access to new revenue streams like carbon credits',
      ],
    },
    {
      icon: <HiOutlineOfficeBuilding className="w-8 h-8 text-green-700" />,
      title: 'For Corporates & CSR',
      benefits: [
        'Traceable impact with verification at every step',
        'SEBI BRSR Core compliance reporting tools',
        'Real-time dashboards for all initiatives',
        'Improved farmer relationships and loyalty',
      ],
    },
    {
      icon: <HiOutlineCash className="w-8 h-8 text-green-700" />,
      title: 'For Banks & NBFCs',
      benefits: [
        'Verified data for credit assessment',
        'NFT-based collateral for secured lending',
        'Lower credit risk through better visibility',
        'Access to new rural customer segments',
      ],
    },
    {
      icon: <HiOutlineGlobe className="w-8 h-8 text-green-700" />,
      title: 'For Agri Exporters & Brands',
      benefits: [
        'Farm-to-fork traceability for premium markets',
        'ESG reporting for international compliance',
        'Climate-smart sourcing certifications',
        'Direct farmer relationships for quality control',
      ],
    },
  ];

  return (
    <section
      id="benefits"
      ref={ref}
      className="relative py-16 md:py-24 bg-white scroll-mt-20 overflow-hidden"
    >
      {/* Background image */}
      <img
        src={HeroBG}
        alt="Decorative background"
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0 pointer-events-none"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Built for Everyone in the Agri Ecosystem
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our platform creates value for all stakeholders in the agricultural value chain,
            from farmers to financial institutions and beyond.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {beneficiaries.map((beneficiary, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 flex items-center">
                  <div className="w-14 h-14 mr-4 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-sm border border-white/30">
                    {beneficiary.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {beneficiary.title}
                  </h3>
                </div>

                <ul className="space-y-3 text-white/90 flex-grow">
                  {beneficiary.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
