"use client";

import React from "react";
import { motion } from "framer-motion";
import { ReviewsTicker } from "@/components/ui/reviews-ticker";
import { ColorfulText } from "@/components/ui/colorful-text";

const testimonials = [
  {
    name: "Priya Sharma",
    designation: "Bride",
    content: "Hassan Jewellers made my wedding day absolutely magical with their stunning bridal collection. The quality and craftsmanship are unmatched!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612e829?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Raj Patel",
    designation: "Business Owner",
    content: "I've been a customer for over 10 years. Their collection keeps getting better, and the service is always exceptional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Anita Desai",
    designation: "Fashion Designer",
    content: "The attention to detail in every piece is remarkable. Hassan Jewellers understands luxury like no other.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Vikram Singh",
    designation: "Groom",
    content: "Found the perfect engagement ring here. The staff was incredibly helpful and the quality exceeded expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Meera Gupta",
    designation: "Collector",
    content: "Their heritage collection is absolutely breathtaking. Each piece tells a beautiful story of craftsmanship.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Arjun Kapoor",
    designation: "Investment Banker",
    content: "The investment value and beauty of their pieces is incredible. Perfect blend of tradition and modernity.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Kavya Reddy",
    designation: "Doctor",
    content: "Bought my first diamond necklace here. The staff guided me perfectly and the quality is outstanding!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Sanjay Malhotra",
    designation: "Entrepreneur",
    content: "Hassan Jewellers has been our family's go-to for three generations. Trust and quality never disappoints.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }
];

export const ReviewsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-luxury-pearl to-white dark:from-black dark:to-black overflow-hidden">
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
              Customer Reviews
            </ColorfulText>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Hear what our valued customers say about their experience with Hassan Jewellers. 
            Your satisfaction is our greatest achievement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* First row - moving left */}
          <ReviewsTicker 
            reviews={testimonials.slice(0, 4)} 
            direction="left" 
            speed="slow"
          />
          
          {/* Second row - moving right */}
          <ReviewsTicker 
            reviews={testimonials.slice(4, 8)} 
            direction="right" 
            speed="slow"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
