import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

// Giro de cada foto, estilo polaroid sobre la mesa
const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-1", "rotate-1"]

// Placeholders de Unsplash: sustituir por fotos propias de los restaurantes
const photos = [
  { id: "photo-1517248135467-4c7edcad34c4", alt: "Comedor de restaurante con luz cálida", ratio: 4 / 5 },
  { id: "photo-1504674900247-0877df9cc836", alt: "Plato de alta cocina", ratio: 4 / 5 },
  { id: "photo-1510812431401-41d2bd2722f3", alt: "Copas de vino tinto sobre la mesa", ratio: 4 / 5 },
  { id: "photo-1559339352-11d035aa65de", alt: "Mesa preparada con velas al anochecer", ratio: 4 / 5 },
  { id: "photo-1555396273-367ea4eb4db5", alt: "Interior íntimo de un restaurante", ratio: 4 / 5 },
  { id: "photo-1540189549336-e6e99c3679fe", alt: "Platos de temporada para compartir", ratio: 4 / 5 },
]

export function Gallery() {
  return (
    <section id="espacios" className="scroll-mt-16 bg-secondary/60 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Spoiler visual"
            title="Luz bajita, mesa llenita"
            intro="Restaurantes de barrio, salones escondidos y algún sitio que ni Google Maps sabe que existe. Menús de temporada para compartir (o fingir que compartes)."
          />
        </Reveal>
        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {photos.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08} className={tilts[i]}>
              <AspectRatio
                ratio={p.ratio}
                className="group overflow-hidden rounded-2xl border-[6px] border-white bg-muted shadow-lg"
              >
                <Image
                  src={`https://images.unsplash.com/${p.id}?auto=format&fit=crop&w=900&q=75`}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </AspectRatio>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
