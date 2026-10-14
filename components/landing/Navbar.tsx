"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { href: "#concepto", label: "¿Qué es?" },
  { href: "#como-funciona", label: "Cómo va" },
  { href: "#espacios", label: "Sitios" },
  { href: "#faq", label: "Dudas" },
]

/** Barra superior fija que gana fondo al hacer scroll. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 text-foreground backdrop-blur-md"
          : "text-white"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
        <a href="#" className="font-heading text-xl font-bold tracking-tight">
          Mesa <span className="font-hand text-2xl text-primary">Ocho</span>
        </a>
        <ul className="hidden gap-8 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <Button
          size="lg"
          className="rounded-full px-5 transition-transform hover:-rotate-2 hover:scale-105"
          nativeButton={false}
          render={<a href="#proximas-cenas" />}
        >
          Me apunto
        </Button>
      </nav>
    </header>
  )
}
