'use client';

import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Desc1 } from "@/components/desc1";
import RetroGrid from "@/components/magicui/retro-grid";

const inter = Inter({ subsets: ["latin"] });

const LandingPage = () => {
  return (
    <html lang="en">
      <body className={`relative ${inter.className}`}>
        <Navbar />
        <Hero />
        <div className="relative">
          <Desc1 />
          <RetroGrid />
        </div>
      </body>
    </html>
  );
}

export default LandingPage;
