"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiMeat, GiWeight } from 'react-icons/gi';

import { cortesPorTipo } from '@/content/catalogo';
import { categorias } from '../data/categorias';

/**
 * Catálogo filtrable de cortes de res.
 *
 * Cambio de fondo respecto a la versión anterior: la tarjeta ya no abre un
 * modal, navega a la ficha del corte. El modal enseñaba la misma información
 * pero sin URL, así que esos 23 cortes no existían para Google ni se podían
 * compartir por WhatsApp — que es exactamente como este público comparte cosas.
 *
 * Los datos salen del catálogo unificado y no del arreglo suelto, para que el
 * filtro, la tabla de precios y la ficha muestren siempre lo mismo.
 */
export const FiltroCarneRes = () => {
    const [busqueda, setBusqueda] = useState('');
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
    const [sugerencias, setSugerencias] = useState<string[]>([]);

    const cortes = cortesPorTipo('res');

    const productosFiltrados = cortes.filter((corte) => {
        const coincideBusqueda = corte.nombre.toLowerCase().includes(busqueda.toLowerCase());
        const coincideCategoria =
            categoriaSeleccionada === 'Todos' || corte.categoria === categoriaSeleccionada;
        return coincideBusqueda && coincideCategoria;
    });

    const handleBusquedaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value;
        setBusqueda(valor);
        setSugerencias(
            valor
                ? cortes
                      .filter((p) => p.nombre.toLowerCase().includes(valor.toLowerCase()))
                      .map((p) => p.nombre)
                : []
        );
    };

    return (
        <div className="mx-auto w-full max-w-site px-4 py-8" id="productosres">
            <div className="relative mb-8">
                <label htmlFor="buscar-corte-res" className="sr-only">
                    Buscar corte de carne de res
                </label>
                <div className="flex items-center overflow-hidden rounded-lg border-2 border-brand bg-surface shadow-lg transition-colors duration-300 focus-within:border-brand-deep">
                    <GiMeat className="ml-4 text-2xl text-brand-ink" aria-hidden="true" />
                    <input
                        id="buscar-corte-res"
                        type="search"
                        value={busqueda}
                        onChange={handleBusquedaChange}
                        placeholder="Buscar corte de carne..."
                        autoComplete="off"
                        className="w-full bg-transparent px-4 py-3 text-lg text-ink outline-none"
                    />
                </div>

                {sugerencias.length > 0 && (
                    <div className="submenu-in absolute z-10 mt-2 w-full overflow-hidden rounded-lg border border-line bg-surface shadow-lg">
                        {sugerencias.map((sugerencia) => (
                            <button
                                type="button"
                                key={sugerencia}
                                onClick={() => {
                                    setBusqueda(sugerencia);
                                    setSugerencias([]);
                                }}
                                className="block w-full px-4 py-2 text-left text-ink transition-all duration-200 hover:translate-x-2 hover:bg-surface-warm/20"
                            >
                                {sugerencia}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="mb-8 flex flex-wrap gap-3">
                {categorias.map((categoria) => {
                    const activo = categoriaSeleccionada === categoria;
                    return (
                        <button
                            type="button"
                            key={categoria}
                            aria-pressed={activo}
                            onClick={() => setCategoriaSeleccionada(categoria)}
                            className={`rounded-full px-6 py-2 font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
                                activo
                                    ? 'bg-brand text-white'
                                    : 'bg-surface-warm text-brand-ink hover:bg-brand hover:text-white'
                            }`}
                        >
                            {categoria}
                        </button>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {productosFiltrados.map((corte) => (
                    <article
                        key={`${categoriaSeleccionada}-${corte.slug}`}
                        className="card-in group relative overflow-hidden rounded-xl border border-line bg-surface shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >
                        <div className="relative h-48 overflow-hidden bg-surface-2">
                            <Image
                                src={corte.imagen}
                                alt={corte.nombre}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        <div className="p-6">
                            <div className="mb-4 flex items-center justify-between gap-3">
                                <h3 className="text-xl font-bold text-brand-ink">
                                    <Link href={corte.ruta}>
                                        {/* El enlace cubre la tarjeta entera. */}
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {corte.nombre}
                                    </Link>
                                </h3>
                                <span className="shrink-0 rounded-full bg-surface-warm px-3 py-1 text-sm font-semibold text-brand-ink">
                                    {corte.categoria}
                                </span>
                            </div>
                            <p className="mb-4 text-ink-muted">{corte.descripcion}</p>
                            <div className="flex items-center justify-between gap-3">
                                <span className="flex items-center text-brand-ink-deep">
                                    <GiWeight className="mr-2 text-xl" aria-hidden="true" />
                                    <span className="text-lg font-bold tabular-nums">
                                        S/ {corte.precio.toFixed(2)} / kg
                                    </span>
                                </span>
                                <span className="text-xs font-bold uppercase tracking-widest text-brand-ink transition-transform group-hover:translate-x-1">
                                    Ver corte →
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {productosFiltrados.length === 0 && (
                <p className="py-12 text-center text-ink-muted">
                    No encontramos cortes con ese nombre. Prueba con otra palabra o escríbenos: si no
                    está en el mostrador, probablemente podamos conseguirlo.
                </p>
            )}
        </div>
    );
};
