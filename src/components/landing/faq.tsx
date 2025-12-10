"use client";

import { useState } from "react";
import { ScrollReveal, StaggerReveal } from "@/components/ui/scroll-reveal";

const faqs = [
  {
    question: "¿Qué tipos de proyectos desarrolla Simba Tech?",
    answer:
      "Desarrollamos aplicaciones web y móviles personalizadas, sistemas empresariales, e-commerce, plataformas SaaS, soluciones de IA/ML, APIs, integraciones y mucho más. Trabajamos con startups, PyMEs y empresas grandes en diversos sectores como retail, salud, finanzas, logística y educación.",
  },
  {
    question: "¿Cómo es el proceso de trabajo?",
    answer:
      "Comenzamos con una consulta de descubrimiento donde entendemos tus necesidades. Luego creamos una propuesta detallada con arquitectura, tecnologías, cronograma y presupuesto. Una vez aprobado, trabajamos en sprints ágiles de 2 semanas con entregas incrementales, demos regulares y comunicación constante hasta el lanzamiento y más allá.",
  },
  {
    question: "¿Qué tecnologías usan?",
    answer:
      "Trabajamos con tecnologías modernas y probadas: React, Next.js, Node.js, Python, TypeScript para desarrollo web; React Native y Flutter para móviles; PostgreSQL, MongoDB para bases de datos; AWS, Google Cloud para infraestructura; TensorFlow, PyTorch para IA/ML. Seleccionamos el stack ideal para cada proyecto.",
  },
  {
    question: "¿Cuánto tiempo toma un proyecto?",
    answer:
      "Depende del alcance y complejidad. Un MVP puede estar listo en 6-8 semanas, mientras que aplicaciones empresariales complejas pueden tomar varios meses. Durante la fase de planificación, te damos un cronograma detallado con hitos claros y fechas de entrega específicas.",
  },
  {
    question: "¿Cuánto cuesta desarrollar software personalizado?",
    answer:
      "Cada proyecto es único. Los costos dependen de complejidad, funcionalidades, integraciones y tecnologías. Ofrecemos presupuestos transparentes sin costos ocultos. Tras entender tus necesidades en la consulta inicial, te presentamos opciones con diferentes alcances para ajustarnos a tu presupuesto.",
  },
  {
    question: "¿Ofrecen soporte después del lanzamiento?",
    answer:
      "Sí, ofrecemos planes de mantenimiento y soporte continuo que incluyen actualizaciones, corrección de bugs, monitoreo de performance, backups, seguridad y nuevas funcionalidades. También ofrecemos capacitación para tu equipo y documentación completa del sistema.",
  },
  {
    question: "¿Trabajan con clientes internacionales?",
    answer:
      "Absolutamente. Hemos trabajado con clientes en América, Europa y Asia. Nuestro equipo está acostumbrado a colaboración remota con diferentes zonas horarias. Nos comunicamos en español e inglés y usamos herramientas modernas de gestión de proyectos para mantener todo sincronizado.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 bg-neutral-950">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
              Preguntas Frecuentes
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-white/60">
              Todo lo que necesitas saber sobre Simba Tech
            </p>
          </ScrollReveal>
        </div>

        {/* FAQ accordion */}
        <StaggerReveal className="space-y-4" stagger={0.08}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors"
            >
              {/* Question button */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg font-medium text-white pr-4">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 pt-0">
                  <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </StaggerReveal>

        {/* More questions CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-white/60 mb-4">¿Aún tienes preguntas?</p>
            <a
              href="mailto:contacto@simbatech.com"
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contáctanos
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
