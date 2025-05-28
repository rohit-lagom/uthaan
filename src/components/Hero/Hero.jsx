import React from "react";
import HeroBG from "../../assets/HeroBG.jpeg";
import Location from "../../assets/Location.svg";
import Rating1 from "../../assets/Rating1.jpeg";
import Rating2 from "../../assets/Rating2.jpeg";
import Rating3 from "../../assets/Rating3.jpeg";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative h-full lg:pb-10 transition-colors duration-300"
    >
      <span className="text-black
text-blue-700
text-gray-500
text-gray-300
text-gray-100
text-pink-500
text-white
text-green-700
text-gray-600
text-indigo-600
text-black
text-gray-800"></span>
      {/* Background Image */}
      <img
        src={HeroBG}
        alt="Background illustration"
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0 pointer-events-none"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl w-full pt-40 mx-auto px-6 pb-10 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between text-center lg:text-left">
        {/* Left Section */}
        <div className="left w-full md:w-1/2 lg:pr-16 space-y-12 text-white">
          <div className="">
            <div className="flex gap-2">
              <div className="flex ">
                <img
                  src={Rating1}
                  alt=""
                  className="h-12 w-12 rounded-full border-white border-2"
                />
                <img
                  src={Rating2}
                  alt=""
                  className="h-12 w-12 z-12 rounded-full border-white border-2"
                />
                <img
                  src={Rating3}
                  alt=""
                  className="h-12 w-12 z-14 rounded-full border-white border-2"
                />
              </div>
            <div className="">
              <div className=""> ⭐⭐⭐⭐⭐</div>
              <div className="text-white">From 2000+ ratings</div>
            </div>
            </div>
          </div>

          <h1 className="text-4xl font-semibold lg:text-5xl leading-tight">
            Crafting gardens, cultivating dreams
          </h1>

          <p className="text-lg text-white/80">
            With our expert team of gardeners and landscapers, we turn ordinary
            gardens into extraordinary havens of beauty.
          </p>

          {/* Location Button */}
          <button className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-2xl shadow-md hover:shadow-lg transition border-t-4 border-green-600 hover:border-green-700">
            <div className="bg-green-700 p-2 rounded-xl">
              <img src={Location} alt="Location icon" className="h-6 w-6" />
            </div>
            <div className="text-left">
              <div className="font-semibold  pt-2">New York City</div>
              <div className="text-sm text-gray-700 pb-2">
                Brooklyn & Queens Area
              </div>
            </div>
          </button>
        </div>

        {/* Right Section - Form */}
        <div className="right w-full border-t-6 border-t-green-600 rounded-xl md:w-1/2 mt-10 lg:mt-0 space-y-4 text-white">
          <form
            action="#"
            className="bg-gray-300  p-6 rounded-lg space-y-4"
          >
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-black"
            >
              Book a call with our experts
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
