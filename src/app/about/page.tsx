"use client";

import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import PixelCard from "@/components/PixelCard";
import { ScrollReveal, StaggerReveal } from "@/components/ui/scroll-reveal";
import Link from "next/link";
import {
  Code,
  DeviceMobile,
  Database,
  CloudArrowUp,
  Brain,
  GitBranch,
} from "@phosphor-icons/react";

const teamMembers = [
  {
    name: "Juan Pérez",
    role: "Tech Lead",
    bio: "15+ años liderando equipos de desarrollo en startups y empresas.",
  },
  {
    name: "María González",
    role: "Senior Full Stack Developer",
    bio: "Experta en React, Node.js y arquitecturas escalables.",
  },
  {
    name: "Carlos Rodríguez",
    role: "Mobile Developer",
    bio: "Especialista en React Native y Flutter para iOS/Android.",
  },
  {
    name: "Ana Martínez",
    role: "AI/ML Engineer",
    bio: "PhD en Machine Learning, enfocada en soluciones prácticas de IA.",
  },
  {
    name: "Luis Fernández",
    role: "DevOps Engineer",
    bio: "Experto en AWS, Docker, Kubernetes y CI/CD pipelines.",
  },
  {
    name: "Sofia Torres",
    role: "UX/UI Designer",
    bio: "Diseñadora con enfoque en experiencias de usuario excepcionales.",
  },
];

const techStack = [
  {
    category: "Frontend",
    icon: <Code size={32} weight="bold" />,
    technologies: ["React", "Next.js", "Vue", "TypeScript", "TailwindCSS"],
  },
  {
    category: "Mobile",
    icon: <DeviceMobile size={32} weight="bold" />,
    technologies: ["React Native", "Flutter", "Expo", "Swift", "Kotlin"],
  },
  {
    category: "Backend",
    icon: <GitBranch size={32} weight="bold" />,
    technologies: ["Node.js", "Python", "Django", "FastAPI", "NestJS"],
  },
  {
    category: "Databases",
    icon: <Database size={32} weight="bold" />,
    technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"],
  },
  {
    category: "Cloud & DevOps",
    icon: <CloudArrowUp size={32} weight="bold" />,
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Vercel"],
  },
  {
    category: "AI/ML",
    icon: <Brain size={32} weight="bold" />,
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Scikit-learn"],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-heading">
              Sobre Simba Tech
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-white/60">
              Somos una fábrica de software apasionada por crear soluciones
              tecnológicas excepcionales
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 px-4 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center font-heading">
              Nuestra Historia
            </h2>
          </ScrollReveal>
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <ScrollReveal delay={0.1}>
              <p>
                Simba Tech nace de la pasión por crear software excepcional que
                realmente transforme negocios. Fundada por un equipo de
                ingenieros con décadas de experiencia combinada en startups y
                empresas tecnológicas, decidimos crear algo diferente: una
                fábrica de software que prioriza la calidad, la innovación y el
                partnership verdadero con nuestros clientes.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                No somos solo un proveedor de servicios, somos tu aliado
                tecnológico. Entendemos que cada proyecto es único y merece
                atención dedicada. Por eso combinamos las mejores prácticas de
                ingeniería de software con metodologías ágiles y comunicación
                constante para entregar resultados excepcionales.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p>
                Nuestra misión es simple: construir el futuro del software, un
                proyecto a la vez. Nos especializamos en transformar ideas
                complejas en soluciones elegantes y escalables que impulsan el
                crecimiento de nuestros clientes.
              </p>
            </ScrollReveal>
          </div>

          {/* Values */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StaggerReveal
              className="contents"
              stagger={0.1}
            >
              {[
                {
                  title: "Innovación",
                  description: "Adoptamos las últimas tecnologías y mejores prácticas",
                },
                {
                  title: "Calidad",
                  description: "Código limpio, probado y production-ready",
                },
                {
                  title: "Partnership",
                  description: "Trabajamos codo a codo con nuestros clientes",
                },
                {
                  title: "Agilidad",
                  description: "Entregas rápidas e iterativas que generan valor",
                },
              ].map((value, index) => (
                <PixelCard
                  key={index}
                  variant="dark"
                  className="bg-white/5 border-white/10"
                >
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-white mb-2 font-heading">
                      {value.title}
                    </h3>
                    <p className="text-white/60 text-sm">{value.description}</p>
                  </div>
                </PixelCard>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center font-heading">
              Nuestro Equipo
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Un equipo multidisciplinario de expertos apasionados por la
              tecnología
            </p>
          </ScrollReveal>

          <StaggerReveal
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.08}
          >
            {teamMembers.map((member, index) => (
              <PixelCard
                key={index}
                variant="dark"
                className="bg-white/5 border-white/10 hover:border-white/20"
              >
                <div className="p-6">
                  {/* Avatar placeholder */}
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 text-center font-heading">
                    {member.name}
                  </h3>
                  <p className="text-white/40 text-sm mb-3 text-center">
                    {member.role}
                  </p>
                  <p className="text-white/60 text-sm text-center">
                    {member.bio}
                  </p>
                </div>
              </PixelCard>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 px-4 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center font-heading">
              Tecnologías que Dominamos
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Trabajamos con un stack moderno y probado en producción
            </p>
          </ScrollReveal>

          <StaggerReveal
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.1}
          >
            {techStack.map((stack, index) => (
              <PixelCard
                key={index}
                variant="dark"
                className="bg-white/5 border-white/10 hover:border-white/20"
              >
                <div className="p-6">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white mb-4">
                    {stack.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-heading">
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-white/10 rounded text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </PixelCard>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-6 font-heading">
              ¿Listo para trabajar juntos?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-white/60 mb-8">
              Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos
              tecnológicos
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
