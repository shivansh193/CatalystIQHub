'use client';

import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Component } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Component />
      </body>
    </html>
  );
}

