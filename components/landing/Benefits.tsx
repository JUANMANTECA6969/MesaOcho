import Image from "next/image"
import { CompassIcon, SparklesIcon, UtensilsIcon } from "lucide-react"

import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

const benefits = [
  {
    icon: CompassIcon,
    title: "Sal de tu burbuja",
    text: "Una arquitecta, un chef jubilado, una investigadora recién llegada de Lisboa. Gente que tu algoritmo jamás te habría puesto delante.",
  },
  {
    icon: UtensilsIcon,
    title: "Se come de lujo",
    text: "Restaurantes de barrio con alma y menús de temporada. Porque una buena charla con hambre es solo una queja educada.",
  },
  {
    icon: SparklesIcon,
    title: "Adiós al sofá-serie-cama",
    text: "Un martes cualquiera se convierte en la anécdota del mes. Lo único que tienes que decidir es qué ponerte (y eso ya es bastante).",
  },
]

export function Benefits() {
  return (
    <section className="px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative aspect-[4/5] -rotate-2 overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80"
            alt="Grupo de personas brindando durante una cena"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </Reveal>
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="¿Por qué ir?"
              title="Lo que te llevas a casa (aparte de las sobras)"
              className="text-left lg:mx-0"
            />
          </Reveal>
          <ul className="mt-12 space-y-10">
            {benefits.map((b, i) => (
              <li key={b.title}>
                <Reveal delay={i * 0.1} className="flex gap-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rotate-3 rounded-2xl bg-olive text-olive-foreground">
                    <b.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold">{b.title}</h3>
                    <p className="mt-2 text-pretty text-muted-foreground">
                      {b.text}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
