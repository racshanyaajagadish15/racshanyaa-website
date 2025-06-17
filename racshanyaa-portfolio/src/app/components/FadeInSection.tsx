'use client'

import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

export default function FadeInSection({ children }: { children: React.ReactNode }) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible")
        } else {
          controls.start("hidden")
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        hidden: { opacity: 0, y: 40, transition: { duration: 0.6, ease: "easeOut" } },
      }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  )
}
