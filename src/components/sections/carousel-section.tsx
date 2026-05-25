import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/files/7256efa0-bb2a-4f17-9ce8-fd365059155c.JPG",
  "https://cdn.poehali.dev/files/c44ad694-3ce6-47dc-adc1-a4e2d640cc55.JPG",
  "https://cdn.poehali.dev/files/c26195e4-d293-4eb4-b024-c0e9f610396d.JPG",
  "https://cdn.poehali.dev/files/56ca804e-5c9b-4c51-9d4a-981e735e5bdf.JPG",
  "https://cdn.poehali.dev/files/d839c5ca-ad51-4198-82c9-e0023be74e82.JPG",
]

export function CarouselSection() {
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Каждый образ — это <em className="italic">произведение искусства</em>.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-4"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[220px] md:w-[280px] h-[300px] md:h-[380px] rounded-2xl overflow-hidden shadow-xl"
              data-clickable
            >
              <img
                src={src}
                alt={`Работа ${(i % portfolioItems.length) + 1}`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
