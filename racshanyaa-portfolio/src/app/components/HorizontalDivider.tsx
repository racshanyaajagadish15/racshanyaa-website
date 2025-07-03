import { motion } from "framer-motion"

export default function HorizontalDivider() {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "80%", opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="h-[2px] mx-auto bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full relative my-12"
    >
      <motion.div
        className="w-4 h-4 bg-cyan-400 rounded-full absolute top-1/2 -translate-y-1/2 shadow-lg"
        animate={{ x: ["0%", "90%", "0%"] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}
