import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardSpotlightProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export const CardSpotlight = ({
  children,
  className,
  spotlightColor = "#D4AF37",
}: CardSpotlightProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative group/spotlight rounded-xl bg-gradient-to-br from-luxury-pearl to-white dark:from-luxury-rich-black dark:to-gray-900 border border-gold-200 dark:border-gold-800 p-6 shadow-lg overflow-hidden",
        className
      )}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
    >
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover/spotlight:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${x}px ${y}px, ${spotlightColor}15, transparent 40%)`,
        }}
      />
      
      {/* Border glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover/spotlight:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${x}px ${y}px, ${spotlightColor}25, transparent 40%)`,
          filter: "blur(0.5px)",
        }}
      />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
