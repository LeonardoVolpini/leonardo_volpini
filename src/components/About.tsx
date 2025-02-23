import Image from "next/image";
import { ArrowDownCircle } from "lucide-react";

export const AboutMe = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="relative w-32 h-32 mb-8 overflow-hidden rounded-full shadow-lg">
        <Image
          src="/images/profile-picture.jpg"
          alt="Leonardo Volpini"
          fill
          priority
          className="object-cover"
        />
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center">
        Leonardo Volpini
      </h1>

      <p className="mt-4 text-muted-foreground max-w-md text-center">
        Sviluppatore Software presso Leonardo SpA.
        <br />
        Creo e gestisco il tuo business digitale.
      </p>

      <a
        href="#skills"
        className="mt-12 animate-bounce group"
      >
        <ArrowDownCircle className="w-8 h-8 text-primary group-hover:text-primary/80 transition-colors" />
      </a>
    </section>
  )
}