"use client";

import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { GiCow, GiMeat } from 'react-icons/gi';
import carnemolida from '../../assets/carnes/carnemolida.webp';
import panceta from '../../assets/cerdos/panceta.webp';
import costillas from '../../assets/carnes/costillas.webp';
import chuletacerdo from '../../assets/cerdos/chuletacerdo.webp';
import bisteck from '../../assets/carnes/bisteck.webp';
import lomo from '../../assets/carnes/lomo.webp';
import asado from '../../assets/carnes/asado.webp';
import churrasco from '../../assets/carnes/churrasco.webp';

/**
 * Sigue siendo de cliente porque guarda qué categoría está seleccionada, pero
 * ya sin framer-motion: la entrada la hace `data-reveal` y el hover/pulsación,
 * clases de Tailwind. Además cada chip es ahora un `<button>` de verdad, así
 * que responde al teclado; antes era un `div` con `onClick`, invisible para
 * quien navega con Tab.
 */

interface MenuItem {
  menu_name: string;
  menu_image: StaticImageData;
}

interface ExplorarCarnesProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const menu_list: MenuItem[] = [
  { menu_name: "Panceta", menu_image: panceta },
  { menu_name: "Carne Molida", menu_image: carnemolida },
  { menu_name: "Costillas", menu_image: costillas },
  { menu_name: "Chuletas", menu_image: chuletacerdo },
  { menu_name: "Bistec", menu_image: bisteck },
  { menu_name: "Lomo", menu_image: lomo },
  { menu_name: "Asado", menu_image: asado },
  { menu_name: "Churrasco", menu_image: churrasco },
];

export const ExplorarCarnes: React.FC<ExplorarCarnesProps> = ({ category, setCategory }) => {
  return (
    <div
      data-reveal="up"
      className="flex flex-col items-center gap-8 rounded-xl bg-[#fff4bf] px-4 py-12 shadow-lg md:px-8"
      id="explorar-carnes"
    >
      <div className="space-y-4 text-center">
        <div className="mb-2 flex items-center justify-center gap-3">
          <GiCow className="text-4xl text-[#a90a0a]" aria-hidden="true" />
          <h2 className="text-4xl font-bold text-[#a90a0a] md:text-5xl">Explora Nuestras Carnes</h2>
          <GiMeat className="text-4xl text-[#a90a0a]" aria-hidden="true" />
        </div>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
          Descubre nuestra selección premium de cortes de res y cerdo, criados con los más altos
          estándares de calidad
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          data-reveal-group=""
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-8 lg:gap-8"
        >
          {menu_list.map((item) => {
            const activo = category === item.menu_name;
            return (
              <button
                type="button"
                key={item.menu_name}
                data-reveal="up"
                aria-pressed={activo}
                onClick={() =>
                  setCategory((prev) => (prev === item.menu_name ? "Mas" : item.menu_name))
                }
                className="group flex cursor-pointer flex-col items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                <span
                  className={`relative block h-24 w-24 overflow-hidden rounded-full sm:h-28 sm:w-28 md:h-32 md:w-32 ${
                    activo
                      ? 'ring-4 ring-[#a90a0a] ring-offset-2'
                      : 'ring-2 ring-transparent hover:ring-[#a90a0a]/50'
                  }`}
                >
                  <Image
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    src={item.menu_image}
                    alt={item.menu_name}
                    width={128}
                    height={128}
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </span>
                <span className="mt-3 text-center text-sm font-medium text-gray-800 transition-colors group-hover:text-[#a90a0a] sm:text-base md:text-lg">
                  {item.menu_name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <div className="h-px bg-gradient-to-r from-transparent via-[#a90a0a]/20 to-transparent" />
      </div>
    </div>
  );
};
