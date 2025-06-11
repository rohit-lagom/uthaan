import React from 'react';
import { motion } from 'framer-motion';
import { Database, Award, Coins, Brain } from 'lucide-react';

const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Procurement Ledger",
      icon: Database,
      description: "Establish blockchain-powered procurement tracking system",
      status: "current"
    },
    {
      phase: "Phase 2",
      title: "Quality-Seal NFTs",
      icon: Award,
      description: "Add retail traceability through digital quality certificates",
      status: "next"
    },
    {
      phase: "Phase 3",
      title: "Tokenized Working-Capital Pool",
      icon: Coins,
      description: "DeFi solutions for PACS financial management",
      status: "future"
    },
    {
      phase: "Phase 4",
      title: "AI-driven Forecasts",
      icon: Brain,
      description: "Smart contracts powered by crop prediction algorithms",
      status: "future"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'current':
        return {
          bg: 'bg-emerald-100',
          text: 'text-emerald-600',
          border: 'border-emerald-200',
          dot: 'bg-emerald-600'
        };
      case 'next':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          border: 'border-blue-200',
          dot: 'bg-blue-600'
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          border: 'border-gray-200',
          dot: 'bg-gray-400'
        };
    }
  };

  return (
    <section className="py-20 relative bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Road to <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Ecosystem</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-pink-300 via-rose-300 to-transparent" />
          
          <div className="space-y-12 lg:space-y-24">
            {phases.map((phase, index) => {
              const colors = getStatusColor(phase.status);
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative lg:flex lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Timeline dot for desktop */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                    <div className={`w-4 h-4 ${colors.dot} rounded-full border-4 border-white z-10 relative shadow-lg`} />
                  </div>
                  
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className={`bg-white/70 backdrop-blur-sm border ${colors.border} rounded-3xl p-8 group hover:bg-white/90 hover:border-opacity-60 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                      <div className="flex items-start gap-6">
                        <div className={`${colors.bg} p-4 rounded-2xl flex-shrink-0`}>
                          <phase.icon className={`w-8 h-8 ${colors.text}`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className={`text-sm font-medium ${colors.text} mb-2`}>
                            {phase.phase}
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-4">
                            {phase.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed">
                            {phase.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;