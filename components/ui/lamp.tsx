"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full z-0 pt-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* LEFT GRADIENT */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-gold-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)] bg-gradient-to-b from-luxury-pearl via-white to-gray-100 dark:from-black dark:to-black" />
          <div className="absolute w-40 h-full left-0 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)] bg-gradient-to-r from-luxury-pearl via-white to-gray-100 dark:from-black dark:to-black" />
        </motion.div>

        {/* RIGHT GRADIENT */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-gold-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-full right-0 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)] bg-gradient-to-l from-luxury-pearl via-white to-gray-100 dark:from-black dark:to-black" />
          <div className="absolute w-full right-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)] bg-gradient-to-t from-luxury-pearl via-white to-gray-100 dark:from-black dark:to-black" />
        </motion.div>

        {/* Center blur and glow effects */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-gradient-to-b from-luxury-pearl via-white to-gray-100 dark:from-black dark:to-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-gold-500 opacity-50 blur-3xl"></div>

        {/* Center soft glows */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-gold-400 blur-2xl"
        />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-gold-400"
        />
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-gradient-to-b from-luxury-pearl via-white to-gray-100 dark:from-black dark:to-black"></div>

        {/* HEADER TEXT */}
        {title && (
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="text-center text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl mb-1 text-gray-900 dark:bg-gradient-to-br dark:from-gold-300 dark:via-gold-400 dark:to-gold-600 dark:bg-clip-text dark:text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
          >
            {title}
          </motion.h1>
        )}
      </div>

      {/* TEXT + BUTTONS SECTION BELOW */}
      <div className="relative z-50 flex -translate-y-12 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
