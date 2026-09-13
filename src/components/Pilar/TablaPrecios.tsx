import Image from "next/image";
import Link from "next/link";
import type { Corte } from "@/content/catalogo";
import { whatsappUrl } from "@/lib/site";

/**
 * Tabla de precios por kilo.
 *
 * Es la pieza que ninguna carnicería de Lima publica, y la que hace que el
 * `Offer` del JSON-LD tenga respaldo visible. La fecha de actualización va
 * arriba y a la vista: una tabla de precios sin fecha envejece en silencio y
 * hace más daño que no tenerla.
 *
 * Cada fila enlaza además a la ficha del corte, así que la tabla funciona como
 * mapa de enlaces internos hacia las 31 páginas nuevas.
 */
export function TablaPrecios({
  cortes,
  actualizado,
  titulo,
  unidad = "por kilo",
}: {
  cortes: Corte[];
  actualizado: string;
  titulo: string;
  unidad?: string;
}) {
  const fecha = new Date(`${actualizado}T12:00:00`).toLocaleDateString("es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="mx-auto max-w-5xl px-6 py-16" aria-labelledby="tabla-precios">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2
          id="tabla-precios"
          className="font-display text-3xl font-bold text-brand-ink-deep md:text-4xl"
        >
          {titulo}
        </h2>
        <p className="text-sm text-ink-subtle">
          Precios {unidad} · actualizados el <time dateTime={actualizado}>{fecha}</time>
        </p>
      </div>

      {/* La tabla desborda en horizontal dentro de su propio contenedor, para
          que el cuerpo de la página nunca se desplace de lado en móvil. */}
      <div className="mt-8 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[560px] border-collapse bg-surface text-left">
          <caption className="sr-only">
            {titulo}. Precios {unidad} en soles.
          </caption>
          <thead>
            <tr className="bg-surface-2 text-xs uppercase tracking-widest text-ink-subtle">
              <th scope="col" className="px-5 py-4 font-semibold">
                Corte
              </th>
              <th scope="col" className="hidden px-5 py-4 font-semibold sm:table-cell">
                Para qué sirve
              </th>
              <th scope="col" className="px-5 py-4 text-right font-semibold">
                Precio {unidad}
              </th>
              <th scope="col" className="px-5 py-4 text-right font-semibold">
                <span className="sr-only">Pedir</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {cortes.map((corte) => (
              <tr key={corte.slug} className="align-middle transition-colors hover:bg-surface-2">
                <th scope="row" className="px-5 py-4 font-medium text-ink">
                  <Link href={corte.ruta} className="flex items-center gap-3 hover:text-brand-ink">
                    <Image
                      src={corte.imagen}
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 shrink-0 rounded-lg object-cover"
                      sizes="48px"
                    />
                    {corte.nombre}
                  </Link>
                </th>
                <td className="hidden max-w-sm px-5 py-4 text-sm leading-relaxed text-ink-muted sm:table-cell">
                  {corte.platos ? corte.platos.join(" · ") : corte.descripcion}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-right font-bold tabular-nums text-brand-ink">
                  S/ {corte.precio.toFixed(2)}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-right">
                  <a
                    href={whatsappUrl(`Hola, quiero pedir ${corte.nombre}. ¿Está disponible?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand-deep"
                  >
                    Pedir
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-ink-subtle">
        Los precios pueden variar según el abastecimiento del día. Confirmamos el total por WhatsApp
        antes de preparar el pedido.
      </p>
    </section>
  );
}
