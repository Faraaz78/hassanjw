"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TextRevealProps {
  base: React.ReactNode;
  reveal: React.ReactNode;
  className?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  base,
  reveal,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [clipWidth, setClipWidth] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [bounds, setBounds] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const { left, width } = containerRef.current.getBoundingClientRect();
      setBounds({ left, width });
    }
  }, []);

  const updateClip = (x: number) => {
    const relativeX = x - bounds.left;
    const percent = Math.min(
      Math.max((relativeX / bounds.width) * 100, 0),
      100,
    );
    setClipWidth(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    updateClip(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchX = e.touches[0]?.clientX || 0;
    updateClip(touchX);
  };

  const handleLeave = () => {
    setIsHovering(false);
    setClipWidth(0);
  };

  const handleEnter = () => {
    setIsHovering(true);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onTouchStart={handleEnter}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleLeave}
      className={`relative inline-block touch-none ${className ?? ""}`}
    >
      {/* Base Layer */}
      <div className="relative z-10">{base}</div>

      {/* Reveal Layer */}
      <motion.div
        style={{
          clipPath: `inset(0 ${100 - clipWidth}% 0 0)`,
        }}
        animate={{
          opacity: isHovering ? 1 : 0,
        }}
        transition={{ duration: isHovering ? 0 : 0.3 }}
        className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
      >
        <div>{reveal}</div>
      </motion.div>
    </div>
  );
};
