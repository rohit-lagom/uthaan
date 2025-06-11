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
      color: "blue"
    },
    {
      icon: Shield,
      title: "NABARD / FCI",
      benefit: "Real-time procurement analytics, fraud-proof records.",
      color: "purple"
    },
    {
      icon: ShoppingBag,
      title: "Consumers",
      benefit: "Transparent provenance builds trust for future retail traceability.",
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: {
        bg: "bg-emerald-100",
        hoverBg: "group-hover:bg-emerald-200",
        text: "text-emerald-600",
        border: "border-emerald-100",
        hoverBorder: "hover:border-emerald-200"
      },
      blue: {
        bg: "bg-blue-100",
        hoverBg: "group-hover:bg-blue-200",
        text: "text-blue-600",
        border: "border-blue-100",
        hoverBorder: "hover:border-blue-200"
      },
      purple: {
        bg: "bg-purple-100",
        hoverBg: "group-hover:bg-purple-200",
        text: "text-purple-600",
        border: "border-purple-100",
        hoverBorder: "hover:border-purple-200"
      },
      orange: {
        bg: "bg-orange-100",
        hoverBg: "group-hover:bg-orange-200",
        text: "text-orange-600",
        border: "border-orange-100",
        hoverBorder: "hover:border-orange-200"
      }
    };
    return colors[color];
  };

  return (
    <section className="py-20 relative bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Stakeholder <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Wins</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full" />
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
                <div className={`bg-white/70 backdrop-blur-sm border ${colorClasses.border} rounded-3xl p-8 h-full hover:bg-white/90 ${colorClasses.hoverBorder} transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}>
                  <div className={`${colorClasses.bg} p-4 rounded-2xl w-fit mb-6 ${colorClasses.hoverBg} transition-colors`}>
                    <stakeholder.icon className={`w-8 h-8 ${colorClasses.text}`} />
                  </div>
                  
                  <h3 className={`text-2xl font-bold ${colorClasses.text} mb-4`}>
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