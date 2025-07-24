"use client";

import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import DeliverySection from "@/components/sections/DeliverySection";
import CollectionsSection from "@/components/sections/CollectionsSection";
import SavingsSchemeSection from "@/components/sections/SavingsSchemeSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <DeliverySection />
      <CollectionsSection />
      <SavingsSchemeSection />
      <ReviewsSection />
      <GallerySection />
      <ContactSection />
    </MainLayout>
  );
}
