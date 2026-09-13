"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { StaticImageData } from 'next/image';
import { GiCow, GiPig, GiMeat, GiWeight, GiPriceTag } from 'react-icons/gi';
import lomofino from '../../assets/catalogoinicio/lomofino.webp';
import chuletacerdo from '../../assets/catalogoinicio/chuletacerdo.webp';
import bife from '../../assets/catalogoinicio/bife.webp';
import pancetadecerdo from '../../assets/catalogoinicio/pancetadecerdo.webp';
import bondiolasinhueso from '../../assets/catalogoinicio/bondiolasinhueso.webp';
import cuadrildecadera from '../../assets/catalogoinicio/cuadrildecadera.webp';
import carnemolidaespecial from '../../assets/catalogoinicio/carnemolidaespecial.webp';

/**
 * Escaparate de la portada. Es de cliente solo por el filtro de categoría.
 *
 * Las tarjetas ya no abren un modal: enlazan a la ficha del corte, que dice
 * bastante más y además tiene dirección propia. Cada una es, de paso, un enlace
 * interno hacia las páginas nuevas.
 */

interface Producto {
    id: number;
    nombre: string;
    tipo: 'res' | 'cerdo' | 'molida';
    precio: number;
    peso: string;
    imagen: StaticImageData;
    descripcion: string;
    /** Ficha del corte en el catalogo completo. */
    ruta: string;
}

const productos: Producto[] = [
  // === 3 cortes de RES ===
  {
    id: 1,
    ruta: '/carne-de-res/lomo-fino',
    nombre: 'Lomo Fino',
    tipo: 'res',
    precio: 64.00,
    peso: '1kg',
    imagen: lomofino,
    descripcion: 'El corte más tierno y premium de res, ideal para medallones y preparaciones especiales.'
  },
  {
    id: 2,
    ruta: '/carne-de-res/biffe',
    nombre: 'Biffe',
    tipo: 'res',
    precio: 42.00,
    peso: '1kg',
    imagen: bife,
    descripcion: 'Corte con excelente marmoleo, perfecto para parrilla y platos gourmet con gran jugosidad.'
  },
  {
    id: 3,
    ruta: '/carne-de-res/cuadril-de-cadera',
    nombre: 'Cuadril de Cadera',
    tipo: 'res',
    precio: 40.00,
    peso: '1kg',
    imagen: cuadrildecadera,
    descripcion: 'Corte premium de la cadera, jugoso y tierno, ideal para bistecks a la parrilla.'
  },

  // === 3 cortes de CERDO ===
  {
    id: 4,
    ruta: '/carne-de-cerdo/panceta-especial',
    nombre: 'Panceta Especial',
    tipo: 'cerdo',
    precio: 29.00,
    peso: '1kg',
    imagen: pancetadecerdo,
    descripcion: 'Panceta con balance ideal de carne y grasa, perfecta para parrillas y recetas tradicionales.'
  },
  {
    id: 5,
    ruta: '/carne-de-cerdo/chuleta-de-lomo',
    nombre: 'Chuleta de Lomo de Cerdo',
    tipo: 'cerdo',
    precio: 22.00,
    peso: '1kg',
    imagen: chuletacerdo,
    descripcion: 'Chuleta magra y jugosa, excelente para la parrilla, plancha o fritura.'
  },
  {
    id: 6,
    ruta: '/carne-de-cerdo/bondiola-sin-hueso',
    nombre: 'Bondiola sin Hueso',
    tipo: 'cerdo',
    precio: 26.00,
    peso: '1kg',
    imagen: bondiolasinhueso,
    descripcion: 'Corte versátil y jugoso, ideal para asar lentamente o preparar al horno con especias.'
  },
  {
    id: 7,
    ruta: '/carne-de-res/carne-molida-especial',
    nombre: 'Carne molida Especial',
    tipo: 'molida',
    precio: 28.00,
    peso: '1kg',
    imagen: carnemolidaespecial,
    descripcion: 'Carne molida de primera calidad, ideal para hamburguesas, albóndigas y guisos.'
  }
];

const filtros = [
    { id: 'todos', nombre: 'Todos', icono: GiMeat },
    { id: 'res', nombre: 'Res', icono: GiCow },
    { id: 'cerdo', nombre: 'Cerdo', icono: GiPig },
    { id: 'molida', nombre: 'Molida', icono: GiMeat }
] as const;

type FiltroId = (typeof filtros)[number]['id'];

export const CatalogoCarnes = () => {
    const [filtroActivo, setFiltroActivo] = useState<FiltroId>('todos');

    const productosFiltrados =
        filtroActivo === 'todos' ? productos : productos.filter((p) => p.tipo === filtroActivo);

    return (
        <div className="bg-surface-warm/10 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto mb-8 max-w-site">
                <div className="flex flex-wrap justify-center gap-4">
                    {filtros.map((filtro) => {
                        const Icono = filtro.icono;
                        const activo = filtroActivo === filtro.id;
                        return (
                            <button
                                type="button"
                                key={filtro.id}
                                aria-pressed={activo}
                                onClick={() => setFiltroActivo(filtro.id)}
                                className={`flex items-center gap-2 rounded-full px-6 py-3 text-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 ${
                                    activo
                                        ? 'bg-brand text-white shadow-lg'
                                        : 'bg-surface text-ink-muted hover:bg-brand/10'
                                }`}
                            >
                                <Icono className="text-xl" aria-hidden="true" />
                                {filtro.nombre}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="mx-auto max-w-site">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {productosFiltrados.map((producto) => (
                        <Link
                            // El filtro entra en el key: al cambiarlo React monta nodos
                            // nuevos y la animación de entrada vuelve a ejecutarse.
                            key={`${filtroActivo}-${producto.id}`}
                            href={producto.ruta}
                            className="card-in group block cursor-pointer overflow-hidden rounded-xl bg-surface text-left shadow-lg transition-transform duration-200 hover:-translate-y-1.5"
                        >
                            <div className="h-56 overflow-hidden bg-surface-2">
                                <Image
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                    width={400}
                                    height={224}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-ink transition-colors group-hover:text-brand-ink">
                                    {producto.nombre}
                                </h3>
                                <div className="mt-2 flex items-center gap-2 text-brand-ink">
                                    <GiPriceTag aria-hidden="true" />
                                    <span className="font-medium tabular-nums">
                                        S/ {producto.precio.toFixed(2)}
                                    </span>
                                </div>
                                <div className="mt-1 flex items-center gap-2 text-ink-muted">
                                    <GiWeight aria-hidden="true" />
                                    <span>{producto.peso}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
};
