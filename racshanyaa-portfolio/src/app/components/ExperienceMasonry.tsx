"use client"

import Masonry from "react-masonry-css"
import { motion } from "framer-motion"
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent"
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard"
import { Sparkles, Medal, ShieldCheck, Trophy } from "lucide-react"

const iconMap = [
  <Sparkles key="sparkles" className="text-gray-400 w-5 h-5" />,
  <Medal key="medal" className="text-gray-400 w-5 h-5" />,
  <ShieldCheck key="shield" className="text-gray-400 w-5 h-5" />,
  <Trophy key="trophy" className="text-gray-400 w-5 h-5" />,
]

const experiences = [
  {
    title: "JP Morgan Take a Byte",
    date: "June 2025",
    desc: "Selected participant interacting with technologists from JP Morgan on real-world tech in finance.",
  },
  {
    title: "EasyA x Ripple XRPL Hackathon",
    date: "June 2025",
    desc: "Built U-PayMan using XRP Ledger + ZK Proofs for unified credit view across banks.",
  },
  {
    title: "AI Student Developer Conference",
    date: "May 2025",
    desc: "Panels with Google, Microsoft, ST Engineering; AWS Rekognition workshop.",
  },
  {
    title: "JP Morgan Finance for Non Finance",
    date: "May 2025",
    desc: "Learned about cross-disciplinary finance careers from industry veterans.",
  },
  {
    title: "SEMI TalentConnect",
    date: "May 2025",
    desc: "Spoke with top engineers from Micron, Infineon, Sandisk, and more.",
  },
  {
    title: "EasyA x BCG x VeChain Hackathon (Finalist)",
    date: "Sept 2024",
    desc: "Finalist for GrowX – a token-based incentive app for sustainable gardening.",
  },
  {
    title: "Intl. Business Olympiad (Gold & Global #6)",
    date: "Sept 2023",
    desc: "1st in Team Case Analysis and ranked 6th globally in Objective Test.",
  },
  {
    title: "JP Morgan GenerationTech Hackathon (Winner)",
    date: "July 2023",
    desc: "Built Share-a-Bite, a platform using community gardens to tackle food insecurity.",
  },
]

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
}

export default function ExperienceMasonry() {
  return (
    <section className="my-20 px-6">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-white drop-shadow-[0_0_6px_rgba(180,180,180,0.4)]">
        Industry Experience
      </h2>

      <Masonry
        breakpointCols={breakpointColumns}
        className="flex gap-6"
        columnClassName="masonry-column"
      >
        {experiences.map((exp, idx) => (
          <AnimatedContent
            key={idx}
            distance={80}
            direction="vertical"
            duration={0.6}
            delay={idx * 0.1}
            scale={1.05}
            animateOpacity
          >
            <SpotlightCard
              spotlightColor="rgba(160, 160, 160, 0.2)"
              className="mb-6 bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] border border-[#4a4a4a] text-white transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(150,150,150,0.3)]"
            >
              <div className="p-5 flex flex-col h-full justify-between overflow-hidden">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base font-semibold leading-snug">
                    {exp.title}
                  </h3>
                  {iconMap[idx % iconMap.length]}
                </div>
                <p className="text-sm text-gray-400">{exp.date}</p>
                <p className="text-sm leading-relaxed text-gray-200 mt-2 whitespace-pre-line">
                  {exp.desc}
                </p>
              </div>
            </SpotlightCard>
          </AnimatedContent>
        ))}
      </Masonry>
    </section>
  )
}
