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
    platform: "Trustpilot",
    image: TestAlex,
    text: "Despite the tight deadline, they completed the project on time and within budget, exceeding my expectations every step of the way. Highly recommend Farmily!",
    rating: 5,
  },
  {
    name: "John Smith",
    platform: "Trustpilot",
    image: TestJohn,
    text: "I'm so grateful for Farmily. Their team transformed my small plot into a sustainable growing space — and guided me every step of the way.",
    rating: 5,
  },
  {
    name: "Michael Harrison",
    platform: "Google Reviews",
    image: TestMichael,
    text: "Farmily consistently delivers exceptional service. Their transparency, technology, and trust make them a standout in agri-tech.",
    rating: 5,
  },
  {
    name: "David Peterson",
    platform: "Trustpilot",
    image: TestDavid,
    text: "From onboarding to implementation, Farmily was responsive, helpful, and deeply committed to impact. Truly impressive.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-[#F7F7F7] py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h2 className="text-4xl font-semibold text-green-800 leading-tight">
            Trusted by 1,000+ <span className="block md:inline">Farmily partners</span>
          </h2>
          <div className="text-right">
            <div className="text-4xl font-bold text-green-700">
              4.9 <span className="text-sm align-middle">⭐⭐⭐⭐⭐</span>
            </div>
            <div className="text-gray-600">Based on 2,000+ verified reviews</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative overflow-hidden">
        {/* Gradient edge fade effects */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-[#F7F7F7] to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-[#F7F7F7] to-transparent" />

        {/* Scrolling testimonials */}
        <div className="flex animate-[marquee_40s_linear_infinite] gap-6 w-max">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 md:p-8 rounded-2xl border border-green-100 shadow-md w-80 flex-shrink-0"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-green-200">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-neutral-800">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.platform}</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm pt-2 leading-relaxed">
                {t.text}
              </p>
              <div className="text-yellow-500 pt-3 text-lg">
                {"⭐".repeat(t.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
