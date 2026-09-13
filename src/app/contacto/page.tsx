import type { Metadata } from "next";
import ContactoComp from "@/common/ContactoComp/ContactoComp";
import { buildBreadcrumbSchema, buildLocalBusinessSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contacto y pedidos",
  description:
    "Coordina tu pedido de carne de res o cerdo por WhatsApp o telefono. Entregas a domicilio en Lima con un dia de anticipacion.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          buildLocalBusinessSchema(),
          buildBreadcrumbSchema([
            { nombre: "Inicio", url: "/" },
            { nombre: "Contacto", url: "/contacto" },
          ]),
        ])}
      />
      <ContactoComp />
    </>
  );
}
