"use client";

import { GiWeight } from "react-icons/gi";

interface PriceFilterProps {
  ordenPrecio: "asc" | "desc" | "none";
  setOrdenPrecio: (orden: "asc" | "desc" | "none") => void;
}

const ORDENES = [
  { valor: "none", etiqueta: "Sin orden" },
  { valor: "asc", etiqueta: "Menor a mayor" },
  { valor: "desc", etiqueta: "Mayor a menor" },
] as const;

/** Sin framer-motion: hover y pulsación con clases de Tailwind. */
export const PriceFilter = ({ ordenPrecio, setOrdenPrecio }: PriceFilterProps) => {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-3">
      <span className="flex items-center font-semibold text-brand-ink">
        <GiWeight className="mr-2" aria-hidden="true" /> Ordenar por precio:
      </span>
      {ORDENES.map(({ valor, etiqueta }) => {
        const activo = ordenPrecio === valor;
        return (
          <button
            type="button"
            key={valor}
            aria-pressed={activo}
            onClick={() => setOrdenPrecio(valor)}
            className={`rounded-lg px-4 py-2 font-medium transition-all duration-200 hover:scale-105 active:scale-95 ${
              activo ? "bg-brand text-white" : "bg-surface-2 text-ink-muted hover:bg-line"
            }`}
          >
            {etiqueta}
          </button>
        );
      })}
    </div>
  );
};
