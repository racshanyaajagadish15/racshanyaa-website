"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Sparkles, Medal, ShieldCheck, Trophy } from "lucide-react"
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent"
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard"
import { motion } from "framer-motion"
import Squares from "@/components/Squares/Squares"


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
    desc: "Attended as a selected participant, got the opportunity to interact with technologists from the firm and get insights into how the firm engenders real-world impact in the banking technology space.",
  },
  {
    title: "EasyA x Ripple XRPL Singapore Hackathon",
    date: "June 2025",
    desc: "Built U-PayMan, a unified payment management platform that empowers individuals with a streamlined view of their credit activity by leveraging XRP Ledger across multiple banks and enables them to securely validate their creditworthiness using Zero-Knowledge Proofs — all in one intuitive dashboard",
  },
  {
    title: "AI Student Developer Conference",
    date: "May 2025",
    desc: "Participated in panel discussions with revoluntionary firms including Google, NCS, Oracle, Microsoft, ST Enginnering and attended a workshop on AWS Reckognition",
  },
  {
    title: "JP Morgan Finance for Non Finance",
    date: "May 2025",
    desc: "Attended as a selected participant, got the opportunity to learn from industry professionals on how different fields intersect to collectively build the finance industry, and career opportunities within the space",
  },
  {
    title: "SEMI TalentConnect",
    date: "May 2025",
    desc: "Selected to participate in a panel discussion with industry experts from top notch engineering companies such as Micron, Infineon Technologies, GlobalFoundries, Sandisk",
  },
  {
    title: "EasyA x BCG x VeChain Singapore Hackathon (Finalist)",
    date: "September 2024",
    desc: "Presented a solution, GrowX that rewards users with B3TR tokens whenever they perform gardening, growing or similar sustainable food sourcing habits",
  },
  {
    title: "International Business Olympiad (Gold Award & Global 6th Position)",
    date: "September 2023",
    desc: "A global competitive exam that challenges individuals to solve problems in the real world business context while enhancing one’s critical thinking skills.I achieved Global 6th Position in Objective Test and 1st Position in Team Open Case Analysis ",
  },
  {
    title: "JP Morgan GenerationTech Hackathon (Winner)",
    date: "July 2023",
    desc: "Designed the winning solution Share-a-Bite, a gamified platform designed to tackle local food insecurity by leveraging on underutilized community gardens in Singapore",
  },
]


export default function ExperienceCarousel() {
  return (
    <section className="relative my-20 px-6 min-h-[600px] flex flex-col items-center justify-center">
      {/* Squares Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <Squares 
          speed={0.5} 
          squareSize={40} 
          direction="diagonal" 
          borderColor="#fff" 
          hoverFillColor="#222" 
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-[76rem] w-full px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-white drop-shadow-[0_0_6px_rgba(180,180,180,0.4)]">
          Industry Experience
        </h2>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="mx-auto"
        >
          <CarouselContent>
            {experiences.map((exp, idx) => (
              <CarouselItem
                key={idx}
                className="px-4 py-4"
                style={{ flex: "0 0 auto", width: 400 }} // fixed 400px width
              >
                <AnimatedContent
                  distance={100}
                  direction="vertical"
                  duration={0.7}
                  delay={idx * 0.15}
                  scale={1.05}
                  animateOpacity
                >
                  <SpotlightCard
                    spotlightColor="rgba(160, 160, 160, 0.2)"
                    className="h-[400px] bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] border border-[#4a4a4a] text-white hover:shadow-[0_0_30px_rgba(150,150,150,0.3)] transition duration-300 ease-in-out"
                  >
                    <div className="p-5 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-semibold break-words max-w-[80%]">
                          {exp.title}
                        </h3>
                        {iconMap[idx % iconMap.length]}
                      </div>
                      <p className="text-sm text-gray-400 mb-3">{exp.date}</p>
                      <div className="flex-1 overflow-y-auto">
                        <p className="text-sm text-gray-200 whitespace-pre-wrap break-words">
                          {exp.desc}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                </AnimatedContent>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-[#2a2a2a] text-white border border-gray-600" />
          <CarouselNext className="bg-[#2a2a2a] text-white border border-gray-600" />
        </Carousel>
      </div>
    </section>
  )
}