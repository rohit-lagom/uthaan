import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Shield, ShoppingBag } from 'lucide-react';

const StakeholderWins = () => {
  const stakeholders = [
    {
      icon: Users,
      title: "Farmers",
      benefit: "Faster, dispute-free, verifiable proof of delivery.",
      color: "emerald"
    },
    {
      icon: Building2,
      title: "PACS",
      benefit: "Single dashboard for stocks, payments & audit trails.",
      color: "green"
    },
    {
      icon: Shield,
      title: "NABARD / FCI",
      benefit: "Real-time procurement analytics, fraud-proof records.",
      color: "teal"
    },
    {
      icon: ShoppingBag,
      title: "Consumers",
      benefit: "Transparent provenance builds trust for future retail traceability.",
      color: "emerald"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: {
        bg: "bg-emerald-100/80",
        hoverBg: "group-hover:bg-emerald-200/80",
        text: "text-emerald-600",
        border: "border-white/20",
        hoverBorder: "hover:border-white/30"
      },
      green: {
        bg: "bg-green-100/80",
        hoverBg: "group-hover:bg-green-200/80",
        text: "text-green-600",
        border: "border-white/20",
        hoverBorder: "hover:border-white/30"
      },
      teal: {
        bg: "bg-teal-100/80",
        hoverBg: "group-hover:bg-teal-200/80",
        text: "text-teal-600",
        border: "border-white/20",
        hoverBorder: "hover:border-white/30"
      }
    };
    return colors[color];
  };

  return (
    <section className="py-20 relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
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
            Stakeholder <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Wins</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full" />
          <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
            Every participant in the ecosystem benefits from our blockchain solution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stakeholders.map((stakeholder, index) => {
            const colorClasses = getColorClasses(stakeholder.color);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className={`bg-white/60 backdrop-blur-xl border ${colorClasses.border} rounded-3xl p-8 h-full hover:bg-white/80 ${colorClasses.hoverBorder} transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl`}>
                  <div className={`${colorClasses.bg} backdrop-blur-sm p-4 rounded-2xl w-fit mb-6 ${colorClasses.hoverBg} transition-colors`}>
                    <stakeholder.icon className={`w-8 h-8 ${colorClasses.text}`} />
                  </div>
                  
                  <h3 className={`text-2xl font-bold text-slate-900 mb-4`}>
                    {stakeholder.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {stakeholder.benefit}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StakeholderWins;