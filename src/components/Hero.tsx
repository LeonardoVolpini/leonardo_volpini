"use client"

import React from "react"
import { ContactForm } from "./Form"

export const HeroSection = () => {
  //Se su desktop uso l'immagine come sfondo, se su mobile un colore
  return (
    <section
      className="relative h-screen flex items-center justify-start bg-cover bg-center md:bg-[url('/images/hero-background.jpg')] bg-[#040927]"
    >

      <div className="relative w-full md:w-8/12 text-center px-4 md:pl-20">
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
