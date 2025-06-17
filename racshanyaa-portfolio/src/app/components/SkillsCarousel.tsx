'use client'

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const skills = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C", logo: "/c.png" },
  { name: "C++", logo: "/cplusplus.png" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vite", logo: "/vite.png" },
  { name: "NodeJS", logo: "/node.png" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "MySQL", logo: "/mysql.png" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Tableau", logo: "/tableau.jpeg" },
  { name: "Alteryx", logo: "/alteryx.png" },
]

export default function SkillsCarousel() {
  const nextButtonRef = useRef<HTMLButtonElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalItems = skills.length

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1
        if (nextIndex >= totalItems) {
          // Reset to 0 when reaching the end
          return 0
        }
        return nextIndex
      })
    }, 3000) // scroll every 3 seconds

    return () => clearInterval(interval)
  }, [totalItems])

  useEffect(() => {
    // Simulate click on nextButton when currentIndex changes, so UI moves
    if (nextButtonRef.current) {
      nextButtonRef.current.click()
    }
  }, [currentIndex])

  return (
    <div className="my-12 px-8 relative">
      <h2 className="text-3xl font-semibold mb-6 text-center">Skills Portfolio</h2>
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {skills.map((skill, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex justify-center"
            >
              <div className="flex flex-col items-center gap-4">
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <p className="text-lg font-medium text-white">{skill.name}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-[-2rem] top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext
          ref={nextButtonRef}
          className="absolute right-[-2rem] top-1/2 -translate-y-1/2 z-10"
        />
      </Carousel>
    </div>
  )
}
