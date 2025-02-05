import "./globals.css"
import { Press_Start_2P } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import React from "react"

const pressStart2P = Press_Start_2P({ subsets: ["latin"], weight: "400" })

export const metadata = {
  title: "Retro Arcade Portfolio",
  description: "A vibrant, retro arcade-inspired web developer portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pressStart2P.className}>
        <div className="min-h-screen bg-gray-900 text-white">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
