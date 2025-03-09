import { ServiceItem } from "@/types/service";
import { ServiceCard } from "./ui/CardService";
import Link from "next/link";

interface ServicesProps {
  items?: ServiceItem[]
}

export const Services = ({ items }: ServicesProps) => {
  return (
    <section className="pt-16 bg-background">
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

        {/* CTA - Pulsante per contattarti */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/contacts"
            className="px-6 py-3 bg-header/95 text-header-foreground rounded-lg text-lg font-semibold hover:hover:bg-blue-700 transition"
          >
            Contattami per una prima consulenza gratuita
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;