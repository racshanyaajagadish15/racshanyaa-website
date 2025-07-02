"use client"

import { useEffect, useState } from "react"
import Banner from "./components/Banner"
import IntroductionSection from "./components/IntroductionSection"
import SkillsCarousel from "./components/SkillsCarousel"
import EducationCards from "./components/EducationCards"
import ExperienceScroller from "./components/ExperienceScroller"
import ProjectsPage from "./components/ProjectsPage"
import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"
import GooeyNav from "@/components/GooeyNav/GooeyNav"

const navItems = [
  { label: "Home", href: "#banner" },
  { label: "Introduction", href: "#intro" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
]

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const sectionIds = ["banner", "intro", "skills", "education", "experience", "projects"]

  // Smooth scroll to section with offset (height of fixed navbar)
  const scrollToSection = (id: string, index: number) => {
    const el = document.getElementById(id)
    if (el) {
      const yOffset = -80 // Adjust based on navbar height (in px)
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
      setActiveIndex(index)
    }
  }

  useEffect(() => {
    // Intercept all <a href="#..."> clicks in GooeyNav
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const href = target.getAttribute("href")!
        const id = href.replace("#", "")
        const index = sectionIds.indexOf(id)
        if (index !== -1) scrollToSection(id, index)
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveIndex(i)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Ribbon */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md px-6 py-2 flex items-center justify-between">
        <div className="flex-1">
          <GooeyNav items={navItems} initialActiveIndex={activeIndex} />
        </div>

        <a
          href="https://www.linkedin.com/in/racshanyaa-jagadish-b987a4246/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 bg-black/30 rounded-full p-2 hover:bg-purple-700 transition-colors duration-300 shadow-lg"
        >
          <Linkedin className="w-5 h-5 text-white" />
        </a>
      </div>

      {/* Content */}
      <main className="min-h-screen bg-black text-white">
        <section id="banner"><Banner /></section>
        <section id="intro"><IntroductionSection /></section>
        <section id="skills"><SkillsCarousel /></section>
        <section id="education"><EducationCards /></section>
        <section id="experience"><ExperienceScroller /></section>

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
