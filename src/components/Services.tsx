import { ServiceItem } from "@/types/service";
import { ServiceCard } from "./ui/CardService";

interface ServicesProps {
  items?: ServiceItem[]
}

export const Services = ({ items }: ServicesProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          I miei servizi
        </h2>
        <div className="grid grid-cols-1 gap-y-8">
          {items?.map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-2xl shadow-sm bg-card flex flex-col items-start gap-4 hover:shadow-md transition"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;