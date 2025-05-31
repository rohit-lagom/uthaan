import React from "react";

const Button = () => {
  return (
    <div>
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
  );
};

export default Button;
