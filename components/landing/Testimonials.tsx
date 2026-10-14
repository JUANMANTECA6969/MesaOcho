import { QuoteIcon } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

// Testimonios de ejemplo (sustituir por reales antes del lanzamiento)
const testimonials = [
  {
    quote:
      "Llegué con una excusa preparada para irme en el postre. Cerramos el restaurante a la una y media y ahora tenemos un grupo de WhatsApp que echa humo.",
    name: "Lucía, 34",
    role: "Arquitecta · Madrid",
  },
  {
    quote:
      "Llevaba un año en Barcelona hablando solo con mi casero. Esa noche hablé de física cuántica, de mi abuela y de vinos naranjas. En ese orden.",
    name: "Thomas, 41",
    role: "Ingeniero expatriado · Barcelona",
  },
  {
    quote:
      "Nadie te suelta el «¿y tú a qué te dedicas?». Te preguntan qué te tiene obsesionada últimamente. Hablé 20 minutos de mi masa madre y nadie huyó.",
    name: "Marta, 29",
    role: "Periodista · Valencia",
  },
  {
    quote:
      "Fui por curiosidad y ya llevo tres. En casa empiezan a sospechar que tengo una doble vida. La tengo: se llama sobremesa.",
    name: "Javier, 47",
    role: "Médico · Sevilla",
  },
]

const navClass =
  "hidden border-background/20 bg-transparent text-background hover:bg-background/10 hover:text-background md:inline-flex"

export function Testimonials() {
  return (
    <section className="bg-foreground px-4 py-24 text-background md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="Cotilleos de sobremesa"
            title="Lo que nos cuentan al día siguiente"
            intro="Desliza para leer las reseñas. No, no les hemos pagado. Bueno, les invitamos al café."
            introClassName="text-background/60"
          />
        </Reveal>
        <Reveal delay={0.2}>
          <Carousel
            opts={{ loop: true, align: "start" }}
            className="mx-auto mt-16 md:w-[calc(100%-7rem)]"
          >
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="md:basis-1/2">
                  <figure className="flex h-full flex-col rounded-3xl border border-background/10 bg-background/5 p-8 transition-transform hover:-rotate-1">
                    <QuoteIcon className="size-8 text-sun" />
                    <blockquote className="mt-6 flex-1 text-xl leading-relaxed font-medium text-pretty md:text-2xl">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-8 text-sm">
                      <span className="font-hand text-2xl text-sun">{t.name}</span>
                      <span className="block text-background/60">{t.role}</span>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className={navClass} />
            <CarouselNext className={navClass} />
          </Carousel>
        </Reveal>
      </div>
    </section>
  )
}
