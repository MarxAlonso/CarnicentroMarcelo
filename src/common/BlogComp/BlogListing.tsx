import Image from "next/image";
import Link from "next/link";
import { postsPublicados } from "@/content/posts";

/**
 * Listado del blog.
 *
 * Se alimenta del registro de `content/posts.ts`, que es el mismo del que salen
 * el sitemap y los metadatos de cada artículo: no hay una segunda lista de
 * títulos que pueda quedar desfasada. Es componente de servidor —no necesita
 * estado ni animación de entrada— así que las tarjetas llegan ya escritas en el
 * HTML, visibles para quien lo lea sin ejecutar scripts.
 */
export default function BlogListing() {
  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-16 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-carni-red">
            Nuestro blog
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Cultura <span className="text-carni-red">carnívora</span> y bienestar
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
            Cortes, precios y cocina desde el mostrador: qué pedir para cada plato, cuánto rinde y
            cómo conservarlo.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {postsPublicados.map((post, index) => (
            <article
              key={post.slug}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                {post.imagen && (
                  <Image
                    src={post.imagen}
                    alt=""
                    fill
                    /* Solo las dos primeras entran en la primera pantalla: el
                       resto se carga cuando el visitante llega a ellas. */
                    priority={index < 2}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <span className="absolute left-4 top-4 rounded-full bg-carni-red px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                  {post.categoria}
                </span>
              </div>

              <div className="flex flex-grow flex-col p-8">
                <time dateTime={post.publicado} className="mb-2 text-sm text-gray-400">
                  {new Date(`${post.publicado}T12:00:00`).toLocaleDateString("es-PE", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <h2 className="mb-4 text-2xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-carni-red">
                  <Link href={`/blog/${post.slug}`}>
                    {/* El enlace cubre la tarjeta entera: el área de clic es la
                        tarjeta, no solo el texto del final. */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {post.titulo}
                  </Link>
                </h2>
                <p className="mb-6 flex-grow leading-relaxed text-gray-600">{post.descripcion}</p>
                <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-carni-red transition-transform group-hover:translate-x-2">
                  Leer artículo completo <span aria-hidden="true">→</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
