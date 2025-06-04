import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  TestAlex,
  TestDavid,
  TestJohn,
  TestMichael,
} from "../../assets/assets";

const testimonials = [
  {
    name: "Alex Stokes",
    platform: "Review on Trustpilot",
    image: TestAlex,
    text: "Despite the tight deadline, Farmily completed the project on time and within budget, exceeding my expectations every step of the way. I highly recommend!",
    rating: 5,
  },
  {
    name: "John Smith",
    platform: "Review on Trustpilot",
    image: TestJohn,
    text: "I'm so grateful to have found Farmily. Their team not only transformed my neglected garden into a lush oasis but also provided great advice on how to maintain it.",
    rating: 5,
  },
  {
    name: "Michael Harrison",
    platform: "Review on Google",
    image: TestMichael,
    text: "I've been using Farmily for years now, and I couldn't be happier with the results. Their team always go above and beyond to ensure that my garden looks its best.",
    rating: 5,
  },
  {
    name: "David Peterson",
    platform: "Review on Trustpilot",
    image: TestDavid,
    text: "Farmily completely exceeded my expectations. From the initial consultation to the final touches, their team was professional and attentive to every detail.",
    rating: 5,
  },
];

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

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-24 overflow-hidden"
      ref={ref}
    >
      <motion.div
        className="relative max-w-7xl mx-auto px-6 mb-12"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0}
      >
        {/* Mobile Layout - Centered */}
        <div className="flex flex-col items-center text-center md:hidden">
          <h2 className="text-3xl font-bold mb-2">
            Trusted by 1000+ <span className="block">customers</span>
          </h2>
          <div className="text-2xl font-semibold">
            4.9 <span className="text-sm align-middle">⭐⭐⭐⭐⭐</span>
          </div>
          <p className="text-white/80 mt-1">From 2000+ reviews</p>
        </div>

        {/* Desktop Layout - Left Aligned */}
        <div className="hidden md:flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-4xl font-semibold leading-tight text-white">
            Trusted by 1000+ <span className="block ">customers</span>
          </div>
          <div>
            <div className="text-4xl font-bold text-white">
              4.9 <span className="text-xl align-middle">⭐⭐⭐⭐⭐</span>
            </div>
            <div className="text-white/80 text-3xl ">From 2000+ reviews</div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative overflow-hidden group">
        <div className="flex gap-6 py-5 my-5 w-max [animation:marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <motion.div
              key={i}
              className="bg-white/10 text-white p-6 sm:p-8 rounded-xl border border-white/20 backdrop-blur-lg shadow-lg w-64 sm:w-72 md:w-80 h-auto flex-shrink-0 transform transition duration-300 hover:scale-105"
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={(i % testimonials.length) + 1}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-white/30">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-white/80 text-sm">{t.platform}</div>
                </div>
              </div>
              <p className="text-white/90 pt-4">{t.text}</p>
              <div className="text-yellow-300 pt-4">
                {"⭐".repeat(t.rating)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
