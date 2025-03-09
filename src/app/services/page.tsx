import { Services } from "@/components/Services";
import { services } from "@/utils/consts";
import { Header } from "@/components/Header";
import { navItems } from '@/utils/consts'
import { Footer } from "@/components/Footer";
import Head from "next/head";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Servizi - Leonardo Volpini</title>
        <meta name="description" content="Leonardo Volpini - servizi offerti" />
        <meta property="og:title" content="Servizi - Leonardo Volpini" />
        <meta property="og:description" content="Leonardo Volpini - servizi offerti" />
      </Head>
      <Header navItems={navItems} />
      <Services items={services} />;
      <Footer />
    </>
  )
}