"use client"

import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import Image from "next/image"
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard"
import { CardContent, CardTitle } from "@/components/ui/card"

const education = [
  {
    logo: "/ntu.png",
    degree: "BE in Computer Engineering",
    institution: "Nanyang Technological University, Singapore",
    period: "2024 - 2028",
  },
  {
    logo: "/giis.jpeg",
    degree: "IB Diploma Programme",
    institution: "Global Indian International School",
    period: "2022 - 2024",
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
    },
  },
}

export default function EducationCards() {
  return (
    <section className="px-6 md:px-16 my-24 relative z-10">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-white">
        Education
      </h2>

      <div className="grid gap-12 md:grid-cols-2">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
          >
            <SpotlightCard
              className="relative bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-white/40 hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all duration-500 ease-out"
              spotlightColor="rgba(255, 255, 255, 0.12)"
            >
              <CardContent className="flex gap-6 items-center text-white">
                <div className="relative w-28 h-20 flex-shrink-0">
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    fill
                    className="object-contain"
                    sizes="112px"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <CardTitle className="text-2xl font-semibold font-manrope mb-1">
                    {edu.degree}
                  </CardTitle>
                  <p className="text-lg font-light mb-1">{edu.institution}</p>
                  <p className="text-sm italic text-white/70">{edu.period}</p>
                </div>
              </CardContent>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
