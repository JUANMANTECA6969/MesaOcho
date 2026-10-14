"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const legal = [
  { href: "#", label: "Aviso legal" },
  { href: "#", label: "Privacidad" },
  { href: "#", label: "Cookies" },
  { href: "#", label: "Términos" },
]

export function Footer() {
  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    // Simulación: conectar con el proveedor de newsletter
    toast.success("¡Apuntado! 📬", {
      description: `Te avisamos en cuanto Mesa Ocho aterrice en ${data.get("city") || "tu ciudad"}. Ve calentando.`,
    })
    e.currentTarget.reset()
  }

  return (
    <footer className="bg-foreground px-4 pt-20 pb-10 text-background md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-heading text-3xl font-bold">
              Mesa <span className="font-hand text-4xl text-sun">Ocho</span>
            </p>
            <p className="mt-4 max-w-sm text-background/60">
              Cenas para ocho desconocidos (que dejan de serlo hacia el segundo plato). Madrid, Barcelona, Valencia y Sevilla.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">¿No estamos en tu ciudad? Fallo nuestro.</h2>
            <p className="mt-2 text-sm text-background/60">
              Déjanos tu email y dinos dónde. Abrimos donde más pesados os ponéis.
            </p>
            <form onSubmit={handleSubscribe} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Input
                name="email"
                type="email"
                required
                placeholder="tu@email.com"
                aria-label="Email"
                className="h-11 border-background/20 bg-background/5 text-background placeholder:text-background/40"
              />
              <Input
                name="city"
                placeholder="Tu ciudad"
                aria-label="Ciudad"
                className="h-11 border-background/20 bg-background/5 text-background placeholder:text-background/40 sm:max-w-40"
              />
              <Button type="submit" size="lg" className="h-11 rounded-full px-5">
                ¡Venid ya!
              </Button>
            </form>
          </div>
        </div>
        <Separator className="my-10 bg-background/10" />
        <div className="flex flex-col gap-4 text-sm text-background/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Mesa Ocho. Hecho con hambre y para sobremesas larguísimas.</p>
          <ul className="flex flex-wrap gap-6">
            {legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-background">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
