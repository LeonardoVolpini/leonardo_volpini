import { Skills } from "@/components/Skills";
import { skills } from "@/utils/consts";
import { Header } from "@/components/Header";
import { navItems } from '@/utils/consts'

export default function SkillsPage() {
  return (
    <>
      <Header navItems={navItems} />
      <Skills items={skills} />;
    </>
  )
}