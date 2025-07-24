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
    setIsDark(newTheme);

    // Add smooth transition class before changing theme
    document.documentElement.style.transition = 'background-color 0.5s ease, color 0.5s ease';

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Remove transition after theme change is complete
    setTimeout(() => {
      document.documentElement.style.transition = '';
    }, 500);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-20 right-6 z-50 p-3 rounded-full bg-white dark:bg-black shadow-lg border border-gold-200 dark:border-gold-700 hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        backgroundColor: isDark ? "#000000" : "#ffffff",
        borderColor: isDark ? "#B8941F" : "#FFF0B3",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
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
