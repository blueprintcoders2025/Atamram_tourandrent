"use client"; // Required for Framer Motion in Next.js 14

import { motion } from "framer-motion";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Site Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#hero" className="hover:text-indigo-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-indigo-400 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-indigo-400 transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-indigo-400 transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 2c-3.259 0-3.667.014-4.947.072-2.905.133-3.977 1.165-4.11 4.11-.057 1.28-.072 1.689-.072 4.947 0 3.259.014 3.668.072 4.948.133 2.905 1.165 3.976 4.11 4.11 1.28.058 1.689.072 4.947.072 3.259 0 3.668-.014 4.948-.072 2.905-.133 3.976-1.165 4.11-4.11.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.133-2.905-1.165-3.977-4.11-4.11-1.28-.057-1.689-.072-4.947-.072zm0 5.838a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 rounded-l-lg bg-gray-800 text-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-indigo-600 px-6 rounded-r-lg hover:bg-indigo-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="hover:text-indigo-400 transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-indigo-400 transition duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className="hover:text-indigo-400 transition duration-300">
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
        >
          <p>
            &copy; {new Date().getFullYear()} Atmaram Tour and Travel. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;