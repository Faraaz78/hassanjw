import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
}

export const AnimatedButton = ({ 
  children, 
  className, 
  variant = "primary", 
  onClick 
}: AnimatedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    primary: "bg-gradient-to-r from-gold-500 to-gold-600 text-luxury-rich-black border-gold-400",
    secondary: "bg-gradient-to-r from-maroon-600 to-maroon-700 text-white border-maroon-500", 
    outline: "bg-transparent text-gold-500 border-gold-500 hover:bg-gold-500 hover:text-luxury-rich-black"
  };

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={cn(
        "relative px-8 py-3 border-2 rounded-full font-semibold transition-all duration-300 overflow-hidden",
        variants[variant],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex">
        {children.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ color: variant === "outline" ? "#D4AF37" : variant === "primary" ? "#0D1117" : "#ffffff" }}
            animate={{
              color: isHovered 
                ? variant === "outline" 
                  ? "#0D1117" 
                  : "#FFD700"
                : variant === "outline" 
                  ? "#D4AF37" 
                  : variant === "primary" 
                    ? "#0D1117" 
                    : "#ffffff"
            }}
            transition={{ 
              duration: 0.3,
              delay: index * 0.05,
              ease: "easeInOut"
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </span>
      
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 0.2 : 0
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Border animation */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-gold-400"
        initial={{ scale: 1, opacity: 1 }}
        animate={{ 
          scale: isHovered ? 1.05 : 1,
          opacity: isHovered ? 0.8 : 1
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};
