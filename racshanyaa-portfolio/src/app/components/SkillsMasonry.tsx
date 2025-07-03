'use client'

import { motion } from "framer-motion"
import HorizontalDivider from "./HorizontalDivider"

const skills = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg "},
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg"},
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { name: "NodeJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"},
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"},
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Tableau", logo: "/tableau.jpeg" },
  { name: "Alteryx", logo: "/alteryx.png" }
]

import type { Variants } from "framer-motion"

const slideVariants = (direction: "right" | "left" = "right"): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === "right" ? 50 : -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 60,
      damping: 15,
      staggerChildren: 0.1,
    },
  },
})

export default function SkillsMasonry() {
  const firstRow = skills.slice(0, 6)
  const secondRow = skills.slice(6)

  return (
    <div className="my-20 px-6 sm:px-8 lg:px-24 relative z-10">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-white drop-shadow-[0_0_6px_rgba(180,180,180,0.4)]">
        Skills Portfolio
      </h2>

      {/* First row: slide from right */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 place-items-center mb-12"
        variants={slideVariants("right")}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {firstRow.map((skill, i) => (
          <SkillCard key={i} skill={skill} />
        ))}
      </motion.div>

      {/* Second row: slide from left */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 place-items-center"
        variants={slideVariants("left")}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {secondRow.map((skill, i) => (
          <SkillCard key={i + 6} skill={skill} />
        ))}
      </motion.div>
    </div>
  )
}

type Skill = {
  name: string;
  logo: string;
};

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.div
      className="skill flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
      whileHover={{ scale: 1.07 }}
    >
      <div className="w-24 h-24 bg-gray-900 p-3 rounded-2xl shadow-md border border-gray-700">
        <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
      </div>
      <p className="mt-3 text-white text-sm font-medium text-center opacity-90">
        {skill.name}
      </p>
    </motion.div>
  )
}
