import type { StaticImageData } from "next/image";
import { productosRes } from "@/components/Filtros/data/productosRes";
import { productosCerdo } from "@/components/Filtros/data-cerdo/productosCerdo";
import { categorias as categoriasCerdo } from "@/components/Filtros/data-cerdo/categorias";

/**
 * Catálogo unificado, con una dirección propia por corte.
 *
 * Hasta ahora los 31 cortes vivían solo dentro de un filtro de JavaScript: no
 * tenían URL, así que no existían para Google. Aquí cada uno recibe su slug y
 * pasa a ser una página indexable — «lomo fino precio Lima» es una búsqueda
 * real que hoy no tiene a dónde llegar.
 *
 * El saber de carnicero (para qué plato sirve, cómo se llama fuera del Perú,
 * cuánto pedir por persona) vive aquí y no dentro de un artículo, porque lo
 * consumen a la vez la ficha del producto y las guías del blog.
 */

export type TipoCarne = "res" | "cerdo";

export type Corte = {
  slug: string;
  nombre: string;
  tipo: TipoCarne;
  precio: number;
  categoria: string;
  descripcion: string;
  imagen: StaticImageData;
  /** Ruta pública de la ficha. */
  ruta: string;

  // ─── Saber de carnicero. Opcional: si falta, la ficha omite ese bloque ───
  /** Platos para los que se usa. Lo primero que pregunta quien compra. */
  platos?: string[];
  /** Cómo se llama el mismo músculo en otros países. */
  equivalencias?: string;
  /** Método de cocción recomendado. */
  coccion?: string;
  /** Tiempo orientativo de cocción. */
  tiempo?: string;
  /** Gramos de carne cruda por persona. */
  porPersona?: string;
  /** Nivel de grasa, que es lo que decide la mayoría de las compras. */
  grasa?: "Baja" | "Media" | "Alta";
  /** Consejo que da valor y que la competencia no publica. */
  consejo?: string;
};

