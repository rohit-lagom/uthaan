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
      title: "Key Performance Indicators",
      items: [
        "payment cycle < 72 hrs",
        "0.5% rejection dispute rate",
        "10% admin-cost saving"
      ]
    }
  ];

  return (
    <section className="py-20 relative bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Pilot <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Metrics</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white/70 backdrop-blur-sm border border-green-100 rounded-3xl p-8 h-full hover:bg-white/90 hover:border-green-200 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="text-center mb-8">
                  <div className="bg-green-100 p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                    <metric.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{metric.title}</h3>
                </div>

                {metric.value && (
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-green-600 mb-2">{metric.value}</div>
                    <p className="text-slate-600">{metric.description}</p>
                  </div>
                )}

                {metric.items && (
                  <div className="text-left space-y-3">
                    {metric.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0" />
                        <span className="text-slate-600">{item}</span>
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
