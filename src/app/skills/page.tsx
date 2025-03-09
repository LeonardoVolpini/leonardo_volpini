import { Skills } from "@/components/Skills";
import { skills } from "@/utils/consts";
import { Header } from "@/components/Header";
import { navItems } from '@/utils/consts'
import { Footer } from "@/components/Footer";
import Head from "next/head";

export default function SkillsPage() {
  return (
    <>
      <Head>
        <title>Skills - Leonardo Volpini</title>
        <meta name="description" content="Leonardo Volpini - lista delle skills" />
        <meta property="og:description" content="Leonardo Volpini - lista delle skills" />
      </Head>
      <Header navItems={navItems} />
      <Skills items={skills} />;
      <Footer />
    </>
  )
}