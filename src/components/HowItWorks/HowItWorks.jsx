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
    <section 
    id='HowItWorks'
    className="py-10 md:py-20 relative bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900">
      {/* Animated background elements */}
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
            How It <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">Works</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full" />
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Four simple steps to revolutionize agricultural procurement
          </p>
        </motion.div>

        {/* Mobile Version */}
        <div className="space-y-6 md:hidden">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 flex items-center gap-4 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-base">
                  {step.step}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-500/20 p-2 rounded-xl group-hover:bg-emerald-500/30 transition-colors">
                    <step.icon className="w-6 h-6 text-emerald-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Original md & lg Version (Unchanged) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                <div className="text-center">
                  <div className="bg-emerald-500/20 backdrop-blur-sm p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-emerald-500/30 transition-colors">
                    <step.icon className="w-8 h-8 text-emerald-300" />
                  </div>
                  <div className="text-5xl font-bold text-emerald-200/50 mb-4">{step.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
              {/* Connection line for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-emerald-300/50 to-transparent transform -translate-y-1/2 z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
