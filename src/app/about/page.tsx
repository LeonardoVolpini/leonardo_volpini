import { AboutMe } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { navItems } from '@/utils/consts'

export default function AboutMePage() {
  return (
    <>
      <Header navItems={navItems} />
      <AboutMe />
      <Footer />
    </>
  )
}