import { FaStar, FaRegStar } from "react-icons/fa";
import { resenasDe, promedioDe } from "@/content/resenas";
import { whatsappUrl } from "@/lib/site";

/**
 * Reseñas del corte.
 *
 * La sección solo aparece cuando el corte tiene reseñas reales en
 * `content/resenas.ts`. Si no las tiene, se muestra en su lugar una invitación
 * a dejar la primera — que es honesto y además es lo que consigue las
 * siguientes.
 *
 * Nunca se inventan reseñas. El porqué está explicado arriba de
 * `content/resenas.ts`, y se resume en que Google penaliza el dominio entero
 * cuando detecta marcado de reseñas falsas.
 */
export function Resenas({ slug, nombre }: { slug: string; nombre: string }) {
  const resenas = resenasDe(slug);
  const resumen = promedioDe(slug);

  return (
    <section className="mt-12 border-t border-line pt-10" aria-labelledby="resenas-titulo">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[2px] text-brand-ink">
            Opiniones verificadas
          </p>
          <h2 id="resenas-titulo" className="mt-2 font-display text-3xl text-ink md:text-4xl">
            Lo que dicen de este corte
          </h2>
        </div>

        {resumen && (
          <div className="flex items-center gap-3">
            <Estrellas valor={resumen.promedio} />
            <span className="text-sm font-semibold tabular-nums text-ink">
              {resumen.promedio} / 5
            </span>
            <span className="text-sm text-ink-subtle">
              ({resumen.total} {resumen.total === 1 ? "reseña" : "reseñas"})
            </span>
          </div>
        )}
      </div>

      {resenas.length > 0 ? (
        <ul data-reveal-group="" className="mt-8 grid gap-5 md:grid-cols-2">
          {resenas.map((r, i) => (
            <li
              key={`${r.autor}-${i}`}
              data-reveal="up"
              className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-6"
            >
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

              <div className="mt-auto flex items-center gap-3 pt-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-warm text-sm font-bold text-brand-ink">
                  {r.autor.charAt(0)}
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-ink">{r.autor}</span>
                  {r.distrito && (
                    <span className="text-xs text-ink-subtle">{r.distrito}, Lima</span>
                  )}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-line bg-surface-2 px-6 py-8 text-center">
          <p className="text-[15px] leading-relaxed text-ink-muted">
            Todavía no hay reseñas publicadas de este corte.
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
            Dejar mi opinión
          </a>
        </div>
      )}
    </section>
  );
}

function Estrellas({ valor }: { valor: number }) {
  const llenas = Math.round(valor);
  return (
    <span className="flex gap-0.5" aria-label={`${valor} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, i) =>
        i < llenas ? (
          <FaStar key={i} className="text-[#FFB400]" aria-hidden="true" />
        ) : (
          <FaRegStar key={i} className="text-ink-subtle" aria-hidden="true" />
        )
      )}
    </span>
  );
}
