import type { Metadata } from "next";

import { Banner } from "@/components/Banner/Banner";
import ExperienciaCarnicera from "@/common/InicioComp/ExperienciaCarnicera";
import { CatalogoCarnes } from "@/common/InicioComp/CatalogoCarnes";
import Testimonios from "@/common/InicioComp/Testimonios";
import FAQSection from "@/common/InicioComp/FAQSection";
import { ExplorarCarnesSection } from "@/common/InicioComp/ExplorarCarnesSection";
import { SITE } from "@/lib/site";
import { buildBreadcrumbSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: `${SITE.name} | Carnicería en Lima con delivery`,
  description:
    "Carnicería en Lima con cortes frescos de res y cerdo, precio por kilo publicado y delivery coordinado por WhatsApp.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(buildBreadcrumbSchema([{ nombre: "Inicio", url: "/" }]))}
      />
      <Banner />
      <ExperienciaCarnicera />
      <ExplorarCarnesSection />
      <CatalogoCarnes />
      <Testimonios />
      <FAQSection />
    </>
  );
}
