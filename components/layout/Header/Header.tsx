import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const contactInfo = {
    phone: "+91 97625 34308",
    whatsapp: "+91 97625 34308"
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const header = document.querySelector('header');
      const headerOffset = header ? header.clientHeight : 0; // Get the height of the header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Get the position of the element
      const offsetPosition = elementPosition - headerOffset; // Adjust for the header height

      // Smooth scroll to the adjusted position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Close the menu after a longer delay to ensure the scroll completes
      setTimeout(() => setIsOpen(false), 800); // Increase the timeout duration
    }
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${contactInfo.phone.replace(/\D/g, '')}`;
  };

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top bar */}
      <div className="hidden lg:block bg-indigo-950 text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6 text-sm">
              <span className="flex items-center text-indigo-200 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 mr-2" />
                123 Travel Street, Adventure City
              </span>
              <span className="flex items-center text-indigo-200 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                {contactInfo.phone}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className={`${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-white/80 backdrop-blur-md'
      } transition-all duration-300`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              className="text-xl font-semibold text-indigo-950"
              whileHover={{ scale: 1.05 }}
            >
              Tour and Travel
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-indigo-600 hover:text-indigo-950 text-sm font-medium transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Contact Buttons */}
              <div className="flex items-center space-x-3">
                <motion.button
                  onClick={handleWhatsAppClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-4 py-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </motion.button>

                <motion.button
                  onClick={handleCallClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Call</span>
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-indigo-50 rounded-full transition-colors text-indigo-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-indigo-100 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-indigo-600 hover:text-indigo-950 transition-colors text-left py-2 text-sm font-medium"
                    whileHover={{ x: 4 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </nav>

              {/* Mobile Contact Buttons */}
              <div className="flex flex-col space-y-3 mt-4">
                <motion.button
                  onClick={handleWhatsAppClick}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center px-4 py-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </motion.button>

                <motion.button
                  onClick={handleCallClick}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Call</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;