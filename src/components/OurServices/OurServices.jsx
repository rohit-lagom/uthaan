import React from "react";
import { OurServices1, OurServices2, OurServices3 } from "../../assets/assets";

const services = [
  {
    title: "Landscaping Works",
    image: OurServices1,
    description:
      "Our team provides comprehensive maintenance services to ensure that your outdoor space remains healthy.",
  },
  {
    title: "Garden Design",
    image: OurServices2,
    description:
      "Our expert designers will work closely with you to design a garden that reflects your style and personality.",
  },
  {
    title: "Seasonal Planting",
    image: OurServices3,
    description:
      "Give your garden a seasonal refresh. We’ll help you select the perfect plants and install them to ensure their success.",
  },
];

const OurServices = () => {
  return (
    <section className="relative z-20 max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold text-center">Our Services</h2>
      <p className="text-center py-8 pb-16 text-gray-600 max-w-2xl mx-auto">
        Our team combines expertise with creativity to transform outdoor spaces
        into breathtaking landscapes that enhance the beauty of any property.
      </p>

      <div className="flex flex-col md:flex-row gap-12">
        {services.map((service, index) => (
          <div key={index} className="relative cursor-pointer group w-full rounded-xl overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full lg:h-80 md:h-62 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute bottom-5 left-5 z-21 text-lg font-semibold text-white ">
              {service.title}
            </div>

            <div className="hidden lg:flex absolute inset-0 bg-black/50 justify-center text-center p-6 text-white text-sm font-light  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              {service.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
