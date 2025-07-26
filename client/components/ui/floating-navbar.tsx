import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

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

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

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
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-gold-200 dark:border-gold-800 rounded-full dark:bg-luxury-rich-black/90 bg-luxury-pearl/90 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(212,175,55,0.2),0px_1px_0px_0px_rgba(212,175,55,0.1),0px_0px_0px_1px_rgba(212,175,55,0.1)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
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
                  "relative dark:text-gray-200 items-center flex space-x-1 text-gray-700 dark:hover:text-gold-300 hover:text-gold-600 transition-colors duration-300"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
              </a>
            );
          }
          
          return (
            <Link
              key={`link=${idx}`}
              to={navItem.link}
              className={cn(
                "relative dark:text-gray-200 items-center flex space-x-1 text-gray-700 dark:hover:text-gold-300 hover:text-gold-600 transition-colors duration-300"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
            </Link>
          );
        })}
        <button className="border text-sm font-medium relative border-gold-300 dark:border-gold-700 text-luxury-rich-black dark:text-luxury-pearl px-4 py-2 rounded-full bg-gradient-to-r from-gold-100 to-gold-200 dark:from-gold-900 dark:to-gold-800 hover:from-gold-200 hover:to-gold-300 dark:hover:from-gold-800 dark:hover:to-gold-700 transition-all duration-300">
          <span>Shop Now</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-gold-500 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
