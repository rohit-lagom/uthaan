import React, { useState, useRef, useEffect } from "react";
import { FAQYoutube, DownArrow } from "../../assets/assets";

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

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // First item open by default
  const contentRefs = useRef([]);

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
    <section className="relative z-20 max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={FAQYoutube}
            alt="FAQ visual"
            className="rounded-xl h-96 w-full object-cover"
          />
        </div>

        {/* Right: Accordion FAQs */}
        <div className="w-full md:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-t-4 
               border-green-700 rounded-lg shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full cursor-pointer text-left p-5 font-medium flex justify-between items-center"
              >
                <span className="text-lg text-neutral-800">{faq.question}</span>
                <img
                  src={DownArrow}
                  alt="Toggle"
                  className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="overflow-hidden transition-all duration-500 max-h-0"
              >
                <div className="px-5 pb-4 text-neutral-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
