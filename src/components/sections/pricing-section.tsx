import { useState } from "react"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const services = [
  {
    name: "Дневной",
    price: "3 500",
    description: "Лёгкий, свежий образ с акцентом на естественную красоту",
    features: ["Стойкое покрытие", "Натуральные текстуры", "Коррекция тона", "До 8 часов стойкости"],
  },
  {
    name: "Свадебный",
    price: "5 000",
    description: "Нежный, утончённый и стойкий макияж в самый важный день",
    features: ["Пробный макияж", "Стойкость весь день", "Фиксирующие спреи", "Фотогеничный результат"],
    popular: true,
  },
  {
    name: "Вечерний",
    price: "3 500",
    description: "Выразительный образ для особенных событий",
    features: ["Дымчатый взгляд", "Яркий акцент", "Стойкое покрытие", "До 10 часов стойкости"],
  },
  {
    name: "Лифтинг",
    price: "3 500",
    description: "Техника визуального омоложения и лёгкого лифтинга лица",
    features: ["Лёгкие текстуры", "Деликатная коррекция", "Эффект свежести", "Anti-age техника"],
  },
  {
    name: "Фотосессия",
    price: "5 000",
    description: "Макияж + лёгкая укладка для съёмки",
    features: ["Макияж + укладка", "Стойкость под свет", "Коррекция на площадке", "Фотогеничный результат"],
  },
]

export function PricingSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-xs uppercase tracking-[0.3em] mb-4">Прайс-лист</p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Стоимость услуг</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm">
            Выезд к клиенту в пределах МКАД — <span className="text-foreground font-medium">+2 000 руб.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const isActive = activeIndex === i
            return (
            <motion.div
              key={i}
              className={`relative rounded-2xl p-8 flex flex-col cursor-pointer transition-colors duration-300 ${
                isActive
                  ? "bg-primary text-primary-foreground ring-2 ring-primary/60"
                  : service.popular
                  ? "bg-background ring-2 ring-primary"
                  : "bg-background"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => setActiveIndex(isActive ? null : i)}
              data-clickable
            >
              {service.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full tracking-wider">
                  Популярный
                </span>
              )}

              <div className={`pb-6 border-b ${isActive ? "border-white/30" : "border-border/60"}`}>
                <h3 className={`font-serif text-xl ${isActive ? "text-white" : "text-foreground"}`}>{service.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className={`text-4xl font-serif ${isActive ? "text-white" : "text-foreground"}`}>{service.price}</span>
                  <span className={`text-sm ${isActive ? "text-white/70" : "text-muted-foreground"}`}> руб.</span>
                </div>
                <p className={`text-xs mt-2 leading-relaxed ${isActive ? "text-white/70" : "text-muted-foreground"}`}>{service.description}</p>
              </div>

              <ul className="mt-5 space-y-2.5 flex-1">
                {service.features.map((feature, j) => (
                  <li key={j} className={`flex items-center gap-3 ${isActive ? "text-white" : "text-foreground"}`}>
                    <Icon name="Check" size={14} className={`flex-shrink-0 ${isActive ? "text-white/80" : "text-primary"}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="tel:+79881388714"
                onClick={(e) => e.stopPropagation()}
                className={`w-full mt-7 py-3 px-6 rounded-xl text-sm font-medium transition-all text-center block ${
                  isActive
                    ? "bg-white/20 text-white hover:bg-white/30 border border-white/30"
                    : service.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-accent border border-border"
                }`}
                data-clickable
              >
                Записаться
              </a>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}