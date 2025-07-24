"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaStar } from "react-icons/fa";

interface Review {
  name: string;
  designation: string;
  content: string;
  rating: number;
  image: string;
}

interface ReviewsTickerProps {
  reviews: Review[];
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  className?: string;
}

export const ReviewsTicker = ({
  reviews,
  speed = "normal",
  direction = "left",
  className,
}: ReviewsTickerProps) => {
  const speedMap = {
    slow: 60,
    normal: 40,
    fast: 20,
  };

  const duration = speedMap[speed];

  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <motion.div
        className="flex gap-6"
        animate={{
          x: direction === "left" ? [0, -100 * reviews.length] : [-100 * reviews.length, 0],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ width: `${200 * reviews.length}%` }}
      >
        {[...reviews, ...reviews].map((review, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-80 mx-3"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="bg-white/80 dark:bg-black/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gold-200/50 dark:border-gold-600/50 h-full">
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < review.rating 
                        ? "text-gold-500" 
                        : "text-gray-300 dark:text-gray-600"
                    )}
                  />
                ))}
              </div>
              
              {/* Review Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-light">
                "{review.content}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center">
                <motion.img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-400/50"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gold-600 dark:text-gold-400">
                    {review.designation}
                  </p>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full opacity-20"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
