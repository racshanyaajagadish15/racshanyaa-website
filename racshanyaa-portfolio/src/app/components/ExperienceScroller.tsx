"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "J.P. Morgan GenerationTech Winner",
    date: "2023",
    desc: "Built an award-winning digital app to combat food insecurity.",
  },
  {
    title: "International Business Olympiad Gold Medalist",
    date: "2023",
    desc: "Awarded for excellence in international business strategy and analysis and securing Global 6th Position",
  },
  // Add more experiences as needed
]

export default function ExperienceScroller() {
  return (
    <section className="my-20 px-6">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-white">🚀 Highlights</h2>

      <div className="flex gap-6 overflow-x-auto px-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <Card
              className="flex-shrink-0 w-[340px] md:w-[380px] h-[220px] bg-gradient-to-br from-[#1f1f1f] to-[#2c2c2c] border border-gray-800 rounded-2xl hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-sm text-gray-400">{exp.date}</p>
                </div>
                <p className="text-white text-sm leading-relaxed mt-4">{exp.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
