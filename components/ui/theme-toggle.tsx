"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    if (isTransitioning) return;

    const newTheme = !isDark;
    setIsTransitioning(true);

    // Create a simple overlay with the target theme colors
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 9998;
      pointer-events: none;
      background: ${newTheme ? 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2a1810 100%)' : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #fff8e1 100%)'};
      clip-path: circle(0% at 85% 15%);
      transition: clip-path 0.7s cubic-bezier(0.4, 0, 0.2, 1);
    `;

    document.body.appendChild(overlay);

    // Trigger the radial expansion
    setTimeout(() => {
      overlay.style.clipPath = 'circle(150% at 85% 15%)';
    }, 50);

    // Change theme when circle reaches about 50% expansion
    setTimeout(() => {
      setIsDark(newTheme);

      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, 350);

    // Clean up overlay
    setTimeout(() => {
      if (document.body.contains(overlay)) {
        document.body.removeChild(overlay);
      }
      setIsTransitioning(false);
    }, 750);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      disabled={isTransitioning}
      className="fixed top-4 sm:top-10 right-6 z-[10000] p-3 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg border border-gold-200/80 dark:border-gold-600/80 hover:shadow-xl transition-all duration-500 disabled:cursor-not-allowed"
      whileHover={!isTransitioning ? {
        scale: 1.15,
        rotate: 10,
        boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)"
      } : {}}
      whileTap={!isTransitioning ? { scale: 0.85 } : {}}
      animate={{
        backgroundColor: isDark ? "rgba(0, 0, 0, 0.95)" : "rgba(255, 255, 255, 0.95)",
        borderColor: isDark ? "rgba(184, 148, 31, 0.8)" : "rgba(255, 240, 179, 0.8)",
        boxShadow: isDark
          ? "0 8px 25px rgba(212, 175, 55, 0.2)"
          : "0 8px 25px rgba(0, 0, 0, 0.1)",
        scale: isTransitioning ? 1.2 : 1,
        rotate: isTransitioning ? 360 : 0
      }}
      transition={{
        duration: isTransitioning ? 0.8 : 0.6,
        ease: "easeInOut",
        type: isTransitioning ? "spring" : "tween",
        stiffness: isTransitioning ? 150 : 200
      }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isTransitioning ? 1080 : (isDark ? 720 : 0),
          scale: isTransitioning ? 1.5 : (isDark ? 1.2 : 1)
        }}
        transition={{
          duration: isTransitioning ? 0.8 : 0.8,
          ease: "easeInOut",
          type: "spring",
          stiffness: isTransitioning ? 100 : 200,
          damping: isTransitioning ? 15 : 20
        }}
      >
        <motion.div
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.5 : 1,
            rotate: isDark ? -180 : 0
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ position: isDark ? "absolute" : "static" }}
        >
          <MdDarkMode className="w-5 h-5 text-gray-800 dark:text-gray-700" />
        </motion.div>
        <motion.div
          animate={{
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.5,
            rotate: isDark ? 0 : 180
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ position: isDark ? "static" : "absolute" }}
        >
          <MdLightMode className="w-5 h-5 text-gold-500 drop-shadow-sm" />
        </motion.div>
      </motion.div>
    </motion.button>
  );
};
