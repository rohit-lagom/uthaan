import React from "react";
import { Location, HeroBG } from "../../assets/assets";

const QuoteFooter = () => {
  return (
    <div
      id="QuoteFooter"
      className="relative w-full transition-colors duration-300 bg-green-700 py-16"
    >
      <div className=" relative max-w-7xl mx-auto px-6 mb-10  flex flex-col md:flex-row items-center justify-between gap-12 text-white">


        <div className="font-semibold text-2xl md:text-3xl text-center md:text-left">
            Need gardening service?
 
        </div>
        <button className="text-white border-1 border-white px-2 py-3 rounded-2xl shadow-md hover:shadow-lg transition bg-green-700 hover:bg-green-800 flex items-center gap-3">
            Request a Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteFooter;
