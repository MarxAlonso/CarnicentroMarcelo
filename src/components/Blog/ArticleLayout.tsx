import Link from "next/link";
import { PILARES } from "@/lib/pilares";
import { whatsappUrl } from "@/lib/site";
import type { Post } from "@/content/posts";

/**
 * Maqueta común de los artículos.
 *
 * Los tres artículos que había traían cada uno su propia cabecera, su propio
 * ancho de columna y su propia escala tipográfica. Este componente los unifica
 * y hace que dar de alta una pieza nueva sea escribir su contenido y nada más.
 *
 * Es de servidor: cero JavaScript.
 */
export function ArticleLayout({
  post,
  entradilla,
  children,
}: {
  post: Post;
  /** La respuesta directa, en dos o tres líneas. Es lo que citan los buscadores con IA. */
  entradilla: string;
  children: React.ReactNode;
}) {
  const pilar = PILARES[post.pilar];
  const fecha = new Date(`${post.publicado}T12:00:00`).toLocaleDateString("es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="bg-surface pb-4">
      <header className="border-b border-line bg-surface-warm/40">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <nav aria-label="Migas de pan" className="mb-5 text-sm text-ink-muted">
            <Link href="/blog" className="font-medium text-brand-ink hover:underline">
              Blog
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span>{post.categoria}</span>
          </nav>

          <h1 className="hero-enter font-display text-3xl font-bold leading-tight text-brand-ink-deep md:text-5xl">
            {post.titulo}
          </h1>

          <p
            className="hero-enter mt-5 text-lg leading-relaxed text-ink md:text-xl"
            style={{ "--hero-delay": "80ms" } as React.CSSProperties}
          >
            {entradilla}
          </p>

          <p className="mt-6 text-sm text-ink-muted">
            Publicado el <time dateTime={post.publicado}>{fecha}</time> · Carnicentro Marcelo
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-12 [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-brand-ink-deep [&_h2]:md:text-3xl [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-ink [&_li]:leading-relaxed [&_p]:mb-5 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-ink-muted [&_strong]:text-ink [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-lg [&_ul]:text-ink-muted">
        {children}
      </div>

      {/* El enlace de ida al pilar, en todos los artículos por igual. */}
      <aside className="mx-auto max-w-3xl px-6 pb-14">
        <div className="rounded-2xl border border-brand/20 bg-surface-warm/50 p-7">
          <h2 className="font-display text-2xl font-bold text-brand-ink-deep">{pilar.h1}</h2>
          <p className="mt-3 leading-relaxed text-ink-muted">{pilar.entradilla}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={pilar.ruta}
              className="rounded-lg bg-brand px-5 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-brand-deep active:scale-95"
            >
              Ver cortes y precios
            </Link>
            <a
              href={whatsappUrl(`Hola, leí "${post.titulo}" y quiero hacer un pedido.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-brand px-5 py-3 font-semibold text-brand-ink transition-colors hover:bg-surface"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </aside>
    </article>
  );
}

/** Tabla con desbordamiento propio, para que la página no se desplace de lado. */
export function TablaArticulo({
  cabeceras,
  filas,
  nota,
}: {
  cabeceras: string[];
  filas: React.ReactNode[][];
  nota?: string;
}) {
  return (
    <div className="my-8">
      <div className="overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[520px] border-collapse text-left">
          <thead>
            <tr className="bg-surface-2 text-xs uppercase tracking-widest text-ink-subtle">
              {cabeceras.map((c) => (
                <th key={c} scope="col" className="px-4 py-3 font-semibold">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {filas.map((fila, i) => (
              <tr key={i}>
                {fila.map((celda, j) => (
                  <td
                    key={j}
                    className={`px-4 py-3 align-top text-[15px] leading-relaxed ${
                      j === 0 ? "font-medium text-ink" : "text-ink-muted"
                    }`}
                  >
                    {celda}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {nota && <p className="mt-3 text-sm text-ink-subtle">{nota}</p>}
    </div>
  );
}
