import { Mail } from 'lucide-react';

interface MyMailProps {
  textColor?: string;
}

export default function MyMail({textColor = "text-primary"}: MyMailProps) {
  return (
    <div className="flex items-center gap-3">
      <Mail className={`w-5 h-5 ${textColor}`} />
      <a href="mailto:volpini.leonardo@gmail.com" className={`${textColor} hover:underline`}>
        volpini.leonardo@gmail.com
      </a>
    </div>
  )
}