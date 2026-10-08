/**
 * Fuente única de verdad del negocio.
 *
 * Todo lo que aparece en metadatos, JSON-LD, sitemap y pie de página sale de
 * aquí. Si un dato cambia (un precio, un horario, un distrito), se cambia en
 * este archivo y se propaga solo. Nada de datos del negocio escritos a mano
 * dentro de un componente.
 */

export const SITE = {
  name: "Carnicentro Marcelo",
  legalName: "Carnicentro Marcelo",
  url: "https://carnicentromarcelo.com",
  locale: "es_PE",
  description:
    "Carnicería en Lima con cortes frescos de res y cerdo. Precios por kilo, delivery coordinado y atención directa por WhatsApp.",
  phone: "+51984620910",
  phoneDisplay: "+51 984 620 910",
  /** Como lo marca y lo dicta alguien desde Lima, sin prefijo de país. */
  phoneLocal: "984 620 910",
  whatsapp: "51984620910",
  logo: "/logo-carnicentromarcelo.png",
  ogImage: "/logo-carnicentromarcelo.png",
} as const;

/**
 * PENDIENTE — dato que depende de Carnicentro Marcelo.
 *
 * Sin dirección exacta no se puede emitir `LocalBusiness` con `address`, que es
 * lo que Google usa para la ficha del negocio y para "carnicería cerca de mí".
 * Mientras `street` esté vacío, `buildLocalBusinessSchema()` omite el bloque de
 * dirección en vez de publicar un dato inventado.
 */
export const ADDRESS = {
  street: "",
  district: "",
  city: "Lima",
  region: "Lima",
  postalCode: "",
  country: "PE",
  /** Coordenadas del local, para el mapa y el schema. */
  lat: null as number | null,
  lng: null as number | null,
} as const;

export const HOURS = [
  { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "14:00" },
  { days: ["Saturday"], opens: "07:00", closes: "14:30" },
  { days: ["Sunday"], opens: "06:00", closes: "14:30" },
] as const;

export const HOURS_DISPLAY = [
  { label: "Lunes a viernes", value: "7:00 a. m. – 2:00 p. m." },
  { label: "Sábados", value: "7:00 a. m. – 2:30 p. m." },
  { label: "Domingos", value: "6:00 a. m. – 2:30 p. m." },
] as const;

/**
 * PENDIENTE — lista real de reparto, confirmada por Carnicentro Marcelo.
 *
 * De esta lista salen: el `areaServed` del schema, el listado visible del pilar
 * de delivery y, en el mes 2, una página por distrito. Escribir "Lima
 * Metropolitana" a secas no posiciona en ninguna búsqueda por zona; el nombre
 * del distrito, sí.
 */
export const DISTRITOS: string[] = [];

/**
 * Fecha de la última revisión de precios, en formato ISO.
 *
 * Se pinta visible sobre cada tabla de precios. Actualizar este valor cada vez
 * que se toquen los precios de `productosRes` o `productosCerdo`: una tabla sin
 * fecha envejece en silencio y hace más daño que no publicarla.
 */
export const PRECIOS_ACTUALIZADOS = "2026-09-13";

/** Pedido mínimo y envío, por confirmar. `null` = todavía no se declara en la web. */
export const DELIVERY = {
  minimoSoles: null as number | null,
  costoEnvioSoles: null as number | null,
  anticipacionHoras: 24,
} as const;

/** Publicadas también en el pilar de delivery: si cambian, cambian aquí. */
export const FORMAS_DE_PAGO = ["Efectivo", "Yape", "Plin"] as const;

/**
 * Cuenta de AdSense.
 *
 * De aquí salen el script de anuncios del layout y el `/ads.txt`. Si se cambia
 * de cuenta, se cambia este valor y nada más. Va sin el prefijo `ca-`: el
 * script lo antepone, el `ads.txt` lo usa tal cual.
 */
export const ADSENSE_PUB_ID = "pub-7330512160006531";

export function whatsappUrl(mensaje?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}

export function absoluteUrl(path = "/") {
  return new URL(path, SITE.url).toString();
}
