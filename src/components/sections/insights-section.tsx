import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const tips = [
  {
    title: "Как подготовить кожу к макияжу",
    category: "Уход",
    image: "https://cdn.poehali.dev/files/c26195e4-d293-4eb4-b024-c0e9f610396d.JPG",
  },
  {
    title: "5 секретов стойкого свадебного образа",
    category: "Свадьба",
    image: "https://cdn.poehali.dev/files/c44ad694-3ce6-47dc-adc1-a4e2d640cc55.JPG",
  },
  {
    title: "Лифтинг-макияж: молодость без уколов",
    category: "Лифтинг",
    image: "https://cdn.poehali.dev/files/7256efa0-bb2a-4f17-9ce8-fd365059155c.JPG",
  },
  {
    title: "Трендовый вечерний макияж 2025",
    category: "Тренды",
    image: "https://cdn.poehali.dev/files/d839c5ca-ad51-4198-82c9-e0023be74e82.JPG",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="bg-background px-6 py-24" onMouseMove={handleMouseMove}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-xs uppercase tracking-[0.3em] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Советы и вдохновение
        </motion.p>

        <div className="divide-y divide-border">
          {tips.map((tip, i) => (
            <motion.div
              key={i}
              className="group flex items-center justify-between py-6 relative cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ paddingLeft: 16, paddingRight: 16 }}
              data-clickable
            >
              <div className="flex-1">
                <span className="text-xs text-primary/70 uppercase tracking-widest">{tip.category}</span>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors duration-300">
                  {tip.title}
                </h3>
              </div>
              <Icon name="ArrowRight" size={18} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-4" />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="fixed pointer-events-none z-50 w-[180px] md:w-[260px] rounded-2xl overflow-hidden shadow-2xl hidden md:block"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + 24,
                y: mousePosition.y - 120,
              }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={tips[hoveredIndex].image}
                alt={tips[hoveredIndex].title}
                className="w-full h-[220px] object-cover object-top"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
