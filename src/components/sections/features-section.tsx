import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function GlowFace() {
  const [glow, setGlow] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlow((prev) => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        className="relative w-24 h-24 rounded-full overflow-hidden"
        animate={{ boxShadow: glow ? "0 0 40px 12px hsl(340 35% 52% / 0.35)" : "0 0 0px 0px hsl(340 35% 52% / 0)" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <img
          src="https://cdn.poehali.dev/files/c26195e4-d293-4eb4-b024-c0e9f610396d.JPG"
          alt="Пример макияжа"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>
    </div>
  )
}

function BrushAnimation() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  const colors = ["bg-rose-200", "bg-amber-200", "bg-pink-300", "bg-red-200"]
  const labels = ["основа", "румяна", "хайлайтер", "губы"]

  return (
    <div className="h-full flex flex-col items-center justify-center gap-3">
      <div className="flex gap-2">
        {colors.map((color, i) => (
          <motion.div
            key={i}
            className={`w-7 h-7 rounded-full ${color}`}
            animate={{ scale: step === i ? 1.4 : 1, opacity: step === i ? 1 : 0.4 }}
            transition={{ duration: 0.4 }}
          />
        ))}
      </div>
      <motion.span
        key={step}
        className="text-xs text-muted-foreground uppercase tracking-widest"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {labels[step]}
      </motion.span>
    </div>
  )
}

function TimeIndicator() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => setProgress(100), 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <span className="text-3xl md:text-4xl font-serif text-foreground">60 мин</span>
      <span className="text-xs text-muted-foreground uppercase tracking-widest">средний макияж</span>
      <div className="w-full max-w-[120px] h-1.5 bg-foreground/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-xs uppercase tracking-[0.3em] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Почему выбирают меня
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 — Natural Beauty */}
          <motion.div
            className="bg-secondary rounded-2xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <GlowFace />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Натуральная красота</h3>
              <p className="text-muted-foreground text-sm mt-1">Подчёркиваю индивидуальность, не скрываю её.</p>
            </div>
          </motion.div>

          {/* Card 2 — Professional palette */}
          <motion.div
            className="bg-secondary rounded-2xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <BrushAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Люксовая косметика</h3>
              <p className="text-muted-foreground text-sm mt-1">Профессиональные средства премиум-брендов.</p>
            </div>
          </motion.div>

          {/* Card 3 — Speed */}
          <motion.div
            className="bg-secondary rounded-2xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <TimeIndicator />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Выезд на дом</h3>
              <p className="text-muted-foreground text-sm mt-1">Приеду к вам — в пределах МКАД и за его пределами.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
