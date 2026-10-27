import "./globals.css";
import { Share_Tech_Mono } from "next/font/google";
import Header from "../components/Header"
import Footer from "../components/Footer";
import React from "react";
import { Analytics } from "@vercel/analytics/next"

const shareTechMono = Share_Tech_Mono({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Retro Arcade Portfolio",
  description: "Portfolio profesional de Alberto Edelmiro Carrizo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:title" content="Mi Portfolio" />
        <meta
          property="og:description"
          content="Mi página personal con proyectos"
        />
        <meta
          property="og:image"
          content="https://edelbyte.com.ar/webog.webp"
        />
        <meta property="og:type" content="website" />
      </head>
      <body className={shareTechMono.className}>
        <div className="min-h-screen bg-gray-900 text-white">
          <Header />
          {children}
          <Analytics/>
          <Footer />
        </div>
      </body>
    </html>
  );
}
