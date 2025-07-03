'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FiGithub } from "react-icons/fi"
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard" // Assuming this is correctly imported
import ProfileCard from "@/components/ProfileCard/ProfileCard"

const allProjects = [
  {
    name: "P2E Payroll",
    description: "A full-stack payroll web solutions to automate payroll calculation with CPF calculation and payslip generation",
    languages: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "ViteJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" }
    ],
    githubLink: "https://github.com/racshanyaajagadish15/P2EPayroll-v1.2"
  },
  {
    name: "MRTBuddy",
    description: "A iOS Reminder app to tell sleeping MRT-goers when their stop arrives!",
    languages: [
      { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" },
      { name: "XCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg"}
    ],
    githubLink: "https://github.com/racshanyaajagadish15/MRTBuddy-iOS"
  },
  {
    name: "Mindle",
    description: "A Chrome Extension that helps online surfers practice mindfulness between their surfing sessions, and care for their mental health",
    languages: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" }
    ],
    githubLink: "https://github.com/racshanyaajagadish15/mindle-app"
  },
  {
    name: "CiteGenie",
    description: "A Chrome Extension that instantly generates citation as you look at a website - no need to use seperate citation machine!.",
    languages: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" }
    ],
    githubLink: "https://github.com/racshanyaajagadish15/CiteGenie"
  },
  {
    name: "BTO Management System",
    description: "A system that manages end-to-end booking, reservation and approval of BTO Applications with multi-user capabilities",
    languages: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    ],
    githubLink: "https://github.com/racshanyaajagadish15/SC2002-BTO-V3"
  },
  {
    name: "StrokePredict",
    description: "A Regression Classifier ML Model that finds out if a person is likely to get a stroke based on life parameters",
    languages: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "Jupyter Notebook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" }
    ],
    githubLink: "https://github.com/yourusername/fitness-tracker"
  },
  {
    name: "Portfolio Website",
    description: "This very website showcasing my projects and skills!",
    languages: [
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
    ],
    githubLink: "https://github.com/racshanyaajagadish15/StrokePredictor"
  },
  {
    name: "Parkly",
    description: "An IoT enabled parking system, makes finding the optimal lot a breeze in huge parking lots (a work in progress!)",
    languages: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg"}
    ],
    githubLink: ""
  }
]

export default function ProjectsPage({ showAll }: { showAll: boolean }) {
  const projectsToShow = showAll ? allProjects : allProjects.slice(0, 3)

  return (
    <div className="relative w-full py-16 px-4 sm:px-8 lg:px-12 min-h-screen">
      {/* Enhanced Ripple Background - (No changes here, assuming it's correctly styled elsewhere) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {projectsToShow.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: false, amount: 0.3 }} // ← This line is key!
                layout
              >
                <SpotlightCard
                  spotlightColor="rgba(160, 160, 160, 0.2)"
                  className="h-full bg-gradient-to-br from-[#1e1e2e]/90 to-[#2a2a3a]/90 border border-[#3a3a4a] hover:border-[#5a5a7a] text-white hover:shadow-[0_0_30px_rgba(140,140,255,0.15)] transition-all duration-500 p-1"
                >
                  {/* Changed to flex-col and justify-between for consistent spacing */}
                  <div className="flex flex-col h-full p-6">
                    <CardHeader className="p-0 mb-4"> {/* Added mb-4 for spacing */}
                      <motion.div
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        viewport={{ once: false, amount: 0.3 }} // ← This line is key!
                      >
                        <CardTitle className="text-2xl font-bold text-white mb-2">
                          {project.name}
                        </CardTitle>
                      </motion.div>
                      <CardDescription className="text-gray-300/80 text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    {/* This div will now take up remaining space, pushing the button down */}
                    <CardContent className="p-0 mt-auto flex flex-col justify-end"> {/* Removed mt-auto here, use flex-col and justify-end on content below */}
                      <div className="flex flex-wrap gap-3 mb-6"> {/* Added mb-6 for spacing between languages and button */}
                        {project.languages.map((lang, i) => (
                          <motion.div
                            key={i}
                            whileHover={{
                              scale: 1.1,
                              y: -3
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            className="relative h-10 w-10 group"
                            title={lang.name}
                            viewport={{ once: false, amount: 0.3 }} // ← This line is key!
                          >
                            <Image
                              src={lang.icon}
                              alt={lang.name}
                              fill
                              className="object-contain drop-shadow-lg"
                            />
                            <motion.span
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                            >
                              {lang.name}
                            </motion.span>
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        className="flex justify-end" // Ensure button is aligned right
                        whileHover={{ x: 3 }}
                        viewport={{ once: false, amount: 0.3 }} // ← This line is key!
                      >
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                          aria-label="GitHub repository"
                        >
                          <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="text-sm font-medium group-hover:text-purple-300"
                          >
                            View Project
                          </motion.span>
                          <FiGithub className="h-5 w-5 group-hover:text-purple-300" />
                        </a>
                      </motion.div>
                    </CardContent>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto mt-16">
      {/* <div className="flex justify-center">
       <ProfileCard 
        avatarUrl="/profile.jpg"
        name="Racshanyaa"
        title="Full Stack Developer"
        contactText="Email Me"
        onContactClick={() => window.location.href = "mailto:racshanyaa@example.com"}
        className="w-full max-w-md [--avatar-opacity:1] [--avatar-opacity-hover:0.8] [--icon-opacity:0.9] [--icon-opacity-hover:1]" // Custom CSS variables added
        showUserInfo={true}
        enableTilt={true}
        showBehindGradient={true}
        behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y), hsla(266,100%,90%,0.2) 4%, hsla(266,50%,80%,0.15) 10%, hsla(266,25%,70%,0.1) 50%, hsla(266,0%,60%,0) 100%), radial-gradient(35% 52% at 55% 20%, #00ffaa30 0%, #073aff00 100%), radial-gradient(100% 100% at 50% 50%, #00c1ff30 1%, #073aff00 76%), conic-gradient(from 124deg at 50% 50%, #c137ff30 0%, #07c6ff30 40%, #07c6ff30 60%, #c137ff30 100%)"
        innerGradient="linear-gradient(145deg, #60496e8c 0%, #71C4FF44 100%)"
        iconUrl="/profile.jpg"
        miniAvatarUrl="/profile.jpg"
        handle="racshanyaa"
        status="online"
      />
      </div> */}
    </div>
    </div>
  )
}