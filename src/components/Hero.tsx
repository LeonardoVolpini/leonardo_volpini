"use client"

import React from "react"
import Image from "next/image"

export const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/profile-picture.jpg')" }}
    >
      {/* Overlay per scurire leggermente il background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenuto della hero */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Impara ad emergere nel mercato digitale
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8">
          Accedi a strategie, consigli e strumenti per acquisire un pubblico e guadagnare sul web.
        </p>
        <a
          href="#learn-more"
          className="inline-block bg-primary hover:bg-primary/80 text-white py-3 px-6 rounded transition-colors"
        >
          Scopri di più
        </a>
      </div>
    </section>
  )
}
