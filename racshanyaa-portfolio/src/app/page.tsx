"use client"

import { useState, useEffect } from "react"
import Banner from "./components/Banner"
import IntroductionSection from "./components/IntroductionSection"
import SkillsCarousel from "./components/SkillsCarousel"
import EducationCards from "./components/EducationCards"
import ExperienceScroller from "./components/ExperienceScroller"

export default function Home() {
  const [active, setActive] = useState<string>("banner")

  const handleClick = (id: string) => {
    setActive(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  // Update active link on scroll
  useEffect(() => {
    const sections = ["banner", "intro", "skills", "education", "experience"]
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
      </main>
    </>
  )
}
