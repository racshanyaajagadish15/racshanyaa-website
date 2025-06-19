"use client"
import Image from "next/image"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

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

export default function EducationCards() {
  return (
    <section className="px-6 md:px-16 my-20">
      <h2 className="text-3xl font-semibold mb-6 text-center text-white">
        Education
      </h2>
      <div className="grid gap-12 md:grid-cols-2">
        {education.map((edu, idx) => (
          <Card
            key={idx}
            className="
              flex flex-row items-center gap-8
              bg-black rounded-3xl shadow-lg p-6
              border border-white/10
              ring-1 ring-white/20
              hover:ring-white/30
              transition
              duration-300
              text-white
              hover:shadow-white/10
            "
          >
            <div className="relative w-36 h-24 flex-shrink-0">
              <Image
                src={edu.logo}
                alt={`${edu.institution} logo`}
                fill
                style={{ objectFit: "contain" }}
                priority
                sizes="144px"
              />
            </div>

            <CardContent className="p-0 flex flex-col justify-center">
              <CardTitle className="text-2xl font-semibold mb-1 font-manrope">
                {edu.degree}
              </CardTitle>
              <p className="text-lg font-light mb-1">{edu.institution}</p>
              <p className="text-sm italic text-white/80">{edu.period}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}