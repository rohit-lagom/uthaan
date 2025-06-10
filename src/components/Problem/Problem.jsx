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
    <section className="py-20 relative bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            The <span className="text-red-600">Problem</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white/70 backdrop-blur-sm border border-red-100 rounded-3xl p-8 h-full hover:bg-white/90 hover:border-red-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="bg-red-100 p-4 rounded-2xl w-fit mb-6 group-hover:bg-red-200 transition-colors">
                  <problem.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{problem.title}</h3>
                <p className="text-slate-600 leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;