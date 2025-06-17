'use client'

import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"

export default function IntroductionSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) controls.start("visible")
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
    },
  }

  return (
    <div className="relative flex min-h-screen justify-center items-center px-4">
      {/* Background video */}
      <video
        src="/header.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      />

      {/* Overlay to blend and darken the video */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10 mix-blend-overlay" />

      {/* Card container */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        className="relative z-20 w-full max-w-5xl"
      >
        <Card
          className="
            relative 
            bg-black/60 
            backdrop-blur-md 
            border border-white/30 
            shadow-none 
            p-10 
            rounded-2xl
            drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]
          "
        >
          <CardContent className="flex flex-col md:flex-row items-center gap-10 text-white">
            {/* Enlarged circular photo */}
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

            {/* Text content */}
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-manrope transition-all duration-300 hover:text-yellow-400 hover:drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]">
                Hi, I'm Racshanyaa Jagadish
              </h2>
              <p className="text-lg md:text-xl leading-relaxed font-light">
                I'm a passionate Full Stack Developer and Tech Enthusiast with experience building modern web applications.
                I love creating clean, user-friendly interfaces and solving challenging problems.
                When I'm not coding, you’ll find me exploring new tech trends, contributing to open source, or experimenting with new recipes.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
