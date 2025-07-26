import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const paths = [
    "M-328 -90C-328 -90 -238 -90 -118 -90C2 -90 42 -30 42 40C42 110 2 170 -118 170C-238 170 -328 170 -328 170",
    "M-328 -50C-328 -50 -238 -50 -118 -50C2 -50 42 10 42 80C42 150 2 210 -118 210C-238 210 -328 210 -328 210",
    "M-328 -10C-328 -10 -238 -10 -118 -10C2 -10 42 50 42 120C42 190 2 250 -118 250C-238 250 -328 250 -328 250",
    "M-328 30C-328 30 -238 30 -118 30C2 30 42 90 42 160C42 230 2 290 -118 290C-238 290 -328 290 -328 290",
    "M-328 70C-328 70 -238 70 -118 70C2 70 42 130 42 200C42 270 2 330 -118 330C-238 330 -328 330 -328 330",
  ];

  return (
    <div
      className={cn(
        "absolute left-0 top-0 h-full w-full overflow-hidden bg-luxury-rich-black",
        className
      )}
    >
      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 h-[169%] w-[138%] -translate-x-1/2 -translate-y-1/2 transform"
        viewBox="0 0 1155 678"
        fill="none"
      >
        <g opacity="0.2">
          {paths.map((path, index) => (
            <motion.path
              key={index}
              d={path}
              stroke={`url(#gradient${index})`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="0 0"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            />
          ))}
        </g>
        <defs>
          {paths.map((_, index) => (
            <linearGradient
              key={index}
              id={`gradient${index}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
              <stop offset="100%" stopColor="#800020" stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
};
