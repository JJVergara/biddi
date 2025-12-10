"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import ColorBends from "@/components/ui/color-bends";

export function Hero() {
  const [showInstructions, setShowInstructions] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const elements = content.children;

    gsap.set(elements, {
      y: 40,
      opacity: 0,
    });

    gsap.to(elements, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);

  const handleConsultation = () => {
    setShowInstructions(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen ColorBends background */}
      <ColorBends
        className="absolute! inset-0!"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          background: "#000",
        }}
        colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
        rotation={30}
        speed={0.3}
        scale={0.5}
        frequency={0.8}
        warpStrength={1.2}
        mouseInfluence={0.8}
        parallax={0.6}
        noise={0.08}
        transparent={false}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 font-heading">
          Simba Tech
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6 font-heading">
          Construyendo el futuro del software
        </h2>

        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-xl mx-auto font-light">
          Desarrollamos software personalizado, aplicaciones web, móviles y soluciones de IA/ML que transforman tu negocio.
        </p>

        <button
          onClick={handleConsultation}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all duration-200"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Agendar Consulta
        </button>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-white/60">
          <span>10+ años de experiencia</span>
          <span>Clientes en 3 continentes</span>
          <span>Tecnología de punta</span>
        </div>
      </div>

      {/* Consultation Form Modal */}
      {showInstructions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setShowInstructions(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h3 className="text-2xl font-semibold text-black mb-2">
              Agenda una Consulta
            </h3>
            <p className="text-neutral-500 mb-6">
              Conversemos sobre tu proyecto. Te contactaremos en menos de 24 horas.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-black"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-black"
              />
              <input
                type="text"
                placeholder="Empresa (opcional)"
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-black"
              />
              <textarea
                placeholder="Cuéntanos sobre tu proyecto..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-black resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors"
              >
                Enviar Solicitud
              </button>
            </form>

            <p className="mt-4 text-center text-neutral-500 text-sm">
              También puedes escribirnos a{" "}
              <a
                href="mailto:contacto@simbatech.com"
                className="text-black underline"
              >
                contacto@simbatech.com
              </a>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
