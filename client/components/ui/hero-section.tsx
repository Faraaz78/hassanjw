import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-500/10 to-maroon-500/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div className="relative z-20 text-center px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Content is now managed by the main Index component */}
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold-400 dark:border-gold-600 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gold-400 dark:bg-gold-600 rounded-full mt-2"></div>
        </motion.div>
      </div>
    </div>
  );
};
