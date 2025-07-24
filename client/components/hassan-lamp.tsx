"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import { ColorfulText } from "@/components/ui/colorful-text";

export default function HassanLamp() {
  return (
    <LampContainer className="bg-gradient-to-b from-luxury-rich-black to-black">
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 text-center"
      >
        <motion.h1
          className="bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl lg:text-8xl"
        >
          Hassan Jewellers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-6 text-lg md:text-xl text-gold-200 max-w-2xl mx-auto"
        >
          Illuminating excellence in fine jewelry craftsmanship
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8"
        >
          <ColorfulText 
            className="text-xl md:text-2xl"
            animationType="glow"
          >
            Where tradition meets luxury
          </ColorfulText>
        </motion.div>
      </motion.div>
    </LampContainer>
  );
}
