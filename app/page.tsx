import { Benefits } from "@/components/landing/Benefits"
import { FAQ } from "@/components/landing/FAQ"
import { Footer } from "@/components/landing/Footer"
import { Gallery } from "@/components/landing/Gallery"
import { Hero } from "@/components/landing/Hero"
import { HowItWorks } from "@/components/landing/HowItWorks"
import { Manifesto } from "@/components/landing/Manifesto"
import { Navbar } from "@/components/landing/Navbar"
import { Testimonials } from "@/components/landing/Testimonials"
import { UpcomingDinners } from "@/components/landing/UpcomingDinners"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <UpcomingDinners />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
