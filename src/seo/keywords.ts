import { productosRes } from "../components/Filtros/data/productosRes";
import { productosCerdo } from "../components/Filtros/data-cerdo/productosCerdo";
import { categorias as categoriasRes } from "../components/Filtros/data/categorias";
import { categorias as categoriasCerdo } from "../components/Filtros/data-cerdo/categorias";

const siteKeywords = [
  "carnicería",
  "carnes",
  "res",
  "cerdo",
  "carnicentro",
  "marcelo",
  "catálogo",
  "contacto",
  "pedido",
  "parrilla",
  "asado",
];

function extractWords(text: string) {
  return text
    .replace(/["'.,:;()\[\]!¿?¡\/\\]/g, " ")
    .replace(/[-_]+/g, " ")
    .toLowerCase()
    .split(/\s+/)
    .map((w) => w.trim())
    .filter(Boolean);
}

const set = new Set<string>();
siteKeywords.forEach((k) => set.add(k));

productosRes.forEach((p) => {
  extractWords(p.nombre).forEach((w) => set.add(w));
  if (p.descripcion) extractWords(p.descripcion).forEach((w) => set.add(w));
  if (typeof p.categoria === "string") extractWords(p.categoria).forEach((w) => set.add(w));
});

productosCerdo.forEach((p) => {
  extractWords(p.nombre).forEach((w) => set.add(w));
  if (p.descripcion) extractWords(p.descripcion).forEach((w) => set.add(w));
  if (p.categoria) set.add(String(p.categoria));
});

// categoriasRes is array of strings
categoriasRes.forEach((c) => extractWords(String(c)).forEach((w) => set.add(w)));

// categoriasCerdo is array of objects {id, nombre}
categoriasCerdo.forEach((c) => {
  if ((c as any).nombre) extractWords((c as any).nombre).forEach((w) => set.add(w));
});

// Convert set to comma separated string, limit length to avoid huge meta tag
const keywordsArray = Array.from(set).slice(0, 200);
export const keywords = keywordsArray.join(", ");

export default keywords;
