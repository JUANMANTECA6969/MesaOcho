import { ClipboardListIcon, MapPinIcon, UsersIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

const steps = [
  {
    icon: ClipboardListIcon,
    title: "Rellenas un test",
    text: "Diez minutos sobre lo que te flipa: temas, libros, manías. Nada de fotos ni de «¿dónde te ves en cinco años?». Lo prometemos.",
  },
  {
    icon: UsersIcon,
    title: "Jugamos al Tetris humano",
    text: "Montamos cada mesa a mano, como quien hace una playlist: edades, oficios y orígenes mezclados, con la química justa para que nadie mire el móvil.",
  },
  {
    icon: MapPinIcon,
    title: "Dirección secreta",
    text: "48 horas antes te llega la dirección. Sí, como en una peli de espías, pero con croquetas. Tú llegas, te sientas y el resto fluye.",
  },
]

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-16 bg-secondary/60 px-4 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="¿Y esto cómo va?"
            title="Tres pasos y a cenar"
            intro="Nosotros hacemos el trabajo pesado. Tú solo tienes que aparecer con hambre y curiosidad (en ese orden o en el contrario)."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 0.12}
              className={i % 2 ? "md:rotate-1" : "md:-rotate-1"}
            >
              <Card className="h-full rounded-3xl border-2 border-foreground/10 py-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader className="px-8">
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rotate-3 rounded-2xl bg-sun text-foreground">
                      <step.icon className="size-5" />
                    </span>
                    <span className="font-hand text-6xl text-primary/40">
                      0{i + 1}
                    </span>
                  </div>
                  <CardTitle className="mt-6 font-heading text-2xl font-bold">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8">
                  <CardDescription className="text-base leading-relaxed">
                    {step.text}
                  </CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
