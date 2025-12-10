import { Navbar } from "@/components/landing/navbar";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-heading">
              Nuestros Servicios
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Soluciones tecnológicas completas para impulsar tu negocio
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Reutilizar Features component */}
      <Features />

      {/* CTA Section */}
      <section className="py-24 px-4 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-6 font-heading">
              ¿Listo para empezar tu proyecto?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-white/60 mb-8">
              Agenda una consulta gratuita y conversemos sobre cómo podemos
              ayudarte
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all"
            >
              Agendar Consulta
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
