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
    <section className="py-20 relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Policy</span> Fit
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white/60 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full hover:bg-white/80 hover:border-white/30 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl">
                <div className="bg-green-100/80 backdrop-blur-sm p-4 rounded-2xl w-fit mb-6 group-hover:bg-green-200/80 transition-colors">
                  <policy.icon className="w-8 h-8 text-green-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{policy.title}</h3>
                
                {policy.amount && (
                  <div className="text-3xl font-bold text-green-600 mb-4">{policy.amount}</div>
                )}
                
                {policy.farmers && (
                  <div className="text-2xl font-bold text-green-600 mb-4">{policy.farmers}</div>
                )}
                
                <p className="text-slate-600 leading-relaxed">{policy.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicyFit;