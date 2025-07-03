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
    platform: "District PACS Officer – Punjab",
    image: TestAlex,
    text: "Uthaan’s blockchain ledger cut our payment delays drastically. Farmers now get transparency they’ve never seen before.",
    rating: 5,
  },
  {
    name: "John Smith",
    platform: "Farmer – Himachal Pradesh",
    image: TestJohn,
    text: "Earlier we waited weeks for payments. Now I get a digital receipt and see dues instantly on the app. It’s a game-changer.",
    rating: 5,
  },
  {
    name: "Michael Harrison",
    platform: "Cooperative Secretary – NABARD Pilot",
    image: TestMichael,
    text: "Our audits are simpler now. The real-time dashboard from Uthaan helps us track every grain lot from the moment it’s delivered.",
    rating: 5,
  },
  {
    name: "David Peterson",
    platform: "Agritech Evaluator – FPO Network",
    image: TestDavid,
    text: "Uthaan bridges PACS, farmers, and national infra like AgriStack—this is future-ready agri-tech done right.",
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
      className="relative py-10 md:py-20 bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 overflow-hidden"
      ref={ref}
    >
      <motion.div
        className="relative container  max-w-7xl mx-auto px-6 text-center mb-12"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Voices from the{" "}
          <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
            Ground
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full" />
        <p className="text-white/70 mt-4 text-lg">
          Hear what real users from the agri ecosystem are saying.
        </p>
      </motion.div>

      <div className="container  max-w-7xl mx-auto px-6 relative overflow-hidden group">
        <div className="flex gap-6 py-5 my-5 w-max [animation:marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 w-72 sm:w-80 h-80 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-xl hover:shadow-2xl flex-shrink-0"
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
              <p className="text-white/90 mb-4">{t.text}</p>
              <div className="text-yellow-300 text-lg">
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
