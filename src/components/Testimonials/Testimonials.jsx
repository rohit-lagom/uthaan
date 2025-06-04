import React from "react";
import {
  TestAlex,
  TestDavid,
  TestJohn,
  TestMichael,
} from "../../assets/assets";

const testimonials = [
  {
    name: "Alex Stokes",
    platform: "Review on Trustpilot",
    image: TestAlex,
    text: "Despite the tight deadline, Farmily completed the project on time and within budget, exceeding my expectations every step of the way. I highly recommend!",
    rating: 5,
  },
  {
    name: "John Smith",
    platform: "Review on Trustpilot",
    image: TestJohn,
    text: "I'm so grateful to have found Farmily. Their team not only transformed my neglected garden into a lush oasis but also provided great advice on how to maintain it.",
    rating: 5,
  },
  {
    name: "Michael Harrison",
    platform: "Review on Google",
    image: TestMichael,
    text: "I've been using Farmily for years now, and I couldn't be happier with the results. Their team always go above and beyond to ensure that my garden looks its best.",
    rating: 5,
  },
  {
    name: "David Peterson",
    platform: "Review on Trustpilot",
    image: TestDavid,
    text: "Farmily completely exceeded my expectations. From the initial consultation to the final touches, their team was professional and attentive to every detail.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="relative bg-[#F7F7F7] pt-30 pb-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-4xl font-semibold leading-tight">
            Trusted by 1000+ <span className="block md:inline">customers</span>
          </div>
          <div>
            <div className="text-4xl font-bold">
              4.9 <span className="text-sm align-middle">⭐⭐⭐⭐⭐</span>
            </div>
            <div className="text-gray-600">From 2000+ reviews</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative overflow-hidden group">
        {/* Edge fading */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-[#F7F7F7] to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-[#F7F7F7] to-transparent" />

        {/* Scrolling container with hover pause */}
        <div className="flex gap-6 py-5 my-5 w-max [animation:marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl border-t-4 border-1 border-green-700 shadow-md w-82 h-86 flex-shrink-0 transform transition duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className=" text-gray-500">{t.platform}</div>
                </div>
              </div>
              <p className="text-gray-700 pt-4">{t.text}</p>
              <div className="text-yellow-500 pt-4">
                {"⭐".repeat(t.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
