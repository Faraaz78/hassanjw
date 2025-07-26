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

  // Deterministic values to prevent hydration mismatch
  const getDeterministicDuration = (i: number) => ((i % 10) + 1) * 2 + 10;
  const getDeterministicDelay = (j: number) => (j % 5) * 2;
  const shouldHighlight = (i: number, j: number) => (i + j) % 23 === 0;

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
            duration: getDeterministicDuration(i),
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
                duration: getDeterministicDuration(i + j),
                repeat: Infinity,
                delay: getDeterministicDelay(j),
              }}
              style={{
                backgroundColor: shouldHighlight(i, j) ? "#D4AF37" : "transparent",
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
