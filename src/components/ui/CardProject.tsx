import { ProjectItem } from "@/types/project";
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="w-full bg-card rounded-xl p-2 flex flex-row items-center gap-6 transition-transform hover:-translate-y-2">

      <div>
        <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
        <p className="text-muted-foreground text-lg mt-3">
          {project.description?.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>

        <Link
          href={project.link ?? "#"}  //se il link non esiste allora l'elemento Link non porterà da nessuna parte
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 text-primary hover:text-primary/80 transition-colors hover:underline"
        >
          Vedi Progetto
        </Link>
      </div>
    </div>
  );
};
