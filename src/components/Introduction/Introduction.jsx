import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IntroLeaf, IntroSci, IntroPic, Quote } from "../../assets/assets";

const Introduction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={ref}
      className="py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Left Side: Image */}
          <motion.div
            className="w-full md:w-1/2 relative"
            variants={fadeInUp}
          >
            <img
              src={IntroPic}
              alt="Hero"
              className="object-center w-full h-92 rounded-xl shadow-lg bg-gray-100"
            />

            <motion.div
              className="absolute bottom-5 flex bg-white p-4 mx-4 rounded-xl shadow-md"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div>
                <img src={Quote} alt="" className="h-12 w-12 bg-white" />
              </div>
              <div className="px-2 text-sm md:text-base text-gray-60">
                <div className="text-black font-semibold">
                  We take the time to understand your unique needs and
                  preferences to ensure that your garden reflects your vision.
                </div>
                <div className="text-gray-500">Ricky Stokes, CEO</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div
            className="w-full md:w-1/2 space-y-6"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold">
              We believe in turning your outdoor space into your personal oasis
            </h2>

            <p className="text-sm md:text-lg text-neutral-500">
              Whether you have a sprawling backyard or a cozy balcony, our team
              of experienced gardeners and landscapers is dedicated to bringing
              your green dreams to life.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-4"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-green-700 rounded-lg">
                  <img
                    src={IntroLeaf}
                    alt="Sustainable Gardening"
                    className="h-8 w-8 p-2"
                  />
                </div>
                <span className="text-lg font-semibold">
                  Sustainable gardening practices
                </span>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                variants={fadeInUp}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-green-700 rounded-lg">
                  <img
                    src={IntroSci}
                    alt="Personalized Service"
                    className="h-8 w-8 p-2"
                  />
                </div>
                <span className="text-lg font-semibold">
                  Personalized service for your needs
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
