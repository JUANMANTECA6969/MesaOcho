import type { Metadata } from "next"
import { Bricolage_Grotesque, Caveat, Inter } from "next/font/google"

import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"

// Sans para cuerpo de texto
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

// Grotesca con carácter para titulares
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-serif",
})

// Manuscrita para notas al margen y guiños
const caveat = Caveat({ subsets: ["latin"], variable: "--font-hand" })

export const metadata: Metadata = {
  title: "Mesa Ocho — Cena con siete desconocidos (que no muerden)",
  description:
    "Te sentamos a cenar con siete personas que no conoces. Sin móviles, sin networking, sin presión. Solo comida rica y charla de la buena.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn(
        "antialiased font-sans",
        inter.variable,
        bricolage.variable,
        caveat.variable
      )}
    >
      <body>
        {/* Marca solo en tema claro: sin next-themes (evita su <script> en React 19) */}
        {children}
        <Toaster theme="light" position="bottom-center" />
      </body>
    </html>
  )
}
