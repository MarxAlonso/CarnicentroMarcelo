import type { Metadata } from "next";
import Link from "next/link";

import { BannerCarneRes } from "@/components/Banner/BannerCarneRes";
import { FiltroCarneRes } from "@/components/Filtros/FiltroCarneRes/FiltroCarneRes";
import { FaqVisible } from "@/components/Pilar/FaqVisible";
import { ArticulosDelPilar } from "@/components/Pilar/ArticulosDelPilar";
import { TablaPrecios } from "@/components/Pilar/TablaPrecios";
import { cortesPorTipo } from "@/content/catalogo";
import { PILARES } from "@/lib/pilares";
import { PRECIOS_ACTUALIZADOS, whatsappUrl } from "@/lib/site";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildProductListSchema,
  jsonLd,
} from "@/lib/schema";

const pilar = PILARES.res;

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

export default function CarneDeResPage() {
  const cortes = cortesPorTipo("res");

  const schema = [
    buildProductListSchema(
      cortes.map((c) => ({
        nombre: c.nombre,
        descripcion: c.descripcion,
        precio: c.precio,
        imagen: c.imagen.src,
      })),
      { nombreLista: "Cortes de carne de res", url: pilar.ruta }
    ),
    buildFaqSchema(pilar.faqs),
    buildBreadcrumbSchema([
      { nombre: "Inicio", url: "/" },
      { nombre: "Carne de res", url: pilar.ruta },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />

      <BannerCarneRes />

      {/* La respuesta directa, en las dos primeras líneas: es lo que lee quien
          tiene prisa y lo que citan los buscadores con IA. */}
      <section className="mx-auto max-w-3xl px-6 pt-14">
        <h1 className="font-display text-4xl font-bold leading-tight text-brand-ink-deep md:text-5xl">
          {pilar.h1}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">{pilar.entradilla}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={whatsappUrl("Hola, quiero hacer un pedido de carne de res.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-brand px-5 py-3 font-semibold text-white transition-colors hover:bg-brand-deep"
          >
            Pedir por WhatsApp
          </a>
          <Link
            href="/delivery-de-carne-en-lima"
            className="rounded-lg border border-brand px-5 py-3 font-semibold text-brand-ink transition-colors hover:bg-surface-warm"
          >
            Ver cobertura de delivery
          </Link>
        </div>
      </section>

      <TablaPrecios
        cortes={cortes}
        actualizado={PRECIOS_ACTUALIZADOS}
        titulo="Precio por kilo de cada corte de res"
      />

      {/* Catálogo filtrable: la misma información, para quien prefiere explorar
          por categoría y rango de precio en vez de leer la tabla. */}
      <FiltroCarneRes />

      <ArticulosDelPilar pilar="res" />

      <FaqVisible faqs={pilar.faqs} />
    </>
  );
}
