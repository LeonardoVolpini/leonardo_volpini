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
        title: "Portfolio",
        description: "Il mio sito personale.",
        link: "https://leonardovolpini.com/"
    },
    {
        id: 2,
        title: "Progetto 2",
        description: "Secondo progetto.",
        link: "https://projecttwo.com/"
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
        title: "Skills",
        href: "/skills",
    },
    /*{
        title: "Progetti",  //TODO
        href: "/projects",
    },*/
    {
        title: "Contatti",
        href: "/contacts",
    },
]