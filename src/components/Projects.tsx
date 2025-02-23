import Image from "next/image";
import Link from "next/link";
import { ProjectItem } from "@/types/project";

interface ProjectsProps {
  items?: ProjectItem[]
}

export const Projects = ({items}: ProjectsProps) => {
  return (
    <section id="projects" className="py-12 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Progetti
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items?.map((project) => (
            <article
              key={project.id}
              className="bg-card rounded-lg shadow-sm transition-transform hover:-translate-y-2"
            >

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                {/*<div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-secondary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>*/}

                <Link
                  href={project.link ?? "#"}  //se il link non esiste allora l'elemento Link non porterà da nessuna parte
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-primary hover:text-primary/80 transition-colors"
                >
                  Vedi Progetto
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}