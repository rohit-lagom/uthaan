import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HiOutlineUsers,
  HiOutlineOfficeBuilding,
  HiOutlineCash,
  HiOutlineGlobe,
} from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Benefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const beneficiaries = [
    {
      icon: <HiOutlineUsers className="w-8 h-8 text-emerald-300" />,
      title: "For Cooperatives",
      benefits: [
        "Transparent records with immutable history",
        "Fast payments and reduced transaction costs",
        "Democratic digital voting for all members",
        "Access to new revenue streams like carbon credits",
      ],
    },
    {
      icon: <HiOutlineOfficeBuilding className="w-8 h-8 text-emerald-300" />,
      title: "For Corporates & CSR",
      benefits: [
        "Traceable impact with verification at every step",
        "SEBI BRSR Core compliance reporting tools",
        "Real-time dashboards for all initiatives",
        "Improved farmer relationships and loyalty",
      ],
    },
    {
      icon: <HiOutlineCash className="w-8 h-8 text-emerald-300" />,
      title: "For Banks & NBFCs",
      benefits: [
        "Verified data for credit assessment",
        "NFT-based collateral for secured lending",
        "Lower credit risk through better visibility",
        "Access to new rural customer segments",
      ],
    },
    {
      icon: <HiOutlineGlobe className="w-8 h-8 text-emerald-300" />,
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
      className="relative overflow-hidden py-10 md:py-20 scroll-mt-20 bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 text-white"
    >
      {/* Animated background glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Section Header */}
      <div className="relative z-20 container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Built for{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
              Everyone
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our platform creates value for all stakeholders in the agricultural
            value chain, from farmers to financial institutions and beyond.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletClass:
                "swiper-pagination-bullet bg-emerald-400 opacity-50",
              bulletActiveClass:
                "swiper-pagination-bullet-active opacity-100",
            }}
            spaceBetween={16}
            slidesPerView={1}
            loop
          >
            {beneficiaries.map((beneficiary, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 flex flex-col items-start shadow-xl h-full mb-10">
                  <div className="flex items-center gap-x-4 mb-4">
                    <div className="min-w-[56px] h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/20">
                      {beneficiary.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {beneficiary.title}
                    </h3>
                  </div>
                  <ul className="space-y-3 text-white/80 text-sm">
                    {beneficiary.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-emerald-300 mr-2 flex-shrink-0 mt-0.5"
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Margin above dots */}
          <div className="mt-6" />
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficiaries.map((beneficiary, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-xl hover:shadow-2xl h-full flex flex-col">
                <div className="flex items-center gap-x-4 mb-6">
                  <div className="min-w-[56px] h-14 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-emerald-500/30 backdrop-blur-sm border border-white/20 transition-colors">
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
                        className="w-5 h-5 text-emerald-300 mr-2 flex-shrink-0 mt-0.5"
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
        </div>
      </div>
    </section>
  );
};

export default Benefits;
