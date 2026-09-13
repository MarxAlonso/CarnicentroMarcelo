import Image from "next/image";
import Link from "next/link";
import { cortesRelacionados, type Corte } from "@/content/catalogo";

/**
 * Cortes relacionados.
 *
 * A diferencia del componente de origen, aquí no hay `useEffect` ni petición:
 * el catálogo es estático, así que las tarjetas se escriben en el HTML. Eso
 * importa porque son enlaces internos — si solo aparecieran tras ejecutar
 * JavaScript, Google no seguiría ninguno y las 31 fichas quedarían huérfanas.
 *
 * Componente de servidor: cero JavaScript.
 */
export function RelatedProducts({ corte }: { corte: Corte }) {
  const relacionados = cortesRelacionados(corte, 3);
  if (relacionados.length === 0) return null;

  return (
    <section className="mt-14 flex flex-col gap-7" aria-labelledby="relacionados-titulo">
      <div className="flex w-full flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-[2.6px] text-brand-ink">
          También te puede interesar
        </span>
        <h2 id="relacionados-titulo" className="font-display text-3xl text-ink md:text-4xl">
          Otros cortes de {corte.categoria.toLowerCase()}
        </h2>
      </div>

      <div data-reveal-group="" className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relacionados.map((rel) => (
          <article
            key={rel.slug}
            data-reveal="up"
            className="group relative flex flex-col overflow-hidden rounded-lg border border-line bg-surface transition-shadow hover:shadow-xl"
          >
            <div className="relative h-64 overflow-hidden bg-surface-2">
              <Image
                src={rel.imagen}
                alt={rel.nombre}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col gap-2.5 p-5">
              <span className="text-[10.5px] font-semibold uppercase tracking-[1.4px] text-brand-ink">
                {rel.categoria}
              </span>

              <h3 className="min-h-[40px] font-sans text-[15px] font-semibold leading-tight text-ink">
                <Link href={rel.ruta}>
                  {/* El enlace cubre toda la tarjeta, no solo el texto. */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {rel.nombre}
                </Link>
              </h3>

              <span className="text-lg font-semibold tabular-nums text-ink">
                S/ {rel.precio.toFixed(2)}
                <span className="ml-1 text-sm font-medium text-ink-subtle">/ kg</span>
              </span>

              <span className="mt-auto pt-2 text-xs font-bold uppercase tracking-widest text-brand-ink transition-transform group-hover:translate-x-1">
                Ver corte →
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
