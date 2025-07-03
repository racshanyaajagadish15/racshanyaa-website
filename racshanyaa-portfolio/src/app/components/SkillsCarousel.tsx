'use client'

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ShinyText from "@/components/ShinyText/ShinyText"

const skills = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg "},
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { name: "NodeJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "MySQL", logo: "/mysql.png" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Tableau", logo: "/tableau.jpeg" },
  { name: "Alteryx", logo: "/alteryx.png" },
]

export default function SkillsCarousel() {
  return (
    <div className="my-12 px-8 relative">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-white">Skills Portfolio</h2>
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
        <CarouselNext className="absolute right-[-2rem] top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  )
}
