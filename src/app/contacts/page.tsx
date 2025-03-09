import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/Form";
import { Header } from "@/components/Header";
import { navItems } from '@/utils/consts'
import Head from "next/head";

export default function ContactsPage() {
  return (
    <>
      <Head>
        <title>Contatti - Leonardo Volpini</title>
        <meta name="description" content="Leonardo Volpini - contatti mail, telefono e social" />
        <meta property="og:title" content="Contatti - Leonardo Volpini" />
        <meta property="og:description" content="Leonardo Volpini - contatti mail, telefono e social" />
      </Head>
      <Header navItems={navItems} />
      <div className="mt-8" />
      <div className="px-4">
        <ContactForm />
      </div>
      <div className="mt-4" />
      <Contacts />
      <Footer />
    </>
  )
}