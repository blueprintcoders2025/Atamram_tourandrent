'use client';

import FooterSection from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import AboutUsSection from "@/components/sections/About/About";
import CTABannerSection from "@/components/sections/CTA/CTA";
import ContactSection from "@/components/sections/Contact/Contact";
import HeroSection from "@/components/sections/Hero/Hero";
import PopularDestinations from "@/components/sections/Packages/Packages";
import VehicleFilterSection from "@/components/sections/Portfolio/Portfolio";
import ServicesSection from "@/components/sections/Services/Services";
import TestimonialsSection from "@/components/sections/Testimonials/Testimonials";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutUsSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="cta">
        <CTABannerSection />
      </section>
      <section id="destinations">
        <PopularDestinations />
      </section>
      <section id="portfolio">
        <VehicleFilterSection />
      </section>
      <section id="experiences">
        <TestimonialsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <FooterSection />
    </main>
  );
}