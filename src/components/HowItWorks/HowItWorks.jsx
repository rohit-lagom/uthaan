import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Package, Database, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Register",
      description: "Farmer/PACS ID auto-syncs from AgriStack.",
      step: "01"
    },
    {
      icon: Package,
      title: "Deliver",
      description: "Grain is weighed; IoT moisture meter logs grade.",
      step: "02"
    },
    {
      icon: Database,
      title: "Record",
      description: "Data hash + digital signature lands on the cooperative blockchain.",
      step: "03"
    },
    {
      icon: CheckCircle,
      title: "Verify",
      description: "Immutable record ensures transparent and tamper-proof transactions.",
      step: "04"
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
            How It <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
          <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
            Four simple steps to revolutionize agricultural procurement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-white/70 backdrop-blur-sm border border-green-100 rounded-3xl p-8 h-full hover:bg-white/90 hover:border-green-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                    <step.icon className="w-8 h-8 text-green-600" />
                  </div>

                  <div className="text-5xl font-bold text-green-200 mb-4">{step.step}</div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>

                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Connection line for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-green-300 to-transparent transform -translate-y-1/2 z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
