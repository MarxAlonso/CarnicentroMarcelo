import type { Metadata } from "next";
import Link from "next/link";

import { BannerCarneCerdos } from "@/components/Banner/BannerCarneCerdos";
import { FiltroCarneCerdos } from "@/components/Filtros/FiltroCarneCerdo/FiltroCarneCerdos";
import { FaqVisible } from "@/components/Pilar/FaqVisible";
import { ArticulosDelPilar } from "@/components/Pilar/ArticulosDelPilar";
import { TablaPrecios } from "@/components/Pilar/TablaPrecios";
import { productosCerdo } from "@/components/Filtros/data-cerdo/productosCerdo";
import { PILARES } from "@/lib/pilares";
import { PRECIOS_ACTUALIZADOS, whatsappUrl } from "@/lib/site";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildProductListSchema,
  jsonLd,
} from "@/lib/schema";

const pilar = PILARES.cerdo;

export const metadata: Metadata = {
  title: pilar.titulo,
  description: pilar.descripcion,
  alternates: { canonical: pilar.ruta },
  openGraph: {
    title: pilar.titulo,
    description: pilar.descripcion,
    url: pilar.ruta,
    type: "website",
  },
};

export default function CarneDeCerdoPage() {
  const cortes = productosCerdo.map((p) => ({
    id: p.id,
    nombre: p.nombre,
    precio: p.precio,
    descripcion: p.descripcion,
    imagen: p.imagen,
  }));

  const schema = [
    buildProductListSchema(
      cortes.map((c) => ({
        nombre: c.nombre,
        descripcion: c.descripcion,
        precio: c.precio,
        imagen: typeof c.imagen === "string" ? c.imagen : c.imagen.src,
      })),
      { nombreLista: "Cortes de carne de cerdo", url: pilar.ruta }
    ),
    buildFaqSchema(pilar.faqs),
    buildBreadcrumbSchema([
      { nombre: "Inicio", url: "/" },
      { nombre: "Carne de cerdo", url: pilar.ruta },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />

      <BannerCarneCerdos />

      <section className="mx-auto max-w-3xl px-6 pt-14">
        <h1 className="font-display text-4xl font-bold leading-tight text-carni-dark-red md:text-5xl">
          {pilar.h1}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-gray-700">{pilar.entradilla}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={whatsappUrl("Hola, quiero hacer un pedido de carne de cerdo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-carni-red px-5 py-3 font-semibold text-white transition-colors hover:bg-carni-dark-red"
          >
            Pedir por WhatsApp
          </a>
          <Link
            href="/delivery-de-carne-en-lima"
            className="rounded-lg border border-carni-red px-5 py-3 font-semibold text-carni-red transition-colors hover:bg-carni-cream"
          >
            Ver cobertura de delivery
          </Link>
        </div>
      </section>

      <TablaPrecios
        cortes={cortes}
        actualizado={PRECIOS_ACTUALIZADOS}
        titulo="Precio por kilo de cada corte de cerdo"
      />

      <FiltroCarneCerdos />

      <ArticulosDelPilar pilar="cerdo" />

      <FaqVisible faqs={pilar.faqs} />
    </>
  );
}
