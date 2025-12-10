"use client";

import Image from "next/image";
import PillNav from "@/components/ui/pill-nav";

export function Navbar() {
  return (
    <PillNav
      logo={
        <Image
          src="/logo_cropped_white.png"
          alt="Simba Tech"
          width={32}
          height={32}
          className="h-8 w-auto"
        />
      }
      items={[
        { label: "Servicios", href: "/services" },
        { label: "Portafolio", href: "/portfolio" },
        { label: "Sobre Nosotros", href: "/about" },
        { label: "Contacto", href: "/contact" },
      ]}
      baseColor="#ffffff"
      pillColor="#000000"
      hoveredPillTextColor="#000000"
      pillTextColor="#ffffff"
      ease="power2.easeOut"
    />
  );
}
