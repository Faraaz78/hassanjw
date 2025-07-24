"use client";

import React from "react";
import { motion } from "framer-motion";
import { MovingCards } from "@/components/ui/moving-cards";
import { Card, CardContent } from "@/components/ui/card";
import { ColorfulText } from "@/components/ui/colorful-text";
import { 
  FaGem, 
  FaRing, 
  FaCrown, 
  FaHeart
} from "react-icons/fa";

const collections = [
  {
    title: "Diamond Rings",
    description: "Exquisite diamond rings crafted with precision and elegance for your special moments.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Gold Necklaces",
    description: "Traditional and contemporary gold necklace designs that showcase timeless beauty.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Wedding Collections",
    description: "Complete bridal jewelry sets designed to make your wedding day truly memorable.",
    image: "https://images.unsplash.com/photo-1596944924591-79b9a2c2c77e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Precious Gemstones",
    description: "Rare and beautiful gemstone jewelry featuring sapphires, emeralds, and rubies.",
    image: "https://images.unsplash.com/photo-1606318801954-d46d46d3360a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

const categories = [
  { icon: <FaRing />, title: "Rings", count: "200+" },
  { icon: <FaHeart />, title: "Necklaces", count: "150+" },
  { icon: <FaGem />, title: "Earrings", count: "180+" },
  { icon: <FaCrown />, title: "Bracelets", count: "120+" }
];

export const CollectionsSection = () => {
  return (
    <section id="collections" className="py-20 px-4 bg-white dark:bg-black">
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
              Our Collections
            </ColorfulText>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our curated collection of fine jewelry, each piece telling a story of 
            elegance, tradition, and exceptional craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
                            <Card className="text-center p-8 cursor-pointer group border-gold-300/50 dark:border-gold-600/50 bg-gradient-to-br from-luxury-pearl/80 to-white/80 dark:from-black/90 dark:to-gold-900/20 hover:shadow-xl hover:shadow-gold-500/20 hover:border-gold-400/70 backdrop-blur-sm transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl text-gold-500 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-gold-600 font-medium">{category.count} Designs</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MovingCards items={collections} direction="left" speed="slow" />
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionsSection;
