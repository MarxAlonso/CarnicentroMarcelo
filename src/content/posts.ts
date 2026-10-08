/**
 * Registro de artículos del blog.
 *
 * Es la única lista: de aquí salen el listado, las rutas estáticas, el sitemap
 * y los metadatos de cada pieza. Las piezas en estado "planificado" viven aquí
 * desde ya —así el plan editorial está en el código y no en una hoja aparte—
 * pero no se generan como ruta ni entran al sitemap hasta tener cuerpo.
 *
 * `pilar` es lo que sostiene el enlazado: cada artículo enlaza a su página
 * pilar y la página pilar enlaza de vuelta.
 */

export type Intencion = "compra" | "comparacion" | "informacion";
export type Pilar = "res" | "cerdo" | "delivery";
export type Estado = "publicado" | "planificado";

export type Post = {
  slug: string;
  titulo: string;
  descripcion: string;
  /** Búsqueda principal que esta pieza quiere responder. Una sola, por pieza. */
  objetivo: string;
  intencion: Intencion;
  pilar: Pilar;
  estado: Estado;
  categoria: string;
  publicado: string;
  actualizado?: string;
  autor?: string;
  /** Ruta pública de la imagen de cabecera. */
  imagen?: string;
};

export const POSTS: Post[] = [
  // ─────────── Publicados ───────────
  {
    slug: "importancia-carne-res",
    titulo: "La importancia de la carne de res en el desarrollo humano",
    descripcion:
      "Por qué la carne roja es fundamental para niños, jóvenes y adultos: hierro hemínico, vitamina B12 y desarrollo muscular, desde la evidencia nutricional.",
    objetivo: "importancia de la carne de res",
    intencion: "informacion",
    pilar: "res",
    estado: "publicado",
    categoria: "Salud y nutrición",
    publicado: "2026-03-12",
    imagen: "/blog/blog_header_nutrition_beef.webp",
  },
  {
    slug: "beneficios-nutritivos-carne-res",
    titulo: "Beneficios nutritivos de la carne de res",
    descripcion:
      "Valor nutricional, aporte proteico y minerales esenciales de la carne de res, corte por corte y por cada 100 gramos.",
    objetivo: "beneficios de la carne de res",
    intencion: "informacion",
    pilar: "res",
    estado: "publicado",
    categoria: "Nutrición",
    publicado: "2026-03-12",
    imagen: "/blog/nutricion_carne_header.webp",
  },
  {
    slug: "beneficios-carne-gym",
    titulo: "Carne de res y cerdo: tu aliado en el gimnasio",
    descripcion:
      "Qué cortes magros de res y cerdo aportan más proteína por sol invertido y cómo acelerar la recuperación después de entrenar.",
    objetivo: "carne para masa muscular",
    intencion: "informacion",
    pilar: "res",
    estado: "publicado",
    categoria: "Fitness",
    publicado: "2026-03-12",
    imagen: "/blog/gym_blog_header.webp",
  },

  // ─────────── Planificados · pilar RES ───────────
  {
    slug: "precio-kilo-carne-de-res-lima",
    titulo: "¿Cuánto cuesta el kilo de carne de res en Lima?",
    descripcion:
      "Precio por kilo de los 23 cortes de res, actualizado cada mes. Lomo fino, bife, asado de tira, osobuco y carne molida.",
    objetivo: "precio carne de res Lima",
    intencion: "compra",
    pilar: "res",
    estado: "planificado",
    categoria: "Precios",
    publicado: "2026-10-06",
  },
  {
    slug: "que-corte-de-res-para-cada-plato",
    titulo: "Qué corte de res pedir para cada plato peruano",
    descripcion:
      "Lomo saltado, bistec a lo pobre, seco de res, carapulcra y sancochado: el corte exacto que pide cada plato y cuánto cuesta.",
    objetivo: "qué corte de res para lomo saltado",
    intencion: "informacion",
    pilar: "res",
    estado: "publicado",
    categoria: "Cocina",
    publicado: "2026-09-13",
  },
  {
    slug: "cortes-de-carne-de-res-peru",
    titulo: "Los cortes de res en Perú, explicados uno por uno",
    descripcion:
      "Guía con foto de los 23 cortes de res que se venden en Perú, para qué sirve cada uno y cómo se llaman en Argentina y Chile.",
    objetivo: "cortes de carne de res Perú",
    intencion: "informacion",
    pilar: "res",
    estado: "publicado",
    categoria: "Guías",
    publicado: "2026-09-13",
  },
  {
    slug: "tipos-de-carne-molida",
    titulo: "Carne molida corriente, especial y extra especial: la diferencia",
    descripcion:
      "Cuánta grasa lleva cada tipo de carne molida, para qué plato sirve y por qué la extra especial no siempre es la que conviene.",
    objetivo: "diferencia carne molida especial",
    intencion: "comparacion",
    pilar: "res",
    estado: "publicado",
    categoria: "Guías",
    publicado: "2026-09-13",
  },

  // ─────────── Planificados · pilar CERDO ───────────
  {
    slug: "precio-kilo-carne-de-cerdo-lima",
    titulo: "¿Cuánto cuesta el kilo de cerdo en Lima?",
    descripcion:
      "Precio por kilo de panceta, bondiola, chuleta, pierna y brazuelo de cerdo, actualizado cada mes.",
    objetivo: "precio carne de cerdo Lima",
    intencion: "compra",
    pilar: "cerdo",
    estado: "planificado",
    categoria: "Precios",
    publicado: "2026-11-03",
  },
  {
    slug: "que-corte-para-chicharron",
    titulo: "Qué corte de cerdo comprar para un buen chicharrón",
    descripcion:
      "Panceta o pierna, con hueso o sin hueso, cuánta grasa necesita y cuántos kilos pedir por comensal para un chicharrón peruano.",
    objetivo: "qué carne se usa para chicharrón",
    intencion: "informacion",
    pilar: "cerdo",
    estado: "planificado",
    categoria: "Cocina",
    publicado: "2026-11-10",
  },
  {
    slug: "panceta-bondiola-chuleta-cual-elegir",
    titulo: "Panceta, bondiola o chuleta: cuál elegir según el plato",
    descripcion:
      "Tabla de decisión por método de cocción, grasa y tiempo, con los cortes de cerdo que hay en stock hoy y su precio.",
    objetivo: "diferencia panceta y bondiola",
    intencion: "comparacion",
    pilar: "cerdo",
    estado: "publicado",
    categoria: "Guías",
    publicado: "2026-09-13",
  },
  {
    slug: "cerdo-para-navidad-lima",
    titulo: "Cerdo para Navidad en Lima: cuánto pedir y con cuánta anticipación",
    descripcion:
      "Cuántos kilos de cerdo por invitado, qué corte entra en el horno de casa y hasta qué fecha se reciben pedidos de campaña.",
    objetivo: "cerdo para navidad Lima",
    intencion: "compra",
    pilar: "cerdo",
    estado: "planificado",
    categoria: "Campaña",
    publicado: "2026-10-20",
  },

  // ─────────── Planificados · pilar DELIVERY ───────────
  {
    slug: "cuanta-carne-por-persona-parrilla",
    titulo: "Cuánta carne por persona para una parrilla",
    descripcion:
      "Calculadora de parrilla para Perú: invitados, apetito y acompañamientos, y te devuelve los kilos exactos por corte.",
    objetivo: "cuánta carne por persona parrilla",
    intencion: "informacion",
    pilar: "delivery",
    estado: "planificado",
    categoria: "Herramientas",
    publicado: "2026-10-13",
  },
  {
    slug: "mejores-cortes-para-parrilla",
    titulo: "Los mejores cortes para parrilla en Lima",
    descripcion:
      "Asado de tira, entraña, bife, malaya y cuadril: cuál elegir según el fuego, el tiempo y el presupuesto, con precio por kilo.",
    objetivo: "mejores cortes para parrilla",
    intencion: "comparacion",
    pilar: "delivery",
    estado: "planificado",
    categoria: "Parrilla",
    publicado: "2026-11-17",
  },
  {
    slug: "como-conservar-carne-fresca",
    titulo: "Cuánto dura la carne en la refrigeradora y cómo congelarla bien",
    descripcion:
      "Días de duración por tipo de corte, cómo porcionar antes de congelar y por qué nunca se descongela en el microondas.",
    objetivo: "cuánto dura la carne en el refrigerador",
    intencion: "informacion",
    pilar: "delivery",
    estado: "planificado",
    categoria: "Guías",
    publicado: "2026-12-15",
  },
  {
    slug: "carne-por-mayor-restaurantes-lima",
    titulo: "Carne al por mayor para restaurantes y pollerías en Lima",
    descripcion:
      "Volúmenes, frecuencia de entrega, cortes estandarizados por gramaje y facturación para negocios de comida en Lima.",
    objetivo: "carne al por mayor Lima",
    intencion: "compra",
    pilar: "delivery",
    estado: "planificado",
    categoria: "Mayorista",
    publicado: "2026-10-27",
  },
];

export const postsPublicados = POSTS.filter((p) => p.estado === "publicado");

export const postsPlanificados = POSTS.filter((p) => p.estado === "planificado");

export function getPost(slug: string) {
  return postsPublicados.find((p) => p.slug === slug);
}

/** Artículos que alimentan un pilar, para el enlazado de vuelta. */
export function postsDePilar(pilar: Pilar, soloPublicados = true) {
  const base = soloPublicados ? postsPublicados : POSTS;
  return base.filter((p) => p.pilar === pilar);
}
