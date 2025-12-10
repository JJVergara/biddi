"use client";

import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import PixelCard from "@/components/PixelCard";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { EnvelopeSimple, Phone, MapPin, Clock } from "@phosphor-icons/react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-heading">
              Conversemos sobre tu Proyecto
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-white/60">
              Estamos aquí para ayudarte a transformar tu visión en realidad
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal>
              <PixelCard
                variant="dark"
                className="bg-white/5 border-white/10"
              >
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-2 font-heading">
                    Envíanos un Mensaje
                  </h2>
                  <p className="text-white/60 mb-6">
                    Completa el formulario y te responderemos en menos de 24
                    horas
                  </p>

                  <form className="space-y-4">
                    <div>
                      <label className="block text-white/80 text-sm mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        placeholder="Tu nombre completo"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 text-sm mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 text-sm mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        placeholder="Nombre de tu empresa (opcional)"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 text-sm mb-2">
                        Tipo de Proyecto *
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40 transition-colors">
                        <option value="">Selecciona una opción</option>
                        <option value="web">Aplicación Web</option>
                        <option value="mobile">Aplicación Móvil</option>
                        <option value="ai">Solución de IA/ML</option>
                        <option value="integration">Integración de Sistemas</option>
                        <option value="consulting">Consultoría</option>
                        <option value="other">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white/80 text-sm mb-2">
                        Presupuesto Estimado
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40 transition-colors">
                        <option value="">Selecciona un rango</option>
                        <option value="small">Menos de $10,000 USD</option>
                        <option value="medium">$10,000 - $50,000 USD</option>
                        <option value="large">$50,000 - $100,000 USD</option>
                        <option value="enterprise">Más de $100,000 USD</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white/80 text-sm mb-2">
                        Cuéntanos sobre tu proyecto *
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Describe tu proyecto, objetivos y cualquier requisito específico..."
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
                    >
                      Enviar Solicitud
                    </button>

                    <p className="text-white/40 text-xs text-center">
                      * Campos requeridos
                    </p>
                  </form>
                </div>
              </PixelCard>
            </ScrollReveal>

            {/* Contact Information */}
            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <PixelCard
                  variant="dark"
                  className="bg-white/5 border-white/10"
                >
                  <div className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <EnvelopeSimple size={24} className="text-white" weight="bold" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:contacto@simbatech.com"
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        contacto@simbatech.com
                      </a>
                    </div>
                  </div>
                </PixelCard>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <PixelCard
                  variant="dark"
                  className="bg-white/5 border-white/10"
                >
                  <div className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone size={24} className="text-white" weight="bold" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Teléfono
                      </h3>
                      <p className="text-white/60">+56 X XXXX XXXX</p>
                      <p className="text-white/40 text-sm mt-1">
                        Lun-Vie, 9:00 AM - 6:00 PM (GMT-3)
                      </p>
                    </div>
                  </div>
                </PixelCard>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <PixelCard
                  variant="dark"
                  className="bg-white/5 border-white/10"
                >
                  <div className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin size={24} className="text-white" weight="bold" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Ubicación
                      </h3>
                      <p className="text-white/60">
                        Santiago, Chile
                      </p>
                      <p className="text-white/40 text-sm mt-1">
                        También trabajamos remotamente con clientes globales
                      </p>
                    </div>
                  </div>
                </PixelCard>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <PixelCard
                  variant="dark"
                  className="bg-white/5 border-white/10"
                >
                  <div className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock size={24} className="text-white" weight="bold" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Horario de Atención
                      </h3>
                      <div className="text-white/60 space-y-1 text-sm">
                        <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                        <p>Sábado: 10:00 AM - 2:00 PM</p>
                        <p>Domingo: Cerrado</p>
                      </div>
                    </div>
                  </div>
                </PixelCard>
              </ScrollReveal>

              {/* Map Placeholder */}
              <ScrollReveal delay={0.5}>
                <PixelCard
                  variant="dark"
                  className="bg-white/5 border-white/10"
                >
                  <div className="p-6">
                    <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center">
                      <p className="text-white/40 text-sm">
                        📍 Ubicación en Mapa (Próximamente)
                      </p>
                    </div>
                  </div>
                </PixelCard>
              </ScrollReveal>
            </div>
          </div>

          {/* Alternative Contact Methods */}
          <ScrollReveal delay={0.6}>
            <div className="mt-16 text-center">
              <h3 className="text-xl font-bold text-white mb-4 font-heading">
                ¿Prefieres otra forma de contacto?
              </h3>
              <p className="text-white/60 mb-6">
                Estamos disponibles en múltiples plataformas
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:border-white/30 hover:bg-white/20 transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href="#"
                  className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:border-white/30 hover:bg-white/20 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:border-white/30 hover:bg-white/20 transition-colors"
                >
                  Calendly
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
