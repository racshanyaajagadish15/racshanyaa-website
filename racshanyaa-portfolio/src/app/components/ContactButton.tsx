'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ShinyText from "@/components/ShinyText/ShinyText"
import { FiMail } from "react-icons/fi"
import clsx from "clsx";

export default function ContactButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href="mailto:racshanyaajagadish15@gmail.com"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={clsx(
        "relative inline-flex items-center justify-center h-[60px] rounded-full border border-white/20 bg-gradient-to-br from-[#bdbdbd] to-[#4a4a4a]",
        "shadow-[0_0_12px_rgba(255,255,255,0.15)] overflow-hidden backdrop-blur-md transition-all duration-300"
      )}
      style={{
        width: hovered ? "700px" : "400px", // wider on hover
        transition: "width 0.4s ease-in-out",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {/* Radial glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.08),_transparent_70%)] blur-sm pointer-events-none z-0"
      />

      {/* Sparkles */}
      {hovered && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 1.4,
                delay: i * 0.12,
                repeat: Infinity,
              }}
              className="absolute w-1.5 h-1.5 bg-white rounded-full blur-sm"
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex items-center gap-3">
        <FiMail className="text-white w-5 h-5" />
        <AnimatePresence mode="wait">
          {hovered ? (
            <motion.span
              key="email"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-white text-sm md:text-base font-medium"
            >
              racshanyaajagadish15@gmail.com
            </motion.span>
          ) : (
            <motion.span
              key="default"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ShinyText
                text="Say Hello ✨"
                speed={3}
                className="text-white text-sm md:text-base font-semibold"
              />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.a>
  )
}