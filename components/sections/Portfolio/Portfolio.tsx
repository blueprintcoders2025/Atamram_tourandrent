"use client"; // Required for interactivity in Next.js 14

import { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

const VehicleFilterSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const vehicles = [
    {
      id: 1,
      name: "Maruti Suzuki Swift",
      type: "economic",
      image: "/images/sections/vehical/Maruti Suzuki Swift.jpg", // Replace with your image path
      features: ["5 Seats", "25 km/l Mileage", "AC"],
    },
    {
      id: 2,
      name: "Honda Activa",
      type: "bike",
      image: "/images/sections/vehical/Honda Activa.jpg", // Replace with your image path
      features: ["2 Seats", "45 km/l Mileage", "Comfortable Ride"],
    },
    {
      id: 3,
      name: "Toyota Fortuner",
      type: "suv",
      image: "/images/sections/vehical/Toyota Fortuner.jpeg", // Replace with your image path
      features: ["7 Seats", "12 km/l Mileage", "4x4 Drive"],
    },
    {
      id: 4,
      name: "Hyundai i20",
      type: "economic",
      image: "/images/sections/vehical/Hyundai i20.jpeg", // Replace with your image path
      features: ["5 Seats", "20 km/l Mileage", "Premium Interior"],
    },
    {
      id: 5,
      name: "Royal Enfield Classic 350",
      type: "bike",
      image: "/images/sections/vehical/Royal Enfield Classic 350.jpeg", // Replace with your image path
      features: ["2 Seats", "35 km/l Mileage", "Powerful Engine"],
    },
    {
      id: 6,
      name: "Mahindra Scorpio",
      type: "suv",
      image: "/images/sections/vehical/Mahindra Scorpio .webp", // Replace with your image path
      features: ["7 Seats", "15 km/l Mileage", "Rugged Design"],
    },
  ];

  const filteredVehicles =
    activeFilter === "all"
      ? vehicles
      : vehicles.filter((vehicle) => vehicle.type === activeFilter);

  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8 md:mb-12"
        >
          Our Vehicles
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 text-sm md:text-base md:px-6 md:py-2 rounded-lg font-semibold ${
              activeFilter === "all"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-800 hover:bg-indigo-50"
            } transition duration-300`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter("economic")}
            className={`px-4 py-2 text-sm md:text-base md:px-6 md:py-2 rounded-lg font-semibold ${
              activeFilter === "economic"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-800 hover:bg-indigo-50"
            } transition duration-300`}
          >
            Economic Cars
          </button>
          <button
            onClick={() => setActiveFilter("bike")}
            className={`px-4 py-2 text-sm md:text-base md:px-6 md:py-2 rounded-lg font-semibold ${
              activeFilter === "bike"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-800 hover:bg-indigo-50"
            } transition duration-300`}
          >
            Bikes
          </button>
          <button
            onClick={() => setActiveFilter("suv")}
            className={`px-4 py-2 text-sm md:text-base md:px-6 md:py-2 rounded-lg font-semibold ${
              activeFilter === "suv"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-800 hover:bg-indigo-50"
            } transition duration-300`}
          >
            SUVs
          </button>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredVehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-40 md:h-48 mb-4 md:mb-6 rounded-lg overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  width={500}
                  height={300}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
                {vehicle.name}
              </h3>
              <ul className="text-gray-600 space-y-1 md:space-y-2">
                {vehicle.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm md:text-base">
                    <svg
                      className="w-4 h-4 mr-2 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleFilterSection;