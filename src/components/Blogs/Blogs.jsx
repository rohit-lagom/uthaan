import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Blog1, Blog2, Blog3 } from "../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const blogPosts = [
  {
    image: Blog1,
    title: "How Blockchain is Transforming Agri Procurement",
    date: "Jun 14, 2025",
    description:
      "Explore how tamper-proof ledgers are reducing disputes, improving transparency, and accelerating payments across rural supply chains.",
  },
  {
    image: Blog2,
    title: "Carbon Farming 101: Turning Crops into Credits",
    date: "Jun 08, 2025",
    description:
      "A deep dive into how farmers can monetize sustainable practices through carbon markets, verified via satellite and IoT data.",
  },
  {
    image: Blog3,
    title: "AgriStack & PACS ERP: What You Need to Know",
    date: "May 28, 2025",
    description:
      "Understand how India's Digital Agri Mission lays the foundation for scalable, data-driven farming through open APIs and cooperative integration.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Blogs = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="blogs"
      className="relative py-10 md:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
    >
      {/* Floating blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-green-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-2xl" />
      </div>

      {/* Dot overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgb(34 197 94) 1px, transparent 0)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Stay Ahead of the{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              Curve
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
          <p className="text-gray-700 max-w-2xl mx-auto mt-6 text-lg">
            Explore our latest insights on blockchain agriculture, carbon
            farming, and the future of rural finance.
          </p>
        </motion.div>

        {/* Mobile Swiper */}
        <div className="block md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletClass:
                "swiper-pagination-bullet bg-green-500 opacity-50",
              bulletActiveClass:
                "swiper-pagination-bullet-active opacity-100",
            }}
            spaceBetween={16}
            slidesPerView={1}
            loop
          >
            {blogPosts.map((post, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/60 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-xl mb-10">
                  <div className="aspect-[4/3] w-full mb-4 rounded-lg overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-700">{post.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Margin above dots */}
          <div className="mt-6" />
        </div>

        {/* Desktop Grid (Unchanged) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index}
              variants={fadeInUp}
              className="group"
            >
              <div className="bg-white/60 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:bg-white/80 hover:border-white/30 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl h-full">
                <div className="aspect-[4/3] w-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-t-3xl"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
