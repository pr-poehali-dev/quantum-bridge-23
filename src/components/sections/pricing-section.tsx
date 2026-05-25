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
          {services.map((service, i) => (
            <motion.div
              key={i}
              className={`relative bg-background rounded-2xl p-8 flex flex-col ${service.popular ? "ring-2 ring-primary md:col-span-1" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              data-clickable
            >
              {service.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full tracking-wider">
                  Популярный
                </span>
              )}

              <div className="pb-6 border-b border-border/60">
                <h3 className="font-serif text-xl text-foreground">{service.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-serif text-foreground">{service.price}</span>
                  <span className="text-muted-foreground text-sm"> руб.</span>
                </div>
                <p className="text-muted-foreground text-xs mt-2 leading-relaxed">{service.description}</p>
              </div>

              <ul className="mt-5 space-y-2.5 flex-1">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-foreground">
                    <Icon name="Check" size={14} className="text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="tel:+79881388714"
                className={`w-full mt-7 py-3 px-6 rounded-xl text-sm font-medium transition-all text-center block ${
                  service.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-accent border border-border"
                }`}
                data-clickable
              >
                Записаться
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
