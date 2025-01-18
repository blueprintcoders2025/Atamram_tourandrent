// HeroSection.jsx
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-teal-500 text-white p-10 ">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16">
        {/* Text Content */}
        <div className="max-w-lg lg:max-w-xl text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-5xl font-extrabold mb-4"
          >
            Explore the Unseen with Atmaram Tours & Travels
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl mb-6"
          >
            Your trusted companion for unforgettable journeys, bringing you closer to the heart of every destination.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a
              href="#explore"
              className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg"
            >
              Start Your Journey
            </a>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full max-w-md lg:max-w-lg mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image
              src="/images/hero/hero.jpg"
              alt="Atmaram Tours & Travels"
              width={800}
              height={600}
              className="rounded-xl shadow-lg mt-10"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center">
          <motion.div
            className="w-2 h-2 bg-white rounded-full mb-1"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
