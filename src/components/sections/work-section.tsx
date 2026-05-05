import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Архив
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Ключевые сражения 1941–1945</p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {[
            {
              number: "01",
              title: "Битва за Москву",
              category: "30 сентября 1941 — 7 января 1942 · Первая крупная победа СССР",
              year: "1941–42",
              direction: "left",
            },
            {
              number: "02",
              title: "Битва за Сталинград",
              category: "17 июля 1942 — 2 февраля 1943 · Коренной перелом в войне",
              year: "1942–43",
              direction: "right",
            },
            {
              number: "03",
              title: "Курская битва",
              category: "5 июля — 23 августа 1943 · Крупнейшее танковое сражение в истории",
              year: "1943",
              direction: "left",
            },
            {
              number: "04",
              title: "Операция «Багратион»",
              category: "23 июня — 19 августа 1944 · Освобождение Белоруссии",
              year: "1944",
              direction: "right",
            },
            {
              number: "05",
              title: "Берлинская операция",
              category: "16 апреля — 2 мая 1945 · Штурм Берлина и Победа",
              year: "1945",
              direction: "left",
            },
          ].map((project, i) => (
            <ProjectCard key={i} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: { number: string; title: string; category: string; year: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return project.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-6 transition-all duration-700 hover:border-foreground/20 md:py-8 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "85%" : "90%",
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {project.number}
        </span>
        <div>
          <h3 className="mb-1 font-sans text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50 md:text-sm">{project.category}</p>
        </div>
      </div>
      <span className="font-mono text-xs text-foreground/30 md:text-sm">{project.year}</span>
    </div>
  )
}