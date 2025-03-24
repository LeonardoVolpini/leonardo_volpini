import { TestimonialItem } from "@/types/testimonial";
import { TestimonialCard } from "./ui/CardTestimonial";

interface TestimonialProps {
  items?: TestimonialItem[]
}

export const Testimonials = ({ items }: TestimonialProps) => {
  return (
    <section className="pt-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Cosa dicono i miei clienti
        </h2>
        <div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-x-4 gap-y-8">
          {items?.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 border rounded-2xl shadow-sm bg-card flex flex-col items-start gap-4 hover:shadow-md transition"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;