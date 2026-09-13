"use client";

import { useState } from 'react';
import Image from 'next/image';
import { GiMeat, GiWeight } from 'react-icons/gi';
import { Modal } from '@/components/Modal/Modal';

import { productosRes } from '../data/productosRes';
import { categorias } from '../data/categorias';

/**
 * Sin framer-motion. Cambios de paso:
 *   · El modal pasa al compartido (Escape, scroll bloqueado, foco devuelto).
 *   · Las tarjetas son `<button>` y no `div` con `onClick`: antes no se podían
 *     abrir con teclado.
 *   · El modal se sacó de dentro de la rejilla de productos, donde estaba
 *     anidado como si fuera una tarjeta más.
 */
export const FiltroCarneRes = () => {
    const [busqueda, setBusqueda] = useState('');
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
    const [sugerencias, setSugerencias] = useState<string[]>([]);
    const [modalProducto, setModalProducto] = useState<(typeof productosRes)[0] | null>(null);

    const productosFiltrados = productosRes.filter((producto) => {
        const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
        const coincideCategoria =
            categoriaSeleccionada === 'Todos' || producto.categoria === categoriaSeleccionada;
        return coincideBusqueda && coincideCategoria;
    });

    const handleBusquedaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value;
        setBusqueda(valor);

        if (valor) {
            setSugerencias(
                productosRes
                    .filter((p) => p.nombre.toLowerCase().includes(valor.toLowerCase()))
                    .map((p) => p.nombre)
            );
        } else {
            setSugerencias([]);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8" id="productosres">
            <div className="relative mb-8">
                <label htmlFor="buscar-corte-res" className="sr-only">
                    Buscar corte de carne de res
                </label>
                <div className="flex items-center overflow-hidden rounded-lg border-2 border-carni-red bg-white shadow-lg transition-colors duration-300 focus-within:border-carni-dark-red">
                    <GiMeat className="ml-4 text-2xl text-carni-red" aria-hidden="true" />
                    <input
                        id="buscar-corte-res"
                        type="search"
                        value={busqueda}
                        onChange={handleBusquedaChange}
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
                                onClick={() => {
                                    setBusqueda(sugerencia);
                                    setSugerencias([]);
                                }}
                                className="block w-full px-4 py-2 text-left transition-all duration-200 hover:translate-x-2 hover:bg-carni-cream/20"
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
                                    ? 'bg-carni-red text-white'
                                    : 'bg-carni-cream text-carni-red hover:bg-carni-red hover:text-white'
                            }`}
                        >
                            {categoria}
                        </button>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {productosFiltrados.map((producto) => (
                    <button
                        type="button"
                        key={`${categoriaSeleccionada}-${producto.id}`}
                        onClick={() => setModalProducto(producto)}
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
                                <h3 className="text-xl font-bold text-carni-red">{producto.nombre}</h3>
                                <span className="shrink-0 rounded-full bg-carni-cream px-3 py-1 text-sm font-semibold text-carni-red">
                                    {producto.categoria}
                                </span>
                            </div>
                            <p className="mb-4 text-gray-600">{producto.descripcion}</p>
                            <div className="flex items-center text-carni-dark-red">
                                <GiWeight className="mr-2 text-xl" aria-hidden="true" />
                                <span className="text-lg font-bold tabular-nums">
                                    S/ {producto.precio.toFixed(2)} / kg
                                </span>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            <Modal
                abierto={modalProducto !== null}
                onClose={() => setModalProducto(null)}
                etiqueta={modalProducto?.nombre ?? 'Detalle del corte'}
            >
                {modalProducto && (
                    <>
                        <Image
                            src={modalProducto.imagen}
                            alt={modalProducto.nombre}
                            width={600}
                            height={400}
                            sizes="(max-width: 768px) 90vw, 600px"
                            className="mb-4 w-full rounded-lg object-cover"
                        />
                        <h2 className="mb-2 text-2xl font-bold text-carni-red">
                            {modalProducto.nombre}
                        </h2>
                        <p className="mb-4 text-gray-600">{modalProducto.descripcion}</p>
                        <p className="mb-2 font-bold tabular-nums text-carni-dark-red">
                            S/ {modalProducto.precio.toFixed(2)} / kg
                        </p>
                    </>
                )}
            </Modal>
        </div>
    );
};
