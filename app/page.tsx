'use client';

import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Desc1 } from "@/components/desc1";

const inter = Inter({ subsets: ["latin"] });

const LandingPage = () => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Hero />
        <Desc1 />
      </body>
    </html>
  );
}

export default LandingPage;
