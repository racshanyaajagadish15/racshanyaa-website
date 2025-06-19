"use client"

import { useState, useEffect } from "react"
import Banner from "./components/Banner"
import IntroductionSection from "./components/IntroductionSection"
import SkillsCarousel from "./components/SkillsCarousel"
import EducationCards from "./components/EducationCards"
import ExperienceScroller from "./components/ExperienceScroller"
import ProjectsPage from "./components/ProjectsPage"
import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"

export default function Home() {
  const [active, setActive] = useState<string>("banner")
  const [showAllProjects, setShowAllProjects] = useState(false)

  const handleClick = (id: string) => {
    setActive(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  // Update active link on scroll
  useEffect(() => {
    const sections = ["banner", "intro", "skills", "education", "experience", "projects"]
    const onScroll = () => {
      const scrollPos = window.scrollY + 100
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPos) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function TopLeftMenu() {
    const items = [
      { id: "banner", label: "Home" },
      { id: "intro", label: "Introduction" },
      { id: "skills", label: "Skills" },
      { id: "education", label: "Education" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
    ]
    return (
      <nav className="fixed top-4 left-4 z-50 bg-black/30 backdrop-blur-md rounded-xl px-4 py-2 flex space-x-6 shadow-lg">
        {items.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className={`text-white text-sm font-semibold transition-colors duration-300
              ${
                active === id
                  ? "text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]"
                  : "hover:text-purple-400"
              }
            `}
          >
            {label}
          </button>
        ))}
      </nav>
    )
  }

  return (
  <>
    <TopLeftMenu />

    {/* LinkedIn icon in top right */}
    <a
      href="https://www.linkedin.com/in/racshanyaa-jagadish-b987a4246/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-4 right-4 z-50 bg-black/30 backdrop-blur-md rounded-full p-2 hover:bg-purple-700 transition-colors duration-300 shadow-lg"
    >
      <Linkedin className="w-5 h-5 text-white" />
    </a>

    <main className="min-h-screen bg-black text-white">
      <section id="banner" className="relative">
        <Banner />
      </section>

      <section id="intro">
        <IntroductionSection />
      </section>

      <section id="skills">
        <SkillsCarousel />
      </section>

      <section id="education">
        <EducationCards />
      </section>

      <section id="experience">
        <ExperienceScroller />
      </section>

      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-300">A selection of my best work</p>
          </motion.div>

          <ProjectsPage showAll={showAllProjects} />

          {!showAllProjects && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllProjects(true)}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors duration-300"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  </>
)

}