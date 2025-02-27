"use client"

import React from "react"
import { ContactForm } from "./Form"

export const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
    >
      {/* Overlay per scurire leggermente il background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenuto della hero */}
      <div className="relative z-10 w-full md:w-8/12 text-center px-4 pl-10 md:pl-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Entra subito nel mercato digitale
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8">
          Compila il modulo per ricevere una prima consulenza gratuita.
        </p>
        <ContactForm />
      </div>
    </section>
  )
}
