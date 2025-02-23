// pages/index.tsx
import { Header } from '@/components/Header'
import { AboutMe } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contacts'

import { projects } from "@/utils/consts"
import { skills } from '@/utils/consts'
import { navItems } from '@/utils/consts'

export default function Home() {
  return (
    <>
      <Header navItems={navItems}/>
      <main className="min-h-screen">
        <AboutMe />
        <Skills items={skills}/>
        <Projects items={projects}/>
        <Contact />
      </main>
    </>
  )
}