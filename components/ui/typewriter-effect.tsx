"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterEffectProps {
  words: string[];
  className?: string;
  cursorClassName?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

export const TypewriterEffect = ({
  words,
  className = "",
  cursorClassName = "",
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
}: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenWords);

      return () => clearTimeout(waitTimer);
    }

    if (!isDeleting) {
      if (currentText.length < currentWord.length) {
        const typeTimer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, typeSpeed);

        return () => clearTimeout(typeTimer);
      } else {
        setIsWaiting(true);
      }
    } else {
      if (currentText.length > 0) {
        const deleteTimer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deleteSpeed);

        return () => clearTimeout(deleteTimer);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [currentText, isDeleting, isWaiting, currentWordIndex, words, typeSpeed, deleteSpeed, delayBetweenWords]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className={`inline-block ${cursorClassName}`}
      >
        |
      </motion.span>
    </span>
  );
};
