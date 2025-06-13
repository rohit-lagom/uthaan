import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HiOutlineUsers,
  HiOutlineOfficeBuilding,
  HiOutlineCash,
  HiOutlineGlobe,
} from "react-icons/hi";

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
      icon: <HiOutlineUsers className="w-8 h-8 text-green-300" />,
      title: "For Cooperatives",
      benefits: [
        "Transparent records with immutable history",
        "Fast payments and reduced transaction costs",
        "Democratic digital voting for all members",
        "Access to new revenue streams like carbon credits",
      ],
    },
    {
      icon: <HiOutlineOfficeBuilding className="w-8 h-8 text-green-300" />,
      title: "For Corporates & CSR",
      benefits: [
        "Traceable impact with verification at every step",
        "SEBI BRSR Core compliance reporting tools",
        "Real-time dashboards for all initiatives",
        "Improved farmer relationships and loyalty",
      ],
    },
    {
      icon: <HiOutlineCash className="w-8 h-8 text-green-300" />,
      title: "For Banks & NBFCs",
      benefits: [
        "Verified data for credit assessment",
        "NFT-based collateral for secured lending",
        "Lower credit risk through better visibility",
        "Access to new rural customer segments",
      ],
    },
    {
      icon: <HiOutlineGlobe className="w-8 h-8 text-green-300" />,
      title: "For Agri Exporters & Brands",
      benefits: [
        "Farm-to-fork traceability for premium markets",
        "ESG reporting for international compliance",
        "Climate-smart sourcing certifications",
        "Direct farmer relationships for quality control",
      ],
    },
  ];

  return (
    <section
      id="benefits"
      ref={ref}
      className="relative py-20 md:py-28 scroll-mt-20 bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 text-white"
    >
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container   max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Built for Everyone in the Agri Ecosystem
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our platform creates value for all stakeholders in the agricultural
            value chain, from farmers to financial institutions and beyond.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {beneficiaries.map((beneficiary, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 flex items-center gap-x-4">
                  <div className="min-w-[56px] h-14 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm border border-white/20">
                    {beneficiary.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {beneficiary.title}
                  </h3>
                </div>

                <ul className="space-y-3 text-white/80 flex-grow">
                  {beneficiary.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-300 mr-2 flex-shrink-0 mt-0.5"
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
