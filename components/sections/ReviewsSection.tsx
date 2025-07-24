"use client";

import React from "react";
import { motion } from "framer-motion";
import { ReviewsTicker } from "@/components/ui/reviews-ticker";
import { ColorfulText } from "@/components/ui/colorful-text";

const testimonials = [
  {
    name: "Arusha Beary",
    designation: "Customer",
    content: "Beautiful pieces of jewellery customised exactly as I wanted – even better than expected! Quality is top-notch and making charges are quite reasonable.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612e829?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Mohammed Faizan",
    designation: "Customer",
    content: "Exceptional service from the Gold Section. The staff's professionalism and product quality exceeded expectations. Highly recommended for their dedication.",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Reny Birdi",
    designation: "First-time Buyer",
    content: "As a first-time buyer from Delhi, I was initially hesitant but the support and help in choosing jewelry made it a wonderful experience. Great service!",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Reshma S",
    designation: "Customer",
    content: "Ordered a necklace and received it safely within two days. The design was gorgeous and the collection at the store is lovely.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Tasneem Saleem",
    designation: "Customer",
    content: "The bracelet we ordered was very nice, and the service was prompt. Staff responded quickly and we confidently shopped online.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Mohammed Salman",
    designation: "Customer",
    content: "Stunning designs and excellent customer service. The prices are reasonable too. Definitely my go-to place now!",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "UMME KULSUM",
    designation: "Bridal Customer",
    content: "Beautiful, trendy collections at acceptable prices. Hallmark certified – perfect for bridal shopping. A trusted store!",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Architect Hassan",
    designation: "Customer",
    content: "Exquisite workmanship and unique custom-made designs. Staff gave us time to browse freely without pressure. Excellent quality and pricing.",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Fawaz",
    designation: "Customer",
    content: "Great collection and customization options. Gold and diamond purity is genuinely good. A very satisfying experience.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Miftha Shariff",
    designation: "Customer",
    content: "Outstanding designs and helpful staff. Got good discounts on some items. Trustworthy for hallmark jewelry.",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612e829?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Farin Farin",
    designation: "Customer",
    content: "Awesome designs and fast delivery. Very happy with the overall experience and safety of packaging.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Abdur Rahim V A",
    designation: "Customer",
    content: "Purchased a diamond ring – best quality I've come across. Very satisfied with the finish and delivery.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Syed Adnan",
    designation: "Customer",
    content: "Very good customer service. They have a decent collection and the experience was smooth and pleasant.",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Ayisha Asif",
    designation: "Customer",
    content: "Best jewelry design within my budget. Loved the elegant and budget-friendly pieces available.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Husna Mariyam",
    designation: "Customer",
    content: "Friendly staff and designs to suit all tastes. A trusted jeweller I confidently recommend to others.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Shahista Jabeen",
    designation: "Customer",
    content: "Absolutely loved the earring design I purchased. Intricate craftsmanship and timely delivery. Will shop again!",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Zareen Fatima",
    designation: "Customer",
    content: "The online experience was smooth, and the team helped clarify all my doubts. Jewelry matched the pictures perfectly.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612e829?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Aafreen Nasir",
    designation: "Customer",
    content: "Happy with the quality and shine of the bangles I received. The packaging was elegant and secure.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Mohammed Haris",
    designation: "Customer",
    content: "The staff were professional, patient, and knowledgeable. Found a beautiful ring within my budget.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Nida Tabassum",
    designation: "Bridal Customer",
    content: "Fantastic selection of bridal sets. They customized the necklace to match my lehenga – beyond satisfied!",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
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
