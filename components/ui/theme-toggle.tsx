"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem("theme");
    if (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-4 sm:top-10 right-6 z-[10000] p-3 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-gold-200/80 w-11 h-11" />
    );
  }

  const toggleTheme = () => {
    if (isAnimating) return;

    const newTheme = !isDark;
    setIsAnimating(true);

    // Change theme at 50% of animation for smooth transition
    setTimeout(() => {
      setIsDark(newTheme);

      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, 300);

    // Reset animation state
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  return (
    <>
      {/* Horizontal wipe overlay from right to left */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{
              clipPath: "inset(0 100% 0 0)",
            }}
            animate={{
              clipPath: "inset(0 0% 0 0)",
            }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
            }}
            className={`fixed inset-0 z-[9999] ${
              isDark ? "bg-white" : "bg-gray-900"
            }`}
            style={{ pointerEvents: "none" }}
            onAnimationComplete={() => setIsAnimating(false)}
          />
        )}
      </AnimatePresence>

      {/* Theme toggle button */}
      <motion.button
        onClick={toggleTheme}
        disabled={isAnimating}
        className="fixed top-4 sm:top-10 right-6 z-[10000] p-3 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg border border-gold-200/80 dark:border-gold-600/80 hover:shadow-xl transition-all duration-200 disabled:cursor-not-allowed"
        whileHover={!isAnimating ? { scale: 1.05 } : {}}
        whileTap={!isAnimating ? { scale: 0.95 } : {}}
        animate={{
          rotate: isAnimating ? 180 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isDark ? "sun" : "moon"}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              className="absolute"
            >
              {isDark ? (
                <MdLightMode className="w-5 h-5 text-gold-500" />
              ) : (
                <MdDarkMode className="w-5 h-5 text-gray-800" />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.button>
    </>
  );
};
