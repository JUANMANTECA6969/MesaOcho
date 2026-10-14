import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

const faqs = [
  {
    q: "¿Y si hay silencios incómodos?",
    a: "Casi nunca pasa, pero tenemos plan B: un anfitrión discreto, un tema de conversación y tarjetas con preguntas que nadie te había hecho. Spoiler: a la segunda copa ya no hacen falta.",
  },
  {
    q: "Tengo alergias o sigo una dieta concreta. ¿Puedo venir?",
    a: "¡Claro! Dínoslo al reservar y el restaurante adapta cada plato: vegetariano, vegano, sin gluten o lo que necesites. Odiar el cilantro también lo respetamos.",
  },
  {
    q: "¿Puedo ir con un amigo o mi pareja?",
    a: "La gracia es llegar solo, así que os separamos. Si os apuntáis los dos, cenáis en mesas distintas la misma noche y luego comparáis quién se lo pasó mejor (pista: los dos).",
  },
  {
    q: "¿Esto es Tinder con mantel?",
    a: "Nope. Juntamos gente por lo que les interesa, no por cómo salen en una foto. Si surge el amor, genial, pero ni te lo prometemos ni te lo cobramos.",
  },
  {
    q: "¿Qué incluye el precio?",
    a: "Menú degustación de tres a cinco pases, maridaje de vino (o alternativa sin alcohol), agua, café y la sobremesa sin prisas. Las copas de después ya corren de tu cuenta.",
  },
  {
    q: "¿Y si no puedo asistir?",
    a: "Cancela gratis hasta 72 horas antes. Después la silla ya no se devuelve, pero puedes pasársela a alguien (si rellena el test, que aquí no se cuela nadie).",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-16 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading eyebrow="Dudas existenciales" title="Lo que todo el mundo pregunta" />
        </Reveal>
        <Reveal delay={0.15}>
          <Accordion className="mt-14 border-y">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="py-6 text-left font-heading text-lg font-bold md:text-xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
