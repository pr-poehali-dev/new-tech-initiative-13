import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

const commanders = [
  { name: "Георгий Жуков", role: "Маршал Советского Союза", note: "4 Звезды Героя" },
  { name: "Константин Рокоссовский", role: "Маршал СССР и Польши", note: "Операция «Багратион»" },
  { name: "Иван Конев", role: "Маршал Советского Союза", note: "Берлинская операция" },
  { name: "Александр Василевский", role: "Начальник Генерального штаба", note: "Сталинград и Курск" },
]

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side - Story */}
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-6xl lg:text-7xl">
                Память
                <br />
                живёт
                <br />
                <span className="text-foreground/40">в документах</span>
              </h2>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 md:space-y-4 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-base">
                Великая Отечественная война (22 июня 1941 — 9 мая 1945) — война Советского Союза и его союзников против нацистской Германии и сил «оси». Самый крупный и кровопролитный вооружённый конфликт в мировой истории.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-base">
                Восточный фронт — главная составная часть Второй мировой войны, завершившейся победой Красной армии и безоговорочной капитуляцией вооружённых сил Германии.
              </p>
            </div>

            <div
              className={`mt-6 flex flex-wrap gap-3 transition-all duration-700 md:mt-10 md:gap-4 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "750ms" }}
            >
              <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(4)}>
                Написать нам
              </MagneticButton>
              <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(1)}>
                Открыть архив
              </MagneticButton>
            </div>
          </div>

          {/* Right side - Commanders */}
          <div className="flex flex-col justify-center">
            <div
              className={`mb-4 transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
              }`}
            >
              <p className="font-mono text-xs text-foreground/50 uppercase tracking-widest">/ Командующие</p>
            </div>
            <div className="space-y-3">
              {commanders.map((c, i) => (
                <div
                  key={i}
                  className={`group flex items-center justify-between border-b border-foreground/10 pb-3 transition-all duration-700 hover:border-foreground/25 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                  }`}
                  style={{ transitionDelay: `${200 + i * 130}ms` }}
                >
                  <div>
                    <div className="font-sans text-base font-light text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-xl">
                      {c.name}
                    </div>
                    <div className="font-mono text-xs text-foreground/50">{c.role}</div>
                  </div>
                  <div className="font-mono text-xs text-foreground/30 text-right">{c.note}</div>
                </div>
              ))}
            </div>

            {/* Mini stats */}
            <div
              className={`mt-6 flex gap-6 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "750ms" }}
            >
              {[
                { value: "1418", label: "дней войны" },
                { value: "27 млн", label: "погибших" },
                { value: "9 мая", label: "День Победы" },
              ].map((s, i) => (
                <div key={i} className="border-l border-foreground/20 pl-3">
                  <div className="font-sans text-lg font-light text-foreground md:text-2xl">{s.value}</div>
                  <div className="font-mono text-xs text-foreground/50">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
