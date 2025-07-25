import React from "react";
import { motion } from "framer-motion";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { FaGem } from "react-icons/fa";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Collections", link: "#collections" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50 dark:from-black dark:via-black dark:to-black">
      <FloatingNav navItems={navItems} />
      <ThemeToggle />
      <WhatsAppButton />
      
      <div className="flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="mb-8">
            <FaGem className="text-6xl text-gold-500 mx-auto mb-4" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gold-600 via-rose-500 to-gold-600 bg-clip-text text-transparent mb-6">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            {description}
          </p>
          
          <p className="text-base text-gray-500 dark:text-gray-400 mb-8">
            This page is currently under development. Please continue prompting to fill in the content for this section.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = "/"}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFD700_0%,#F4A261_50%,#FFD700_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Return to Home
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
