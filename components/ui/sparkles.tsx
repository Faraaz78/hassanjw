"use client";

import React, { useId, useEffect, useMemo, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparklesProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
}

export const SparklesCore = (props: SparklesProps) => {
  const {
    id,
    className,
    background = "transparent",
    minSize = 0.4,
    maxSize = 1,
    particleDensity = 120,
    particleColor = "#FFF",
  } = props;
  const [scope, animate] = useAnimate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stars = useMemo(() => {
    const allStars = [];
    for (let i = 0; i < particleDensity; i++) {
      allStars.push({
        id: i,
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * (maxSize - minSize) + minSize,
        duration: Math.random() * 3 + 0.5,
        delay: Math.random() * 2,
      });
    }
    return allStars;
  }, [maxSize, minSize, particleDensity]);

  const allStarsIds = useMemo(() => stars.map((star) => star.id), [stars]);

  useEffect(() => {
    if (!mounted || !scope.current) return;

    let animationControls: any;
    let isActive = true;

    const animateStars = () => {
      if (scope.current && isActive) {
        try {
          animationControls = animate(
            allStarsIds.map((id) => `[data-star-id="${id}"]`),
            {
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            } as any,
            {
              duration: 2,
              repeat: Infinity,
              delay: stagger(0.1, { from: "random" as any }),
            }
          );
        } catch (error) {
          console.warn('Sparkles animation error:', error);
        }
      }
    };

    // Use requestAnimationFrame to prevent blocking
    const animationFrame = requestAnimationFrame(animateStars);

    return () => {
      isActive = false;
      cancelAnimationFrame(animationFrame);
      if (animationControls && typeof animationControls.stop === 'function') {
        animationControls.stop();
      }
    };
  }, [mounted]); // Simplified dependencies to prevent infinite loops

  if (!mounted) {
    return (
      <div
        className={cn(
          "absolute inset-0",
          className
        )}
        style={{
          background,
        }}
      />
    );
  }

  return (
    <div
      ref={scope}
      className={cn(
        "absolute inset-0",
        className
      )}
      style={{
        background,
      }}
    >
      {stars.map((star) => (
        <motion.span
          key={`star-${star.id}`}
          data-star-id={star.id}
          animate={{
            top: `calc(${star.y * 100}% + ${Math.random() * 400 - 200}px)`,
            left: `calc(${star.x * 100}% + ${Math.random() * 400 - 200}px)`,
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "linear",
            delay: star.delay,
          }}
          style={{
            position: "absolute",
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: particleColor,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block opacity-0"
        ></motion.span>
      ))}
    </div>
  );
};

export const Sparkles = ({ id, background, className, ...props }: SparklesProps) => {
  return (
    <SparklesCore
      id={id}
      background={background}
      className={className}
      {...props}
    />
  );
};
