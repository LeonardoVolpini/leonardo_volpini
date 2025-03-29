import { Icons } from "@/components/ui/Icons"

//per trovare gli svg per nuove skills andare sul sito https://simpleicons.org/
export const skills = [
    {
        name: "JavaScript",
        icon: Icons.javascript,
        color: "#F7DF1E",
    },
    {
        name: "React",
        icon: Icons.react,
        color: "#61DAFB",
    },
    {
        name: "Node.js",
        icon: Icons.nodeJs,
        color: "#5FA04E",
    },
    {
        name: "HTML",
        icon: Icons.html5,
        color: "#E34F26",
    },
    {
        name: "CSS",
        icon: Icons.css3,
        color: "#1572B6",
    },
    {
        name: "Tailwind CSS",
        icon: Icons.tailwindCSS,
        color: "#06B6D4",
    },
    {
        name: "TypeScript",
        icon: Icons.typescript,
        color: "#3178C6",
    },
    {
        name: "Next.js",
        icon: Icons.nextJs,
        color: "#000000",
    },
    {
        name: "Python",
        icon: Icons.python,
        color: "#3776AB",
    },
    {
        name: "Kotlin",
        icon: Icons.kotlin,
        color: "#7F52FF",
    },
    {
        name: "C++",
        icon: Icons.cxx,
        color: "#00599C",
    },
    {
        name: "MySQL",
        icon: Icons.mySQL,
        color: "#4479A1",
    },
    {
        name: "MongoDB",
        icon: Icons.mongoDB,
        color: "#47A248",
    },
    {
        name: "Qt",
        icon: Icons.qt,
        color: "#41CD52",
    },
    {
        name: "Figma",
        icon: Icons.figma,
        color: "#F24E1E",
    },
    {
        name: "Git",
        icon: Icons.git,
        color: "#F05032",
    },
    {
        name: "GitHub",
        icon: Icons.github,
        color: "#181717",
    },
]

export const projects = [
    {
        id: 1,
        title: "ETF Tracking Bot",
        description: "Il bot Telegram, @ETFtrackingBot, monitora automaticamente gli ETF e invia notifiche " +
            "quando il prezzo scende di una percentuale specificata rispetto al massimo degli ultimi x giorni.\n" + 
            "Successivamente invia notifiche solamente se il prezzo scende di un ulteriore punto percentuale o recupera per rientra dentro la soglia.",
        link: "https://github.com/LeonardoVolpini/bot-telegram-etf-tracker" // https://t.me/ETFtrackingBot
    },
]

export const services = [
    {
        title: "Sviluppo Siti Web",
        description: "Creazione di siti web moderni, responsive e performanti.",
        icon: Icons.monitorSmartphone
      },
      {
        title: "Sviluppo Software",
        description: "Software personalizzati per ogni tua evenienza.",
        icon: Icons.code
      },
      {
        title: "Sviluppo Applicazioni",
        description: "App web e mobile sia per iOS che per Android.",
        icon: Icons.briefcase
      },
      {
        title: "Consulenza Informatica",
        description: "Supporto e strategie per gestire e migliorare il tuo business digitale.",
        icon: Icons.userCheck
      },
      {
        title: "Manutenzione Software",
        description: "Aggiornamenti, bug fix e assistenza sui prodotti sviluppati.",
        icon: Icons.wrench
      },
]

export const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Chi Sono",
        href: "/about",
    },
    {
        title: "Servizi",
        href: "/services",
    },
    {
        title: "Progetti",
        href: "/projects",
    },
    {
        title: "Skills",
        href: "/skills",
    },
    {
        title: "Blog",
        href: "/blog",
    },
    {
        title: "Contatti",
        href: "/contacts",
    },
]

// TODO: sostituire con vere testimonianze
export const testimonials = [
    {
      name: "Mario Rossi",
      role: "CEO di Startup X",
      feedback: "Lavorare con Leonardo è stato fantastico! Sito super performante e ottimo supporto.",
    },
    {
      name: "Giulia Bianchi",
      role: "Marketing Manager",
      feedback: "Professionalità e velocità! Il nostro sito ora è ottimizzato e performante.",
    },
    {
      name: "Luca Verdi",
      role: "Freelance Designer",
      feedback: "Collaborazione perfetta, codice pulito e ben documentato.",
    },
  ];