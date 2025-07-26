import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTooltipProps {
  children: React.ReactNode;
  content: string;
  delay?: number;
  className?: string;
}

export const AnimatedTooltip = ({
  children,
  content,
  delay = 0,
  className,
}: AnimatedTooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.2, delay }}
            className={cn(
              "absolute z-50 px-3 py-2 text-sm font-medium text-luxury-rich-black bg-gold-300 border border-gold-400 rounded-lg shadow-lg whitespace-nowrap -top-12 left-1/2 transform -translate-x-1/2",
              "before:content-[''] before:absolute before:top-full before:left-1/2 before:transform before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-gold-300",
              className
            )}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
