'use client'

import Image from "next/image"
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard"
import { CardContent } from "@/components/ui/card"
import Beams from "@/components/Beams/Beams"
import ShinyText from "@/components/ShinyText/ShinyText"
import { motion } from "framer-motion"
import ContactButton from "./ContactButton"
import { Contact } from "lucide-react"

export default function ProfileSection() {
  return (
    <div className="relative flex min-h-screen justify-center items-center px-4 bg-black">
      {/* Background Beams */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#d9d9d9"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      {/* Animated Section Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
        className="relative z-10"
      >
        <SpotlightCard
          className="
            relative 
            bg-black 
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
            {/* Profile Image */}
            <div className="w-40 h-48 md:w-56 md:h-64 rounded-md overflow-hidden shadow-lg border-4 border-white/30">
              <Image
                src="/profile.jpg"
                alt="Racshanyaa Jagadish"
                width={224}
                height={256}  // Adjust height accordingly for rectangle
                className="object-cover w-full h-full"
                style={{ objectPosition: "center 25%" }}
                priority
              />
            </div>

            {/* Text Info */}
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-manrope">
                Hello, I'm Racshanyaa! 👋
              </h2>
              <p className="text-lg md:text-xl leading-relaxed font-light mb-6">
                I'm just a girl who loves coding and building apps!
                My purpose is to create technology that genuinely improves people’s lives—whether by making tasks easier, information more accessible, or experiences more enjoyable. 
                I’m driven by the belief that well-crafted software can be a powerful tool for positive impact!
                <br></br>
                <i>My social links are on the top-right, or feel free to say hello by clicking below!</i>
              </p>

              {/* Say Hello Button */}
             <div className="flex justify-center md:justify-start">
               <ContactButton />
              </div>
            </div>
          </CardContent>
        </SpotlightCard>
      </motion.div>
    </div>
  )
}
