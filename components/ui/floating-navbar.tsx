"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <AnimatePresence mode="wait">
      <motion.div
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
        {navItems.map((navItem: any, idx: number) => {
          const isHashLink = navItem.link.startsWith('#');
          
          if (isHashLink) {
            return (
              <a
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-gold-300 items-center flex space-x-1 text-gray-900 dark:hover:text-gold-100 hover:text-gold-700 transition-colors duration-300 px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium font-semibold"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block">{navItem.name}</span>
              </a>
            );
          }
          
          return (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-gold-200 items-center flex space-x-1 text-black dark:hover:text-gold-300 hover:text-gold-600 transition-colors duration-300 px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block">{navItem.name}</span>
            </Link>
          );
        })}
        
        <Button
          size="sm"
          className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black border-gold-400 px-3 sm:px-4 py-2 rounded-full relative overflow-hidden text-xs sm:text-sm"
          asChild
        >
          <a href="#contact">
            <span>Contact</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-gold-500 to-transparent h-px" />
          </a>
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};
