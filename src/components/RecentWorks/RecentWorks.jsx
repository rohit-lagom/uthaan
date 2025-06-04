import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Recent1,
  Recent2,
  Recent3,
  Recent4,
  Recent5,
  Recent6,
} from "../../assets/assets";

const RecentWorks = () => {
  const images = [Recent1, Recent2, Recent3, Recent4, Recent5, Recent6];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative z-20 max-w-7xl mx-auto px-6 py-30"
    >
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-semibold"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          Our recent works
        </motion.h2>

        <motion.p
          className="text-neutral-600 text-base max-w-2xl mx-auto mt-4"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
        >
          Our team combines expertise with creativity to transform outdoor
          spaces into breathtaking landscapes that enhance the beauty of any
          property.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 auto-rows-[200px] gap-4">
        {images.map((img, index) => {
          let spanClasses =
            index === 0 || index === 2 || index === 5
              ? "col-span-1 lg:col-span-2"
              : "col-span-1 lg:col-span-2 lg:row-span-2";

          return (
            <motion.div
              key={index}
              className={`${spanClasses} overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300`}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index + 2}
            >
              <img
                src={img}
                alt={`Recent work ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentWorks;
