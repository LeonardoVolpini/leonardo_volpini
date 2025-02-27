// pages/index.tsx
import { Header } from '@/components/Header'
import { AboutMe } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Contacts } from '@/components/Contacts'
import { HeroSection } from '@/components/Hero'

import { projects } from "@/utils/consts"
import { skills } from '@/utils/consts'
import { navItems } from '@/utils/consts'

export default function Home() {
  return (
    <>
      <Header navItems={navItems}/>
      <main className="min-h-screen">
        <HeroSection />
        <AboutMe />
        <Skills items={skills}/>
        {/*<Projects items={projects}/>  {/*TODO: quando avrò i progetti da mostrare*/}
        <Contacts />
      </main>
    </>
  )
}