/** Quita acentos y deja un slug limpio y estable. */
function slugify(texto: string) {
  return texto
    .normalize("NFD")
    // Rango de diacríticos combinantes, escapado: escrito con los caracteres
    // literales, el archivo dependería de conservar su codificación.
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Datos de carnicero por corte de res. La clave es el nombre del catálogo. */
const SABER_RES: Record<string, Partial<Corte>> = {
  "Lomo Fino": {
    platos: ["Lomo saltado", "Medallones", "Bistec a lo pobre"],
    equivalencias: "Solomillo en España · Lomo en Argentina · Tenderloin en EE. UU.",
    coccion: "Plancha o parrilla a fuego alto",
    tiempo: "3 a 5 minutos",
    porPersona: "150 g",
    grasa: "Baja",
    consejo:
      "Es el corte más tierno que existe y también el más caro. Si el plato lleva salsa fuerte, la tapa de lomo da un resultado muy parecido por bastante menos.",
  },
  Biffe: {
    platos: ["Parrilla", "Plancha"],
    equivalencias: "Bife ancho en Argentina · Entrecot en España · Ribeye en EE. UU.",
    coccion: "Parrilla a fuego fuerte",
    tiempo: "8 a 12 minutos",
    porPersona: "250 g",
    grasa: "Media",
    consejo: "Su marmoleo es el que da el sabor: no le quites la grasa antes de cocinarlo, se la comerá el fuego.",
  },
  "Cuadril de cadera": {
    platos: ["Bistec a la plancha", "Parrilla"],
    equivalencias: "Picanha en Brasil · Colita de cuadril en Argentina",
    coccion: "Plancha o parrilla",
    tiempo: "5 a 8 minutos",
    porPersona: "200 g",
    grasa: "Media",
    consejo: "El equilibrio más fino entre terneza y precio de todo el mostrador.",
  },
  "Tapa de Lomo": {
    platos: ["Bistec", "Lomo saltado económico"],
    coccion: "Plancha",
    tiempo: "4 a 6 minutos",
    porPersona: "180 g",
    grasa: "Baja",
    consejo: "Córtalo fino y contra la fibra y queda a un paso del lomo fino, a mitad de precio.",
  },
  "Bola de Lomo": {
    platos: ["Milanesas", "Bistec apanado"],
    coccion: "Fritura o plancha",
    tiempo: "4 a 6 minutos",
    porPersona: "150 g",
    grasa: "Baja",
    consejo: "Es el corte que mejor se deja laminar fino y parejo, que es justo lo que pide una milanesa.",
  },
  "Corazón de Paleta": {
    platos: ["Bistec económico", "Saltados"],
    coccion: "Plancha",
    tiempo: "5 a 7 minutos",
    porPersona: "180 g",
    grasa: "Baja",
  },
  "Asado de Pejerrey": {
    platos: ["Asado a la olla", "Carne al jugo"],
    coccion: "Olla, pieza entera",
    tiempo: "1 hora y media",
    porPersona: "180 g",
    grasa: "Baja",
    consejo: "Se cocina entero y se corta al servir. Su forma regular hace que las porciones salgan parejas.",
  },
  "Asado Cuadrado": {
    platos: ["Asado a la olla", "Estofado"],
    coccion: "Olla o horno",
    tiempo: "1 hora y media",
    porPersona: "180 g",
    grasa: "Media",
  },
  "Guiso de Paleta": {
    platos: ["Seco de res", "Estofado", "Carapulcra"],
    coccion: "Olla, cocción lenta",
    tiempo: "1 a 2 horas",
    porPersona: "180 g",
    grasa: "Media",
    consejo:
      "Cuesta la mitad que un bistec premium y en un seco da mejor resultado: el colágeno se convierte en gelatina y liga la salsa.",
  },
  "Churrasco Redondo": {
    platos: ["Churrasco a la plancha"],
    coccion: "Plancha",
    tiempo: "6 a 8 minutos",
    porPersona: "200 g",
    grasa: "Baja",
  },
  Aguja: {
    platos: ["Guisos largos", "Carne desmenuzada"],
    coccion: "Olla, cocción lenta",
    tiempo: "2 horas",
    porPersona: "180 g",
    grasa: "Media",
    consejo: "Cuanto más tiempo, mejor. A las dos horas se deshace solo con el tenedor.",
  },
  Malaya: {
    platos: ["Malaya frita", "Parrilla"],
    equivalencias: "Matambre en Argentina · Falda en España",
    coccion: "Fritura o parrilla lenta",
    tiempo: "20 a 30 minutos",
    porPersona: "200 g",
    grasa: "Alta",
  },
  "Osobuco de pierna": {
    platos: ["Osobuco al vino", "Sopas sustanciosas"],
    coccion: "Olla, cocción lenta",
    tiempo: "2 horas",
    porPersona: "250 g con hueso",
    grasa: "Media",
    consejo: "El tuétano del hueso es medio plato: no lo descartes al servir.",
  },
  "Tira de Asado": {
    platos: ["Parrilla"],
    equivalencias: "Asado de tira en Argentina · Short ribs en EE. UU.",
    coccion: "Parrilla a fuego medio",
    tiempo: "20 a 25 minutos",
    porPersona: "300 g con hueso",
    grasa: "Alta",
    consejo: "El hueso y la grasa la hacen perdonar el fuego irregular. Es el corte más seguro para quien recién empieza en la parrilla.",
  },
  Huachalomo: {
    platos: ["Guisos", "Olla de presión"],
    coccion: "Olla, cocción lenta",
    tiempo: "1 hora y media",
    porPersona: "170 g",
    grasa: "Media",
  },
  "Cordoncito de Lomo": {
    platos: ["Saltados rápidos", "Brochetas"],
    coccion: "Wok o plancha",
    tiempo: "2 a 4 minutos",
    porPersona: "150 g",
    grasa: "Baja",
  },
  Entraña: {
    platos: ["Parrilla a fuego fuerte"],
    equivalencias: "Entraña en Argentina · Skirt steak en EE. UU.",
    coccion: "Parrilla muy caliente",
    tiempo: "6 a 8 minutos",
    porPersona: "250 g",
    grasa: "Media",
    consejo: "Fuego fuerte y poco tiempo. Pasada de punto se endurece y ya no hay vuelta atrás.",
  },
  Pecho: {
    platos: ["Sancochado", "Caldo de res"],
    equivalencias: "Brisket en EE. UU.",
    coccion: "Olla, cocción muy lenta",
    tiempo: "2 a 3 horas",
    porPersona: "250 g",
    grasa: "Media",
  },
  Falda: {
    platos: ["Sancochado", "Puchero"],
    coccion: "Olla, cocción lenta",
    tiempo: "2 horas",
    porPersona: "250 g",
    grasa: "Media",
  },
  Costilla: {
    platos: ["Caldo", "Sancochado", "Parrilla lenta"],
    coccion: "Olla o parrilla lenta",
    tiempo: "2 horas",
    porPersona: "300 g con hueso",
    grasa: "Alta",
  },
  "Osobuco de brazo": {
    platos: ["Caldo de res", "Sopa criolla"],
    coccion: "Olla, cocción lenta",
    tiempo: "2 a 3 horas",
    porPersona: "250 g con hueso",
    grasa: "Media",
    consejo: "El caldo sale del hueso, no de la carne magra. Sin hueso, el caldo queda aguado.",
  },
  "Carne molida Especial": {
    platos: ["Hamburguesas", "Albóndigas", "Tallarín saltado"],
    coccion: "Sartén o parrilla",
    tiempo: "6 a 8 minutos",
    porPersona: "150 g",
    grasa: "Media",
    consejo:
      "Para hamburguesa, esta y no la extraespecial: la grasa es lo que la liga y la mantiene jugosa.",
  },
  "Carne molida Extraespecial": {
    platos: ["Salsas largas", "Rellenos", "Lasaña"],
    coccion: "Sartén",
    tiempo: "8 a 10 minutos",
    porPersona: "120 g",
    grasa: "Baja",
    consejo: "Casi sin grasa. Ideal donde la receta ya aporta la suya (bechamel, queso, aceite).",
  },
};

/** Lo mismo para cerdo. */
const SABER_CERDO: Record<string, Partial<Corte>> = {
  "Panceta Especial": {
    platos: ["Chicharrón", "Panceta crocante", "Parrilla"],
    coccion: "Fritura, horno o parrilla",
    tiempo: "40 a 60 minutos",
    porPersona: "280 g",
    grasa: "Alta",
    consejo: "Las capas alternadas de carne y grasa son exactamente lo que produce el chicharrón. No hay sustituto real.",
  },
  Panceta: {
    platos: ["Chicharrón de comercio", "Frejoles"],
    coccion: "Fritura o guiso",
    tiempo: "40 a 60 minutos",
    porPersona: "280 g",
    grasa: "Alta",
  },
  "Pierna sin hueso": {
    platos: ["Pierna al horno", "Lechón", "Sánguche"],
    coccion: "Horno lento",
    tiempo: "2 a 3 horas",
    porPersona: "200 g",
    grasa: "Baja",
    consejo: "Es magra, así que se seca con facilidad: conviene hornearla cubierta y destapar solo al final para dorar.",
  },
  "Bondiola sin hueso": {
    platos: ["Bondiola al horno", "Pulled pork", "Parrilla"],
    coccion: "Horno lento o parrilla",
    tiempo: "2 a 3 horas",
    porPersona: "220 g",
    grasa: "Media",
    consejo:
      "Tiene la grasa infiltrada dentro del músculo, no en capas. Eso la hace casi a prueba de errores en cocciones largas.",
  },
  "Brazuelo deshuesado": {
    platos: ["Adobo de cerdo", "Estofados"],
    coccion: "Guiso u horno",
    tiempo: "1 hora y media",
    porPersona: "200 g",
    grasa: "Media",
    consejo: "El corte más económico del mostrador, y en adobo no se nota la diferencia con uno caro.",
  },
  "Chuleta de Lomo": {
    platos: ["Chuleta a la plancha"],
    coccion: "Plancha o parrilla rápida",
    tiempo: "6 a 8 minutos",
    porPersona: "250 g con hueso",
    grasa: "Baja",
    consejo: "Magra: el error aquí es pasarse de cocción, no quedarse corto.",
  },
  "Chuleta de Bondiola": {
    platos: ["Chuleta jugosa a la parrilla"],
    coccion: "Parrilla",
    tiempo: "8 a 10 minutos",
    porPersona: "250 g con hueso",
    grasa: "Media",
    consejo: "Si no dominas el punto, pide esta y no la de lomo: perdona mejor unos minutos de más.",
  },
};

const nombreCategoriaCerdo = (id: number) =>
  categoriasCerdo.find((c) => c.id === id)?.nombre ?? "Carne de Cerdo";

const cortesRes: Corte[] = productosRes.map((p) => {
  const slug = slugify(p.nombre);
  return {
    slug,
    nombre: p.nombre,
    tipo: "res",
    precio: p.precio,
    categoria: p.categoria,
    descripcion: p.descripcion,
    imagen: p.imagen,
    ruta: `/carne-de-res/${slug}`,
    ...SABER_RES[p.nombre],
  };
});

const cortesCerdo: Corte[] = productosCerdo.map((p) => {
  const slug = slugify(p.nombre);
  return {
    slug,
    nombre: p.nombre,
    tipo: "cerdo",
    precio: p.precio,
    categoria: nombreCategoriaCerdo(p.categoria),
    descripcion: p.descripcion,
    imagen: p.imagen,
    ruta: `/carne-de-cerdo/${slug}`,
    ...SABER_CERDO[p.nombre],
  };
});

export const CATALOGO: Corte[] = [...cortesRes, ...cortesCerdo];

export const cortesPorTipo = (tipo: TipoCarne) => CATALOGO.filter((c) => c.tipo === tipo);

export function getCorte(tipo: TipoCarne, slug: string) {
  return CATALOGO.find((c) => c.tipo === tipo && c.slug === slug);
}

/**
 * Cortes relacionados: primero los de la misma categoría, y si no llegan a
 * llenar el hueco, se completa con otros del mismo tipo de carne. Así la
 * sección nunca sale a medias.
 */
export function cortesRelacionados(corte: Corte, cantidad = 3) {
  const mismaCategoria = CATALOGO.filter(
    (c) => c.tipo === corte.tipo && c.categoria === corte.categoria && c.slug !== corte.slug
  );
  const resto = CATALOGO.filter(
    (c) => c.tipo === corte.tipo && c.categoria !== corte.categoria && c.slug !== corte.slug
  );
  return [...mismaCategoria, ...resto].slice(0, cantidad);
}
