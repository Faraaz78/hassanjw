"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

// Mock components - replace with your actual imports
const MagicButton = ({ variant, size, className, children, ...props }: any) => (
  <button
    className={`
      ${
        variant === "primary"
          ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black"
          : "border-2 border-yellow-400 text-yellow-600 bg-transparent"
      }
      ${size === "lg" ? "px-6 py-3 text-lg" : "px-4 py-2"}
      rounded-full font-semibold transition-all duration-300 hover:transform hover:scale-105
      ${className}
    `}
    {...props}
  >
    {children}
  </button>
);

const BackgroundBeams = ({ className }: { className?: string }) => (
  <div className={`${className} pointer-events-none`}>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />
  </div>
);

interface MacBookProps {
  screenContent?: React.ReactNode;
  width?: string;
  className?: string;
}

const MacBook: React.FC<MacBookProps> = ({
  screenContent,
  width = "50%",
  className = "",
}) => {
  return (
    <div
      className={`mac_container ${className}`}
      style={{ width, margin: "10px auto" }}
    >
      <div
        className="mac_scaler"
        style={{
          margin: "auto",
          width: "100%",
          paddingTop: "57.875%",
          height: "0px",
          position: "relative",
        }}
      >
        <div
          className="mac_holder"
          style={{
            position: "absolute",
            left: "0px",
            top: "0px",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className="mac_screen"
            style={{
              margin: "auto",
              background: "#111",
              width: "81%",
              height: "94%",
              borderTopLeftRadius: "2% 3%",
              borderTopRightRadius: "2% 3%",
              borderBottomLeftRadius: "5% 3%",
              borderBottomRightRadius: "5% 3%",
              boxSizing: "border-box",
              padding: "3%",
              position: "relative",
              overflow: "hidden",
              border: "1px solid #ddd",
            }}
          >
            <div
              style={{
                content: "''",
                position: "absolute",
                right: "0.3%",
                top: "0.5%",
                width: "36.5%",
                height: "35%",
                border: "1px solid #666",
                borderBottom: "none",
                borderLeft: "none",
                borderTopRightRadius: "4.5% 7%",
              }}
            ></div>
            <div
              style={{
                content: "''",
                position: "absolute",
                right: "-25%",
                top: "-25%",
                width: "40%",
                height: "150%",
                background:
                  "linear-gradient(rgba(255,255,255,0.2), rgba(200,200,200,0) 40%)",
                transform: "rotate(-30deg)",
              }}
            ></div>
            <div
              className="mac_camera"
              style={{
                background: "#333",
                borderRadius: "50%",
                width: "1%",
                height: "1.5%",
                position: "absolute",
                left: "49.5%",
                top: "2%",
              }}
            >
              <div
                style={{
                  content: "''",
                  position: "absolute",
                  left: "35%",
                  top: "40%",
                  width: "30%",
                  height: "30%",
                  borderRadius: "50%",
                  background: "#777",
                }}
              ></div>
            </div>
            <div
              className="mac_screen_content"
              style={{
                background: "#333",
                width: "100%",
                height: "100%",
                textAlign: "center",
              }}
            >
              {screenContent}
            </div>
          </div>
          <div
            className="mac_bottom"
            style={{
              background: "linear-gradient(#ccc 50%, #444)",
              width: "100%",
              height: "5%",
              position: "relative",
              top: "-1.7%",
              borderBottomLeftRadius: "6% 50%",
              borderBottomRightRadius: "6% 50%",
            }}
          >
            <div
              className="mac_bottom_top_half"
              style={{
                width: "100%",
                height: "50%",
                background:
                  "linear-gradient(90deg, #aaa, #f3f3f3 0.5%, #aaa 2.5%, #f3f3f3 5.5%, #f3f3f3 94.5%, #aaa 97.5%, #f3f3f3 99.5%, #aaa)",
              }}
            >
              <div
                className="mac_thumb_space"
                style={{
                  background:
                    "radial-gradient(90% 150% at 50% 1%, #eee 49%, #888)",
                  margin: "auto",
                  width: "15%",
                  height: "60%",
                  borderBottomLeftRadius: "8% 100%",
                  borderBottomRightRadius: "8% 100%",
                }}
              ></div>
            </div>
            <div
              style={{
                content: "''",
                position: "absolute",
                right: "1%",
                bottom: "11%",
                width: "98%",
                height: "0%",
                boxShadow: "1px 0px 8px 1px #333",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent,
        );
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <section className="min-h-screen w-full bg-white dark:bg-black relative overflow-hidden">
      {/* Background Effects - Only for dark mode */}
      <div className="dark:block hidden">
        <BackgroundBeams className="absolute inset-0 opacity-20" />
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-yellow-50/30 dark:from-black dark:via-black dark:to-gray-900" />

      <div className="relative z-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Hassan Logo Image */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative w-full max-w-md mx-auto lg:mx-0"
                >
                  {/* Light Mode Hassan Logo */}
                  <div className="dark:hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F1d129d8828c04421a1872f3de005dbe7%2F9d2ebe9e76a54d609fdf92b5dd22fe88?format=webp&width=800"
                      
                      alt="Hassan Jewellers Logo Light"
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  {/* Dark Mode Hassan Logo */}
                  <div className="hidden dark:block">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F1d129d8828c04421a1872f3de005dbe7%2F9d2ebe9e76a54d609fdf92b5dd22fe88?format=webp&width=800"

                      
                      alt="Hassan Jewellers Logo Dark"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Typewriter Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed max-w-lg"
              >
                <TypewriterEffect
                  words={[
                    "Finest Handcrafted Jewelry Collection",
                    "Tradition Meets Luxury Always",
                    "Elegance Redefined by Hassan",
                    "Crafting Timeless Dream Treasures"
                  ]}
                  className="text-lg md:text-xl text-gray-700 dark:text-gray-200"
                  cursorClassName="text-gold-500"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delayBetweenWords={2000}
                />
              </motion.div>



              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <MagicButton variant="primary" size="lg" className="px-8">
                  Explore Collections
                </MagicButton>
                <MagicButton
                  variant="outline"
                  size="lg"
                  className="px-8 border-yellow-400 text-yellow-600 dark:border-yellow-400 dark:text-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  Book Consultation
                </MagicButton>
              </motion.div>
            </motion.div>

            {/* Right Device Mockup Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[600px] lg:h-[700px] flex items-center justify-center"
            >
              {/* 3D Jewelry Elements */}
              <div className="absolute inset-0">
                {/* Golden Necklace - Top Left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 1.0 }}
                  className="absolute top-8 left-8 w-24 h-24 z-10"
                >
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg border-4 border-yellow-300 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full shadow-md"></div>
                  </div>
                </motion.div>

                {/* Diamond Ring - Top Right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="absolute top-16 right-12 w-20 h-20 z-10"
                >
                  <div className="w-full h-full bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full shadow-xl flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full shadow-lg animate-pulse"></div>
                  </div>
                </motion.div>

                {/* Golden Bracelet - Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 1.4 }}
                  className="absolute bottom-20 left-4 w-28 h-16 z-10"
                >
                  <div className="w-full h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full shadow-lg border-2 border-yellow-300"></div>
                </motion.div>

                {/* Emerald Earring - Bottom Right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 1.6 }}
                  className="absolute bottom-12 right-8 w-16 h-16 z-10"
                >
                  <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg shadow-xl border-2 border-yellow-400 transform rotate-45"></div>
                </motion.div>
              </div>

              {/* Conditional Device Mockup */}
              {isMobile ? (
                // Mobile Phone Mockup
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative"
                >
                  {/* Phone Frame */}
                  <div className="relative w-64 h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl border-4 border-gray-800">
                    {/* Screen */}
                    <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="absolute top-0 left-0 right-0 h-8 bg-black z-20 flex items-center justify-between px-6">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                        <div className="text-white text-xs">Hassan</div>
                        <div className="w-6 h-3 bg-green-500 rounded-sm"></div>
                      </div>

                      {/* Store Image Container */}
                      <div className="absolute inset-0 top-8">
                        {/* Mobile Light Mode Image */}
                        <div className="absolute inset-0 dark:hidden">
                          <img
                            src="/images/moblight.jpeg"
                            alt="Hassan Jewellers Store - Mobile Light View"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
                        </div>

                        {/* Mobile Dark Mode Image */}
                        <div className="absolute inset-0 hidden dark:block">
                          <img
                            src="/images/mobdark.jpeg"
                            alt="Hassan Jewellers Store - Mobile Dark View"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
                        </div>
                      </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-yellow-500/20 to-yellow-600/20 rounded-[3rem] blur-xl -z-10"></div>
                </motion.div>
              ) : (
                // Modern Laptop Mockup with Opening Animation - Using Custom MacBook Component
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative"
                  style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Animated Glow */}
                  <motion.div
                    animate={{
                      opacity: [0.4, 0.7, 0.4],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl -z-10"
                  />

                  {/* MacBook Component with Animation */}
                  <motion.div
                    initial={{
                      rotateX: -90,
                      y: 6,
                      opacity: 0,
                    }}
                    animate={{
                      rotateX: -8,
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 1.2,
                      ease: [0.25, 0.1, 0.25, 1.0],
                    }}
                    style={{
                      transformOrigin: "center bottom",
                      transformStyle: "preserve-3d",
                      transform: "rotateY(3deg)",
                    }}
                  >
                    <MacBook
                      width="500px"
                      screenContent={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8, delay: 2.0 }}
                          className="w-full h-full relative"
                        >
                          {/* Store Image Container */}
                          <div className="absolute inset-0">
                            {/* Laptop Light Mode Image */}
                            <div className="absolute inset-0 dark:hidden">
                              <img
                                src="/images/laplight.png"
                                alt="Hassan Jewellers Store - Laptop Light View"
                                className="w-full h-full object-cover rounded-md"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
                            </div>

                            {/* Laptop Dark Mode Image */}
                            <div className="absolute inset-0 hidden dark:block">
                              <img
                                src="/images/lapdark.png"
                                alt="Hassan Jewellers Store - Laptop Dark View"
                                className="w-full h-full object-cover rounded-md"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
                            </div>
                          </div>

                          {/* Screen reflection effect */}
                          <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: [0, 0.3, 0], x: 100 }}
                            transition={{ duration: 1.5, delay: 2.2 }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                            style={{ width: "30%" }}
                          />
                        </motion.div>
                      }
                    />
                  </motion.div>
                </motion.div>
              )}

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/4 right-1/4 w-6 h-6 bg-yellow-400 rounded-full opacity-60"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-yellow-500 rounded-full opacity-40"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="absolute bottom-8 left-8 z-30"
      />

      {/* Stats Section - Top Right */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.0 }}
        className="absolute top-32 right-8 z-30 dark:block hidden"
      />
    </section>
  );
};

export default HeroSection;
