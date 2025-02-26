import { SkillItem } from "@/types/skill";

interface SkillCardProps {
  skill: SkillItem;
}

export const SkillCard = ({ skill }: SkillCardProps) => {
    const IconComponent = skill.icon ?? "div";
  return (
    <div className="w-40 h-40 bg-card rounded-xl p-6 shadow-md flex flex-col items-center justify-center transition-transform hover:-translate-y-2">
      <IconComponent className="w-12 h-12" color={skill.color ?? ""} />
      <span className="font-bold text-lg text-center">
        {skill.name}
      </span>
    </div>
  );
};
