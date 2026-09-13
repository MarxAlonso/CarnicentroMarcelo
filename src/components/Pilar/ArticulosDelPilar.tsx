import Link from "next/link";
import { postsDePilar, type Pilar } from "@/content/posts";

/**
 * El enlace de vuelta: de la página pilar a los artículos que la alimentan.
 *
 * Sin esto el enlazado queda a media asta —los artículos apuntan al pilar pero
 * el pilar no reparte de vuelta— y la fuerza se estanca en una sola dirección.
 * Si el pilar todavía no tiene artículos publicados, la sección no se pinta en
 * lugar de mostrar un bloque vacío.
 */
export function ArticulosDelPilar({ pilar, titulo }: { pilar: Pilar; titulo?: string }) {
  const posts = postsDePilar(pilar);
  if (posts.length === 0) return null;

  return (
    <section className="bg-gray-50 py-16" aria-labelledby="articulos-pilar">
      <div className="mx-auto max-w-5xl px-6">
        <h2 id="articulos-pilar" className="font-display text-3xl font-bold text-carni-dark-red md:text-4xl">
          {titulo ?? "Para leer antes de pedir"}
        </h2>

        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex h-full flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-6 transition-colors hover:border-carni-red"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-carni-red">
                  {post.categoria}
                </span>
                <span className="text-lg font-bold leading-snug text-gray-900">{post.titulo}</span>
                <span className="text-sm leading-relaxed text-gray-600">{post.descripcion}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
