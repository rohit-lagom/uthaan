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
    <section className="py-20 relative bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Policy</span> Fit
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
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
              <div className="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-3xl p-8 h-full hover:bg-white/90 hover:border-blue-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="bg-blue-100 p-4 rounded-2xl w-fit mb-6 group-hover:bg-blue-200 transition-colors">
                  <policy.icon className="w-8 h-8 text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{policy.title}</h3>
                
                {policy.amount && (
                  <div className="text-3xl font-bold text-blue-600 mb-4">{policy.amount}</div>
                )}
                
                {policy.farmers && (
                  <div className="text-2xl font-bold text-blue-600 mb-4">{policy.farmers}</div>
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