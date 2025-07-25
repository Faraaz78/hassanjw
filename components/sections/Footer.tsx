"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ColorfulText } from "@/components/ui/colorful-text";
import { 
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 via-luxury-pearl to-white dark:bg-gradient-to-br dark:from-black dark:via-black dark:to-black text-gray-800 dark:text-gold-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <ColorfulText
                className="text-3xl font-bold"
                animationType="rainbow"
              >
                Hassan Jewellers
              </ColorfulText>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              For over three decades, we've been crafting timeless elegance with exquisite jewelry pieces. 
              Experience luxury, tradition, and unmatched craftsmanship at Hassan Jewellers.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebookF />, href: "#", label: "Facebook" },
                { icon: <FaInstagram />, href: "https://www.instagram.com/hassanjewellers", label: "Instagram" },
                { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gold-600 text-white rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gold-600 dark:text-gold-400">Quick Links</h3>
            <div className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "#about" },
                { name: "Collections", href: "#collections" },
                { name: "Gallery", href: "#gallery" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <div key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gold-600 dark:text-gold-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-gold-500 mt-1" />
                <div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    123 Jewelry Street, Diamond District<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gold-500" />
                <p className="text-gray-600 dark:text-gray-300 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gold-500" />
                <p className="text-gray-600 dark:text-gray-300 text-sm">info@hassanjewellers.com</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Hassan Jewellers. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-300">
              Return Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
