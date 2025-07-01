'use client'

import { motion } from "framer-motion"
import Silk from "@/components/Silk/Silk"
import BlurText from "@/components/BlurText/BlurText";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export default function Banner() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Silk background layer */}
      <Silk
        speed={5}
        scale={1}
        color="#3b3b3b"
        noiseIntensity={1.5}
        rotation={0}
      />
      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <BlurText
          text="Racshanyaa Jagadish"
          delay={150}
          animateBy="letters"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-7xl mb-8 manrope bold"
        />
        <BlurText
          text="Full Stack Developer | Tech Enthusiast | University Sophmore"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl mb-8 manrope bold"
        />
      </div>
    </div>
  )
}
