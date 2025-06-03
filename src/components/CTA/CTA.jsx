import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-r from-green-700 to-green-800 text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
          >
            Ready to Transform Your Co-op, CSR Program, or Agri Investment?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl mb-10 text-white/90"
          >
            Let our team show you how Farmily can unlock transparency, capital, and trust for your organization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-200 bg-white text-green-700 hover:bg-neutral-100 shadow-md"
            >
              Request a Demo
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-200 border-2 border-white text-white hover:bg-white/10"
            >
              Download Brochure
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
