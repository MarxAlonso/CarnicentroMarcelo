import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft } from "react-icons/fa";
import { resenasDe, promedioDe } from "@/content/resenas";
import { whatsappUrl } from "@/lib/site";

/**
 * Reseñas del corte.
 *
 * El panel de resumen (media, total y distribución por estrellas) es lo que da
 * el aire de tienda seria; las tarjetas van debajo con el revelado del sitio.
 *
 * Importante: este componente solo PINTA. El marcado estructurado se decide en
 * `content/resenas.ts` a través de `resenasParaSchema()`, que no devuelve nada
 * mientras las reseñas sean de demostración.
 */
export function Resenas({ slug, nombre }: { slug: string; nombre: string }) {
  const resenas = resenasDe(slug);
  const resumen = promedioDe(slug);

  return (
    <section className="mt-14 border-t border-line pt-10" aria-labelledby="resenas-titulo">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[2px] text-brand-ink">
          Opiniones de clientes
        </p>
        <h2 id="resenas-titulo" className="font-display text-3xl text-ink md:text-4xl">
          Lo que dicen del {nombre.toLowerCase()}
        </h2>
      </div>

      {resenas.length > 0 && resumen ? (
        <>
          {/* Resumen: media grande a la izquierda, distribución a la derecha. */}
          <div className="mt-8 flex flex-col gap-8 rounded-2xl border border-line bg-surface-2 p-6 sm:flex-row sm:items-center sm:gap-12 sm:p-8">
            <div className="flex shrink-0 flex-col items-center gap-1 sm:items-start">
              <span className="font-display text-5xl font-bold leading-none tabular-nums text-ink">
                {resumen.promedio.toFixed(1)}
              </span>
              <Estrellas valor={resumen.promedio} tamano="grande" />
              <span className="mt-1 text-sm text-ink-subtle">
                {resumen.total} {resumen.total === 1 ? "opinión" : "opiniones"}
              </span>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              {resumen.distribucion.map(({ estrellas, cantidad }) => {
                const porcentaje = resumen.total ? (cantidad / resumen.total) * 100 : 0;
                return (
                  <div key={estrellas} className="flex items-center gap-3">
                    <span className="w-10 shrink-0 text-xs tabular-nums text-ink-subtle">
                      {estrellas} ★
                    </span>
                    <span
                      className="h-2 flex-1 overflow-hidden rounded-full bg-line"
                      role="img"
                      aria-label={`${cantidad} de ${resumen.total} opiniones dieron ${estrellas} estrellas`}
                    >
                      <span
                        className="block h-full rounded-full bg-brand transition-[width] duration-500"
                        style={{ width: `${porcentaje}%` }}
                      />
                    </span>
                    <span className="w-6 shrink-0 text-right text-xs tabular-nums text-ink-subtle">
                      {cantidad}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <ul data-reveal-group="" className="mt-6 grid gap-5 md:grid-cols-2">
            {resenas.map((r, i) => (
              <li
                key={`${r.autor}-${i}`}
                data-reveal="up"
                className="relative flex flex-col gap-3 rounded-2xl border border-line bg-surface p-6 pt-8"
              >
                <FaQuoteLeft
                  aria-hidden="true"
                  className="absolute right-6 top-6 text-2xl text-brand/15"
                />

                <div className="flex items-center justify-between gap-3">
                  <Estrellas valor={r.estrellas} />
                  <time dateTime={r.fecha} className="text-xs text-ink-subtle">
                    {new Date(`${r.fecha}T12:00:00`).toLocaleDateString("es-PE", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>

                <p className="text-[15px] leading-relaxed text-ink-muted">{r.texto}</p>

                <div className="mt-auto flex items-center gap-3 border-t border-line pt-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-warm text-sm font-bold text-brand-ink">
                    {r.autor.charAt(0)}
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="truncate text-sm font-semibold text-ink">{r.autor}</span>
                    {r.distrito && (
                      <span className="text-xs text-ink-subtle">{r.distrito}, Lima</span>
                    )}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-dashed border-line px-6 py-5">
            <p className="text-sm text-ink-muted">
              ¿Ya compraste este corte? Cuéntanos qué tal salió.
            </p>
            <a
              href={whatsappUrl(`Hola, quiero dejar mi opinión sobre el ${nombre}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-lg border border-brand px-5 py-2.5 text-sm font-semibold text-brand-ink transition-colors hover:bg-brand hover:text-white"
            >
              Dejar mi opinión
            </a>
          </div>
        </>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-line bg-surface-2 px-6 py-10 text-center">
          <p className="text-[15px] leading-relaxed text-ink-muted">
            Todavía no hay opiniones publicadas de este corte.
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-subtle">
            Si ya lo compraste, cuéntanos qué tal salió: publicamos las opiniones tal como las
            escriben nuestros clientes.
          </p>
          <a
            href={whatsappUrl(`Hola, quiero dejar mi opinión sobre el ${nombre}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-lg border border-brand px-5 py-2.5 text-sm font-semibold text-brand-ink transition-colors hover:bg-brand hover:text-white"
          >
            Ser el primero en opinar
          </a>
        </div>
      )}
    </section>
  );
}

function Estrellas({ valor, tamano = "normal" }: { valor: number; tamano?: "normal" | "grande" }) {
  const clase = tamano === "grande" ? "text-lg" : "text-sm";
  return (
    <span className={`flex gap-0.5 ${clase}`} aria-label={`${valor} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, i) => {
        const posicion = i + 1;
        if (valor >= posicion) {
          return <FaStar key={i} className="text-[#FFB400]" aria-hidden="true" />;
        }
        // Media estrella cuando la nota cae dentro de esta posición (4.5 → la quinta).
        if (valor >= posicion - 0.5) {
          return <FaStarHalfAlt key={i} className="text-[#FFB400]" aria-hidden="true" />;
        }
        return <FaRegStar key={i} className="text-ink-subtle/50" aria-hidden="true" />;
      })}
    </span>
  );
}
