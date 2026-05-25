import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const footerLinks = [
  { label: "Портфолио", href: "#" },
  { label: "Услуги", href: "#" },
  { label: "Цены", href: "#" },
  { label: "Контакты", href: "#" },
]

export function FooterSection() {
  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      {/* Gradient blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-200 via-primary/20 to-amber-100 opacity-50 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          {/* Logo and links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-8xl font-serif text-foreground leading-none">
                LUMIÈRE
              </h2>
              <p className="text-muted-foreground text-sm mt-2 tracking-wider">by Alexandra</p>
            </motion.div>

            <nav className="flex flex-wrap gap-6 mt-8">
              {footerLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  data-clickable
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Contact block */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-muted-foreground text-sm mb-6">Записывайтесь — отвечу в течение часа.</p>
            <div className="space-y-4">
              <a
                href="tel:+79881388714"
                className="flex items-center gap-3 group"
                data-clickable
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name="Phone" size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Телефон / WhatsApp</p>
                  <p className="text-foreground font-medium text-sm">+7 988 138 87 14</p>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name="User" size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Визажист</p>
                  <p className="text-foreground font-medium text-sm">Александра · Москва</p>
                </div>
              </div>
            </div>

            <a
              href="tel:+79881388714"
              className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors"
              data-clickable
            >
              <Icon name="Phone" size={15} />
              Записаться на макияж
            </a>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">© 2025 LUMIÈRE by Alexandra. Все права защищены.</p>
          <p className="text-muted-foreground text-xs">Москва · Выезд в пределах МКАД и за МКАД</p>
        </div>
      </div>
    </footer>
  )
}
