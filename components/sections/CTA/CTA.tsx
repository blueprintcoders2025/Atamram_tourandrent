"use client"; // Required for Swiper.js in Next.js 14

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Removed Navigation
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"; // Keep pagination for dots

const CTABannerSection = () => {
  const offers = [
    {
      image: "/images/sections/poster/poster1.jpeg", // Replace with your image path
      link: "/goa-tour", // Link for the offer
    },
    {
      image: "/images/sections/poster/poster2.jpg", // Replace with your image path
      link: "/kashmir-tour", // Link for the offer
    },
    {
      image: "/images/sections/poster/poster3.jpg", // Replace with your image path
      link: "/rajasthan-tour", // Link for the offer
    },
    {
      image: "/images/sections/poster/poster4.jpg", // Replace with your image path
      link: "/kerala-tour", // Link for the offer
    },
  ];

  return (
    <section className="relative py-8">
      <Swiper
        spaceBetween={20} // Space between slides
        slidesPerView={3} // Number of slides visible at once
        loop={true} // Infinite loop
        autoplay={{
          delay: 2500, // Faster autoplay
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true, // Enable pagination dots
        }}
        modules={[Autoplay, Pagination]} // Removed Navigation
        className="mySwiper"
        breakpoints={{
          // Responsive breakpoints
          320: {
            slidesPerView: 1, // 1 slide on mobile
          },
          640: {
            slidesPerView: 2, // 2 slides on tablets
          },
          1024: {
            slidesPerView: 3, // 3 slides on desktops
          },
        }}
      >
        {offers.map((offer, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[200px] lg:h-[250px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <a href={offer.link}>
                <Image
                  src={offer.image}
                  alt={`Special Offer ${index + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CTABannerSection;