"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Card, CardContent } from "@/components/ui/card";
import { ColorfulText } from "@/components/ui/colorful-text";
import { FaCrown } from "react-icons/fa";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-white via-luxury-pearl to-gray-50 dark:bg-gradient-to-br dark:from-black dark:via-black dark:to-black relative">
      <BackgroundBeams />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <ColorfulText animationType="rainbow">
                About Hassan Jewellers
              </ColorfulText>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              For over three decades, Hassan Jewellers has been synonymous with exceptional craftsmanship, 
              timeless designs, and unparalleled quality. Our master artisans blend traditional techniques 
              with contemporary aesthetics to create jewelry that tells your unique story.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              From engagement rings that symbolize eternal love to heritage pieces that celebrate tradition, 
              every creation at Hassan Jewellers is crafted with passion, precision, and an unwavering 
              commitment to excellence.
            </p>
            <div className="grid grid-cols-2 gap-4">
                          <Card className="text-center p-4 border-gold-300/50 dark:border-gold-600/50 bg-gradient-to-br from-white/80 to-gold-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-gold-500 to-gold-700 bg-clip-text text-transparent">30+</div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 border-gold-300/50 dark:border-gold-600/50 bg-gradient-to-br from-white/80 to-gold-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-gold-500 to-gold-700 bg-clip-text text-transparent">50K+</div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">Happy Customers</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
                        <Card className="border-gold-300/50 dark:border-gold-600/50 bg-gradient-to-br from-white/80 to-gold-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-4">
                <img 
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Jewellery craftsmanship"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </CardContent>
            </Card>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-gold-400 to-maroon-500 rounded-full flex items-center justify-center">
              <FaCrown className="text-white text-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
