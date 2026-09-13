import type { Metadata } from "next";
import { NosotrosInicio } from "@/common/NosotrosComp/NosotrosInicio";
import { buildBreadcrumbSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Quienes estan detras de Carnicentro Marcelo: como elegimos el ganado, como cortamos y por que publicamos los precios.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          buildBreadcrumbSchema([
            { nombre: "Inicio", url: "/" },
            { nombre: "Nosotros", url: "/nosotros" },
          ])
        )}
      />
      <NosotrosInicio />
    </>
  );
}
