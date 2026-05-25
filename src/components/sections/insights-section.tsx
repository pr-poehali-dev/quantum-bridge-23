import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const tips = [
  {
    title: "Как подготовить кожу к макияжу",
    category: "Уход",
    image: "https://cdn.poehali.dev/files/c26195e4-d293-4eb4-b024-c0e9f610396d.JPG",
    content:
      "Идеальный макияж начинается с правильного ухода. За день до мероприятия сделайте лёгкий пилинг — это уберёт ороговевшие клетки. Утром нанесите увлажняющий крем и дайте ему полностью впитаться — минимум 20 минут перед нанесением тональной основы. Избегайте жирных кремов в день макияжа: они снижают стойкость и дают нежелательный блеск.",
  },
  {
    title: "5 секретов стойкого свадебного образа",
    category: "Свадьба",
    image: "https://cdn.poehali.dev/files/c44ad694-3ce6-47dc-adc1-a4e2d640cc55.JPG",
    content:
      "1. Праймер под основу — обязателен: выравнивает тон и удерживает макияж весь день. 2. Водостойкая тушь и подводка — слёзы радости не испортят образ. 3. Фиксирующий спрей в конце — закрепляет результат надолго. 4. Пробный макияж за 1–2 недели до свадьбы — убедитесь, что образ идеален. 5. Держите при себе блеск и пудру для лёгкой коррекции.",
  },
  {
    title: "Лифтинг-макияж: молодость без уколов",
    category: "Лифтинг",
    image: "https://cdn.poehali.dev/files/7256efa0-bb2a-4f17-9ce8-fd365059155c.JPG",
    content:
      "Лифтинг-макияж — техника, визуально подтягивающая черты лица без инъекций. Светлый хайлайтер на скулы и переносицу создаёт объём. Тёмный контуринг убирает лишнее под скулами. Стрелка с подъёмом в конце визуально поднимает уголки глаз. Используем лёгкие текстуры — никакого плотного перекрытия, только деликатная коррекция.",
  },
  {
    title: "Трендовый вечерний макияж 2025",
    category: "Тренды",
    image: "https://cdn.poehali.dev/files/d839c5ca-ad51-4198-82c9-e0023be74e82.JPG",
    content:
      "В 2025 году в тренде — насыщенные монохромные образы: один цвет на веки, щёки и губы одновременно. Популярны оттенки пыльной розы, терракота и бордо. Глянцевые веки в сочетании с матовой кожей смотрятся очень современно. Из техник: «мокрый» взгляд с блёстками в уголках и пигментный смоки без чётких границ.",
  },
]

export function InsightsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="bg-background px-6 py-24">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full group flex items-center justify-between py-6 text-left"
                data-clickable
              >
                <div className="flex-1 pr-4">
                  <span className="text-xs text-primary/70 uppercase tracking-widest">{tip.category}</span>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors duration-300">
                    {tip.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <Icon
                    name="Plus"
                    size={20}
                    className={`transition-colors duration-300 ${openIndex === i ? "text-primary" : "text-muted-foreground"}`}
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-5 items-start">
                      <img
                        src={tip.image}
                        alt={tip.title}
                        className="w-full h-[150px] object-cover object-top rounded-xl"
                        loading="lazy"
                      />
                      <p className="text-foreground/70 text-sm leading-relaxed">{tip.content}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}