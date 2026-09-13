"use client";

import Image from "next/image";
import { ProductoCerdo } from "../../data-cerdo/productosCerdo";
import { categorias } from "../../data-cerdo/categorias";
import { GiWeight } from "react-icons/gi";

interface ProductCardProps {
  producto: ProductoCerdo;
  onClick: () => void;
}

/**
 * Sin framer-motion: la entrada la hace la clase `card-in`.
 * Es un `<button>` y no un `div` con `onClick`, así que se puede abrir con
 * teclado; antes no.
 */
export const ProductCard = ({ producto, onClick }: ProductCardProps) => {
  const categoriaNombre =
    categorias.find((cat) => cat.id === producto.categoria)?.nombre || "Sin categoría";

  return (
    <button
      type="button"
      onClick={onClick}
      className="card-in group w-full cursor-pointer overflow-hidden rounded-xl bg-white text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      {producto.imagen && (
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          width={400}
          height={192}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}

      <div className="p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-[#a90a0a]">{producto.nombre}</h3>
          <span className="shrink-0 rounded-full bg-[#fff4bf] px-3 py-1 text-sm font-semibold text-[#a90a0a]">
            {categoriaNombre}
          </span>
        </div>

        <p className="mb-4 text-gray-600">{producto.descripcion}</p>

        <div className="flex items-center text-[#a90a0a]">
          <GiWeight className="mr-2 text-xl" aria-hidden="true" />
          <span className="text-lg font-bold tabular-nums">
            S/ {producto.precio.toFixed(2)} / kg
          </span>
        </div>
      </div>
    </button>
  );
};
