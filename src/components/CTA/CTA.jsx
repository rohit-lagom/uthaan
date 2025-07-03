import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact"
     className="py-10 md:py-20 relative bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
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

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to make procurement{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
              painless?
            </span>
          </h2>

          <p className="text-lg md:text-2xl text-emerald-100/90 max-w-4xl mx-auto mb-8">
            Book a 30-min strategy call and join the next set of PACS going live
            on the Cooperative Blockchain Procurement Network.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-16"
        >
          <button className="group bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl text-lg md:text-xl font-semibold hover:from-emerald-400 hover:to-green-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center gap-3 backdrop-blur-sm w-full sm:w-auto text-center justify-center">
            <Calendar className="w-6 h-6" />
            Book Strategy Call
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button className="group text-white bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl text-lg md:text-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-3xl w-full sm:w-auto text-center justify-center">
            Request Demo
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-3xl p-4 md:p-8 text-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-2xl hover:shadow-3xl">
            <Phone className="w-8 h-8 text-emerald-300 mx-auto mb-4" />
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">
              Schedule a Call
            </h3>
            <p className="text-emerald-100/80 text-sm md:text-base">
              Get personalized consultation for your PACS
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-3xl p-4 md:p-8 text-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-2xl hover:shadow-3xl">
            <Mail className="w-8 h-8 text-emerald-300 mx-auto mb-4" />
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">
              Get in Touch
            </h3>
            <p className="text-emerald-100/80 text-sm md:text-base">
              Reach out for partnership opportunities
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 text-emerald-300/70">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-emerald-300/50" />
            <span className="text-sm font-medium">
              Join the Agricultural Revolution
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-emerald-300/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
