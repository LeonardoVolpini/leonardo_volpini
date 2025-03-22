import { ProjectItem } from "@/types/project";
import { ProjectCard } from "./ui/CardProject";

interface ProjectsProps {
  items?: ProjectItem[]
}

export const Projects = ({ items }: ProjectsProps) => {
  return (
    <section id="projects" className="pt-12 px-8 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Progetti
        </h2>

        <p className="my-4 text-muted-foreground text-xl">
          Alcuni progetti che ho realizzato per dei clienti in passato. <br />
          Ogni soluzione è stata sviluppata su misura per soddisfare esigenze specifiche, combinando funzionalità, performance e usabilità. <br />
          Se hai un&apos;idea o un&apos;esigenza particolare, <a href="/contacts" className="text-blue-700 underline">contattami per discuterne insieme!</a>
        </p>

        <div className="grid grid-cols-1 gap-y-8">
          {items?.map((project, index) => (
            <div
              key={index}
              className="p-6 border rounded-2xl shadow-sm bg-card flex flex-col items-start gap-4 hover:shadow-md transition"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}