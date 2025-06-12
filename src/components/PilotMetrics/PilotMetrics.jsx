import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Target, BarChart3 } from 'lucide-react';

const PilotMetrics = () => {
  const metrics = [
    {
      icon: MapPin,
      title: "Target Districts",
      value: "25 PACS",
      description: "across Punjab & Himachal"
    },
    {
      icon: Target,
      title: "Throughput Goal",
      value: "50,000 MT",
      description: "paddy in KMS 2025-26"
    },
    {
      icon: BarChart3,
      title: "KPIs",
      items: [
        "payment cycle < 72 hrs",
        "0.5% rejection dispute rate",
        "10% admin-cost saving"
      ]
    }
  ];

  return (
    <section className="py-20 relative bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pilot <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">Metrics</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="text-center mb-8">
                  <div className="bg-emerald-500/20 backdrop-blur-sm p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-emerald-500/30 transition-colors">
                    <metric.icon className="w-8 h-8 text-emerald-300" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{metric.title}</h3>
                </div>
                
                {metric.value && (
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-emerald-300 mb-2">{metric.value}</div>
                    <p className="text-gray-300">{metric.description}</p>
                  </div>
                )}
                
                {metric.items && (
                  <div className="space-y-3">
                    {metric.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-300 rounded-full flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PilotMetrics;