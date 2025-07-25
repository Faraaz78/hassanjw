"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

// Gold color palette for jewellers
const goldColors = {
  light: {
    primary: "#D4AF37", // Classic gold
    secondary: "#FFD700", // Bright gold
    accent: "#B8860B", // Dark goldenrod
    hover: "#F4E4BC", // Light gold
    text: "#8B4513", // Saddle brown
    bg: "#FFFEF7", // Cream white
  },
  dark: {
    primary: "#FFD700", // Bright gold for dark mode
    secondary: "#FFA500", // Orange gold
    accent: "#DAA520", // Goldenrod
    hover: "#4A3728", // Dark brown
    text: "#F5F5DC", // Beige
    bg: "#1A1611", // Very dark brown
  }
};

interface HoverBorderGradientProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
  duration?: number;
  clockwise?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function GoldHoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  variant = 'primary',
  size = 'md',
  ...props
}: HoverBorderGradientProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  // Gold gradient mappings for border animation
  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, #FFD700 0%, rgba(255, 215, 0, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, #FFD700 0%, rgba(255, 215, 0, 0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, #FFD700 0%, rgba(255, 215, 0, 0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, #FFD700 0%, rgba(255, 215, 0, 0) 100%)",
  };

  // Gold highlight for hover state
  const highlight = "radial-gradient(75% 181.15% at 50% 50%, #D4AF37 0%, rgba(212, 175, 55, 0.3) 100%)";

  // Size variants
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl"
  };

  // Variant styles
  const variantStyles = {
    primary: "bg-gradient-to-r from-amber-600 to-yellow-500 text-white hover:from-amber-500 hover:to-yellow-400 dark:from-yellow-500 dark:to-amber-400 dark:text-amber-900",
    secondary: "bg-gradient-to-r from-yellow-400 to-amber-300 text-amber-900 hover:from-yellow-300 hover:to-amber-200 dark:from-amber-300 dark:to-yellow-200 dark:text-amber-800",
    outline: "bg-transparent border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-amber-900/20",
    ghost: "bg-transparent text-amber-600 hover:bg-amber-50 dark:text-yellow-400 dark:hover:bg-amber-900/20"
  };

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border content-center transition-all duration-500",
        "bg-amber-50/20 hover:bg-amber-50/40 dark:bg-amber-900/20 dark:hover:bg-amber-900/40",
        "border-amber-200 dark:border-amber-700",
        "items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        "shadow-lg hover:shadow-xl shadow-amber-200/50 dark:shadow-amber-900/50",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto z-10 rounded-[inherit] font-medium transition-all duration-300",
          sizeClasses[size],
          variantStyles[variant],
          "shadow-inner",
          className
        )}
      >
        {children}
      </div>

      <motion.div
        className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered ? [movingMap[direction], highlight] : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />

      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950 absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  );
}

// Preset button components for common use cases
export function GoldPrimaryButton(props: Omit<HoverBorderGradientProps, 'variant'>) {
  return <GoldHoverBorderGradient {...props} variant="primary" />;
}

export function GoldSecondaryButton(props: Omit<HoverBorderGradientProps, 'variant'>) {
  return <GoldHoverBorderGradient {...props} variant="secondary" />;
}

export function GoldOutlineButton(props: Omit<HoverBorderGradientProps, 'variant'>) {
  return <GoldHoverBorderGradient {...props} variant="outline" />;
}

export function GoldGhostButton(props: Omit<HoverBorderGradientProps, 'variant'>) {
  return <GoldHoverBorderGradient {...props} variant="ghost" />;
}

