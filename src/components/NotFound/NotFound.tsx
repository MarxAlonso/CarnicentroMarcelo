"use client";

import Link from 'next/link';
import { GiCow, GiMeat, GiChefToque } from 'react-icons/gi';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const floatingAnimation = {
        y: [-10, 10, -10],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#fff4bf] via-white to-[#fff4bf] flex items-center justify-center px-4">
            <div
                className="text-center max-w-2xl mx-auto"

>
                {/* Iconos flotantes */}
                <div className="relative mb-8">
                    <div
                        className="absolute -top-10 -left-10 text-[#a90a0a] text-4xl opacity-20">
                        <GiCow />
                    </div>
                    <div
                        className="absolute -top-5 -right-8 text-[#a90a0a] text-3xl opacity-20">
                        <GiMeat />
                    </div>
                    <div
                        className="absolute -bottom-5 left-5 text-[#a90a0a] text-3xl opacity-20">
                        <GiChefToque />
                    </div>
                </div>

                {/* Número 404 */}
                <div
                    className="mb-8">
                    <h1 className="text-9xl md:text-[12rem] font-bold text-[#a90a0a] leading-none">
                        4
                        <span
                            className="inline-block">
                            0
                        </span>
                        4
                    </h1>
                </div>

                {/* Mensaje principal */}
                <div
                    className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#a90a0a] mb-4">
                        ¡Ups! Página no encontrada
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-2">
                        Parece que esta página se fue a pastar...
                    </p>
                    <p className="text-base md:text-lg text-gray-600">
                        La página que buscas no existe o ha sido movida.
                    </p>
                </div>

                {/* Ilustración con carne */}
                <div
                    className="mb-8 flex justify-center">
                    <div
                        className="bg-white rounded-full p-8 shadow-lg border-4 border-[#a90a0a] transition-transform duration-200 hover:scale-105">
                        <GiMeat className="text-6xl md:text-8xl text-[#a90a0a]" />
                    </div>
                </div>

                {/* Botones de navegación */}
                <div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/">
                        <button
                            className="bg-[#a90a0a] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 hover:bg-red-800 transition-colors duration-300 shadow-lg transition-transform duration-200 hover:-translate-y-1.5 hover:scale-105 active:scale-95">
                            <FaHome className="text-xl" />
                            Ir al Inicio
                        </button>
                    </Link>
                    
                    <button
                        onClick={() => window.history.back()}
                        className="bg-white text-[#a90a0a] px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 border-2 border-[#a90a0a] hover:bg-[#fff4bf] transition-colors duration-300 shadow-lg transition-transform duration-200 hover:-translate-y-1.5 hover:scale-105 active:scale-95">
                        <FaArrowLeft className="text-xl" />
                        Volver Atrás
                    </button>
                </div>

                {/* Mensaje adicional */}
                <div
                    className="mt-12 p-6 bg-white/80 rounded-lg border border-[#a90a0a]/20">
                    <p className="text-[#a90a0a] font-medium text-lg mb-2">
                        🥩 CarnicentroMarcelo
                    </p>
                    <p className="text-gray-600">
                        ¿Buscas nuestras carnes premium? Visita nuestro catálogo de productos
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        <Link href="/carne-de-res">
                            <span
                                className="text-[#a90a0a] hover:text-red-800 font-medium underline cursor-pointer transition-transform duration-200 hover:scale-105">
                                Carne de Res
                            </span>
                        </Link>
                        <Link href="/carne-de-cerdo">
                            <span
                                className="text-[#a90a0a] hover:text-red-800 font-medium underline cursor-pointer transition-transform duration-200 hover:scale-105">
                                Carne de Cerdo
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NotFound;