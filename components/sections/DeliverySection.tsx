"use client";

import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ColorfulText } from "@/components/ui/colorful-text";
import IndiaDeliveryGlobe from "@/components/ui/india-delivery-globe";
import {
  FaShippingFast,
  FaShieldAlt,
  FaHandHoldingHeart,
  FaCertificate
} from "react-icons/fa";

const deliveryFeatures = [
  {
    title: "Free Shipping",
    description: "Complimentary delivery on orders above ₹10,000 across India with real-time tracking.",
    icon: <FaShippingFast className="h-8 w-8 text-gold-500" />,
    className: "md:col-span-2",
    header: (
      <div className="flex w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-gold-50 to-rose-50 dark:from-black dark:to-gold-900/30 flex items-center justify-center">
        <FaShippingFast className="h-12 w-12 text-gold-500" />
      </div>
    ),
  },
  {
    title: "Secure Packaging",
    description: "Insurance covered with tamper-proof packaging ensuring your jewelry arrives safely.",
    icon: <FaShieldAlt className="h-8 w-8 text-gold-500" />,
    className: "md:col-span-1",
    header: (
      <div className="flex w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-black dark:to-gold-900/30 flex items-center justify-center">
        <FaShieldAlt className="h-12 w-12 text-gold-500" />
      </div>
    ),
  },
  {
    title: "Easy Returns",
    description: "30-day hassle-free return and exchange policy with doorstep pickup.",
    icon: <FaHandHoldingHeart className="h-8 w-8 text-gold-500" />,
    className: "md:col-span-1",
    header: (
      <div className="flex w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 dark:from-black dark:to-gold-900/30 flex items-center justify-center">
        <FaHandHoldingHeart className="h-12 w-12 text-gold-500" />
      </div>
    ),
  },
  {
    title: "Certified Quality",
    description: "All jewelry comes with authenticity certificates and quality assurance from certified gemologists.",
    icon: <FaCertificate className="h-8 w-8 text-gold-500" />,
    className: "md:col-span-2",
    header: (
      <div className="flex w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-black dark:to-gold-900/30 flex items-center justify-center">
        <FaCertificate className="h-12 w-12 text-gold-500" />
      </div>
    ),
  },
];

export const DeliverySection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-luxury-pearl to-white dark:from-black dark:to-black">
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
              Pan India Delivery
            </ColorfulText>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the convenience of having exquisite jewelry delivered right to your doorstep, 
            anywhere across India with our secure and reliable delivery service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-full mx-auto">
          {/* Globe Section - 2/5 of the width for more space */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 h-[600px]"
          >
            <div className="bg-gradient-to-br from-white via-gold-50/30 to-gold-100/50 dark:from-black dark:to-gold-900/20 rounded-2xl p-4 h-full border border-gold-200/50 dark:border-gold-800/30 shadow-lg">
              <div className="text-center mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gold-200">
                  Delivery Locations
                </h3>
              </div>
              <div className="h-[calc(100%-3rem)] w-full">
                <IndiaDeliveryGlobe />
              </div>
            </div>
          </motion.div>

          {/* Bento Grid Section - 3/5 of the width */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <BentoGrid className="w-full">
              {deliveryFeatures.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={item.className}
                />
              ))}
            </BentoGrid>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
