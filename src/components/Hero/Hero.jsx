import React from "react";
import HeroBG from "../../assets/HeroBG.jpeg";
import Location from "../../assets/Location.svg";
import Rating1 from "../../assets/Rating1.jpeg";
import Rating2 from "../../assets/Rating2.jpeg";
import Rating3 from "../../assets/Rating3.jpeg";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
   <div
  id="home"
  className="relative h-full pb-10 transition-colors duration-300"
>
  {/* Background Image */}
  <img
    src={HeroBG}
    alt="Garden background"
    className="absolute inset-0 w-full h-full object-cover opacity-100 z-0 pointer-events-none"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60 z-10"></div>
       <div className="relative z-30" >
        <Navbar/>
      </div>

  {/* Content */}
  <div className="relative z-20 max-w-7xl w-full pt-40 mx-auto px-6 pb-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between text-center md:text-left">
    {/* Left Section */}
    <div className="w-full md:w-1/2 md:pr-16 space-y-12 text-white">
      {/* Ratings */}
      <div className="flex gap-2 items-center">
        <div className="flex -space-x-2">
          <img src={Rating1} alt="User 1" className="h-12 w-12 rounded-full border-2 border-white" />
          <img src={Rating2} alt="User 2" className="h-12 w-12 rounded-full border-2 border-white z-10" />
          <img src={Rating3} alt="User 3" className="h-12 w-12 rounded-full border-2 border-white z-20" />
        </div>
        <div>
          <div>⭐⭐⭐⭐⭐</div>
          <div className="text-white text-sm">From 2000+ ratings</div>
        </div>
      </div>

      {/* Heading & Subtext */}
      <h1 className="text-4xl font-semibold lg:text-5xl leading-tight">
        Crafting gardens, cultivating dreams
      </h1>
      <p className="text-lg text-white/80">
        With our expert team of gardeners and landscapers, we turn ordinary gardens into extraordinary havens of beauty.
      </p>

      {/* Location Button */}
      <button className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-2xl shadow-md hover:shadow-lg transition border-t-4 border-green-700 hover:border-green-700">
        <div className="bg-green-700 p-2 rounded-xl">
          <img src={Location} alt="Location icon" className="h-6 w-6" />
        </div>
        <div className="text-left">
          <div className="font-semibold pt-2">New York City</div>
          <div className="text-sm text-gray-700 pb-2">Brooklyn & Queens Area</div>
        </div>
      </button>
    </div>

    {/* Right Section - Contact Form */}
    <div className="w-full md:w-1/2 mt-10 md:mt-0 text-white">
      <form className="bg-[#DDDDDD] border-t-6 border-t-green-700 p-6 px-8 rounded-xl space-y-4">
        <label className="block text-xl py-4 text-center font-semibold text-black">
          Book a call with our experts
        </label>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-md text-black bg-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 rounded-md text-black bg-white"
        />
        <input
          type="text"
          placeholder="How we can help?"
          className="w-full px-4 py-2 pb-16 rounded-md text-black bg-white"
        />

        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-700 text-white px-6 py-3 mb-3 rounded-md transition font-semibold"
        >
          Request a call
        </button>
      </form>
    </div>
  </div>
</div>

  );
};

export default Hero;
