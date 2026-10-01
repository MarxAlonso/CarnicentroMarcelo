import type { Metadata } from "next";

import { Banner } from "@/components/Banner/Banner";
import { FranjaMostrador } from "@/common/InicioComp/FranjaMostrador";
import ExperienciaCarnicera from "@/common/InicioComp/ExperienciaCarnicera";
import { CatalogoCarnes } from "@/common/InicioComp/CatalogoCarnes";
import Testimonios from "@/common/InicioComp/Testimonios";
import FAQSection from "@/common/InicioComp/FAQSection";
import { ExplorarCarnesSection } from "@/common/InicioComp/ExplorarCarnesSection";
import { SITE } from "@/lib/site";
import { CATALOGO } from "@/content/catalogo";
import { buildBreadcrumbSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: `${SITE.name} | Carnicería en Lima con delivery`,
  // 147 caracteres
  description: `Carnicería en Lima: ${CATALOGO.length} cortes frescos de res y cerdo con precio por kilo publicado. Delivery y pedidos por WhatsApp al ${SITE.phoneLocal}.`,
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
      <FranjaMostrador />
      <ExperienciaCarnicera />
      <ExplorarCarnesSection />
      <CatalogoCarnes />
      <Testimonios />
      <FAQSection />
    </>
  );
}
