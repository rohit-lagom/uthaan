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
    <section className="py-20 relative bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Solution</span>
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
              <div className="bg-white/70 backdrop-blur-sm border border-emerald-100 rounded-3xl p-8 hover:bg-white/90 hover:border-emerald-200 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="bg-emerald-100 p-4 rounded-2xl flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                    <solution.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-emerald-600 mb-4">{solution.layer}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">What it Does</h4>
                        <p className="text-slate-600">{solution.what}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">Why it Matters</h4>
                        <p className="text-slate-600">{solution.why}</p>
                      </div>
                    </div>
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