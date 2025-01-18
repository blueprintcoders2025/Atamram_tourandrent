"use client"; // Required for Framer Motion in Next.js 14

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ServicesSection = () => {
  const services = [
    {
      icon: "/images/sections/services/tickets.png", // Replace with your icon path
      title: "Air, Bus & Train Tickets",
      description: "Book flights, buses, and train tickets with ease. Enjoy competitive prices and hassle-free bookings.",
      link: "/tickets",
    },
    {
      icon: "/images/sections/services/goasightseeing.png", // Replace with your icon path
      title: "Goa Sightseeing",
      description: "Explore the best of Goa with our curated sightseeing tours. Discover beaches, forts, and more.",
      link: "/goa-sightseeing",
    },
    {
      icon: "/images/sections/services/wheels.png", // Replace with your icon path
      title: "Rent a Car & Bike",
      description: "Rent cars and bikes for your travels. Enjoy flexible options and great deals on rentals.",
      link: "/rentals",
    },
    {
      icon: "/images/sections/services/taxi.png", // Replace with your icon path
      title: "Taxi Services",
      description: "Book reliable taxi services for your local and outstation trips. Safe and comfortable rides.",
      link: "/taxi",
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
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-indigo-50 rounded-full flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="w-8 h-8 md:w-12 md:h-12"
                  />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-3 md:mb-4">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 text-center mb-4 md:mb-6">
                {service.description}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex justify-center"
              >
                <Link
                  href={service.link}
                  className="inline-block bg-indigo-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-indigo-700 transition duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;