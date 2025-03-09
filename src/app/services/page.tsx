import { Services } from "@/components/Services";
import { services } from "@/utils/consts";
import { Header } from "@/components/Header";
import { navItems } from '@/utils/consts'
import { Footer } from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Header navItems={navItems} />
      <Services items={services} />;
      <Footer />
    </>
  )
}