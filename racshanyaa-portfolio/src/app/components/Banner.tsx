'use client'

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function Banner() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const stars: { x: number; y: number; vx: number; vy: number }[] = []
    const numStars = 60
    const maxDist = 120

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Move and draw stars
      stars.forEach((star, idx) => {
        star.x += star.vx
        star.y += star.vy

        // Bounce off edges
        if (star.x < 0 || star.x > canvas.width) star.vx *= -1
        if (star.y < 0 || star.y > canvas.height) star.vy *= -1

        // Star point
        ctx.beginPath()
        ctx.arc(star.x, star.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        ctx.fill()

        // Connect nearby stars
        for (let j = idx + 1; j < numStars; j++) {
          const other = stars[j]
          const dx = star.x - other.x
          const dy = star.y - other.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            ctx.beginPath()
            ctx.moveTo(star.x, star.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / maxDist})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Resize listener
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Canvas layer */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold text-white font-manrope"
        >
          Racshanyaa Jagadish
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          className="text-xl md:text-2xl text-slate-200 mt-4 font-light tracking-wide font-manrope"
        >
          Full Stack Developer & Tech Enthusiast
        </motion.p>
      </div>
    </div>
  )
}