"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HiMenu, HiX } from "react-icons/hi";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number" && mounted) {
      let direction = current! - scrollYProgress.getPrevious()!;

      // Debounce the visibility changes to prevent excessive re-renders
      const newVisible = scrollYProgress.get() < 0.05 ? true : direction < 0;

      if (newVisible !== visible) {
        setVisible(newVisible);
      }
    }
  });

  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence mode="wait" key="main-navbar">
      <motion.div
        key="navbar"
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-4 sm:top-10 inset-x-0 mx-auto border border-gold-200 dark:border-gold-500 rounded-full dark:bg-black/95 bg-white/95 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(212,175,55,0.2),0px_1px_0px_0px_rgba(212,175,55,0.1),0px_0px_0px_1px_rgba(212,175,55,0.1)] z-[5000] pr-2 pl-4 sm:pl-8 py-2 items-center justify-center space-x-2 sm:space-x-4 text-xs sm:text-sm",
          className
        )}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((navItem: any, idx: number) => {
            const isHashLink = navItem.link.startsWith('#');
            const isActive = activeTab === navItem.name;

            if (isHashLink) {
              return (
                <a
                  key={`desktop-link-${idx}`}
                  href={navItem.link}
                  onClick={() => setActiveTab(navItem.name)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors duration-300",
                    isActive
                      ? "text-gold-700 dark:text-gold-300"
                      : "text-gray-600 dark:text-gray-400 hover:text-gold-700 dark:hover:text-gold-300"
                  )}
                >
                  <span>{navItem.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-gold-50/50 dark:bg-gold-900/20 rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gold-500 dark:bg-gold-400 rounded-t-full">
                        <div className="absolute w-12 h-6 bg-gold-400/30 dark:bg-gold-400/20 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-gold-500/30 dark:bg-gold-400/30 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-gold-600/40 dark:bg-gold-300/40 rounded-full blur-xs top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </a>
              );
            }

            return (
              <Link
                key={`desktop-link-${idx}`}
                href={navItem.link}
                onClick={() => setActiveTab(navItem.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors duration-300",
                  isActive
                    ? "text-gold-700 dark:text-gold-300"
                    : "text-gray-600 dark:text-gray-400 hover:text-gold-700 dark:hover:text-gold-300"
                )}
              >
                <span>{navItem.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-gold-50/50 dark:bg-gold-900/20 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gold-500 dark:bg-gold-400 rounded-t-full">
                      <div className="absolute w-12 h-6 bg-gold-400/30 dark:bg-gold-400/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-gold-500/30 dark:bg-gold-400/30 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-gold-600/40 dark:bg-gold-300/40 rounded-full blur-xs top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}

          <Button
            size="sm"
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black border-gold-400 px-4 py-2 rounded-full relative overflow-hidden text-sm ml-2"
            asChild
          >
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <span>Shop Now</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-gold-500 to-transparent h-px" />
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center space-x-3">
          <Button
            size="sm"
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black border-gold-400 px-3 py-2 rounded-full relative overflow-hidden text-xs"
            asChild
          >
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <span>Shop</span>
            </a>
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-800 dark:text-gold-300 hover:text-gold-600 dark:hover:text-gold-100 transition-colors duration-300 p-2"
          >
            {mobileMenuOpen ? (
              <HiX className="h-5 w-5" />
            ) : (
              <HiMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence key="mobile-menu">
        {mobileMenuOpen && (
          <motion.div
            key="mobile-dropdown"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-16 sm:top-22 right-4 w-auto min-w-[200px] bg-white/95 dark:bg-black/95 backdrop-blur-md border border-gold-200 dark:border-gold-500 rounded-2xl shadow-lg z-[4999] p-3"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((navItem: any, idx: number) => {
                const isHashLink = navItem.link.startsWith('#');
                const isActive = activeTab === navItem.name;

                if (isHashLink) {
                  return (
                    <a
                      key={`mobile-link-${idx}`}
                      href={navItem.link}
                      onClick={() => {
                        setActiveTab(navItem.name);
                        setMobileMenuOpen(false);
                      }}
                      className={cn(
                        "transition-colors duration-300 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap",
                        isActive
                          ? "text-gold-700 dark:text-gold-300 bg-gold-100 dark:bg-gold-900/30"
                          : "text-gray-800 dark:text-gold-300 hover:text-gold-700 dark:hover:text-gold-100 hover:bg-gold-50 dark:hover:bg-gold-900/20"
                      )}
                    >
                      {navItem.name}
                    </a>
                  );
                }

                return (
                  <Link
                    key={`mobile-link-${idx}`}
                    href={navItem.link}
                    onClick={() => {
                      setActiveTab(navItem.name);
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      "transition-colors duration-300 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap",
                      isActive
                        ? "text-gold-700 dark:text-gold-300 bg-gold-100 dark:bg-gold-900/30"
                        : "text-gray-800 dark:text-gold-200 hover:text-gold-700 dark:hover:text-gold-300 hover:bg-gold-50 dark:hover:bg-gold-900/20"
                    )}
                  >
                    {navItem.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};
