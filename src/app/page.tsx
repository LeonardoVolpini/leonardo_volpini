import Head from "next/head";

import { Header } from '@/components/Header'
import { AboutMe } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Contacts } from '@/components/Contacts'
import { HeroSection } from '@/components/Hero'
import { Footer } from '@/components/Footer'
import Services from "@/components/Services";

import { projects } from "@/utils/consts"
import { services, navItems } from '@/utils/consts'
import { CookieBanner } from '@/components/CookieBanner'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Leonardo Volpini</title>
        <meta name="description" content="Leonardo Volpini - pagina principale del sito" />
        <meta property="og:description" content="Leonardo Volpini - pagina principale del sito" />
      </Head>
      <Header navItems={navItems} />
      <main className="min-h-screen">
        <HeroSection />
        <AboutMe />
        <Projects items={projects}/>  {/*TODO: quando avrò i progetti da mostrare*/}
        <Services items={services}/>
        <br />
        <Contacts />
        <Footer />
        <CookieBanner />
      </main>
    </>
  )
}