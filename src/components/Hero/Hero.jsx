import React from "react";
import HeroBG from "../../assets/HeroBG.jpeg";
import Location from "../../assets/Location.svg";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative h-full lg:pb-10 transition-colors duration-300"
    >
      {/* Background Image */}
      <img
        src={HeroBG}
        alt="Background illustration"
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0 pointer-events-none"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 pt-20 pb-10 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between text-center lg:text-left">

        {/* Left Section */}
        <div className="left w-full md:w-1/2 lg:pr-16 space-y-6 text-white">
          <div className="text-yellow-400 font-semibold">
            ⭐⭐⭐⭐⭐ 4.9 (200+ reviews)
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Crafting gardens, cultivating dreams
          </h1>

          <p className="text-lg text-white/80">
            With our expert team of gardeners and landscapers, we turn ordinary gardens into
            extraordinary havens of beauty.
          </p>

          {/* Location Button */}
          <button className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-2xl shadow-md hover:shadow-lg transition border-t-4 border-green-600 hover:border-green-700">
            <div className="bg-green-700 p-2 rounded-xl">
                
            <img src={Location} alt="Location icon" className="h-6 w-6" />
            </div>
            <div className="text-left">
              <div className="font-semibold pt-2">New York City</div>
              <div className="text-sm text-gray-700 pb-2">Brooklyn & Queens Area</div>
            </div>
          </button>
        </div>

        {/* Right Section - Form */}
        <div className="right w-full md:w-1/2 mt-10 lg:mt-0 space-y-4 text-white">
          <form action="#" className="bg-white/10 backdrop-blur p-6 rounded-lg space-y-4">
            <label htmlFor="name" className="block text-lg font-semibold text-white">
              Book a call
            </label>

            <input
              id="name"
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-md text-black bg-white"
            />

            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md text-black bg-white"
            />

            <input
              id="message"
              type="text"
              placeholder="How we can help"
              className="w-full px-4 py-2 rounded-md text-black bg-white"
            />

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
