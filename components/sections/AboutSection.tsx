"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ColorfulText } from "@/components/ui/colorful-text";
import { TextReveal } from "@/components/ui/text-reveal";
import { ClientOnly } from "@/components/ui/client-only";

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
      className="py-20 px-4 bg-gradient-to-br from-white via-gold-50/30 to-amber-50/50 dark:bg-gradient-to-br dark:from-black dark:via-amber-950/20 dark:to-yellow-950/30 relative overflow-hidden"
    >
      <ClientOnly>
        <BackgroundBeams />
      </ClientOnly>

      {/* Enhanced floating elements with gold theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-gold-400/30 to-amber-500/40 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-amber-400/25 to-gold-500/35 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-gold-300/20 to-amber-400/30 rounded-full blur-xl animate-pulse delay-500"></div>
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

              <div className="space-y-6 text-lg text-gray-700 dark:text-amber-100">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="leading-relaxed"
                >
                  Since our founding in{" "}
                  <span className="font-bold text-2xl bg-gradient-to-r from-gold-600 via-amber-500 to-gold-700 dark:from-gold-400 dark:via-amber-300 dark:to-gold-500 bg-clip-text text-transparent drop-shadow-sm">
                    1998
                  </span>
                  , Hassan Jewellers has earned a reputation as a trusted
                  jeweller synonymous with quality and style. For over two
                  decades, we've been presenting the latest, most captivating
                  designs, implemented using the industry's best practices.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="leading-relaxed relative"
                >
                  What truly sets us apart is our{" "}
                  <span className="font-bold text-xl bg-gradient-to-r from-gold-600 via-amber-500 to-gold-700 dark:from-gold-400 dark:via-amber-300 dark:to-gold-500 bg-clip-text text-transparent relative">
                    unwavering commitment to trust
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-amber-500"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      viewport={{ once: true }}
                    />
                  </span>
                  : enjoy transparent pricing, guaranteed purity through
                  mandatory BIS Hallmarking on all gold jewellery, and
                  confidence in every diamond backed by certification from
                  world-renowned grading authorities.
                </motion.div>
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
                <div className="bg-gradient-to-br from-white/90 via-gold-50/60 to-amber-50/80 dark:bg-gradient-to-br dark:from-black/95 dark:via-amber-950/60 dark:to-yellow-950/80 backdrop-blur-sm rounded-lg p-4 border-2 border-gold-300/50 dark:border-gold-500/60 hover:border-gold-400/80 dark:hover:border-gold-400/80 transition-all duration-500 hover:shadow-xl hover:shadow-gold-400/30 dark:hover:shadow-gold-500/40 group-hover:scale-105">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaAward className="text-2xl text-gold-600 dark:text-gold-400 mx-auto mb-2 drop-shadow-md" />
                  </motion.div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-gold-600 via-amber-500 to-gold-700 dark:from-gold-400 dark:via-amber-300 dark:to-gold-500 bg-clip-text text-transparent mb-1 drop-shadow-sm">
                    25+ Years
                  </div>
                  <div className="text-gray-800 dark:text-gold-200 font-semibold text-xs tracking-wide">
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
                <div className="bg-gradient-to-br from-white/90 via-gold-50/60 to-amber-50/80 dark:bg-gradient-to-br dark:from-black/95 dark:via-amber-950/60 dark:to-yellow-950/80 backdrop-blur-sm rounded-lg p-4 border-2 border-gold-300/50 dark:border-gold-500/60 hover:border-gold-400/80 dark:hover:border-gold-400/80 transition-all duration-500 hover:shadow-xl hover:shadow-gold-400/30 dark:hover:shadow-gold-500/40 group-hover:scale-105">
                  <motion.div
                    whileHover={{ scale: [1, 1.2, 1.1, 1.2, 1] }}
                    transition={{ duration: 0.8 }}
                  >
                    <FaHeart className="text-2xl text-gold-600 dark:text-gold-400 mx-auto mb-2 drop-shadow-md" />
                  </motion.div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-gold-600 via-amber-500 to-gold-700 dark:from-gold-400 dark:via-amber-300 dark:to-gold-500 bg-clip-text text-transparent mb-1 drop-shadow-sm">
                    50K+ Customers
                  </div>
                  <div className="text-gray-800 dark:text-gold-200 font-semibold text-xs tracking-wide">
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
            className="relative max-w-md mx-auto"
          >
            <div className="relative group">
              {/* Enhanced glow effect with gold theme */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400/40 via-amber-500/50 to-gold-600/40 dark:from-gold-500/50 dark:via-amber-400/60 dark:to-gold-700/50 rounded-3xl blur-3xl opacity-60 group-hover:opacity-90 transition-all duration-700 animate-pulse"></div>

              {/* Secondary glow layer */}
              <div className="absolute inset-2 bg-gradient-to-br from-amber-300/30 to-gold-500/40 dark:from-amber-400/40 dark:to-gold-600/50 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-all duration-500"></div>

              <div className="relative bg-gradient-to-br from-white/95 via-gold-50/80 to-amber-50/90 dark:bg-gradient-to-br dark:from-black/95 dark:via-amber-950/90 dark:to-yellow-950/95 backdrop-blur-md rounded-3xl p-4 border-2 border-gold-300/60 dark:border-gold-500/50 shadow-2xl hover:shadow-3xl hover:shadow-gold-400/40 dark:hover:shadow-gold-500/50 transition-all duration-700 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded-2xl ring-2 ring-gold-300/30 dark:ring-gold-500/40">
                  <motion.img
                    src="https://cdn.builder.io/api/v1/image/assets%2F1d129d8828c04421a1872f3de005dbe7%2F7ac760800ffc454dbf4ef0c56aae8bf8?format=webp&width=800"
                    alt="Hassan Jewellers - Exquisite Gold Jewelry Collection"
                    className="w-full rounded-2xl transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110 group-hover:contrast-105"
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    transition={{ duration: 0.7 }}
                  />
                  {/* Image overlay for enhanced gold effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-gold-400/10 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </div>
            </div>

            {/* Enhanced floating badges with better animations */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-gold-400 via-amber-500 to-gold-600 dark:from-gold-500 dark:via-amber-400 dark:to-gold-700 rounded-full flex items-center justify-center shadow-2xl shadow-gold-500/60 dark:shadow-gold-400/70 ring-2 ring-white/50 dark:ring-black/50"
            >
              <FaShieldAlt className="text-white text-lg drop-shadow-md" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-full"></div>
            </motion.div>

            <motion.div
              animate={{
                y: [8, -8, 8],
                rotate: [0, -5, 5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-gold-500 via-amber-600 to-gold-700 dark:from-gold-600 dark:via-amber-500 dark:to-gold-800 rounded-full flex items-center justify-center shadow-2xl shadow-gold-600/70 dark:shadow-gold-500/80 ring-2 ring-white/50 dark:ring-black/50"
            >
              <FaCrown className="text-white text-2xl drop-shadow-md" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent rounded-full"></div>
            </motion.div>

            {/* Additional decorative elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 -left-2 w-8 h-8 bg-gradient-to-r from-gold-400 to-amber-500 rounded-full opacity-60 shadow-lg"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/4 -right-1 w-6 h-6 bg-gradient-to-r from-amber-400 to-gold-500 rounded-full opacity-70 shadow-md"
            />
          </motion.div>
        </div>

        {/* Simple Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="bg-gradient-to-r from-white/80 via-gold-50/90 to-amber-50/80 dark:bg-gradient-to-r dark:from-black/80 dark:via-amber-950/70 dark:to-yellow-950/60 backdrop-blur-md rounded-full px-8 py-4 border-2 border-gold-300/60 dark:border-gold-500/50 inline-block shadow-xl">
            <p className="text-xl font-bold">
              <span className="bg-gradient-to-r from-gold-600 via-amber-500 to-gold-700 dark:from-gold-400 dark:via-amber-300 dark:to-gold-500 bg-clip-text text-transparent drop-shadow-sm">
                Hassan Jewellers
              </span>
              <span className="text-gold-500 dark:text-gold-400 mx-4 text-2xl">
                ✦
              </span>
              <span className="text-gray-800 dark:text-gold-100 font-semibold">
                Where timeless craftsmanship meets modern assurance
              </span>
            </p>
          </div>
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

        @keyframes goldGlow {
          0% {
            box-shadow: 0 0 30px 8px rgba(255, 215, 0, 0.4),
              inset 0 0 30px rgba(255, 215, 0, 0.1);
          }
          50% {
            box-shadow: 0 0 40px 12px rgba(255, 215, 0, 0.7),
              inset 0 0 40px rgba(255, 215, 0, 0.3);
          }
          100% {
            box-shadow: 0 0 30px 8px rgba(255, 215, 0, 0.4),
              inset 0 0 30px rgba(255, 215, 0, 0.1);
          }
        }

        .animate-goldPulse {
          animation: goldPulse 1.2s ease-in-out infinite alternate;
        }

        .animate-goldGlow {
          animation: goldGlow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
