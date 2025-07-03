import React from 'react';
import { motion } from 'framer-motion';
import { Building, Globe, ShoppingCart } from 'lucide-react';

const PolicyFit = () => {
  const policies = [
    {
      icon: Building,
      title: "PACS Computerisation",
      amount: "₹2,516 Cr",
      description: "50,455 societies already on NABARD's ERP, primed for a blockchain layer."
    },
    {
      icon: Globe,
      title: "Digital Agriculture Mission / AgriStack",
      description: "Mandates digital public infra for farm data; our ledger plugs straight in."
    },
    {
      icon: ShoppingCart,
      title: "e-Procurement Push",
      farmers: "6.4 M farmers",
      description: "Now transact via Nafed/NCCF portals; our system adds cryptographic trust."
    }
  ];

  return (
    <section className="py-10 md:py-20 relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-green-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(34 197 94) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
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
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Policy</span> Fit
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white/60 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-3xl p-4 md:p-8 h-full hover:bg-white/80 hover:border-white/30 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                
                {/* Mobile: Left Icon - Right Heading */}
                <div className="flex items-center md:block gap-4 md:gap-0 mb-4 md:mb-6">
                  <div className="bg-green-100/80 backdrop-blur-sm p-2 md:p-4 rounded-xl md:rounded-2xl w-fit inline-flex group-hover:bg-green-200/80 transition-colors">
                    <policy.icon className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    {policy.title}
                  </h3>
                </div>

                {/* Amount or Farmers */}
                {policy.amount && (
                  <div className="text-2xl md:text-3xl font-bold text-green-600 mb-3 md:mb-4">
                    {policy.amount}
                  </div>
                )}
                {policy.farmers && (
                  <div className="text-xl md:text-2xl font-bold text-green-600 mb-3 md:mb-4">
                    {policy.farmers}
                  </div>
                )}

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {policy.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicyFit;
