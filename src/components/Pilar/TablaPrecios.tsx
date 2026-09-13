import Image from "next/image";
import type { StaticImageData } from "next/image";
import { whatsappUrl } from "@/lib/site";

export type CorteConPrecio = {
  id: number | string;
  nombre: string;
  precio: number;
  descripcion?: string;
  imagen: string | StaticImageData;
  categoria?: string | number;
};

/**
 * Tabla de precios por kilo.
 *
 * Es la pieza que ninguna carnicería de Lima publica, y la que hace que el
 * `Offer` del JSON-LD tenga un respaldo visible. La fecha de actualización va
 * arriba y a la vista: una tabla de precios sin fecha envejece en silencio y
 * hace más daño que no tenerla.
 */
export function TablaPrecios({
  cortes,
  actualizado,
  titulo,
  unidad = "por kilo",
}: {
  cortes: CorteConPrecio[];
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
        <h2 id="tabla-precios" className="font-display text-3xl font-bold text-carni-dark-red md:text-4xl">
          {titulo}
        </h2>
        <p className="text-sm text-gray-500">
          Precios {unidad} · actualizados el <time dateTime={actualizado}>{fecha}</time>
        </p>
      </div>

      {/* La tabla desborda en horizontal dentro de su propio contenedor, para
          que el cuerpo de la página nunca se desplace de lado en móvil. */}
      <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200">
        <table className="w-full min-w-[560px] border-collapse bg-white text-left">
          <caption className="sr-only">
            {titulo}. Precios {unidad} en soles.
          </caption>
          <thead>
            <tr className="bg-gray-50 text-xs uppercase tracking-widest text-gray-500">
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
          <tbody className="divide-y divide-gray-100">
            {cortes.map((corte) => (
              <tr key={corte.id} className="align-middle">
                <th scope="row" className="px-5 py-4 font-medium text-gray-900">
                  <span className="flex items-center gap-3">
                    <Image
                      src={corte.imagen}
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 shrink-0 rounded-lg object-cover"
                      sizes="48px"
                    />
                    {corte.nombre}
                  </span>
                </th>
                <td className="hidden max-w-sm px-5 py-4 text-sm leading-relaxed text-gray-600 sm:table-cell">
                  {corte.descripcion}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-right font-bold tabular-nums text-carni-red">
                  S/ {corte.precio.toFixed(2)}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-right">
                  <a
                    href={whatsappUrl(`Hola, quiero pedir ${corte.nombre}. ¿Está disponible?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg bg-carni-red px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-carni-dark-red"
                  >
                    Pedir
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Los precios pueden variar según el abastecimiento del día. Confirmamos el total por WhatsApp
        antes de preparar el pedido.
      </p>
    </section>
  );
}
