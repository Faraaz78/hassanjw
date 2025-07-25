"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "@/components/ui/sparkles";
import { ArrowLeft, Check, Calculator, Phone, Mail, MapPin } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

export default function SavingsSchemePage() {
  const planExamples = [
    {
      monthlyAmount: 5000,
      totalValue: 60000,
      description: "Perfect for small jewelry purchases"
    },
    {
      monthlyAmount: 10000,
      totalValue: 120000,
      description: "Ideal for premium jewelry sets"
    },
    {
      monthlyAmount: 15000,
      totalValue: 180000,
      description: "Best for exclusive collections"
    }
  ];

  const monthlyBreakdown = Array.from({ length: 12 }, (_, i) => ({
    month: i + 1,
    payment: 5000,
    accumulated: (i + 1) * 5000
  }));

  const faqs = [
    {
      question: "How to make the monthly advance payment?",
      answer: "Advance payment should reach Hassan Jewellers before the 14th of every month. Payment can be made by Cash/Debit/Credit cards, NEFT/RTGS/UPI."
    },
    {
      question: "What if I discontinue the plan early?",
      answer: "If you discontinue within 6 months, you won't be eligible for wastage discount and can only redeem accumulated value with 100% wastage. 8th-9th month: 60% discount on wastage. 10th month: 80% discount on wastage. 11th month: No wastage up to 16%."
    },
    {
      question: "What if I don't pay continuously?",
      answer: "The plan will be discontinued automatically if you default on monthly payments. Continuous payments are essential to maintain eligibility for benefits."
    },
    {
      question: "Can I buy jewelry exceeding my advance payment?",
      answer: "Yes, but wastage charges will apply on the excess amount. No wastage benefit applies only to the accumulated value amount."
    },
    {
      question: "Will the cash be refunded?",
      answer: "No, cash will not be refunded under any circumstances, as per Government regulations."
    },
    {
      question: "Can I make all monthly payments in advance?",
      answer: "No, monthly payments cannot be carried over or paid in advance."
    },
    {
      question: "Can I buy Gold Coins?",
      answer: "Yes, you can purchase gold coins without wastage and making charges."
    }
  ];

  const benefits = [
    "No wastage charges up to 16% on accumulated value",
    "12-month completion period",
    "Monthly advance starting from Rs. 5,000",
    "Customer receipt book for tracking",
    "Purchase gold coins without wastage",
    "Flexible payment methods (Cash, Cards, Online)",
    "Expert guidance throughout the plan"
  ];

  const termsConditions = [
    "Monthly advance must be paid continuously for twelve months",
    "Advance payments cannot be extended beyond 12 months",
    "Payment must be made within 14th of every month",
    "Customer must appoint a nominee with KYC details",
    "GST & government levies at delivery will be borne by customer",
    "Customer signature will be verified at delivery",
    "All disputes are subject to Vaniyambadi jurisdiction only"
  ];

  return (
    <MainLayout>
      <div className="relative min-h-screen">
        <Sparkles
          id="savings-page-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={30}
          className="absolute inset-0"
          particleColor="#D4AF37"
        />
        
        <div className="relative z-10">
          {/* Header */}
          <section className="pt-32 pb-16 px-4">
            <div className="container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8"
              >
                <Link href="/" className="inline-flex items-center text-gold-600 dark:text-gold-400 hover:text-gold-700 mb-6 transition-colors">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 bg-clip-text text-transparent">
                    Smart Buy Savings Scheme
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Save now and buy gold jewelry/articles with our Smart Buy Plan. Choose from a wide range of gold jewelry and enroll today to buy in 12 months from the date of enrollment.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Plan Examples */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gold-600 dark:text-gold-400">
                  Choose Your Plan
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
                  Select a monthly advance payment amount that works best for you
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {planExamples.map((plan, index) => (
                    <Card key={index} className="p-6 text-center bg-gradient-to-br from-white to-gold-50 dark:from-gray-900 dark:to-black border-gold-200 dark:border-gold-800 hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="text-3xl font-bold text-gold-600 dark:text-gold-400 mb-2">
                        ₹{plan.monthlyAmount.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">per month</div>
                      <div className="text-2xl font-bold text-black dark:text-white mb-2">
                        ₹{plan.totalValue.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">total value</div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{plan.description}</p>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Monthly Breakdown */}
          <section className="py-16 px-4 bg-gray-50 dark:bg-black">
            <div className="container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gold-600 dark:text-gold-400">
                  Monthly Payment Breakdown (₹5,000 Plan)
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {monthlyBreakdown.map((item, index) => (
                    <Card key={index} className="p-4 bg-white dark:bg-black border-gold-200 dark:border-gold-800">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Month {item.month}</span>
                        <span className="font-bold text-gold-600 dark:text-gold-400">₹{item.accumulated.toLocaleString()}</span>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <Card className="p-6 bg-gradient-to-r from-gold-100 to-gold-200 dark:from-gold-900/30 dark:to-gold-800/30 border-gold-300 dark:border-gold-700">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gold-700 dark:text-gold-300 mb-2">
                      Final Benefit Example
                    </h3>
                    <p className="text-gold-600 dark:text-gold-400">
                      With ₹60,000 accumulated value and gold rate at ₹6,600 per gram, you'll be eligible for 
                      <span className="font-bold"> 9.090 grams of gold jewelry with no wastage up to 16%</span>
                    </p>
                    <p className="text-sm text-gold-500 dark:text-gold-500 mt-2">
                      *Government taxes and other levies applicable at the time of purchase
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gold-600 dark:text-gold-400">
                  Great Benefits
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4 mb-12">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-16 px-4 bg-gray-50 dark:bg-black">
            <div className="container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gold-600 dark:text-gold-400">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="p-6 bg-white dark:bg-black border-gold-200 dark:border-gold-800">
                      <h3 className="text-lg font-bold text-gold-600 dark:text-gold-400 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Terms & Conditions */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gold-600 dark:text-gold-400">
                  Terms & Conditions
                </h2>
                
                <Card className="p-6 bg-gray-50 dark:bg-black border-gold-200 dark:border-gold-800">
                  <div className="space-y-4">
                    {termsConditions.map((term, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="w-6 h-6 bg-gold-100 dark:bg-gold-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-gold-600 dark:text-gold-400 font-bold text-xs">{index + 1}</span>
                        </span>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{term}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* Contact & Enrollment */}
          <section className="py-16 px-4 bg-gradient-to-br from-gold-50 via-transparent to-maroon-50 dark:from-black dark:via-transparent dark:to-gold-900/10">
            <div className="container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gold-600 dark:text-gold-400">
                  Ready to Start Your Smart Buy Plan?
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <a
                      href="https://wa.me/9787812341?text=Hi!%20I'm%20interested%20in%20enrolling%20in%20your%20savings%20scheme.%20Could%20you%20please%20provide%20more%20details%3F" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calculator className="mr-2 h-5 w-5" />
                      Enroll Now
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-gold-500 text-gold-600 dark:text-gold-400 hover:bg-gold-50 hover:text-gold-700 dark:hover:bg-gold-900/20 dark:hover:text-gold-300 px-8 py-3 rounded-full"
                  >
                    <a href="#contact">
                      <Phone className="mr-2 h-5 w-5" />
                      Contact Us
                    </a>
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <Phone className="w-8 h-8 text-gold-600 dark:text-gold-400 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">+91 9787812341</p>
                  </div>
                  <div className="text-center">
                    <Mail className="w-8 h-8 text-gold-600 dark:text-gold-400 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">info@hassanjewellers.com</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-gold-600 dark:text-gold-400 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Visit Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">Vaniyambadi, Tamil Nadu</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
