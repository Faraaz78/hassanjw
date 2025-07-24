"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

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
    const newTheme = !isDark;

    // Enhanced smooth transition for the entire page
    document.documentElement.style.transition = 'background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1), color 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    document.body.style.transition = 'background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1), color 0.6s cubic-bezier(0.4, 0, 0.2, 1)';

    // Add a smooth fade effect
    document.documentElement.style.opacity = '0.95';

    setTimeout(() => {
      setIsDark(newTheme);

      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      // Restore opacity
      document.documentElement.style.opacity = '1';
    }, 150);

    // Remove transition after theme change is complete
    setTimeout(() => {
      document.documentElement.style.transition = '';
      document.body.style.transition = '';
    }, 800);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 sm:top-10 right-6 z-[5001] p-3 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg border border-gold-200/80 dark:border-gold-600/80 hover:shadow-xl transition-all duration-500"
      whileHover={{
        scale: 1.15,
        rotate: 10,
        boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)"
      }}
      whileTap={{ scale: 0.85 }}
      animate={{
        backgroundColor: isDark ? "rgba(0, 0, 0, 0.95)" : "rgba(255, 255, 255, 0.95)",
        borderColor: isDark ? "rgba(184, 148, 31, 0.8)" : "rgba(255, 240, 179, 0.8)",
        boxShadow: isDark
          ? "0 8px 25px rgba(212, 175, 55, 0.2)"
          : "0 8px 25px rgba(0, 0, 0, 0.1)"
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 360 : 0,
          scale: isDark ? 1.1 : 1
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          animate={{ opacity: isDark ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          style={{ position: isDark ? "absolute" : "static" }}
        >
          <MdDarkMode className="w-5 h-5 text-black" />
        </motion.div>
        <motion.div
          animate={{ opacity: isDark ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ position: isDark ? "static" : "absolute" }}
        >
          <MdLightMode className="w-5 h-5 text-gold-400" />
        </motion.div>
      </motion.div>
    </motion.button>
  );
};
