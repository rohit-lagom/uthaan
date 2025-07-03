import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, TrendingDown } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: "Manual Delays",
      description: "Manual registers and middlemen delay procurement; payments often take weeks."
    },
    {
      icon: TrendingDown,
      title: "PACS Dissolution",
      description: "PACS often lack real-time analysis and insights, ultimately leading to their eventual dissolution."
    },
    {
      icon: AlertTriangle,
      title: "Trust Erosion",
      description: "Disputes over supply chain efficiency erode farmer trust"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-10 md:py-20">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-green-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-2xl" />
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(34 197 94) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            The <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Problem</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white/60 backdrop-blur-xl border border-white/20 md:rounded-3xl rounded-xl md:p-8 p-4 h-full hover:bg-white/80 hover:border-white/30 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                <div className="flex md:block items-center md:items-start space-x-4 md:space-x-0 mb-4 md:mb-6">
                  <div className="bg-red-50/80 backdrop-blur-sm md:p-4 p-2 md:rounded-2xl rounded-xl group-hover:bg-red-100/80 transition-colors">
                    <problem.icon className="md:w-8 md:h-8 w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="md:text-2xl text-xl font-bold text-slate-900 md:mt-4">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed md:text-base text-sm">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
