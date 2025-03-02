import { Phone } from 'lucide-react';

interface MyPhoneProps {
  textColor?: string;
}

export default function MyPhone({ textColor = "text-primary" }: MyPhoneProps) {
  return (
    <div className="flex items-center gap-3">
      <Phone className={`w-5 h-5 ${textColor}`} />
      <a href="tel:+393207159594" className={`${textColor} hover:underline`}>
        +39 320 7159594
      </a>
    </div>
  )
}