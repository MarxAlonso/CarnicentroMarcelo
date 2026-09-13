import Link from "next/link";
import type { Metadata } from "next";

import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { ProductTabs } from "./ProductTabs";
import { Resenas } from "./Resenas";
import { RelatedProducts } from "./RelatedProducts";
import { TrustBanner } from "./TrustBanner";
import { getCorte, type Corte, type TipoCarne } from "@/content/catalogo";
import { resenasParaSchema } from "@/content/resenas";
import { PILARES } from "@/lib/pilares";
import { buildBreadcrumbSchema, buildProductSchema, jsonLd } from "@/lib/schema";

/**
 * Ficha de producto, completa y estática.
 *
 * La versión del proyecto de origen resolvía el producto con `useEffect` en el
 * cliente: eso significa que el HTML que recibe Google dice «Cargando
 * producto…» y el título, el precio y la descripción no existen hasta que se
 * ejecuta JavaScript. Como el objetivo aquí es justamente posicionar cada
 * corte, la ficha se genera en el build: `generateStaticParams` crea las 31
 * páginas y cada una llega con su `<title>`, su `<h1>`, su precio y su
 * `Product` en JSON-LD ya escritos en el archivo.
 */

export function metadataDeCorte(tipo: TipoCarne, slug: string): Metadata {
  const corte = getCorte(tipo, slug);
  if (!corte) return {};

  const nombreTipo = tipo === "res" ? "res" : "cerdo";
  const titulo = `${corte.nombre} — Precio por Kilo en Lima`;
  const descripcion = `${corte.nombre} de ${nombreTipo} fresco a S/ ${corte.precio.toFixed(
    2
  )} el kilo. ${corte.platos ? `Ideal para ${corte.platos[0].toLowerCase()}. ` : ""}Delivery en Lima por WhatsApp.`;

  return {
    title: titulo,
    // Se recorta a 155 caracteres para que Google no la trunque a mitad de frase.
    description: descripcion.slice(0, 155),
    alternates: { canonical: corte.ruta },
    openGraph: {
      type: "website",
      title: titulo,
      description: descripcion.slice(0, 155),
      url: corte.ruta,
      images: [{ url: corte.imagen.src, alt: corte.nombre }],
    },
  };
}

export function FichaProducto({ corte }: { corte: Corte }) {
  const pilar = PILARES[corte.tipo];
  const resenas = resenasParaSchema(corte.slug);

  const schema = [
    buildProductSchema({
      nombre: corte.nombre,
      descripcion: corte.descripcion,
      precio: corte.precio,
      imagen: corte.imagen.src,
      url: corte.ruta,
      categoria: corte.categoria,
      resenas,
    }),
    buildBreadcrumbSchema([
      { nombre: "Inicio", url: "/" },
      { nombre: corte.tipo === "res" ? "Carne de res" : "Carne de cerdo", url: pilar.ruta },
      { nombre: corte.nombre, url: corte.ruta },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />

      <div className="bg-page">
        {/* Migas visibles: además de orientar, son enlaces internos hacia el
            pilar, que es donde interesa concentrar la fuerza. */}
        <nav
          aria-label="Migas de pan"
          className="mx-auto w-full max-w-site px-6 pt-6 text-sm text-ink-subtle"
        >
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/" className="hover:text-brand-ink">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href={pilar.ruta} className="hover:text-brand-ink">
                {corte.tipo === "res" ? "Carne de res" : "Carne de cerdo"}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-ink" aria-current="page">
              {corte.nombre}
            </li>
          </ol>
        </nav>

        <div className="mx-auto flex w-full max-w-site flex-col items-start gap-10 px-6 py-6 lg:flex-row lg:gap-12 lg:py-10">
          <ProductGallery imagenes={[corte.imagen]} nombre={corte.nombre} />
          <ProductInfo corte={corte} />
        </div>

        <div className="mx-auto w-full max-w-site px-6 pb-16">
          <ProductTabs corte={corte} />
          <Resenas slug={corte.slug} nombre={corte.nombre} />
          <TrustBanner nombre={corte.nombre} />
          <RelatedProducts corte={corte} />
        </div>
      </div>
    </>
  );
}
