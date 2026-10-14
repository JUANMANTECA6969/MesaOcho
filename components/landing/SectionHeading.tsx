import { cn } from "@/lib/utils"

/** Cabecera reutilizable: etiqueta manuscrita + titular + entradilla opcional. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
  introClassName,
}: {
  eyebrow: string
  title: React.ReactNode
  intro?: string
  className?: string
  introClassName?: string
}) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      <p className="inline-block -rotate-2 font-hand text-2xl text-primary md:text-3xl">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-4xl leading-[1.05] font-bold tracking-tight text-balance md:text-6xl">
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-base text-pretty text-muted-foreground md:text-lg",
            introClassName
          )}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
