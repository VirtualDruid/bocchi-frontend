"use client";
//import type { Metadata } from "next";
//import { Inter } from "next/font/google";
//import "./globals.css";

import { Analytics } from '@vercel/analytics/react';
import ReactGA from 'react-ga4';
//const inter = Inter({ subsets: ["latin"] });
ReactGA.initialize("G-0YYSXZ22C2");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{backgroundColor:"#B61316", height:"100%"}}>
      <title>GBC</title>
      <body>{children}
        <Analytics/>
      </body>
    </html>
  );
}
