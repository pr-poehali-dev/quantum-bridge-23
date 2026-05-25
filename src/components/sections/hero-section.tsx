import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const images = [
  "https://cdn.poehali.dev/files/c44ad694-3ce6-47dc-adc1-a4e2d640cc55.JPG",
  "https://cdn.poehali.dev/files/7256efa0-bb2a-4f17-9ce8-fd365059155c.JPG",
  "https://cdn.poehali.dev/files/d839c5ca-ad51-4198-82c9-e0023be74e82.JPG",
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const rotate1 = useTransform(scrollYProgress, [0, 0.5], [0, -22])
  const rotate3 = useTransform(scrollYProgress, [0, 0.5], [0, 22])
  const x1 = useTransform(scrollYProgress, [0, 0.5], [0, -320])
  const x3 = useTransform(scrollYProgress, [0, 0.5], [0, 320])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 140])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center overflow-hidden bg-background"
    >
      {/* Title block — at top, clearly separated from images */}
      <motion.div
        className="relative z-20 text-center px-6 pt-16 pb-8"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        <p className="text-xs uppercase tracking-[0.4em] text-primary/60 mb-3 font-sans font-light">
          визажист · москва
        </p>
        <h1
          className="text-6xl md:text-8xl lg:text-[108px] font-serif leading-none select-none"
          style={{
            background: "linear-gradient(135deg, #c9907a 0%, #e8b8c5 40%, #d4a5b8 70%, #b87e8a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          LUMIÈRE
        </h1>
        <p className="text-sm tracking-[0.28em] text-foreground/40 mt-3 font-sans font-light">
          by Alexandra
        </p>
      </motion.div>

      {/* Images — clearly below title */}
      <div className="relative flex items-center justify-center flex-1 w-full min-h-[400px]">
        <motion.div
          className="absolute w-[200px] md:w-[270px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl"
          style={{ rotate: rotate1, x: x1, y, zIndex: 1 }}
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={images[0]} alt="Работа визажиста 1" className="w-full h-full object-cover object-top" loading="eager" />
        </motion.div>

        <motion.div
          className="relative w-[200px] md:w-[270px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
          style={{ y, zIndex: 2 }}
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={images[1]} alt="Работа визажиста 2" className="w-full h-full object-cover object-top" loading="eager" />
        </motion.div>

        <motion.div
          className="absolute w-[200px] md:w-[270px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl"
          style={{ rotate: rotate3, x: x3, y, zIndex: 1 }}
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={images[2]} alt="Работа визажиста 3" className="w-full h-full object-cover object-top" loading="eager" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="relative z-20 pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-2 rounded-full bg-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}