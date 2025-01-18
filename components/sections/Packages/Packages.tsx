"use client"; // Required for Framer Motion in Next.js 14

import { motion } from "framer-motion";
import Image from "next/image";

const PopularDestinations = () => {
  const packages = [
    {
      image: "/images/sections/package/mahakumb.avif", // Replace with your image path
      title: "Mahakumbh Mela",
      description: "Experience the largest spiritual gathering on Earth. Witness the divine confluence of faith and culture.",
      whatsappMessage: "Hi, I'm interested in the Mahakumbh Mela package. Can you provide more details?",
    },
    {
      image: "/images/sections/package/goa beach.jpg", // Replace with your image path
      title: "Goa Beach Tour",
      description: "Relax on pristine beaches, explore vibrant nightlife, and enjoy water sports in Goa.",
      whatsappMessage: "Hi, I'm interested in the Goa Beach Tour package. Can you provide more details?",
    },
    {
      image: "/images/sections/package/Kashmir Valley.jpeg", // Replace with your image path
      title: "Kashmir Valley",
      description: "Discover the paradise on Earth with breathtaking landscapes, serene lakes, and lush valleys.",
      whatsappMessage: "Hi, I'm interested in the Kashmir Valley package. Can you provide more details?",
    },
    {
      image: "/images/sections/package/Rajasthan Heritage Tour.jpg", // Replace with your image path
      title: "Rajasthan Heritage Tour",
      description: "Explore the royal heritage of Rajasthan with majestic forts, palaces, and cultural experiences.",
      whatsappMessage: "Hi, I'm interested in the Rajasthan Heritage Tour package. Can you provide more details?",
    },
    {
      image: "/images/sections/package/Kerala Backwaters.jpg", // Replace with your image path
      title: "Kerala Backwaters",
      description: "Cruise through the tranquil backwaters of Kerala and experience the serene beauty of God's Own Country.",
      whatsappMessage: "Hi, I'm interested in the Kerala Backwaters package. Can you provide more details?",
    },
    {
      image: "/images/sections/package/Ladakh Adventure.jpeg", // Replace with your image path
      title: "Ladakh Adventure",
      description: "Embark on an adventurous journey to Ladakh with stunning landscapes and thrilling activities.",
      whatsappMessage: "Hi, I'm interested in the Ladakh Adventure package. Can you provide more details?",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-gray-800 text-center mb-16"
        >
          Popular Destinations & Packages
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={`https://wa.me/918080410364?text=${encodeURIComponent(pkg.whatsappMessage)}`} // Replace with your WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
                  >
                    Get Details
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;