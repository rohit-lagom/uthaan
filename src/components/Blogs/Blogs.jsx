import React from "react";
import { Blog1, Blog2, Blog3 } from "../../assets/assets";

const blogPosts = [
  {
    image: Blog1,
    title: "The Art of Designing Gardens: A Step-by-Step Guide",
    date: "Apr 8, 2022",
    description:
      "Learn how to design a beautiful garden layout with our detailed, easy-to-follow guide.",
  },
  {
    image: Blog2,
    title: "Plant Spotlight: 10 Must-Have Perennials for Every Garden",
    date: "Mar 15, 2022",
    description:
      "Discover 10 essential perennial plants that will thrive in your garden all year long.",
  },
  {
    image: Blog3,
    title: "Garden Pest Control: Useful Strategies for a Healthy Garden",
    date: "Feb 28, 2022",
    description:
      "Protect your garden naturally with these effective pest control strategies.",
  },
];

const Blogs = () => {
  return (
    <section className="relative z-20 max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Stay Ahead of the Curve</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Explore our latest insights on blockchain agriculture, carbon farming,
          and the future of rural finance.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300"
          >
            <div className="aspect-[4/3] w-full">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="">
              <div className="text-sm py-2 text-gray-500 mb-1">{post.date}</div>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
