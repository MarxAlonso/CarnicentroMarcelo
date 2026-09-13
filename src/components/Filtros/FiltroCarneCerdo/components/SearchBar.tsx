"use client";

import { GiMeat } from 'react-icons/gi';

interface SearchBarProps {
    busqueda: string;
    onBusquedaChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    sugerencias: string[];
    onSugerenciaClick: (sugerencia: string) => void;
}

/**
 * Sin framer-motion: el desplegable de sugerencias entra con `submenu-in`.
 * El campo lleva ahora una etiqueta asociada, que antes no tenía.
 */
export const SearchBar = ({
    busqueda,
    onBusquedaChange,
    sugerencias,
    onSugerenciaClick,
}: SearchBarProps) => {
    return (
        <div className="relative mb-8">
            <label htmlFor="buscar-corte" className="sr-only">
                Buscar corte de carne
            </label>
            <div className="flex items-center overflow-hidden rounded-lg border-2 border-[#a90a0a] bg-white shadow-lg transition-colors duration-300 focus-within:border-[#8a0808]">
                <GiMeat className="ml-4 text-2xl text-[#a90a0a]" aria-hidden="true" />
                <input
                    id="buscar-corte"
                    type="search"
                    value={busqueda}
                    onChange={onBusquedaChange}
                    placeholder="Buscar corte de carne..."
                    autoComplete="off"
                    className="w-full px-4 py-3 text-lg outline-none"
                />
            </div>

            {sugerencias.length > 0 && (
                <div className="submenu-in absolute z-10 mt-2 w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                    {sugerencias.map((sugerencia) => (
                        <button
                            type="button"
                            key={sugerencia}
                            onClick={() => onSugerenciaClick(sugerencia)}
                            className="block w-full px-4 py-2 text-left transition-all duration-200 hover:translate-x-2 hover:bg-[#fff4bf]/20"
                        >
                            {sugerencia}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
