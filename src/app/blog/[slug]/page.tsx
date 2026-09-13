import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ImportanciaCarne from "@/common/BlogComp/ImportanciaCarne/ImportanciaCarne";
import BeneficiosNutritivos from "@/common/BlogComp/BeneficiosNutritivos/BeneficiosNutritivos";
import BeneficiosGym from "@/common/BlogComp/BeneficiosGym/BeneficiosGym";
import CortesDeRes from "@/common/BlogComp/CortesDeRes/CortesDeRes";
import CortePorPlato from "@/common/BlogComp/CortePorPlato/CortePorPlato";
import TiposCarneMolida from "@/common/BlogComp/TiposCarneMolida/TiposCarneMolida";
import CortesDeCerdo from "@/common/BlogComp/CortesDeCerdo/CortesDeCerdo";
import { ArticulosDelPilar } from "@/components/Pilar/ArticulosDelPilar";
import { PILARES } from "@/lib/pilares";
import { getPost, postsPublicados } from "@/content/posts";
import { buildArticleSchema, buildBreadcrumbSchema, jsonLd } from "@/lib/schema";
import Link from "next/link";

/**
 * Cuerpo de cada artículo publicado.
 *
 * Los tres artículos actuales son componentes de React. Cuando entren las doce
 * piezas del plan, lo que cambia es este mapa: el registro de `posts.ts` ya
 * aporta metadatos, sitemap y enlazado, así que dar de alta una pieza nueva es
 * escribir su componente y añadir la entrada aquí.
 */
const CUERPOS: Record<string, React.ComponentType> = {
  "importancia-carne-res": ImportanciaCarne,
  "beneficios-nutritivos-carne-res": BeneficiosNutritivos,
  "beneficios-carne-gym": BeneficiosGym,
  "cortes-de-carne-de-res-peru": CortesDeRes,
  "que-corte-de-res-para-cada-plato": CortePorPlato,
  "tipos-de-carne-molida": TiposCarneMolida,
  "panceta-bondiola-chuleta-cual-elegir": CortesDeCerdo,
};

/** Genera una ruta estática por artículo en el build. */
export function generateStaticParams() {
  return postsPublicados.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.titulo,
    description: post.descripcion,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.titulo,
      description: post.descripcion,
      url: `/blog/${post.slug}`,
      publishedTime: post.publicado,
      modifiedTime: post.actualizado ?? post.publicado,
      images: post.imagen ? [{ url: post.imagen, alt: post.titulo }] : undefined,
    },
  };
}

export default async function ArticuloPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  const Cuerpo = CUERPOS[slug];

  if (!post || !Cuerpo) notFound();

  const pilar = PILARES[post.pilar];

  const schema = [
    buildArticleSchema(post),
    buildBreadcrumbSchema([
      { nombre: "Inicio", url: "/" },
      { nombre: "Blog", url: "/blog" },
      { nombre: post.titulo, url: `/blog/${post.slug}` },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />

      <Cuerpo />

      {/* El enlace de ida: cada artículo devuelve al pilar que le corresponde.
          Sin esto la fuerza del artículo se queda donde no vende. */}
      <section className="bg-surface-warm py-14">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl font-bold text-brand-ink-deep md:text-3xl">
            {pilar.h1}
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-ink-muted">{pilar.entradilla}</p>
          <Link
            href={pilar.ruta}
            className="mt-6 inline-block rounded-lg bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-deep"
          >
            Ver cortes y precios
          </Link>
        </div>
      </section>

      <ArticulosDelPilar pilar={post.pilar} titulo="Seguir leyendo" />
    </>
  );
}
