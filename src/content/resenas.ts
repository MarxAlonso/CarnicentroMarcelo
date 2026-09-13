/**
 * Reseñas por corte.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │  ⚠️  EL CONTENIDO DE ABAJO ES DE DEMOSTRACIÓN, NO SON CLIENTES REALES │
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * Está aquí para ver el diseño funcionando y para que la página no salga con
 * un hueco. Se reemplaza por reseñas reales en cuanto las haya.
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
 * Conseguirlas es más fácil de lo que parece: pedir una línea al cliente por
 * WhatsApp después de cada entrega. En dos semanas hay material para los
 * cortes que más se venden, que son los que importan.
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
export const RESENAS: Record<string, Resena[]> = {
  // ───────────────────────── RES ─────────────────────────
  "lomo-fino": [
    {
      autor: "Roberto García",
      estrellas: 5,
      fecha: "2026-08-24",
      distrito: "Surco",
      texto:
        "Pedí dos kilos para un lomo saltado de cumpleaños y me lo cortaron en tiras como lo pedí, sin tener que explicarlo dos veces. La carne no soltó agua en el wok, que es lo que siempre me pasaba con la del súper.",
    },
    {
      autor: "Claudia Espinoza",
      estrellas: 5,
      fecha: "2026-08-11",
      distrito: "San Borja",
      texto:
        "Es caro, no voy a mentir, pero para una ocasión vale cada sol. Hice medallones y quedaron tan tiernos que mi suegra preguntó dónde lo había comprado.",
    },
    {
      autor: "Diego Palomino",
      estrellas: 4,
      fecha: "2026-07-30",
      distrito: "Miraflores",
      texto:
        "Excelente calidad. Le pongo cuatro solo porque tuve que pedirlo con un día de anticipación y yo lo quería para el mismo día. Avisando antes, perfecto.",
    },
  ],
  "tira-de-asado": [
    {
      autor: "Marco Quispe",
      estrellas: 5,
      fecha: "2026-09-01",
      distrito: "La Molina",
      texto:
        "Tres kilos para una parrilla de doce personas y sobró. El corte venía parejo, del mismo grosor, así que todo se cocinó al mismo tiempo. Eso no lo consigues en cualquier lado.",
    },
    {
      autor: "Fiorella Ramos",
      estrellas: 5,
      fecha: "2026-08-17",
      distrito: "Jesús María",
      texto:
        "Le pregunté al de la tienda cuánto pedir para ocho personas y me dijo la cantidad exacta. Llegó con buena grasa, que es lo que le da el sabor. Repetimos el domingo siguiente.",
    },
  ],
  "cuadril-de-cadera": [
    {
      autor: "Ana Lucía Bermúdez",
      estrellas: 5,
      fecha: "2026-08-28",
      distrito: "Magdalena",
      texto:
        "Mi corte de cabecera para el bistec de casa. Tierno sin ser carísimo y siempre me lo cortan del grosor que pido. Llevo meses comprando acá.",
    },
    {
      autor: "Javier Untiveros",
      estrellas: 5,
      fecha: "2026-07-19",
      distrito: "Pueblo Libre",
      texto:
        "Lo llevé a la parrilla en pieza entera, tipo picanha, y salió redondo. Buena relación entre lo que cuesta y lo que rinde.",
    },
  ],
  "guiso-de-paleta": [
    {
      autor: "Rosa Mendoza",
      estrellas: 5,
      fecha: "2026-08-20",
      distrito: "Breña",
      texto:
        "Para el seco de res no hay nada mejor y encima es de los más económicos. A la hora y media se deshace solo. Me alcanzó para dos días de almuerzo.",
    },
    {
      autor: "Luis Alberto Ccahua",
      estrellas: 4,
      fecha: "2026-07-25",
      distrito: "San Miguel",
      texto:
        "Muy buena carne para guiso. Pedí kilo y medio y venía bien limpia, casi sin desperdicio. Solo tener paciencia con la cocción, no es corte para apuros.",
    },
  ],
  entrana: [
    {
      autor: "Sergio Del Águila",
      estrellas: 5,
      fecha: "2026-08-30",
      distrito: "Barranco",
      texto:
        "La entraña es difícil de conseguir bien y esta vino gruesa, no esa lámina delgada que venden por ahí. Fuego fuerte, seis minutos y listo.",
    },
  ],
  "carne-molida-especial": [
    {
      autor: "Patricia Yataco",
      estrellas: 5,
      fecha: "2026-09-03",
      distrito: "Lince",
      texto:
        "Hice hamburguesas caseras y por primera vez no se me desarmaron en la sartén. Me explicaron que era por la grasa de la especial y tenían razón.",
    },
    {
      autor: "Óscar Benavides",
      estrellas: 5,
      fecha: "2026-08-06",
      distrito: "Surquillo",
      texto:
        "La muelen delante tuyo el mismo día. Se nota en el color y en que no suelta esa agua rara al cocinarla.",
    },
  ],
  "osobuco-de-brazo": [
    {
      autor: "Carmen Rosa Flores",
      estrellas: 5,
      fecha: "2026-08-13",
      distrito: "Chorrillos",
      texto:
        "Para el caldo de los domingos. Viene con buen hueso y tuétano, que es de donde sale el sabor. Mi familia lo pide todas las semanas.",
    },
  ],
  pecho: [
    {
      autor: "Manuel Tapia",
      estrellas: 5,
      fecha: "2026-07-28",
      distrito: "Callao",
      texto:
        "Sancochado de domingo con este pecho y quedó espeso, como debe ser. Tres horas de olla, pero vale la pena.",
    },
  ],
  biffe: [
    {
      autor: "Renzo Alcántara",
      estrellas: 5,
      fecha: "2026-08-22",
      distrito: "San Isidro",
      texto:
        "Buen marmoleo, que es lo que uno busca en un bife. No le quité la grasa como me recomendaron y quedó jugosísimo.",
    },
  ],

  // ──────────────────────── CERDO ────────────────────────
  "panceta-especial": [
    {
      autor: "Elena Chávez",
      estrellas: 5,
      fecha: "2026-09-05",
      distrito: "Los Olivos",
      texto:
        "Chicharrón de domingo para toda la familia. Las capas de carne y grasa venían muy parejas, y eso es exactamente lo que hace que quede crocante y no chicloso.",
    },
    {
      autor: "Víctor Hugo Salazar",
      estrellas: 5,
      fecha: "2026-08-15",
      distrito: "Independencia",
      texto:
        "Compro tres kilos cada quince días para el negocio. Siempre la misma calidad, nunca me han fallado con la entrega.",
    },
  ],
  "bondiola-sin-hueso": [
    {
      autor: "Mariana Torres",
      estrellas: 5,
      fecha: "2026-08-27",
      distrito: "Surco",
      texto:
        "La puse tres horas al horno y salió que se deshacía. Me dijeron que era casi imposible pasarse con este corte y así fue, no tuve que estar pendiente.",
    },
    {
      autor: "Andrés Figueroa",
      estrellas: 4,
      fecha: "2026-07-22",
      distrito: "Ate",
      texto:
        "Muy buena para pulled pork. La única pega fue mía: pedí poco y me quedé corto. La próxima llevo el doble.",
    },
  ],
  "chuleta-de-bondiola": [
    {
      autor: "Gabriela Ríos",
      estrellas: 5,
      fecha: "2026-08-09",
      distrito: "San Juan de Miraflores",
      texto:
        "Me recomendaron esta en vez de la de lomo porque yo siempre me paso de cocción. Acertaron: quedó jugosa igual. Buen consejo del mostrador.",
    },
  ],
  "pierna-sin-hueso": [
    {
      autor: "Julio Meneses",
      estrellas: 5,
      fecha: "2026-08-02",
      distrito: "Comas",
      texto:
        "Para los sánguches de chicharrón del negocio. Magra, limpia y rinde bastante. Buen precio por kilo comparado con otros sitios.",
    },
  ],
  "brazuelo-deshuesado": [
    {
      autor: "Nancy Huamán",
      estrellas: 5,
      fecha: "2026-07-31",
      distrito: "Villa El Salvador",
      texto:
        "El más barato del mostrador y para adobo queda igual que uno caro. Lo descubrí porque me lo recomendaron y ahora es el que llevo siempre.",
    },
  ],
};

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
