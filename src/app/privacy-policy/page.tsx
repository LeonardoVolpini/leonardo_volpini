import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import PrivacyPolicy from "@/components/Privacy";
import { navItems } from '@/utils/consts'
import Head from "next/head";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Privacy - Leonardo Volpini</title>
        <meta name="description" content="Leonardo Volpini - policy della privacy del sito" />
        <meta property="og:title" content="Privacy - Leonardo Volpini" />
        <meta property="og:description" content="Leonardo Volpini - policy della privacy del sito" />
      </Head>
      <Header navItems={navItems} />
      <PrivacyPolicy />
      <Footer />
    </>
  )
}