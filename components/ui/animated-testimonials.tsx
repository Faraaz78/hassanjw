"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

interface Testimonial {
  name: string;
  designation: string;
  content: string;
  rating: number;
  image: string;
}

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setStart(true);
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
          start && autoplay && "animate-scroll-right"
        )}
        style={{
          animationDirection: "reverse",
          animationDuration: "40s",
        }}
      >
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="w-[350px] max-w-full relative rounded-2xl border border-gold-200 dark:border-gold-800 flex-shrink-0 px-8 py-6 bg-gradient-to-br from-luxury-pearl to-white dark:from-black dark:to-black shadow-lg"
          >
            <div className="relative z-20">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-400"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < testimonial.rating
                        ? "text-gold-500"
                        : "text-gray-300 dark:text-gray-600"
                    )}
                  />
                ))}
              </div>
              
              <blockquote className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                "{testimonial.content}"
              </blockquote>
            </div>
            
            <div className="absolute top-4 right-4 w-2 h-2 bg-gold-400 rounded-full opacity-30" />
          </div>
        ))}
      </div>
    </div>
  );
};
