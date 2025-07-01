'use client'

import Image from "next/image"
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard"
import { CardContent } from "@/components/ui/card"
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent"
import Beams from "@/components/Beams/Beams"
import Aurora from "@/components/Aurora/Aurora"

export default function ProfileSection() {
  return (
    <div className="relative flex min-h-screen justify-center items-center px-4">
      <div className="absolute inset-0 w-full h-full object-cover opacity-60 z-0">
        <Aurora
          colorStops={["#3A3A3A", "#777777", "#CFCFCF"]}
          blend={0.4}
          amplitude={0.8}
          speed={0.3}
        />
      </div>
      <AnimatedContent
        distance={50}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="fade.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.0}
        threshold={0.2}
        delay={0.3}
      >
        <SpotlightCard
          className="
            relative 
            bg-black/60 
            backdrop-blur-md 
            border border-white/20
            shadow-none 
            p-10 
            rounded-2xl
            transition-all
            duration-1000
            ease-out
            hover:border-white/40
            hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]
          "
          spotlightColor="rgba(255, 255, 255, 0.15)"
        >
          <CardContent className="flex flex-col md:flex-row items-center gap-10 text-white relative z-10">
            {/* Circular Profile Image */}
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-white/30">
              <Image
                src="/profile.jpg"
                alt="Racshanyaa Jagadish"
                width={224}
                height={224}
                className="object-cover w-full h-full"
                style={{ objectPosition: "center 25%" }}
                priority
              />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-manrope">
                Hello, I'm Racshanyaa! 👋
              </h2>
              <p className="text-lg md:text-xl leading-relaxed font-light">
                I'm a passionate Full Stack Developer and Tech Enthusiast with experience building modern web applications.
                I love creating clean, user-friendly interfaces and solving challenging problems.
                When I'm not coding, you'll find me exploring new tech trends, contributing to open source, or experimenting with new recipes.
              </p>
            </div>
          </CardContent>
        </SpotlightCard>
      </AnimatedContent>
    </div>
  )
}
