import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FichaProducto, metadataDeCorte } from "@/components/Producto/FichaProducto";
import { cortesPorTipo, getCorte } from "@/content/catalogo";

/** Una pagina estatica por corte de cerdo, generada en el build. */
export function generateStaticParams() {
  return cortesPorTipo("cerdo").map((c) => ({ slug: c.slug }));
}

/** Un slug que no existe da 404, no una pagina vacia. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return metadataDeCorte("cerdo", slug);
}

export default async function CorteDeCerdoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const corte = getCorte("cerdo", slug);
  if (!corte) notFound();

  return <FichaProducto corte={corte} />;
}
