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
      className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50"
    >
      <div className="conatiner mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-semibold text-slate-900"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
          >
            Our Recent Works
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 auto-rows-[200px] gap-4">
          {images.map((img, index) => {
            // Span logic: larger images at 1st, 3rd, and last
            const spanClasses =
              index === 0 || index === 2 || index === images.length - 1
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
      </div>
    </section>
  );
};

export default RecentWorks;
