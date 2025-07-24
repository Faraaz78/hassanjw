"use client";

import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Collections", link: "#collections" },
  { name: "Savings Scheme", link: "#savings-scheme" },
  { name: "Contact", link: "#contact" },
];

export const Header = () => {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <ThemeToggle />
      <WhatsAppButton />
    </>
  );
};

export default Header;
