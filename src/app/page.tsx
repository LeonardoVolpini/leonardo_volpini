// pages/index.tsx
import { Header } from '@/components/Header'
import { AboutMe } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contacts'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}