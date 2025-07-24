import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ColorfulTextProps {
  children: string;
  className?: string;
  colors?: string[];
  animationType?: "wave" | "rainbow" | "glow";
}

export const ColorfulText = ({
  children,
  className,
  colors = ["#D4AF37", "#800020", "#FFD700", "#B8860B"],
  animationType = "rainbow",
}: ColorfulTextProps) => {
  const letters = children.split("");

  const waveVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const rainbowVariants = {
    animate: {
      backgroundPosition: ["0%", "100%", "0%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const glowVariants = {
    animate: {
      textShadow: [
        "0 0 5px #D4AF37",
        "0 0 20px #D4AF37",
        "0 0 35px #D4AF37",
        "0 0 20px #D4AF37",
        "0 0 5px #D4AF37",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  if (animationType === "wave") {
    return (
      <span className={cn("inline-flex", className)}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={waveVariants}
            animate="animate"
            transition={{ delay: index * 0.1 }}
            className="text-gold-500"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </span>
    );
  }

  if (animationType === "glow") {
    return (
      <motion.span
        variants={glowVariants}
        animate="animate"
        className={cn("text-gold-400", className)}
      >
        {children}
      </motion.span>
    );
  }

  // Rainbow animation
  return (
    <motion.span
      variants={rainbowVariants}
      animate="animate"
      className={cn(
        "bg-gradient-to-r from-gold-400 via-maroon-500 to-gold-600 bg-clip-text text-transparent bg-300% animate-gradient",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(45deg, ${colors.join(", ")})`,
        backgroundSize: "300% 300%",
      }}
    >
      {children}
    </motion.span>
  );
};
