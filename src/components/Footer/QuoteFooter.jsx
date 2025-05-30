import React from "react";

const QuoteFooter = () => {
  return (
    <div
      id="QuoteFooter"
      className="w-full bg-green-700 py-16 text-white transition-colors duration-300 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-center md:text-left leading-snug">
          Need gardening service?
        </h2>

        <button className="border border-white px-5 py-3 text-sm sm:text-base md:text-lg rounded-xl shadow-md hover:shadow-lg transition bg-green-700 hover:bg-green-800 flex items-center gap-2">
          Request a Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteFooter;
