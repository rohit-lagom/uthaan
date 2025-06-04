import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FAQYoutube, DownArrow, YTPlay } from "../../assets/assets";

const faqs = [
  {
    question: "Do you offer maintenance services?",
    answer:
      "Yes, we provide comprehensive landscape maintenance services to keep your garden looking its best year-round. We offer tailored maintenance plans to suit your schedule and budget.",
  },
  {
    question: "Do you use organic gardening methods?",
    answer:
      "We prioritize sustainable practices and use organic fertilizers and herbicides when possible. We believe in promoting the health and vitality of your garden while minimizing environmental impact.",
  },
  {
    question: "Are your gardeners licensed and insured?",
    answer:
      "Yes, we are fully licensed and insured for your peace of mind. Our team consists of experienced professionals who are committed to delivering high-quality workmanship and exceptional service.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (el) {
        el.style.maxHeight = i === activeIndex ? el.scrollHeight + "px" : "0px";
      }
    });
  }, [activeIndex]);

  return (
    <div className="bg-[#F7F7F7]">
      <section
        className="relative z-20 max-w-7xl mx-auto px-6 py-30"
        ref={ref}
      >
        <motion.div
          className="flex flex-col md:flex-row gap-12 items-start"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          {/* YouTube Video Block */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center relative group cursor-pointer rounded-xl overflow-hidden"
            custom={0}
            variants={fadeInUp}
          >
            <img
              src={FAQYoutube}
              alt="FAQ visual"
              className="rounded-xl h-93 w-full object-cover transition-transform duration-300 group-hover:brightness-75"
            />
            <div className="absolute inset-0 rounded-xl bg-black bg-opacity-10 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={YTPlay}
                alt="Play icon"
                className="h-20 w-20 transition-transform duration-300 group-hover:scale-120"
              />
            </div>
          </motion.div>

          {/* FAQ List */}
          <motion.div
            className="w-full md:w-1/2 space-y-4"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-t-4 border-green-700 rounded-lg bg-white shadow-md"
                variants={fadeInUp}
                custom={index + 1}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-content-${index}`}
                  id={`faq-header-${index}`}
                  className="w-full cursor-pointer text-left p-6 font-medium flex justify-between items-center"
                >
                  <span className="text-xl text-neutral-800">{faq.question}</span>
                  <img
                    src={DownArrow}
                    alt="Toggle"
                    className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  id={`faq-content-${index}`}
                  role="region"
                  aria-labelledby={`faq-header-${index}`}
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden transition-all duration-500 max-h-0"
                >
                  <div className="px-6 pb-6 text-neutral-600">{faq.answer}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default FAQ;
