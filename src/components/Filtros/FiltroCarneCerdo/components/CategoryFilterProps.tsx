"use client";

import { categorias } from "../../data-cerdo/categorias";

interface CategoryFilterProps {
  categoriaSeleccionada: string;
  setCategoriaSeleccionada: (categoria: string) => void;
}

/**
 * Sin framer-motion: el hover y la pulsación son clases de Tailwind.
 * Se quitó además un `div` que envolvía a otro `div` idéntico.
 */
export const CategoryFilter = ({
  categoriaSeleccionada,
  setCategoriaSeleccionada,
}: CategoryFilterProps) => {
  const opciones = [
    { clave: "Todos", etiqueta: "🐷 Todos" },
    ...categorias.map((c) => ({ clave: c.nombre, etiqueta: `${c.icon} ${c.nombre}` })),
  ];

  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {opciones.map(({ clave, etiqueta }) => {
        const activo = categoriaSeleccionada === clave;
        return (
          <button
            type="button"
            key={clave}
            aria-pressed={activo}
            onClick={() => setCategoriaSeleccionada(clave)}
            className={`rounded-full px-6 py-2 font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
              activo
                ? "bg-brand text-white"
                : "bg-surface-warm text-brand-ink hover:bg-brand hover:text-white"
            }`}
          >
            {etiqueta}
          </button>
        );
      })}
    </div>
  );
};
