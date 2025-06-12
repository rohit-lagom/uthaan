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
    },
    {
      phase: "Phase 2",
      title: "Quality-Seal NFTs",
      icon: Award,
      description: "Add retail traceability through digital quality certificates",
    },
    {
      phase: "Phase 3",
      title: "Tokenized Working-Capital Pool",
      icon: Coins,
      description: "DeFi solutions for PACS financial management",
    },
    {
      phase: "Phase 4",
      title: "AI-driven Forecasts",
      icon: Brain,
      description: "Smart contracts powered by crop prediction algorithms",
    }
  ];

  const getPhaseColors = (index) => {
    const colorThemes = [
      {
        bg: 'bg-emerald-100/80',
        text: 'text-emerald-600',
        border: 'border-white/20',
        dot: 'bg-emerald-600'
      },
      {
        bg: 'bg-blue-100/80',
        text: 'text-blue-600',
        border: 'border-white/20',
        dot: 'bg-blue-600'
      },
      {
        bg: 'bg-yellow-100/80',
        text: 'text-yellow-600',
        border: 'border-white/20',
        dot: 'bg-yellow-500'
      },
      {
        bg: 'bg-pink-100/80',
        text: 'text-pink-600',
        border: 'border-white/20',
        dot: 'bg-pink-600'
      }
    ];
    return colorThemes[index % colorThemes.length];
  };

  return (
    <section className="py-20 relative bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Road to <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Ecosystem</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-pink-300/30 via-rose-300/30 to-transparent" />
          
          <div className="space-y-12 lg:space-y-24">
            {phases.map((phase, index) => {
              const colors = getPhaseColors(index);
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
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                    <div className={`w-4 h-4 ${colors.dot} rounded-full border-4 border-gray-900 z-10 relative shadow-lg`} />
                  </div>
                  
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className={`bg-white/10 backdrop-blur-xl border ${colors.border} rounded-3xl p-8 group hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-2xl hover:shadow-3xl`}>
                      <div className="flex items-start gap-6">
                        <div className={`${colors.bg} backdrop-blur-sm p-4 rounded-2xl flex-shrink-0`}>
                          <phase.icon className={`w-8 h-8 ${colors.text}`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className={`text-sm font-medium ${colors.text} mb-2`}>
                            {phase.phase}
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-4">
                            {phase.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
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
