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
    <section className="relative z-20 max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Our Recent Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Our team combines expertise with creativity to transform outdoor
          spaces into breathtaking landscapes that enhance the beauty of any
          property.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {images.map((imgSrc, idx) => (
          <div
            key={idx}
            className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={imgSrc}
              alt={`Recent work ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentWorks;
