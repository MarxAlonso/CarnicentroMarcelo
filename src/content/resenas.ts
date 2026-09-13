/**
 * Reseñas de clientes por corte.
 *
 * ⚠️ IMPORTANTE — LEER ANTES DE AÑADIR NADA AQUÍ
 *
 * Este archivo está vacío a propósito. Las reseñas tienen que ser reales:
 * escritas por clientes que compraron, con su nombre y su permiso.
 *
 * No es un escrúpulo teórico, son dos riesgos concretos:
 *
 *   1. Google penaliza manualmente el marcado `Review` y `AggregateRating`
 *      cuando detecta que las reseñas no provienen de clientes reales. La
 *      sanción no afecta solo a la ficha: baja el dominio entero, que es
 *      justo lo que este proyecto está construyendo.
 *
 *   2. En Perú, presentar testimonios inventados como reales es publicidad
 *      engañosa ante Indecopi.
 *
 * Por eso `buildResenaSchema()` solo emite JSON-LD cuando hay reseñas de
 * verdad, y la sección no se pinta si el corte no tiene ninguna. El sitio
 * funciona perfectamente sin ellas; simplemente no presume de algo que no
 * tiene todavía.
 *
 * CÓMO CONSEGUIRLAS, que es la parte fácil: tras cada pedido por WhatsApp,
 * pedir una línea al cliente. En dos semanas hay material para los cortes que
 * más se venden, que son los que importan.
 */

export type Resena = {
  /** Nombre tal como el cliente autorizó publicarlo. */
  autor: string;
  /** 1 a 5. */
  estrellas: number;
  /** Fecha en formato ISO (AAAA-MM-DD). */
  fecha: string;
  texto: string;
  /** Distrito del cliente. Refuerza la señal local, pero es opcional. */
  distrito?: string;
};

/**
 * Reseñas indexadas por slug del corte.
 *
 * Ejemplo de cómo quedaría una entrada, para cuando lleguen las reales:
 *
 * export const RESENAS: Record<string, Resena[]> = {
 *   "lomo-fino": [
 *     {
 *       autor: "Roberto García",
 *       estrellas: 5,
 *       fecha: "2026-09-02",
 *       distrito: "Surco",
 *       texto: "Pedí dos kilos para un lomo saltado y llegó cortado tal como lo pedí.",
 *     },
 *   ],
 * };
 */
export const RESENAS: Record<string, Resena[]> = {};

export function resenasDe(slug: string): Resena[] {
  return RESENAS[slug] ?? [];
}

export function promedioDe(slug: string) {
  const lista = resenasDe(slug);
  if (lista.length === 0) return null;
  const suma = lista.reduce((acc, r) => acc + r.estrellas, 0);
  return {
    promedio: Math.round((suma / lista.length) * 10) / 10,
    total: lista.length,
  };
}

/** Total de reseñas en todo el sitio. Sirve para decidir si mostrar la sección. */
export const HAY_RESENAS = Object.keys(RESENAS).length > 0;
