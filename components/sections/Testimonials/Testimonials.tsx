"use client"; // Required for Framer Motion in Next.js 14

import { motion } from "framer-motion";
import Image from "next/image";

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: "/images/sections/testinomial/1.jpg", // Replace with your image path
      name: "Rahul Sharma",
      rating: 5,
      quote: "Atmaram Tour and Travel made our trip to Goa unforgettable! Everything was perfectly organized, and the team was very professional.",
    },
    {
      image: "/images/sections/testinomial/2.jpg", // Replace with your image path
      name: "Priya Patel",
      rating: 4.5,
      quote: "The Kashmir Valley tour was a dream come true. The guides were knowledgeable, and the accommodations were excellent.",
    },
    {
      image: "/images/sections/testinomial/1.jpg", // Replace with your image path
      name: "Anil Gupta",
      rating: 5,
      quote: "We had an amazing time in Rajasthan. The heritage tour was well-planned, and the cultural experiences were incredible.",
    },
    {
      image: "/images/sections/testinomial/2.jpg", // Replace with your image path
      name: "Sneha Desai",
      rating: 5,
      quote: "The Kerala backwaters cruise was so peaceful and beautiful. Thank you, Atmaram, for such a wonderful experience!",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-8 md:mb-16"
        >
          What Our Travelers Say
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }} // Hover effect
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-indigo-100">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="text-center mb-4 md:mb-6">
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 md:w-6 md:h-6 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-sm md:text-base text-gray-600 text-center mb-4 md:mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <p className="text-gray-800 font-semibold text-center text-sm md:text-base">
                - {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;