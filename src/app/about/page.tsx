import { AboutMe } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { navItems } from '@/utils/consts'
import Head from "next/head";

export default function AboutMePage() {
  return (
    <>
      <Head>
        <title>Chi Sono - Leonardo Volpini</title>
        <meta name="description" content="Leonardo Volpini - Web and Software Developer" />
        <meta property="og:title" content="Chi Sono - Leonardo Volpini" />
        <meta property="og:description" content="Leonardo Volpini - Web and Software Developer" />
      </Head>
      <Header navItems={navItems} />
      <AboutMe />
      <Footer />
    </>
  )
}