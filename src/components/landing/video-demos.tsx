"use client";

import { ScrollReveal, StaggerReveal } from "@/components/ui/scroll-reveal";

const videos = [
  {
    id: "placeholder-1",
    title: "Plataforma E-commerce para Retail",
    description:
      "Transformamos la experiencia de compra online con una solución personalizada que aumentó las conversiones en 45%.",
    thumbnail: null,
  },
  {
    id: "placeholder-2",
    title: "App Móvil de Logística",
    description:
      "Desarrollamos una aplicación que optimiza rutas de entrega en tiempo real, reduciendo costos operativos en 30%.",
    thumbnail: null,
  },
  {
    id: "placeholder-3",
    title: "Sistema de IA para Healthcare",
    description:
      "Implementamos ML para diagnóstico asistido, mejorando la precisión y reduciendo tiempos de análisis.",
    thumbnail: null,
  },
];

export function VideoDemos() {
  return (
    <section id="demos" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
              Proyectos Destacados
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Conoce cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos
            </p>
          </ScrollReveal>
        </div>

        {/* Video grid */}
        <StaggerReveal
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          stagger={0.1}
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:bg-white/10"
            >
              {/* Video placeholder / embed area */}
              <div className="relative aspect-video bg-white/5 flex items-center justify-center">
                {/* Placeholder content */}
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                    <svg
                      className="w-8 h-8 text-white/60 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white/40 text-sm">Caso de estudio</p>
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Video info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white/80 transition-colors font-heading">
                  {video.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </StaggerReveal>

        {/* Portfolio CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-white/60 mb-4">
              ¿Quieres ver más de nuestro trabajo?
            </p>
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all"
            >
              Ver Más Proyectos
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
