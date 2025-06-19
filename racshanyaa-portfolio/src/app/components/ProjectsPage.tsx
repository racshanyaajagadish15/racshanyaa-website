'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"
import { FiGithub } from "react-icons/fi"

const allProjects = [
  {
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with product listings, cart functionality, and secure checkout process.",
    languages: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
    ],
    githubLink: "https://github.com/yourusername/ecommerce-platform"
  },
  {
    name: "Task Management App",
    description: "A productivity application for organizing tasks with drag-and-drop functionality and team collaboration features.",
    languages: [
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" }
    ],
    githubLink: "https://github.com/yourusername/task-manager"
  },
  {
    name: "Weather Dashboard",
    description: "Real-time weather forecasting application with interactive maps and location-based services.",
    languages: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" }
    ],
    githubLink: "https://github.com/yourusername/weather-dashboard"
  },
  {
    name: "Recipe Finder",
    description: "AI-powered recipe recommendation system based on available ingredients.",
    languages: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" }
    ],
    githubLink: "https://github.com/yourusername/recipe-finder"
  },
  {
    name: "Fitness Tracker",
    description: "Mobile application for tracking workouts and nutrition with progress analytics.",
    languages: [
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" }
    ],
    githubLink: "https://github.com/yourusername/fitness-tracker"
  },
  {
    name: "Portfolio Website",
    description: "This very website showcasing my projects and skills.",
    languages: [
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
    ],
    githubLink: "https://github.com/yourusername/portfolio"
  }
]

export default function ProjectsPage({ showAll }: { showAll: boolean }) {
  const projectsToShow = showAll ? allProjects : allProjects.slice(0, 3)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsToShow.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <Card className="h-full bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-gray-500 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white text-2xl">{project.name}</CardTitle>
              <CardDescription className="text-gray-300">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {project.languages.map((lang, i) => (
                    <div key={i} className="relative h-8 w-8" title={lang.name}>
                      <Image
                        src={lang.icon}
                        alt={lang.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="GitHub repository"
                >
                  <FiGithub className="h-6 w-6" />
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}