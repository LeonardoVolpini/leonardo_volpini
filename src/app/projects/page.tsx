import { Projects } from "@/components/Projects";
import { projects } from "@/utils/consts";
import { Header } from "@/components/Header";
import { navItems } from '@/utils/consts'

export default function ProjectsPage() {
  return (
    <>
      <Header navItems={navItems} />
      <Projects items={projects} />
    </>
  )
}