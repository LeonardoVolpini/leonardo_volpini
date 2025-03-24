import Head from "next/head";

import { Header } from '@/components/Header'
import { HeroSection } from '@/components/Hero'
import { AboutMe } from '@/components/About'
import { Projects } from '@/components/Projects'
//import { Testimonials } from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { Contacts } from '@/components/Contacts'
import { Footer } from '@/components/Footer'

import { projects, services, testimonials, navItems } from '@/utils/consts'
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
        {/*<Testimonials items={testimonials}/>  {/*TODO: quando avrò testimonianze da mostrare*/}
        <Services items={services}/>
        <br />
        <Contacts />
        <Footer />
        <CookieBanner />
      </main>
    </>
  )
}