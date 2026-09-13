import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FichaProducto, metadataDeCorte } from "@/components/Producto/FichaProducto";
import { cortesPorTipo, getCorte } from "@/content/catalogo";

/** Una pagina estatica por corte de res, generada en el build. */
export function generateStaticParams() {
  return cortesPorTipo("res").map((c) => ({ slug: c.slug }));
}

/** Un slug que no existe da 404, no una pagina vacia. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return metadataDeCorte("res", slug);
}

export default async function CorteDeResPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const corte = getCorte("res", slug);
  if (!corte) notFound();

  return <FichaProducto corte={corte} />;
}
