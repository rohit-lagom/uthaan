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
    text: "Despite the tight deadline, they completed the project on time and within budget, exceeding my expectations every step of the way. I highly recommend!",
    rating: 5,
  },
  {
    name: "John Smith",
    platform: "Review on Trustpilot",
    image: TestJohn,
    text: "I'm so grateful to have found Gardener. Their team not only transformed my neglected garden into a lush oasis but also provided great advice on how to maintain it.",
    rating: 5,
  },
  {
    name: "Michael Harrison",
    platform: "Review on Google",
    image: TestMichael,
    text: "I've been using Gardener for years now, and I couldn't be happier with the results. Their team always go above and beyond to ensure that my garden looks its best.",
    rating: 5,
  },
  {
    name: "David Peterson",
    platform: "Review on Trustpilot",
    image: TestDavid,
    text: "Gardener completely exceeded my expectations. From the initial consultation to the final touches, their team was professional and attentive to every detail.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="relative bg-[#F7F7F7] py-16 overflow-hidden">

      <div className=" relative max-w-7xl mx-auto px-6 mb-10">


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


      <div className="max-w-7xl mx-auto px-6 overflow-hidden relative">
       
             <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 max-w-7xl mx-auto bg-gradient-to-r from-[#F7F7F7] to-transparent" />

      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-42 max-w-7xl mx-auto bg-gradient-to-l from-[#F7F7F7] to-transparent" />
        <div className="flex animate-[marquee_40s_linear_infinite] gap-6 w-max">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border-t-4 border-green-700 shadow-md w-80 flex-shrink-0"
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
                  <div className="text-sm text-gray-500">{t.platform}</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-3">{t.text}</p>
              <div className="text-yellow-500 text-lg">
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
