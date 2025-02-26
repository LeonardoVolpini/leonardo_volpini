import { SkillCard } from "./ui/CardSkill";
import { SkillItem } from "@/types/skill";

interface SkillProps {
  items?: SkillItem[]
}

export const Skills = ({items} : SkillProps) => {
  return (
    <section id="skills" className="py-12">
      <div className="container mx-auto px-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Competenze Tecniche
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items?.map((skill, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-4 transition-transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-center">
                <SkillCard skill={skill} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}