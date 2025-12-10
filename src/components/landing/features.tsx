"use client";

import { ScrollReveal, StaggerReveal } from "@/components/ui/scroll-reveal";
import PixelCard from "@/components/PixelCard";
import {
  Code,
  DeviceMobile,
  Brain,
  Users,
  Plugs,
  Wrench,
} from "@phosphor-icons/react";

const features = [
  {
    icon: <Code size={32} weight="bold" />,
    title: "Desarrollo Web",
    description:
      "Aplicaciones web modernas y escalables con las últimas tecnologías. React, Next.js, Node.js y más.",
  },
  {
    icon: <DeviceMobile size={32} weight="bold" />,
    title: "Aplicaciones Móviles",
    description:
      "Apps nativas y multiplataforma para iOS y Android que tus usuarios amarán usar.",
  },
  {
    icon: <Brain size={32} weight="bold" />,
    title: "Inteligencia Artificial",
    description:
      "Soluciones de IA y ML que automatizan procesos y generan insights de valor.",
  },
  {
    icon: <Users size={32} weight="bold" />,
    title: "Consultoría Técnica",
    description:
      "Asesoría experta en arquitectura, stack tecnológico y mejores prácticas de desarrollo.",
  },
  {
    icon: <Plugs size={32} weight="bold" />,
    title: "Integración de Sistemas",
    description:
      "Conectamos tus plataformas y sistemas para que trabajen en armonía perfecta.",
  },
  {
    icon: <Wrench size={32} weight="bold" />,
    title: "Mantenimiento y Soporte",
    description:
      "Mantenemos tu software actualizado, seguro y funcionando óptimamente 24/7.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
              Nuestros Servicios
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Soluciones de software personalizadas que impulsan la innovación y el crecimiento de tu negocio
            </p>
          </ScrollReveal>
        </div>

        {/* Features grid */}
        <StaggerReveal
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          stagger={0.1}
        >
          {features.map((feature, index) => (
            <PixelCard
              key={index}
              variant="dark"
              className="bg-white/5 border-white/10 hover:border-white/20"
            >
              <div className="p-6">
                {/* Icon */}
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2 font-heading">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </PixelCard>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
