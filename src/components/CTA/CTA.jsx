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
      className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white scroll-mt-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-7xl mx-auto text-center backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 shadow-xl px-8 py-14"
        >
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
            Let our team show you how <strong>Farmily</strong> can unlock transparency, capital, and trust for your organization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {/* Glassmorphic Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-200 
              bg-white/10 text-white border border-white/30 backdrop-blur-md 
              hover:bg-white/20 hover:shadow-lg"
            >
              Request a Demo
            </a>

            {/* Secondary Glassmorphic Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-200 
              bg-white/5 text-white border border-white/30 backdrop-blur-md 
              hover:bg-white/10 hover:shadow-lg"
            >
              Download Brochure
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
