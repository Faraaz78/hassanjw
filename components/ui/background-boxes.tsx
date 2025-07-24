"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBoxes = ({
  className,
  ...rest
}: {
  className?: string;
}) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);

  return (
    <div
      className={cn(
        "absolute left-0 top-0 h-full w-full overflow-hidden bg-black flex shrink-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row-${i}`}
          className="w-16 h-16 border-l border-gold-900/30 relative"
          animate={{
            backgroundPositionX: ["0%", "100%"],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {cols.map((_, j) => (
            <motion.div
              key={`col-${j}`}
              className="w-16 h-16 border-r border-t border-gold-900/30 relative"
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
              style={{
                backgroundColor: Math.random() > 0.9 ? "#D4AF37" : "transparent",
              }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute left-0 top-0 h-full w-full overflow-hidden bg-black",
        className
      )}
      {...rest}
    >
      <BackgroundBoxes />
    </div>
  );
};
