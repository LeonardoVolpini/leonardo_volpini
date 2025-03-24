import { TestimonialItem } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="w-full bg-card rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
    {/* Avatar - visibile solo su schermi medi e grandi */}
    <div className="hidden sm:block w-20 h-20 rounded-full bg-gray-300 overflow-hidden mb-4">
      {testimonial.avatar ? (
        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-600">
          {testimonial.name.charAt(0)}
        </div>
      )}
    </div>

    {/* Contenuto */}
    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
    <p className="text-lg text-foreground mt-3">{testimonial.feedback}</p>
  </div>
  );
};