// Standard button without border animation (for performance-critical areas)
interface StandardGoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function StandardGoldButton({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: StandardGoldButtonProps) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl"
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-amber-600 to-yellow-500 text-white hover:from-amber-500 hover:to-yellow-400 dark:from-yellow-500 dark:to-amber-400 dark:text-amber-900 shadow-lg shadow-amber-200/50 dark:shadow-amber-900/50",
    secondary: "bg-gradient-to-r from-yellow-400 to-amber-300 text-amber-900 hover:from-yellow-300 hover:to-amber-200 dark:from-amber-300 dark:to-yellow-200 dark:text-amber-800 shadow-md shadow-yellow-200/50 dark:shadow-amber-800/50",
    outline: "bg-transparent border-2 border-amber-500 text-amber-600 hover:bg-amber-50 hover:shadow-md dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-amber-900/20",
    ghost: "bg-transparent text-amber-600 hover:bg-amber-50 hover:text-amber-700 dark:text-yellow-400 dark:hover:bg-amber-900/20 dark:hover:text-yellow-300"
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 dark:focus:ring-yellow-400 dark:focus:ring-offset-amber-900",
        "active:scale-95 hover:scale-105",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        sizeClasses[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// Icon button variant
interface GoldIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function GoldIconButton({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: GoldIconButtonProps) {
  const sizeClasses = {
    sm: "p-1.5",
    md: "p-2",
    lg: "p-3",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-amber-600 to-yellow-500 text-white hover:from-amber-500 hover:to-yellow-400 dark:from-yellow-500 dark:to-amber-400 dark:text-amber-900",
    secondary: "bg-gradient-to-r from-yellow-400 to-amber-300 text-amber-900 hover:from-yellow-300 hover:to-amber-200 dark:from-amber-300 dark:to-yellow-200 dark:text-amber-800",
    outline: "bg-transparent border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-amber-900/20",
    ghost: "bg-transparent text-amber-600 hover:bg-amber-50 dark:text-yellow-400 dark:hover:bg-amber-900/20"
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 dark:focus:ring-yellow-400 dark:focus:ring-offset-amber-900",
        "active:scale-95 hover:scale-105",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        "shadow-lg hover:shadow-xl shadow-amber-200/50 dark:shadow-amber-900/50",
        sizeClasses[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// Updated Hero Section Component with Gold Buttons
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

// Background Beams Component
const BackgroundBeams = ({ className }: { className?: string }) => (
  <div className={`${className} pointer-events-none`}>
    <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-yellow-500/10 to-gold-600/10 animate-pulse" />
  </div>
);

// MacBook Component
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
              border: "1px solid #D4AF37",
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
                border: "1px solid #B8860B",
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
                  "linear-gradient(rgba(255,215,0,0.2), rgba(212,175,55,0) 40%)",
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
                  background: "#B8860B",
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
              background: "linear-gradient(#D4AF37 50%, #B8860B)",
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
                  "linear-gradient(90deg, #B8860B, #F4E4BC 0.5%, #B8860B 2.5%, #F4E4BC 5.5%, #F4E4BC 94.5%, #B8860B 97.5%, #F4E4BC 99.5%, #B8860B)",
              }}
            >
              <div
                className="mac_thumb_space"
                style={{
                  background:
                    "radial-gradient(90% 150% at 50% 1%, #F5F5DC 49%, #8B4513)",
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
                boxShadow: "1px 0px 8px 1px #8B4513",
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
  const [particles, setParticles] = useState<Array<{ left: number, top: number }>>([]);

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

    // Initialize particles positions on client side only
    const particlePositions = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
    setParticles(particlePositions);

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Navigation handlers
  const handleExploreCollections = () => {
    window.open('https://www.instagram.com/hassanjewellers', '_blank');
  };

  const handleBookConsultation = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen w-full bg-white dark:bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="dark:block hidden">
        <BackgroundBeams className="absolute inset-0 opacity-20" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 dark:bg-yellow-400/40 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50/20 to-yellow-50/40 dark:from-black dark:via-amber-950/30 dark:to-yellow-900/20" />

      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-50/10 to-transparent dark:from-black/50 dark:via-yellow-900/20 dark:to-black/50" />

      {/* Dark mode gold accent overlay */}
      <div className="absolute inset-0 hidden dark:block bg-gradient-to-tr from-amber-900/10 via-transparent to-yellow-800/5" />

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
                      className="w-full h-auto object-contain drop-shadow-lg"
                    />
                  </div>

                  {/* Dark Mode Hassan Logo */}
                  <div className="hidden dark:block">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F1d129d8828c04421a1872f3de005dbe7%2F9d2ebe9e76a54d609fdf92b5dd22fe88?format=webp&width=800"
                      alt="Hassan Jewellers Logo Dark"
                      className="w-full h-auto object-contain drop-shadow-lg filter brightness-110"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Typewriter Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-700 dark:text-amber-100 leading-relaxed max-w-lg"
              >
                <TypewriterEffect
                  words={[
                    "Finest Handcrafted Jewelry Collection.",
                    "Tradition Meets Luxury Always.",
                    "Elegance Redefined by Hassan.",
                    "Crafting Timeless Dream Treasures."
                  ]}
                  className="text-lg md:text-xl text-gray-700 dark:text-amber-100"
                  cursorClassName="text-amber-500 dark:text-yellow-400"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delayBetweenWords={2000}
                />
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-amber-200"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>50+ Years Legacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 dark:bg-yellow-400 rounded-full animate-pulse"></div>
                  <span>Certified Authenticity</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>10,000+ Happy Customers</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <GoldHoverBorderGradient
                  variant="primary"
                  size="lg"
                  className="px-8"
                  onClick={handleExploreCollections}
                >
                  Explore Collections
                </GoldHoverBorderGradient>
                <GoldHoverBorderGradient
                  variant="outline"
                  size="lg"
                  className="px-8"
                  onClick={handleBookConsultation}
                >
                  Book Consultation
                </GoldHoverBorderGradient>
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
                {/* Enhanced Jewelry Elements */}
                {/* Golden Necklace - Top Left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: [0, 5, -5, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 1,
                    delay: 1.0,
                    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute top-8 left-8 w-24 h-24 z-10"
                >
                  <div className="w-full h-full bg-gradient-to-br from-amber-400 to-yellow-600 dark:from-yellow-400 dark:to-amber-500 rounded-full shadow-xl border-4 border-yellow-300 dark:border-amber-400 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full shadow-md animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                  </div>
                </motion.div>

                {/* Diamond Ring - Top Right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                  animate={{
                    opacity: 1,
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{
                    duration: 1,
                    delay: 1.2,
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute top-16 right-12 w-20 h-20 z-10"
                >
                  <div className="w-full h-full bg-gradient-to-br from-amber-500 to-yellow-700 dark:from-yellow-500 dark:to-amber-600 rounded-full shadow-xl flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full shadow-lg animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                  </div>
                </motion.div>

                {/* Golden Bracelet - Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: [0, 3, -3, 0],
                    x: [0, 3, -3, 0]
                  }}
                  transition={{
                    duration: 1,
                    delay: 1.4,
                    rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    x: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute bottom-20 left-4 w-28 h-16 z-10"
                >
                  <div className="w-full h-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 dark:from-yellow-400 dark:via-amber-500 dark:to-yellow-600 rounded-full shadow-xl border-2 border-yellow-300 dark:border-amber-400">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                  </div>
                </motion.div>

                {/* Emerald Earring - Bottom Right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: [45, 50, 40, 45]
                  }}
                  transition={{
                    duration: 1,
                    delay: 1.6,
                    rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute bottom-12 right-8 w-16 h-16 z-10"
                >
                  <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg shadow-xl border-2 border-amber-400 dark:border-yellow-400 transform rotate-45">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-lg"></div>
                  </div>
                </motion.div>

                {/* Additional Jewelry Elements */}
                {/* Ruby Ring - Center Top */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: [1, 1.2, 1],
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 1,
                    delay: 1.8,
                    scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute top-4 left-1/2 -translate-x-1/2 w-14 h-14 z-10"
                >
                  <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-700 rounded-full shadow-lg border-2 border-amber-400 dark:border-yellow-400">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-full"></div>
                  </div>
                </motion.div>

                {/* Pearl Necklace - Left Center */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 1,
                    delay: 2.0,
                    rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 z-10"
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 rounded-full shadow-lg border border-amber-300 dark:border-yellow-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent rounded-full"></div>
                  </div>
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
                  <div className="relative w-64 h-[500px] bg-gray-900 dark:bg-black rounded-[3rem] p-2 shadow-2xl border-4 border-gray-800 dark:border-amber-900/50">
                    {/* Screen */}
                    <div className="w-full h-full bg-black dark:bg-amber-950 rounded-[2.5rem] overflow-hidden relative">
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
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-amber-900/20 to-yellow-900/10" />
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/5 via-transparent to-black/30" />
                        </div>
                      </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-amber-600/20 dark:from-yellow-400/20 dark:via-amber-500/20 dark:to-yellow-600/20 rounded-[3rem] blur-xl -z-10"></div>
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
                    className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 dark:from-yellow-500/20 dark:via-amber-500/20 dark:to-yellow-500/20 rounded-2xl blur-xl -z-10"
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
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-amber-900/20 to-yellow-900/10 rounded-md" />
                              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/5 via-transparent to-black/30 rounded-md" />
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

              {/* Enhanced Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/4 right-1/4 w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-600 dark:from-yellow-400 dark:to-amber-500 rounded-full shadow-lg"
              />
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, 180, 360],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-gradient-to-br from-amber-500 to-yellow-700 dark:from-yellow-500 dark:to-amber-600 rounded-full shadow-md"
              />
              <motion.div
                animate={{
                  x: [0, 10, -10, 0],
                  y: [0, -5, 5, 0],
                  scale: [1, 1.1, 0.9, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/2 right-1/3 w-3 h-3 bg-gradient-to-br from-amber-300 to-yellow-500 dark:from-yellow-300 dark:to-amber-400 rounded-full shadow-sm"
              />
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.3, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                className="absolute top-3/4 left-1/3 w-5 h-5 bg-gradient-to-br from-amber-400 to-orange-500 dark:from-yellow-400 dark:to-amber-500 rounded-full shadow-lg opacity-50"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;