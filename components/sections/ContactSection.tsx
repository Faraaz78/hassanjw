"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { MagicButton } from "@/components/ui/magic-button";
import { ColorfulText } from "@/components/ui/colorful-text";
import { PartyPopper } from "@/components/ui/party-popper";
import { 
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="text-gold-500 text-xl mt-1" />,
    title: "Address",
    content: "123 Jewelry Street, Diamond District\nMumbai, Maharashtra 400001"
  },
  {
    icon: <FaPhone className="text-gold-500 text-xl mt-1" />,
    title: "Phone",
    content: "+91 98765 43210"
  },
  {
    icon: <FaEnvelope className="text-gold-500 text-xl mt-1" />,
    title: "Email",
    content: "info@hassanjewellers.com"
  },
  {
    icon: <FaClock className="text-gold-500 text-xl mt-1" />,
    title: "Hours",
    content: "Monday - Saturday: 10:00 AM - 8:00 PM\nSunday: 11:00 AM - 7:00 PM"
  }
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-luxury-pearl to-white dark:from-black dark:to-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <ColorfulText animationType="rainbow">
              Get In Touch
            </ColorfulText>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CardSpotlight className="h-full">
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <AnimatedTooltip key={index} content={`Contact us via ${item.title.toLowerCase()}`}>
                    <div className="flex items-start space-x-4 cursor-pointer">
                      {item.icon}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </AnimatedTooltip>
                ))}
              </div>
            </CardSpotlight>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CardSpotlight>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                                    <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gold-300/50 dark:border-gold-600/50 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 dark:bg-black/80 dark:text-gold-200 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-gold-400/70"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                                    <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gold-300/50 dark:border-gold-600/50 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 dark:bg-black/80 dark:text-gold-200 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-gold-400/70"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                                    <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gold-300/50 dark:border-gold-600/50 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 dark:bg-black/80 dark:text-gold-200 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-gold-400/70 resize-none"
                    required
                  />
                </div>

                                <MagicButton variant="primary" size="lg" className="w-full">
                  Send Message
                </MagicButton>
              </form>
            </CardSpotlight>
          </motion.div>
        </div>
      </div>
      
      <PartyPopper />
    </section>
  );
};

export default ContactSection;
