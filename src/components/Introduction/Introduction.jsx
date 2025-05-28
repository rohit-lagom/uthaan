import React from "react";
import { IntroLeaf, IntroSci ,IntroPic,Quote} from "../../assets/assets";

const Introduction = () => {
  return (
    <div className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Image */}
          <div className="w-full md:w-1/2 relative">
            <img src={IntroPic} alt="Hero" className="object-center w-full h-96 rounded-xl shadow-lg bg-gray-100" />
          
          <div className="absolute bottom-5 flex bg-white p-4 mx-4 rounded-xl">
            <div><img src={Quote} alt="" className=" h-12 w-12 bg-white "/></div>
            <div>
                <div>
                    We take the time to understand your unique needs and preferences to ensure that your garden reflects your vision.
                </div>
                <div>
                    Ricky Stokes, CEO


                </div>
            </div>
          </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-1/2 space-y-6 text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-green-900">
              We believe in turning your outdoor space into your personal oasis
            </h2>

            <p className="text-base md:text-lg">
              Whether you have a sprawling backyard or a cozy balcony, our team of
              experienced gardeners and landscapers is dedicated to bringing your
              green dreams to life.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img src={IntroLeaf} alt="Sustainable Gardening" className="h-8 w-8" />
                <span className="text-sm md:text-base font-medium">Sustainable gardening practices</span>
              </div>

              <div className="flex items-center gap-4">
                <img src={IntroSci} alt="Personalized Service" className="h-8 w-8" />
                <span className="text-sm md:text-base font-medium">Personalized service for your needs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
