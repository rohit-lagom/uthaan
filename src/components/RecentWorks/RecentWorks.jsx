import React from "react";
import {
  Recent1,
  Recent2,
  Recent3,
  Recent4,
  Recent5,
  Recent6,
} from "../../assets/assets";

const RecentWorks = () => {
  const images = [Recent1, Recent2, Recent3, Recent4, Recent5, Recent6];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-6 py-30">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold">Our recent works</h2>
        <p className="text-neutral-600 text-base max-w-2xl mx-auto mt-4">
          Our team combines expertise with creativity to transform outdoor
          spaces into breathtaking landscapes that enhance the beauty of any
          property.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 auto-rows-[200px] gap-4">
        <div className="col-span-1 lg:col-span-2 overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
          <img src={images[0]} alt="Recent work 1" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 lg:col-span-2 lg:row-span-2 overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
          <img src={images[1]} alt="Recent work 2" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 lg:col-span-2 overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
          <img src={images[2]} alt="Recent work 3" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 lg:col-span-2 lg:row-span-2 overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
          <img src={images[3]} alt="Recent work 4" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 lg:col-span-2 lg:row-span-2 overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
          <img src={images[4]} alt="Recent work 5" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 lg:col-span-2 overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
          <img src={images[5]} alt="Recent work 6" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
