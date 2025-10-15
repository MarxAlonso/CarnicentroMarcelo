import panceta from "../../../assets/cerdos/panceta.webp";

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
    imagen: "/src/assets/carnes/panceta-especial.jpg",
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
    imagen: "/src/assets/carnes/pierna-sin-hueso.jpg",
    descripcion: "Pierna deshuesada, excelente para preparar al horno, estofados o cortes para milanesas."
  },
  {
    id: 4,
    nombre: "Bondiola sin hueso",
    precio: 26.00,
    categoria: 1,
    imagen: "/src/assets/carnes/bondiola-sin-hueso.jpg",
    descripcion: "Corte jugoso y versátil, perfecto para asar lentamente o preparar al horno con especias."
  },
  {
    id: 5,
    nombre: "Brazuelo deshuesado",
    precio: 22.00,
    categoria: 1,
    imagen: "/src/assets/carnes/brazuelo-deshuesado.jpg",
    descripcion: "Corte económico y sabroso, excelente para guisos, estofados y preparaciones de cocción lenta."
  },

  // CHULETAS
  {
    id: 6,
    nombre: "Chuleta de Lomo",
    precio: 22.00,
    categoria: 2,
    imagen: "/src/assets/carnes/chuleta-lomo.jpg",
    descripcion: "Chuleta magra de lomo, ideal para la parrilla, plancha o freír. Corte tierno y jugoso."
  },
  {
    id: 7,
    nombre: "Chuleta de Bondiola",
    precio: 23.00,
    categoria: 2,
    imagen: "/src/assets/carnes/chuleta-bondiola.jpg",
    descripcion: "Chuleta de bondiola jugosa con más grasa, perfecta para asar con un sabor intenso y tradicional."
  }
];