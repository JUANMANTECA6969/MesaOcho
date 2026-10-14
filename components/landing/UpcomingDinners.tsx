"use client"

import { useState } from "react"
import { CalendarIcon, MapPinIcon, UsersIcon } from "lucide-react"
import { toast } from "sonner"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

type Dinner = {
  id: string
  city: string
  neighborhood: string
  date: string
  theme: string
  price: number
  seatsLeft: number
}

// Datos de ejemplo: en producción vendrían de un CMS o API
const dinners: Dinner[] = [
  { id: "mad-1", city: "Madrid", neighborhood: "Barrio de las Letras", date: "Jueves 23 de octubre · 21:00", theme: "Ciudades que nos cambiaron 🗺️", price: 55, seatsLeft: 2 },
  { id: "bcn-1", city: "Barcelona", neighborhood: "Gràcia", date: "Viernes 24 de octubre · 21:30", theme: "Oficios que ya no existen 📼", price: 55, seatsLeft: 5 },
  { id: "vlc-1", city: "Valencia", neighborhood: "Ruzafa", date: "Miércoles 29 de octubre · 21:00", theme: "Cosas que aprendimos tarde 🤦", price: 49, seatsLeft: 6 },
  { id: "mad-2", city: "Madrid", neighborhood: "Chamberí", date: "Sábado 1 de noviembre · 21:30", theme: "Mesa abierta (de lo que surja) 🎲", price: 59, seatsLeft: 1 },
  { id: "sev-1", city: "Sevilla", neighborhood: "Alameda", date: "Jueves 6 de noviembre · 21:30", theme: "Canciones que nos marcaron 🎶", price: 49, seatsLeft: 4 },
  { id: "bcn-2", city: "Barcelona", neighborhood: "Poblenou", date: "Viernes 7 de noviembre · 21:00", theme: "Ciencia de sobremesa 🔬", price: 59, seatsLeft: 0 },
]

const TOTAL_SEATS = 8

export function UpcomingDinners() {
  // Cena seleccionada para el panel de reserva (null = cerrado)
  const [selected, setSelected] = useState<Dinner | null>(null)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    // Simulación de envío; sustituir por una Server Action o llamada a API
    await new Promise((r) => setTimeout(r, 900))
    setSubmitting(false)
    toast.success("¡Hecho! Ya casi hueles las croquetas 🎉", {
      description: `Te mandamos el test para la cena de ${selected?.city}. Sin preguntas trampa.`,
    })
    setSelected(null)
  }

  return (
    <section id="proximas-cenas" className="scroll-mt-16 px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Próximas cenas"
            title="Elige tu noche (y tu excusa para salir)"
            intro="Cada mesa tiene un tema para romper el hielo, por si acaso. El precio incluye menú degustación, vino y sobremesa sin que nadie te meta prisa."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dinners.map((d, i) => {
            const soldOut = d.seatsLeft === 0
            const lastSeats = !soldOut && d.seatsLeft <= 2
            return (
              <Reveal key={d.id} delay={(i % 3) * 0.1}>
                <Card
                  className={
                    "h-full rounded-3xl border-2 border-foreground/10 transition-all duration-300 hover:-translate-y-2 hover:-rotate-1 hover:shadow-xl " +
                    (soldOut ? "opacity-60" : "")
                  }
                >
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                        {d.city}
                      </p>
                      {lastSeats && <Badge className="-rotate-3 bg-sun text-foreground">¡Vuelan! 🔥</Badge>}
                      {soldOut && <Badge variant="secondary">Llenito</Badge>}
                      {!soldOut && !lastSeats && (
                        <Badge variant="outline" className="border-olive/40 text-olive">
                          Hay sitio
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="mt-3 font-heading text-2xl leading-snug font-bold">
                      {d.theme}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <CalendarIcon className="size-4" /> {d.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPinIcon className="size-4" /> {d.neighborhood} · dirección
                      top secret 🤫
                    </p>
                    <p className="flex items-center gap-2">
                      <UsersIcon className="size-4" /> {d.seatsLeft} de {TOTAL_SEATS}{" "}
                      sillas libres
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto flex items-center justify-between">
                    <span className="font-heading text-3xl font-bold">{d.price} €</span>
                    <Button
                      size="lg"
                      className="rounded-full px-5"
                      disabled={soldOut}
                      onClick={() => setSelected(d)}
                    >
                      {soldOut ? "Llegaste tarde 😅" : "¡Me la pido!"}
                    </Button>
                  </CardFooter>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>

      {/* Panel lateral de reserva */}
      <Sheet open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <SheetContent className="w-full overflow-y-auto sm:max-w-md">
          <SheetHeader className="p-6 pb-0">
            <SheetTitle className="font-heading text-2xl">Pídete la silla 🪑</SheetTitle>
            <SheetDescription>
              {selected && `${selected.city} · ${selected.date} · ${selected.price} €`}
              <br />
              No te cobramos ni un euro hasta confirmar que encajas. Palabrita.
            </SheetDescription>
          </SheetHeader>
          <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-5 p-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" name="name" required autoComplete="given-name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="age">Edad (no la diremos en voz alta)</Label>
              <Input id="age" name="age" type="number" min={18} max={99} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="topic">¿De qué podrías hablar durante horas?</Label>
              <Textarea
                id="topic"
                name="topic"
                rows={3}
                placeholder="Arquitectura brutalista, ultramaratones, si la tortilla lleva cebolla…"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="diet">Alergias o restricciones alimentarias</Label>
              <Input id="diet" name="diet" placeholder="Opcional. Odiar el cilantro también cuenta." />
            </div>
            <SheetFooter className="mt-auto p-0">
              <Button type="submit" size="lg" className="h-11 w-full rounded-full" disabled={submitting}>
                {submitting ? "Enviando con cariño…" : "¡Quiero mi silla!"}
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </section>
  )
}
