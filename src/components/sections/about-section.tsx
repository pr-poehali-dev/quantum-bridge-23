import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Icon from "@/components/ui/icon"

const stats = [
  { value: "5+", label: "лет опыта" },
  { value: "500+", label: "клиентов" },
  { value: "100+", label: "свадеб" },
]

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section ref={containerRef} className="bg-secondary px-6 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-xs uppercase tracking-[0.3em] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Обо мне
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photo */}
          <motion.div
            className="relative"
            style={{ y: imgY }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-sm mx-auto md:mx-0">
              <img
                src="https://cdn.poehali.dev/projects/dde6239f-ccba-4134-8d6f-90300e4ade7a/bucket/c29e8128-df7f-489c-80b5-1442774d73d0.png"
                alt="Александра — визажист"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              {/* Soft overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 md:right-0 bg-background rounded-2xl px-5 py-4 shadow-lg border border-border/50"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="font-serif text-2xl text-primary leading-none">5+</p>
              <p className="text-xs text-muted-foreground mt-1">лет опыта</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6">
              Привет, я{" "}
              <em
                className="italic not-italic"
                style={{
                  background: "linear-gradient(135deg, #c9907a 0%, #e8b8c5 50%, #b87e8a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Александра
              </em>
            </h2>

            <div className="space-y-4 text-foreground/70 text-sm leading-relaxed">
              <p>
                Я профессиональный визажист с более чем 5-летним опытом работы в Москве. Моя страсть — раскрывать
                естественную красоту каждой женщины, создавая образы, которые отражают её внутренний мир.
              </p>
              <p>
                Работаю с люксовой косметикой премиальных брендов и постоянно совершенствую технику, следя за
                актуальными трендами. Специализируюсь на свадебном, вечернем и лифтинг-макияже.
              </p>
              <p>
                Выезжаю к клиентам на дом, в студию или на площадку. Каждый образ — это диалог, и я всегда слышу
                пожелания своих клиенток.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border/60">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <p className="font-serif text-3xl text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="tel:+79881388714"
              className="mt-10 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              data-clickable
            >
              <Icon name="Phone" size={15} />
              Записаться на макияж
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
