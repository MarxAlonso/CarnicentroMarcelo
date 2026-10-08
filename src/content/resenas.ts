/**
 * Reseñas por corte.
 *
 * Aquí solo van opiniones reales, con permiso de quien las escribió. Las de
 * demostración se retiraron: publicar testimonios inventados es motivo de
 * rechazo en AdSense y publicidad engañosa ante Indecopi. Un corte sin
 * reseñas muestra la invitación a dejar la primera.
 *
 * `RESENAS_REALES` controla el JSON-LD. Mientras esté en `false`, la sección se
 * pinta pero NO se emite marcado `Review` ni `AggregateRating`. Eso es
 * deliberado:
 *
 *   · Declarar valoraciones inventadas en datos estructurados es una de las
 *     causas más frecuentes de acción manual de Google, y la sanción baja el
 *     dominio entero, no solo la ficha.
 *   · En Perú, presentar testimonios inventados como reales es publicidad
 *     engañosa ante Indecopi.
 *
 * CUANDO LLEGUEN LAS REALES:
 *   1. Sustituir el contenido de `RESENAS` por las de verdad.
 *   2. Poner `RESENAS_REALES = true`.
 *   3. El schema se emite solo, sin tocar nada más.
 *
 * PERO OJO CON LAS EXPECTATIVAS — esto conviene tenerlo claro antes de
 * invertir esfuerzo aquí: Google NO muestra estrellas en los resultados a
 * partir de reseñas que el propio negocio publica sobre sí mismo. Su regla
 * anti «auto-elogio» deja fuera del formato de estrellas a las páginas con
 * `LocalBusiness` u `Organization` cuando el negocio controla las reseñas.
 *
 * O sea: aunque estas reseñas sean reales y el schema se emita, no van a
 * producir estrellas en la búsqueda. Sirven para convencer a quien ya está en
 * la ficha —que no es poco—, no para ganar posiciones.
 *
 * Las estrellas que sí se ven en Google salen de la ficha de Google Business
 * Profile, no de la web. Ahí es donde hay que pedir las reseñas.
 */

/**
 * Interruptor del marcado estructurado.
 *
 * `false` = las reseñas de este archivo son de demostración.
 * `true`  = son reales y autorizadas por sus autores; se emite el JSON-LD.
 */
export const RESENAS_REALES = false;

export type Resena = {
  /** Nombre tal como el cliente autorizó publicarlo. */
  autor: string;
  /** 1 a 5. */
  estrellas: number;
  /** Fecha en formato ISO (AAAA-MM-DD). */
  fecha: string;
  texto: string;
  /** Distrito del cliente. Refuerza la señal local. */
  distrito?: string;
};

/**
 * Reseñas indexadas por slug del corte.
 *
 * Se cubren los cortes de más salida. Los que no aparecen aquí muestran la
 * invitación a dejar la primera opinión, que también convierte.
 */
export const RESENAS: Record<string, Resena[]> = {};

/**
 * Opiniones sobre el negocio publicadas en su ficha de Google, copiadas tal
 * cual. Se muestran en el inicio. No van al JSON-LD: Google no admite marcar
 * en la web propia reseñas tomadas de otra plataforma.
 *
 * Se dejó fuera la de Marx Alonso Chipana porque es quien desarrolla esta
 * web: mostrarla como opinión de cliente sería auto-reseña.
 */
export type ResenaGoogle = {
  autor: string;
  texto: string;
  /** Tal como lo muestra Google; la ficha no da la fecha exacta. */
  antiguedad: string;
};

export const RESENAS_GOOGLE: ResenaGoogle[] = [
  { autor: "Catherine Matos", texto: "Buena atención", antiguedad: "Hace 8 años" },
  { autor: "Reymundo Delgado Villafana", texto: "Visítenlo", antiguedad: "Hace 8 años" },
];

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
    /** Cuántas reseñas hay de cada puntuación, de 5 a 1. */
    distribucion: [5, 4, 3, 2, 1].map((estrellas) => ({
      estrellas,
      cantidad: lista.filter((r) => r.estrellas === estrellas).length,
    })),
  };
}

/**
 * Reseñas aptas para emitir en JSON-LD.
 *
 * Devuelve vacío mientras `RESENAS_REALES` sea `false`. Es el único punto por
 * el que las reseñas llegan al marcado estructurado, así que basta ese
 * interruptor para que nunca se publique una valoración inventada como dato
 * estructurado.
 */
export function resenasParaSchema(slug: string): Resena[] {
  return RESENAS_REALES ? resenasDe(slug) : [];
}
