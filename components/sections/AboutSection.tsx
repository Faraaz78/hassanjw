"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ColorfulText } from "@/components/ui/colorful-text";
import { TextReveal } from "@/components/ui/text-reveal";

import {
  FaCrown,
  FaCertificate,
  FaShieldAlt,
  FaGem,
  FaAward,
  FaHeart,
} from "react-icons/fa";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-br from-white via-luxury-pearl to-gray-50 dark:bg-gradient-to-br dark:from-black dark:via-black dark:to-black relative overflow-hidden"
    >
      <BackgroundBeams />

      {/* Simplified floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-gold-400/20 to-maroon-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-maroon-400/20 to-gold-400/20 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <ColorfulText animationType="rainbow">About Us</ColorfulText>
              </h2>

              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <p>
                  Since our founding in{" "}
                  <span className="font-semibold text-gold-600 dark:text-gold-400">
                    1998
                  </span>
                  , Hassan Jewellers has earned a reputation as a trusted
                  jeweller synonymous with quality and style. For over two
                  decades, we've been presenting the latest, most captivating
                  designs, implemented using the industry's best practices.
                </p>

                <p>
                  What truly sets us apart is our{" "}
                  <span className="font-semibold bg-gradient-to-r from-maroon-600 to-gold-600 bg-clip-text text-transparent">
                    unwavering commitment to trust
                  </span>
                  : enjoy transparent pricing, guaranteed purity through
                  mandatory BIS Hallmarking on all gold jewellery, and
                  confidence in every diamond backed by certification from
                  world-renowned grading authorities.
                </p>
              </div>
            </div>

            {/* Trust Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: FaShieldAlt,
                  title: "BIS Hallmarked",
                  color: "from-gold-500 to-gold-600",
                },
                {
                  icon: FaCertificate,
                  title: "Certified Diamonds",
                  color: "from-maroon-500 to-maroon-600",
                },
                {
                  icon: FaGem,
                  title: "Transparent Pricing",
                  color: "from-gold-500 to-gold-600",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <item.icon className="text-white text-lg" />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white/80 dark:bg-gradient-to-br dark:from-black/90 dark:to-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-gold-200/30 dark:border-gold-500/40 hover:border-gold-300 dark:hover:border-gold-400 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gold-500/20">
                  <FaAward className="text-2xl text-gold-600 dark:text-gold-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold bg-gradient-to-r from-gold-500 to-gold-700 dark:from-gold-400 dark:to-gold-600 bg-clip-text text-transparent mb-1">
                    25+ Years
                  </div>
                  <div className="text-gray-700 dark:text-gold-300 font-semibold text-sm">
                    Excellence Since 1998
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white/80 dark:bg-gradient-to-br dark:from-black/90 dark:to-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-gold-200/30 dark:border-gold-500/40 hover:border-gold-300 dark:hover:border-gold-400 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gold-500/20">
                  <FaHeart className="text-2xl text-gold-600 dark:text-gold-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold bg-gradient-to-r from-gold-500 to-gold-700 dark:from-gold-400 dark:to-gold-600 bg-clip-text text-transparent mb-1">
                    50K+ Customers
                  </div>
                  <div className="text-gray-700 dark:text-gold-300 font-semibold text-sm">
                    Quality & Style
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400/30 to-gold-600/40 dark:from-gold-500/40 dark:to-gold-700/50 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

              <div className="relative bg-white/95 dark:bg-gradient-to-br dark:from-black/95 dark:to-gray-900/90 backdrop-blur-sm rounded-2xl p-3 border border-white/20 dark:border-gold-500/30 shadow-xl hover:shadow-2xl dark:hover:shadow-gold-500/30 transition-all duration-500">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Hassan Jewellers - Premium craftsmanship and certified diamonds"
                    className="w-full rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Enhanced floating badges */}
            <motion.div
              animate={{
                y: [-5, 5, -5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 dark:from-gold-500 dark:to-gold-700 rounded-full flex items-center justify-center shadow-lg dark:shadow-gold-500/40"
            >
              <FaShieldAlt className="text-white text-sm" />
            </motion.div>

            <motion.div
              animate={{
                y: [5, -5, 5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-700 dark:from-gold-600 dark:to-gold-800 rounded-full flex items-center justify-center shadow-lg dark:shadow-gold-600/40"
            >
              <FaCrown className="text-white text-lg" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <TextReveal
            base={
              <div className="bg-white/60 dark:bg-gradient-to-r dark:from-black/70 dark:to-gray-900/60 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-500 dark:border-gold-500/40 inline-block">
                <p className="text-lg font-semibold">
                  <span className="text-gray-700 dark:text-gold-200">
                    Hassan Jewellers
                  </span>
                  <span className="text-gray-600 dark:text-gold-300 mx-3">
                    —
                  </span>
                  <span className="text-gray-700 dark:text-gold-200">
                    Where timeless craftsmanship meets modern assurance
                  </span>
                </p>
              </div>
            }
            reveal={
              <div
                className="bg-white/60 dark:bg-gradient-to-r dark:from-black/70 dark:to-gray-900/60 backdrop-blur-sm rounded-full px-6 py-3 border inline-block"
                style={{
                  borderColor: "#FFD700",
                  animation: "goldPulse 2s ease-in-out infinite alternate",
                  boxShadow: "0 0 12px 4px rgba(255, 215, 0, 0.4)",
                }}
              >
                <p className="text-lg font-semibold">
                  <span className="bg-gradient-to-r from-gold-600 to-gold-700 dark:from-gold-400 dark:to-gold-500 bg-clip-text text-transparent">
                    Hassan Jewellers
                  </span>
                  <span className="text-gray-600 dark:text-gold-300 mx-3">
                    —
                  </span>
                  <span className="text-gray-700 dark:text-gold-200">
                    Where timeless craftsmanship meets modern assurance
                  </span>
                </p>
              </div>
            }
          />
        </motion.div>
      </div>
      <style jsx>{`
        @keyframes goldPulse {
          0% {
            border-color: #ffd700;
            box-shadow: 0 0 0px rgba(255, 215, 0, 0.3);
          }
          100% {
            border-color: #ffc300;
            box-shadow: 0 0 12px 4px rgba(255, 215, 0, 0.5);
          }
        }

        .animate-goldPulse {
          animation: goldPulse 1.2s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
