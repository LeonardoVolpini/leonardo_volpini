import { Projects } from "@/components/Projects";
import { projects } from "@/utils/consts";

export default function ProjectsPage() {
  return <Projects items={projects} />;
}