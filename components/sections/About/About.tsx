"use client"; // Required for Framer Motion in Next.js 14

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="py-5 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              About Atmaram Tour and Travel
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Atmaram Tour and Travel has been providing exceptional travel
              experiences since 2010. With over a decade of expertise, we
              specialize in crafting unforgettable journeys tailored to your
              needs. Whether it&apos;s a relaxing beach getaway, an adventurous trek,
              or a cultural exploration, we ensure every trip is seamless and
              memorable.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center w-36 sm:w-40"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-indigo-600">
                  10+ Years
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">of Expertise</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center w-36 sm:w-40"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-indigo-600">
                  50,000+
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Happy Travelers
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center w-36 sm:w-40"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-indigo-600">
                  100+
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Destinations
                </p>
              </motion.div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/about"
                className="inline-block bg-indigo-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block lg:w-1/2"
          >
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/sections/about/about.png" // Replace with your image path
                alt="About Atmaram Tour and Travel"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
