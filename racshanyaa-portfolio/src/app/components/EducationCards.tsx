"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import Image from "next/image"
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard"
import { CardContent, CardTitle } from "@/components/ui/card"
import AnimatedList from "@/components/AnimatedList/AnimatedList"
import Threads from "@/components/Threads/Threads"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"


const education = [
  {
    logo: "/ntu.png",
    degree: "BE in Computer Engineering",
    institution: "Nanyang Technological University, Singapore",
    period: "2024 - 2028",
    gpa: "3.8 / 5.0",
    courses: [
      "Discrete Mathematics",
      "Introduction to Computational Thinking and Programming",
      "Linear Algebra for Computing",
      "Digital Logic",
      "Computer Organization and Architecture",
      "Data Structures & Algorithms",
      "C and C++ Programming",
      "Probability and Statistics for Computing",
      "Object-Oriented Programming",
      "Algorithm Design and Analysis",
      "Microprocessor System Design and Analysis",
      "Software Engineering",
      "Computer Networks",
      "Physics for Computing",
      "[ICC] Inquiry and Communication in an Interdisciplinary World",
      "[ICC] Navigating the Digital World",
      "[ICC] Ethics and Civics in a Multicultural Society",
      "[ICC] Healthy Living and Well Being",
      "[ICC] Science and Technology for Humanity"
    ],
    highlights: [
      "Tamarind Hall JCRC Publicity & Publication Executive",
      "Tamarind Hall Dance (TAMADA) Dancer",
      "College of Computing and Data Science TOP Assistant Chief Group Leader"
    ],
    awards: [
      ""
    ],
  },
  {
    logo: "/giis.jpeg",
    degree: "IB Diploma Programme",
    institution: "Global Indian International School",
    period: "2022 - 2024",
    gpa: "41 / 45",
    courses: [
      "HL Mathematics AI",
      "HL Computer Science",
      "HL Physics",
      "SL English Language & Literature",
      "SL Business Management",
      "SL French Language B",
    ],
    highlights: [
      "JP Morgan GenerationTech 2023 - Winner",
      "International Business Olympiad 2023 - Gold Award and Global 6th Position"
    ],
    awards: [
      "Justice CS Dharmadhikari Award for Co-Curricular Excellence (2024)",
      "3x Subject Proficiency in French SL, Math AI HL, Business Management SL (2024)",
      "Dr. Abid Hussain Award for Academic Proficiency (2023)",
      "Dr. APJ Abdul Kalam Award for Academic Proficiency (2022)"
    ],
  },
]


const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 50,
      damping: 15,
    },
  },
}

export default function EducationCards() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const selectedEdu = selectedIndex !== null ? education[selectedIndex] : null;

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
            <Dialog open={selectedIndex === idx} onOpenChange={(open) => setSelectedIndex(open ? idx : null)}>
              <DialogTrigger asChild>
                <div onClick={() => setSelectedIndex(idx)}>
                  <SpotlightCard
                    className="relative cursor-pointer bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-white/40 hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all duration-500 ease-out"
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
                </div>
              </DialogTrigger>

              <DialogContent
                style={{ width: "50vw", maxWidth: "75vw", height: "50vw", maxHeight: "75vw" }}
                className="
                  fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                  w-[75vw] max-w-[75vw]
                  bg-black/90 border border-white/10 backdrop-blur 
                  p-12 rounded-xl shadow-xl 
                  z-50
                "
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ filter: "blur(6px)", opacity: 0.6, zIndex: 0 }}
                >
                  <Threads
                    amplitude={1}
                    distance={0}
                    enableMouseInteraction={true}
                  />
                </div>

                <div className="relative z-10 flex flex-col overflow-y-auto max-h-[70vh]">
                  <h3 className="text-4xl font-bold text-white mb-6">{selectedEdu?.degree}</h3>
                  <p className="text-white text-lg mb-2 italic">{selectedEdu?.institution}</p>
                  <p className="text-white text-sm mb-10">{selectedEdu?.period}</p>

                  <div className="grid grid-cols-2 gap-12 h-full">
                    {/* Courses Taken */}
                    <div className="pr-6">
                      <h4 className="text-white text-2xl mb-6 font-semibold">📚 Courses Taken</h4>
                      <AnimatedList items={selectedEdu?.courses} className="max-h-[65vh] scrollbar-none" />
                    </div>

                    {/* GPA, Highlights, Awards */}
                    <div className="flex flex-col justify-start gap-12">
                      <div>
                        <h4 className="text-white text-2xl font-semibold mb-4">🎯 GPA / Score</h4>
                        <p className="text-white text-lg">{selectedEdu?.gpa}</p>
                      </div>

                      <div>
                        <h4 className="text-white text-2xl font-semibold mb-4">🌟 Extra Curriculars</h4>
                        <ul className="list-disc ml-5 text-white text-base space-y-3">
                          {selectedEdu?.highlights?.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      {selectedEdu?.awards && selectedEdu.awards.some(a => a.trim() !== "") && (
                        <div>
                          <h4 className="text-white text-2xl font-semibold mb-4">🏆 Awards</h4>
                          <ul className="list-disc ml-5 text-white text-base space-y-3">
                            {selectedEdu.awards.filter(a => a.trim() !== "").map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
