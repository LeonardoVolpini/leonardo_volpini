// pages/index.tsx
import { Header } from '@/components/Header'
import { AboutMe } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Contacts } from '@/components/Contacts'
import { HeroSection } from '@/components/Hero'
import { Footer } from '@/components/Footer'

import { projects } from "@/utils/consts"
import { skills } from '@/utils/consts'
import { navItems } from '@/utils/consts'
import { CookieBanner } from '@/components/CookieBanner'

export default function Home() {
  return (
    <>
      <Header navItems={navItems}/>
      <main className="min-h-screen">
        <HeroSection />
        <AboutMe />
        <Skills items={skills}/>
        {/*<Projects items={projects}/>  {/*TODO: quando avrò i progetti da mostrare*/}
        <h2 className="text-3xl font-bold text-center mt-12">
          Contattami
        </h2>
        <Contacts />
        <Footer />
        <CookieBanner />
      </main>
    </>
  )
}