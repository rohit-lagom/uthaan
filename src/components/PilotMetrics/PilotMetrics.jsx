import React from "react";
import { motion } from "framer-motion";
import { MapPin, Target, BarChart3 ,Globe} from "lucide-react";

const PilotMetrics = () => {
  const metrics = [
    {
      icon: MapPin,
      title: "Target Districts",
      value: "25 PACS",
      description: "across Punjab & Himachal",
    },
    {
      icon: Target,
      title: "Throughput Goal",
      value: "50,000 MT",
      description: "paddy in KMS 2025-26",
    },
    {
      icon: BarChart3,
      title: "KPIs",
      items: [
        "payment cycle < 72 hrs",
        "0.5% rejection dispute rate",
        "10% admin-cost saving",
      ],
    },
    {
      icon: Globe,
      title: "System Fit",
      value: "100% Aligned",
      description: "with PACS ERP, AgriStack & Digital Agri Mission",
    },
  ];

  return (
    <section className="py-20 relative bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900">
      {/* Background floating blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-400/10 rounded-full mix-blend-multiply blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-400/10 rounded-full mix-blend-multiply blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-400/10 rounded-full mix-blend-multiply blur-3xl animate-pulse animation-delay-4000" />
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container  max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Pilot{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
              Metrics
            </span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-emerald-500 to-green-500 rounded-full" />
        </motion.div>

        {/* Metrics Grid */}
<div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 h-full transition-all hover:bg-white/20 hover:border-white/30 shadow-xl hover:shadow-2xl">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-emerald-500/20 p-3 rounded-2xl group-hover:bg-emerald-500/30 transition-colors">
                    <metric.icon className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-white text-center mb-4">
                  {metric.title}
                </h3>

                {/* Value & Description */}
                {metric.value && (
                  <div className="text-center mb-4">
                    <div className="text-3xl sm:text-4xl font-bold text-emerald-300 mb-1">
                      {metric.value}
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base">
                      {metric.description}
                    </p>
                  </div>
                )}

                {/* KPI list */}
                {metric.items && (
                  <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                    {metric.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 bg-emerald-300 rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
