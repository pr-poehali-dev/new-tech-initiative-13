import { useReveal } from "@/hooks/use-reveal"

const videos = [
  {
    type: "youtube",
    id: "07xSqqfIGjs",
    title: "Великая Отечественная война",
    description: "Документальная хроника 1941–1945",
    num: "01",
  },
  {
    type: "ok",
    id: "5193022048828",
    title: "Великая Отечественная. 1 серия",
    description: "«22 июня 1941» — советско-американский документальный сериал, 1978",
    num: "02",
  },
]

export function VideoSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Хроника
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Видеодокументы эпохи</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video, i) => (
            <div
              key={video.id}
              className={`group transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : i % 2 === 0
                  ? "-translate-x-12 opacity-0"
                  : "translate-x-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-sm border border-foreground/10 bg-foreground/5 transition-all duration-300 group-hover:border-foreground/20">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src={
                      video.type === "youtube"
                        ? `https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`
                        : `https://ok.ru/videoembed/${video.id}`
                    }
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                    style={{ border: "none" }}
                  />
                </div>
              </div>
              <div className="mt-3 flex items-start justify-between">
                <div>
                  <h3 className="font-sans text-base font-light text-foreground md:text-lg">{video.title}</h3>
                  <p className="font-mono text-xs text-foreground/50">{video.description}</p>
                </div>
                <span className="font-mono text-xs text-foreground/30">{video.num}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
