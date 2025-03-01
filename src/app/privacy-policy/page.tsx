import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import PrivacyPolicy from "@/components/Privacy";
import { navItems } from '@/utils/consts'

export default function ProjectsPage() {
  return (
    <>
      <Header navItems={navItems} />
      <PrivacyPolicy />
      <Footer />
    </>
  )
}