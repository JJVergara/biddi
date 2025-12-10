"use client";

import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import PixelCard from "@/components/PixelCard";
import { ScrollReveal, StaggerReveal } from "@/components/ui/scroll-reveal";
import Link from "next/link";

const projects = [
  {
    client: "Cliente de Retail",
    title: "Plataforma E-commerce Personalizada",
    type: "Web Application",
    description:
      "Sistema completo de e-commerce con inventario en tiempo real, pasarela de pagos y panel administrativo.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    results: "+45% conversiones",
  },
  {
    client: "Startup de Logística",
    title: "App Móvil de Rutas Inteligentes",
    type: "Mobile App",
    description:
      "Aplicación que optimiza rutas de entrega en tiempo real usando algoritmos de IA.",
    technologies: ["React Native", "Python", "TensorFlow", "Google Cloud"],
    results: "-30% costos operativos",
  },
  {
    client: "Centro Médico",
    title: "Sistema de IA para Healthcare",
    description:
      "Plataforma de ML para diagnóstico asistido que mejora la precisión médica.",
    type: "AI/ML Solution",
    technologies: ["Python", "PyTorch", "FastAPI", "PostgreSQL"],
    results: "+25% precisión diagnóstica",
  },
  {
    client: "Fintech",
    title: "Plataforma SaaS de Gestión Financiera",
    type: "Web Application",
    description:
      "Sistema completo de gestión financiera con dashboards interactivos y reportes automatizados.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
    results: "5000+ usuarios activos",
  },
  {
    client: "Educación Online",
    title: "App de Aprendizaje Personalizado",
    type: "Mobile & Web",
    description:
      "Plataforma de e-learning con IA que adapta el contenido al ritmo de cada estudiante.",
    technologies: ["React", "Flutter", "Node.js", "Firebase"],
    results: "+80% retención estudiantes",
  },
  {
    client: "Manufactura",
    title: "Sistema de Integración ERP-CRM",
    type: "Enterprise Integration",
    description:
      "Conectamos sistemas ERP y CRM existentes para automatizar flujos de trabajo.",
    technologies: ["Python", "Node.js", "RabbitMQ", "Docker"],
    results: "-50% tiempo procesos",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-heading">
              Proyectos que Nos Enorgullecen
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-white/60">
              Casos de éxito que demuestran nuestro compromiso con la excelencia
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <StaggerReveal
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.1}
          >
            {projects.map((project, index) => (
              <PixelCard
                key={index}
                variant="dark"
                className="bg-white/5 border-white/10 hover:border-white/20"
              >
                <div className="p-6">
                  <div className="text-xs text-white/40 mb-2">
                    {project.type}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-heading">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-white/10 rounded text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm font-medium text-white">
                    {project.results}
                  </div>
                </div>
              </PixelCard>
            ))}
          </StaggerReveal>

          {/* CTA */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                ¿Tu proyecto podría ser el siguiente?
              </h3>
              <p className="text-white/60 mb-6">
                Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all"
              >
                Agendar Consulta
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
