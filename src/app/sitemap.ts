import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { PILARES_LISTA } from "@/lib/pilares";
import { postsPublicados } from "@/content/posts";
import { CATALOGO } from "@/content/catalogo";

/**
 * Sitemap generado en el build a partir de las rutas reales.
 *
 * Antes era un XML escrito a mano en /public: cada página nueva había que
 * agregarla a mano y las fechas de modificacion eran fijas. Ahora una pieza
 * nueva entra al sitemap por el solo hecho de existir en el registro.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, SITE.url).toString();
  const hoy = new Date();

  const estaticas: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: hoy, changeFrequency: "weekly", priority: 1 },
    { url: url("/nosotros"), lastModified: hoy, changeFrequency: "monthly", priority: 0.6 },
    { url: url("/contacto"), lastModified: hoy, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/blog"), lastModified: hoy, changeFrequency: "weekly", priority: 0.8 },
  ];

  // Los pilares son el destino de todo el enlazado interno: prioridad alta.
  const pilares: MetadataRoute.Sitemap = PILARES_LISTA.map((p) => ({
    url: url(p.ruta),
    lastModified: hoy,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const articulos: MetadataRoute.Sitemap = postsPublicados.map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: new Date(post.actualizado ?? post.publicado),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Una entrada por corte. Son 31 paginas que antes no existian: el catalogo
  // vivia dentro de un filtro de JavaScript, sin URL propia.
  const fichas: MetadataRoute.Sitemap = CATALOGO.map((corte) => ({
    url: url(corte.ruta),
    lastModified: hoy,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...estaticas, ...pilares, ...fichas, ...articulos];
}
