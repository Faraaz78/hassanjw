"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

// Gold color palette for jewellers
const goldColors = {
  light: {
    primary: "#D4AF37", // Classic gold
    secondary: "#FFD700", // Bright gold
    accent: "#B8860B", // Dark goldenrod
    hover: "#F4E4BC", // Light gold
    text: "#8B4513", // Saddle brown
    bg: "#FFFEF7", // Cream white
  },
  dark: {
    primary: "#FFD700", // Bright gold for dark mode
    secondary: "#FFA500", // Orange gold
    accent: "#DAA520", // Goldenrod
    hover: "#4A3728", // Dark brown
    text: "#F5F5DC", // Beige
    bg: "#1A1611", // Very dark brown
  }
};

interface HoverBorderGradientProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
  duration?: number;
  clockwise?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function GoldHoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  variant = 'primary',
  size = 'md',
  ...props
}: HoverBorderGradientProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  // Gold gradient mappings for border animation
  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, #FFD700 0%, rgba(255, 215, 0, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, #FFD700 0%, rgba(255, 215, 0, 0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, #FFD700 0%, rgba(255, 215, 0, 0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, #FFD700 0%, rgba(255, 215, 0, 0) 100%)",
  };

  // Gold highlight for hover state
  const highlight = "radial-gradient(75% 181.15% at 50% 50%, #D4AF37 0%, rgba(212, 175, 55, 0.3) 100%)";

  // Size variants
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl"
  };

  // Variant styles
  const variantStyles = {
    primary: "bg-gradient-to-r from-amber-600 to-yellow-500 text-white hover:from-amber-500 hover:to-yellow-400 dark:from-yellow-500 dark:to-amber-400 dark:text-amber-900",
    secondary: "bg-gradient-to-r from-yellow-400 to-amber-300 text-amber-900 hover:from-yellow-300 hover:to-amber-200 dark:from-amber-300 dark:to-yellow-200 dark:text-amber-800",
    outline: "bg-transparent border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-amber-900/20",
    ghost: "bg-transparent text-amber-600 hover:bg-amber-50 dark:text-yellow-400 dark:hover:bg-amber-900/20"
  };

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise]);

  if (!mounted) {
    return (
      <Tag
        className={cn(
          "relative flex rounded-full border content-center transition-all duration-500",
          "bg-amber-50/20 hover:bg-amber-50/40 dark:bg-amber-900/20 dark:hover:bg-amber-900/40",
          "border-amber-200 dark:border-amber-700",
          "items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
          "shadow-lg hover:shadow-xl shadow-amber-200/50 dark:shadow-amber-900/50",
          containerClassName
        )}
        suppressHydrationWarning
      >
        <div
          className={cn(
            "w-auto z-10 rounded-[inherit] font-medium transition-all duration-300",
            sizeClasses[size],
            variantStyles[variant],
            "shadow-inner",
            className
          )}
        >
          {children}
        </div>
      </Tag>
    );
  }

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border content-center transition-all duration-500",
        "bg-amber-50/20 hover:bg-amber-50/40 dark:bg-amber-900/20 dark:hover:bg-amber-900/40",
        "border-amber-200 dark:border-amber-700",
        "items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        "shadow-lg hover:shadow-xl shadow-amber-200/50 dark:shadow-amber-900/50",
        containerClassName
      )}
      suppressHydrationWarning
      {...props}
    >
      <div
        className={cn(
          "w-auto z-10 rounded-[inherit] font-medium transition-all duration-300",
          sizeClasses[size],
          variantStyles[variant],
          "shadow-inner",
          className
        )}
      >
        {children}
      </div>

      <motion.div
        className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered ? [movingMap[direction], highlight] : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />

      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950 absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  );
}

// Preset button components for common use cases
export function GoldPrimaryButton(props: Omit<HoverBorderGradientProps, 'variant'>) {
  return <GoldHoverBorderGradient {...props} variant="primary" />;
}

export function GoldSecondaryButton(props: Omit<HoverBorderGradientProps, 'variant'>) {
  return <GoldHoverBorderGradient {...props} variant="secondary" />;
}

export function GoldOutlineButton(props: Omit<HoverBorderGradientProps, 'variant'>) {
  return <GoldHoverBorderGradient {...props} variant="outline" />;
}

export function GoldGhostButton(props: Omit<HoverBorderGradientProps, 'variant'>) {
  return <GoldHoverBorderGradient {...props} variant="ghost" />;
}

// Standard button without border animation (for performance-critical areas)
interface StandardGoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function StandardGoldButton({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: StandardGoldButtonProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl"
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-amber-600 to-yellow-500 text-white hover:from-amber-500 hover:to-yellow-400 dark:from-yellow-500 dark:to-amber-400 dark:text-amber-900 shadow-lg shadow-amber-200/50 dark:shadow-amber-900/50",
    secondary: "bg-gradient-to-r from-yellow-400 to-amber-300 text-amber-900 hover:from-yellow-300 hover:to-amber-200 dark:from-amber-300 dark:to-yellow-200 dark:text-amber-800 shadow-md shadow-yellow-200/50 dark:shadow-amber-800/50",
    outline: "bg-transparent border-2 border-amber-500 text-amber-600 hover:bg-amber-50 hover:shadow-md dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-amber-900/20",
    ghost: "bg-transparent text-amber-600 hover:bg-amber-50 hover:text-amber-700 dark:text-yellow-400 dark:hover:bg-amber-900/20 dark:hover:text-yellow-300"
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 dark:focus:ring-yellow-400 dark:focus:ring-offset-amber-900",
        "active:scale-95 hover:scale-105",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        sizeClasses[size],
        variantStyles[variant],
        className
      )}
      suppressHydrationWarning
      {...props}
    >
      {children}
    </button>
  );
}

// Icon button variant
interface GoldIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function GoldIconButton({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: GoldIconButtonProps) {
  const sizeClasses = {
    sm: "p-1.5",
    md: "p-2",
    lg: "p-3",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-amber-600 to-yellow-500 text-white hover:from-amber-500 hover:to-yellow-400 dark:from-yellow-500 dark:to-amber-400 dark:text-amber-900",
    secondary: "bg-gradient-to-r from-yellow-400 to-amber-300 text-amber-900 hover:from-yellow-300 hover:to-amber-200 dark:from-amber-300 dark:to-yellow-200 dark:text-amber-800",
    outline: "bg-transparent border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-amber-900/20",
    ghost: "bg-transparent text-amber-600 hover:bg-amber-50 dark:text-yellow-400 dark:hover:bg-amber-900/20"
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 dark:focus:ring-yellow-400 dark:focus:ring-offset-amber-900",
        "active:scale-95 hover:scale-105",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        "shadow-lg hover:shadow-xl shadow-amber-200/50 dark:shadow-amber-900/50",
        sizeClasses[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
