import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/Form";
import { Header } from "@/components/Header";
import { navItems } from '@/utils/consts'

export default function ContactsPage() {
  return (
      <>
        <Header navItems={navItems} />
        <div className="mt-8" />
        <ContactForm />
        <div className="mt-4" />
        <Contacts />
        <Footer />
      </>
    )
}