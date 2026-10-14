"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

const ease = [0.22, 1, 0.36, 1] as const

/** Hero a pantalla completa con imagen de mesa y pegatina girada. */
export function Hero() {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden bg-neutral-900 text-white md:items-center">
      <Image
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80"
        alt="Mesa de restaurante iluminada con luz tenue"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      {/* Degradado para asegurar la legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

      {/* Pegatina giratoria */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
        animate={{ opacity: 1, scale: 1, rotate: 12 }}
        transition={{ duration: 0.8, delay: 1, ease }}
        className="absolute top-24 right-6 hidden size-36 items-center justify-center rounded-full bg-sun p-4 text-center font-hand text-2xl leading-none text-foreground shadow-xl md:flex lg:right-16 lg:size-44 lg:text-3xl"
      >
        ¡0% charlas de cripto!
      </motion.div>

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-32 pb-20 md:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-block -rotate-2 font-hand text-3xl text-sun"
        >
          psst… cena con desconocidos 👋
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          className="mt-4 max-w-4xl text-5xl leading-[1] font-bold tracking-tight text-balance md:text-7xl lg:text-8xl"
        >
          Suelta el móvil.{" "}
          <span className="text-[oklch(0.82_0.12_50)]">
            Siete desconocidos te esperan
          </span>{" "}
          (y no muerden).
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="mt-8 max-w-xl text-lg text-pretty text-white/80 md:text-xl"
        >
          Te sentamos a cenar con siete personas con las que tienes más en común
          de lo que crees. Restaurante sorpresa, comida riquísima y charla de esa
          que te hace mirar el reloj y decir «¿ya es la una?».
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button
            size="lg"
            nativeButton={false}
            render={<a href="#proximas-cenas" />}
            className="h-12 w-fit rounded-full px-7 text-base shadow-lg transition-transform hover:-rotate-1 hover:scale-105"
          >
            Quiero una silla
            <ArrowDownIcon data-icon="inline-end" />
          </Button>
          <span className="text-sm text-white/60">
            Desde 49 € · Cena, vino y sobremesa incluidos. El postre también, tranqui.
          </span>
        </motion.div>
      </div>
    </section>
  )
}
