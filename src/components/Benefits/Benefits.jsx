import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HiOutlineUsers, 
  HiOutlineOfficeBuilding, 
  HiOutlineCash,
  HiOutlineGlobe
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
      icon: <HiOutlineUsers className="w-12 h-12 text-primary-500" />,
      title: "For Cooperatives",
      benefits: [
        "Transparent records with immutable history",
        "Fast payments and reduced transaction costs",
        "Democratic digital voting for all members",
        "Access to new revenue streams like carbon credits"
      ]
    },
    {
      icon: <HiOutlineOfficeBuilding className="w-12 h-12 text-secondary-500" />,
      title: "For Corporates & CSR",
      benefits: [
        "Traceable impact with verification at every step",
        "SEBI BRSR Core compliance reporting tools",
        "Real-time dashboards for all initiatives",
        "Improved farmer relationships and loyalty"
      ]
    },
    {
      icon: <HiOutlineCash className="w-12 h-12 text-accent-500" />,
      title: "For Banks & NBFCs",
      benefits: [
        "Verified data for credit assessment",
        "NFT-based collateral for secured lending",
        "Lower credit risk through better visibility",
        "Access to new rural customer segments"
      ]
    },
    {
      icon: <HiOutlineGlobe className="w-12 h-12 text-primary-600" />,
      title: "For Agri Exporters & Brands",
      benefits: [
        "Farm-to-fork traceability for premium markets",
        "ESG reporting for international compliance",
        "Climate-smart sourcing certifications",
        "Direct farmer relationships for quality control"
      ]
    }
  ];

  return (
    <section id="benefits" className="section bg-white" ref={ref}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Built for Everyone in the Agri Ecosystem</h2>
          <p className="section-subtitle mx-auto">
            Our platform creates value for all stakeholders in the agricultural value chain, 
            from farmers to financial institutions and beyond.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {beneficiaries.map((beneficiary, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card hover:border-primary-200 hover:border transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 flex items-center">
                  <div className="mr-4">
                    {beneficiary.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{beneficiary.title}</h3>
                </div>
                
                <ul className="space-y-3 text-neutral-700 flex-grow">
                  {beneficiary.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
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