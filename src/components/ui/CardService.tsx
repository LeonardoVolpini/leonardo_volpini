import { ServiceItem } from "@/types/service";

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const IconComponent = service.icon ?? "div";
  return (
    <div className="w-full bg-card rounded-xl p-2 flex flex-row items-center gap-6 transition-transform hover:-translate-y-1">
      <div className="p-4">
        <IconComponent className="w-16 h-16 text-primary" />
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
        <p className="text-muted-foreground text-lg mt-3">{service.description}</p>
      </div>
    </div>
  );
};
