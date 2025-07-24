"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "@/components/ui/sparkles";
import { ColorfulText } from "@/components/ui/colorful-text";
import { cn } from "@/lib/utils";

export const SavingsSchemeSection = () => {
  const benefits = [
    {
      title: "No Wastage Up to 16%",
      description: "Buy jewelry with no wastage charges up to 16% on accumulated value",
      icon: "💎"
    },
    {
      title: "12 Month Plan",
      description: "Complete your plan in just 12 months with monthly advances",
      icon: "📅"
    },
    {
      title: "Flexible Payments",
      description: "Starting from Rs. 5,000 monthly - choose what works for you",
      icon: "💰"
    },
    {
      title: "Gold Coins Included",
      description: "Purchase gold coins without wastage and making charges",
      icon: "🪙"
    }
  ];

  const planExample = [
    { month: 1, payment: 5000, accumulated: 5000 },
    { month: 6, payment: 5000, accumulated: 30000 },
    { month: 12, payment: 5000, accumulated: 60000 }
  ];

  return (
    <section id="savings-scheme" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold-50/30 via-transparent to-maroon-50/20 dark:from-black dark:via-transparent dark:to-gold-900/10" />
      
      <Sparkles
        id="savings-sparkles"
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={50}
        className="absolute inset-0"
        particleColor="#D4AF37"
      />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <ColorfulText animationType="rainbow">
              Smart Buy Savings Scheme
            </ColorfulText>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Save now and buy gold jewelry/articles with our Smart Buy Plan. 
            Choose from a wide range of gold jewelry and enroll today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gold-600 dark:text-gold-400 mb-4">
                  How It Works
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gold-100 dark:bg-gold-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gold-600 dark:text-gold-400 font-bold text-sm">1</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Fill a simple form and join the Smart Buy Plan</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gold-100 dark:bg-gold-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gold-600 dark:text-gold-400 font-bold text-sm">2</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Select a monthly advance payment amount (starts from Rs. 5,000)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gold-100 dark:bg-gold-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gold-600 dark:text-gold-400 font-bold text-sm">3</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Receive a Customer Receipt Book to track all payments</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gold-100 dark:bg-gold-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gold-600 dark:text-gold-400 font-bold text-sm">4</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Buy jewelry of your choice with no wastage up to 16% after 12 months</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-gradient-to-br from-gold-50 to-white dark:from-gray-900 dark:to-black border-gold-200 dark:border-gold-800">
              <h4 className="text-xl font-bold text-gold-600 dark:text-gold-400 mb-4">Example Plan (Rs. 5,000/month)</h4>
              <div className="space-y-3">
                {planExample.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gold-100 dark:border-gold-800/50 last:border-b-0">
                    <span className="text-gray-700 dark:text-gray-300">Month {item.month}</span>
                    <span className="font-semibold text-gold-600 dark:text-gold-400">₹{item.accumulated.toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-gold-100 dark:bg-gold-900/20 rounded-lg">
                <p className="text-sm text-gold-700 dark:text-gold-300 font-medium">
                  Final Value: ₹60,000 with no wastage charges up to 16%
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-black/90 dark:border-gold-600 border-gold-200 group hover:scale-105">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h4 className="text-lg font-bold text-gold-600 dark:text-gold-400 mb-2">
                {benefit.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {benefit.description}
              </p>
            </Card>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="/savings-scheme">
                  Learn More & Enroll
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gold-500 text-gold-600 dark:text-gold-400 hover:bg-gold-50 dark:hover:bg-gold-900/20 px-8 py-3 rounded-full">
                <a href="#contact">
                  Contact Us
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>No Hidden Charges</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SavingsSchemeSection;
