import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, Smartphone } from 'lucide-react';

const Solution = () => {
  const solutions = [
    {
      icon: Shield,
      layer: "Permissioned Blockchain",
      what: "Writes every lot-ID, weight & quality grade at first weigh-bridge",
      why: "Creates an immutable, auditable trail"
    },
    {
      icon: Database,
      layer: "Gov-ready APIs",
      what: "Pushes data to NABARD's Common PACS ERP & AgriStack",
      why: "Zero duplication; satisfies audit rules"
    },
    {
      icon: Smartphone,
      layer: "Mobile App for Farmers",
      what: "Hindi & Punjabi UI; QR code receipt",
      why: "Full visibility of dues & ledger history"
    }
  ];

  return (
    <section 
    id='solutions'
    className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 py-10 md:py-20">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
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
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">Solution</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-3xl p-4 md:p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-xl hover:shadow-2xl">
                {/* Icon + Heading Row (Mobile) / Column (Desktop) */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 mb-6">
                  <div className="bg-emerald-500/20 backdrop-blur-sm p-3 md:p-4 rounded-xl md:rounded-2xl group-hover:bg-emerald-500/30 transition-colors">
                    <solution.icon className="w-6 h-6 md:w-8 md:h-8 text-emerald-300" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-emerald-300">{solution.layer}</h3>
                </div>

                {/* Questions */}
                <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">What it Does</h4>
                    <p className="text-gray-300 text-sm md:text-base">{solution.what}</p>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">Why it Matters</h4>
                    <p className="text-gray-300 text-sm md:text-base">{solution.why}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
