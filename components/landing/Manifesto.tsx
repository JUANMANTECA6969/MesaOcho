import { Reveal } from "./Reveal"

const negations = [
  "No es una cita.",
  "No es networking.",
  "No es otra app (bueno, un poco).",
]

/** Bloque tipográfico: lo que no somos y lo que sí. */
export function Manifesto() {
  return (
    <section id="concepto" className="scroll-mt-16 px-4 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="inline-block -rotate-2 font-hand text-3xl text-primary">
            Lo que somos (y lo que no)
          </p>
        </Reveal>
        <div className="mt-6 space-y-2">
          {negations.map((line, i) => (
            <Reveal key={line} delay={i * 0.12}>
              <p className="text-4xl leading-tight font-bold tracking-tight text-muted-foreground/50 line-through decoration-primary decoration-[5px] md:text-6xl">
                {line}
              </p>
            </Reveal>
          ))}
          <Reveal delay={0.4}>
            <p className="pt-4 text-4xl leading-tight font-bold tracking-tight md:text-6xl">
              Es una mesa.{" "}
              <span className="marker">Y una charla de las buenas.</span>
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.5}>
          <div className="mt-14 grid gap-8 text-lg text-pretty text-muted-foreground md:grid-cols-2">
            <p>
              Nos pasamos el día hablando con pantallas y las noches con las
              mismas cuatro personas (a las que queremos, ojo). Mesa Ocho existe
              para romper el bucle: una cena, ocho sillas y cero caras conocidas.
            </p>
            <p>
              No venimos a buscarte pareja ni clientes. Queremos que vuelvas a
              casa con una idea nueva, una recomendación de libro y la sensación
              de que la ciudad es un pañuelo. Un pañuelo muy simpático.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
