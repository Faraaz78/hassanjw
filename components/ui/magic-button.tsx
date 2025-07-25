"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagicButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
}

export const MagicButton = ({
  children,
  className,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
}: MagicButtonProps) => {
  const text = typeof children === "string" ? children : "";
  
  const baseClasses = "relative overflow-hidden rounded-full font-semibold transition-all duration-300 border-2 group cursor-pointer";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-gold-500 via-gold-600 to-gold-700 hover:from-gold-600 hover:via-gold-700 hover:to-gold-800 text-black border-gold-400 hover:border-gold-300 shadow-lg hover:shadow-xl hover:shadow-gold-500/25",
    secondary: "bg-gradient-to-r from-maroon-600 to-maroon-700 hover:from-maroon-700 hover:to-maroon-800 text-white border-maroon-500 hover:border-maroon-400 shadow-lg hover:shadow-xl hover:shadow-maroon-500/25",
    outline: "border-gold-500 text-gold-600 dark:text-gold-400 hover:bg-gold-500 hover:text-black backdrop-blur-sm bg-white/10 dark:bg-black/10 shadow-lg hover:shadow-xl hover:shadow-gold-500/25"
  };
  
  const sizeClasses = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };

  const letterVariants = {
    initial: {
      color: variant === "primary" ? "#000000" : variant === "secondary" ? "#ffffff" : "#d97706"
    },
    hover: (i: number) => ({
      color: ["#ffd700", "#ff6b35", "#ff1744", "#9c27b0", "#3f51b5", "#00bcd4", "#4caf50"],
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeInOut" as const
      }
    })
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      whileHover={{ 
        scale: disabled ? 1 : 1.05, 
        y: disabled ? 0 : -2,
      }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(45deg, #ffd700, #ff6b35, #ff1744, #9c27b0, #3f51b5, #00bcd4, #4caf50, #ffd700)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Inner content */}
      <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
        {text ? (
          <motion.span
            className="flex"
            initial="initial"
            whileHover="hover"
          >
            {text.split("").map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                custom={i}
                className="inline-block font-semibold"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.span>
        ) : (
          children
        )}
      </span>
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
        style={{ width: "100%" }}
      />
    </motion.button>
  );
};
