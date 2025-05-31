import Navbar from "../Navbar/Navbar";
import {
  HeroBG,
  Location,
  Rating1,
  Rating2,
  Rating3,
} from "../../assets/assets";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative lg:min-h-screen pb-24 w-full transition-colors duration-300"
    >
      {/* Background Image */}
      <img
        src={HeroBG}
        alt="Garden background"
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0 pointer-events-none"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Navbar */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left lg:gap-14 md:gap-2 pt-16 md:pt-30">
        {/* Left Section */}
        <div className="w-full md:w-1/2 md:pr-16 text-white text-center md:text-left flex justify-center md:block mt-2">
          <div className="space-y-8 max-w-xl w-full">
            {/* Ratings */}
            <div className="flex justify-center md:justify-start gap-2 items-center">
              <div className="flex -space-x-2">
                <img
                  src={Rating1}
                  alt="User 1"
                  className="lg:h-12 lg:w-12 h-10 w-10 rounded-full border-2 border-white"
                />
                <img
                  src={Rating2}
                  alt="User 2"
                  className="lg:h-12 lg:w-12 h-10 w-10 rounded-full border-2 border-white z-10"
                />
                <img
                  src={Rating3}
                  alt="User 3"
                  className="lg:h-12 lg:w-12 h-10 w-10 rounded-full border-2 border-white z-20"
                />
              </div>
              <div>
                <div>⭐⭐⭐⭐⭐</div>
                <div className="text-white text-sm">From 2000+ ratings</div>
              </div>
            </div>

            {/* Heading & Subtext */}
            <h1 className="text-4xl font-semibold lg:text-6xl md:text-4xl leading-tight">
        Tokenising Trust for 29 Crore Farmers
            </h1>
            <p className="text-lg text-white/80">
            Farmily is revolutionizing how cooperative farming works—bridging gaps in finance, governance, traceability, and sustainability using blockchain and smart contracts.
            </p>

            {/* Location Button */}
            <button className="flex items-center gap-3 mt-16 bg-white text-black px-5 py-3 rounded-2xl shadow-md hover:shadow-lg transition border-t-4 border-green-700 hover:border-green-700 mx-auto md:mx-0">
              <div className="bg-green-700 p-2 rounded-xl">
                <img src={Location} alt="Location icon" className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold pt-2">New York City</div>
                <div className="text-sm text-gray-700 pb-2">
                  Brooklyn & Queens Area
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Right Section - Contact Form (Hidden on Mobile) */}
        <div className="w-full md:w-1/2 md:flex flex-col items-end  mt-10 md:mt-0 text-white hidden ">
          <form className="bg-[#DDDDDD] lg:h-130 lg:w-112 h-full w-full border-t-6 border-t-green-700 p-6 px-8 rounded-xl space-y-4">
            <label className="block text-xl py-4 pb-6 text-center font-semibold text-black">
              Book a call with our experts
            </label>

            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-4 rounded-md text-black bg-white focus:outline-none focus:ring-0 focus:border-0
"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-4 rounded-md text-black bg-white focus:outline-none focus:ring-0 focus:border-0
"
            />
            <textarea
              type="text"
              placeholder="How we can help?"
              required
              className="w-full px-4 py-4 pb-16 rounded-md text-black bg-white focus:outline-none focus:ring-0 focus:border-0
"
            />

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 cursor-pointer text-white px-6 py-3 mb-3 rounded-md transition font-semibold"
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
