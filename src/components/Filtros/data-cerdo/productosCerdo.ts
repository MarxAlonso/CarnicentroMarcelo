import panceta from "../../../assets/cerdos/panceta.webp";
import pancetaespecial from "../../../assets/cerdos/pancetaespecial.webp";
import piernasinhueso from "../../../assets/cerdos/piernasinhueso.webp";
import bondiolasinhueso from "../../../assets/cerdos/bondiolasinhueso.webp";
import brazuelodeshuesado from "../../../assets/cerdos/brazuelodeshuesado.webp";
import chuletadelomo from "../../../assets/cerdos/chuletadelomo.webp";
import chuletadebondiola from "../../../assets/cerdos/chuletadebondiola.webp";

export interface ProductoCerdo {
  id: number;
  nombre: string;
  precio: number;
  categoria: number;
  imagen: string;
  descripcion: string;
}

export const productosCerdo: ProductoCerdo[] = [
  // CARNE DE CERDO
  {
    id: 1,
    nombre: "Panceta Especial",
    precio: 29.00,
    categoria: 1,
    imagen: pancetaespecial,
    descripcion: "Corte especial de panceta con balance ideal de carne y grasa, perfecto para parrillas y recetas tradicionales."
  },
  {
    id: 2,
    nombre: "Panceta",
    precio: 24.00,
    categoria: 1,
    imagen: panceta,
    descripcion: "Panceta de cerdo clásica, ideal para freír, guisos o preparar chicharrones crujientes."
  },
  {
    id: 3,
    nombre: "Pierna sin hueso",
    precio: 24.00,
    categoria: 1,
    imagen: piernasinhueso,
    descripcion: "Pierna deshuesada, excelente para preparar al horno, estofados o cortes para milanesas."
  },
  {
    id: 4,
    nombre: "Bondiola sin hueso",
    precio: 26.00,
    categoria: 1,
    imagen: bondiolasinhueso,
    descripcion: "Corte jugoso y versátil, perfecto para asar lentamente o preparar al horno con especias."
  },
  {
    id: 5,
    nombre: "Brazuelo deshuesado",
    precio: 22.00,
    categoria: 1,
    imagen: brazuelodeshuesado,
    descripcion: "Corte económico y sabroso, excelente para guisos, estofados y preparaciones de cocción lenta."
  },

  // CHULETAS
  {
    id: 6,
    nombre: "Chuleta de Lomo",
    precio: 22.00,
    categoria: 2,
    imagen: chuletadelomo,
    descripcion: "Chuleta magra de lomo, ideal para la parrilla, plancha o freír. Corte tierno y jugoso."
  },
  {
    id: 7,
    nombre: "Chuleta de Bondiola",
    precio: 23.00,
    categoria: 2,
    imagen: chuletadebondiola,
    descripcion: "Chuleta de bondiola jugosa con más grasa, perfecta para asar con un sabor intenso y tradicional."
  }
];