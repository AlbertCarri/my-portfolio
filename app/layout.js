import "./globals.css"
import { Press_Start_2P } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import React from "react"

const pressStart2P = Press_Start_2P({ subsets: ["latin"], weight: "400" })

export const metadata = {
  title: "Retro Arcade Portfolio",
  description: "Portfolio profesional de Alberto Edelmiro Carrizo",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:title" content="Mi Portfolio" />
        <meta property="og:description" content="Mi página personal con proyectos" />
        <meta property="og:image" content="https://edelbyte.com.ar/webog.webp" />
        <meta property="og:type" content="website" />
      </head>
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
