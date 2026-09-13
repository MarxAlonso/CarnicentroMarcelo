"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { GiMeat, GiCow, GiPig } from 'react-icons/gi';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';
import banner1 from '../../assets/banner/banner1-vacas.webp';
import banner2 from '../../assets/banner/banner2-vacas.webp';
import banner3 from '../../assets/banner/banner4-cerdo.webp';

const bannerImages = [banner1, banner2, banner3];

/**
 * Portada. Es el elemento más grande de la primera pantalla, así que aquí se
 * concentraba buena parte de la lentitud que se percibía.
 *
 * Qué cambió:
 *   · Sin framer-motion. El cruce entre fotos es una transición de opacidad.
 *   · El texto no espera a nada: sale con `hero-enter`, una animación de CSS
 *     que arranca en el primer fotograma. Antes estaba en `opacity: 0` hasta
 *     que React hidrataba, que es justo lo que se veía como "carga lento".
 *   · Las tres fotos se montan a la vez y solo la primera lleva `priority`,
 *     para que las otras dos no compitan con el LCP.
 */
export const Banner = () => {
    const [page, setPage] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    const imageIndex = page % bannerImages.length;

    const paginate = (direction: number) => {
        setAutoPlay(false);
        setPage((prev) =>
            direction > 0
                ? (prev + 1) % bannerImages.length
                : (prev - 1 + bannerImages.length) % bannerImages.length
        );
    };

    useEffect(() => {
        if (!autoPlay) return;
        const timer = setTimeout(() => {
            setPage((prev) => (prev + 1) % bannerImages.length);
        }, 5000);
        return () => clearTimeout(timer);
    }, [page, autoPlay]);

    return (
        <div className="relative h-[80vh] overflow-hidden md:h-[70vh] lg:h-[80vh]">
            {/* Las fotos se cruzan por opacidad en vez de montarse y
                desmontarse: así el cambio de slide no dispara una descarga a
                mitad de la transición. */}
            {bannerImages.map((img, i) => (
                <div
                    key={i}
                    aria-hidden={i !== imageIndex}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        i === imageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <Image
                        src={img}
                        alt=""
                        fill
                        priority={i === 0}
                        sizes="100vw"
                        quality={70}
                        placeholder="blur"
                        className="object-cover object-center"
                    />
                </div>
            ))}

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 md:px-12 lg:px-24">
                <div className="hero-enter mb-4 flex items-center gap-3">
                    <GiCow className="text-4xl text-[#fff4bf] md:text-5xl" aria-hidden="true" />
                    <GiPig className="text-4xl text-[#fff4bf] md:text-5xl" aria-hidden="true" />
                </div>

                <h1
                    className="hero-enter mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
                    style={{ '--hero-delay': '80ms' } as React.CSSProperties}
                >
                    Las Mejores Carnes
                    <span className="block text-[#fff4bf]">Para Tu Mesa</span>
                </h1>

                <p
                    className="hero-enter mb-8 max-w-2xl text-lg text-white md:text-xl"
                    style={{ '--hero-delay': '160ms' } as React.CSSProperties}
                >
                    Descubre nuestra selección premium de carnes de res y cerdo, criadas con los más
                    altos estándares de calidad.
                </p>

                <Link
                    href="/carne-de-res"
                    className="hero-enter flex w-fit items-center gap-2 rounded-full bg-[#a90a0a] px-8 py-3 text-lg font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-[#8a0808] active:scale-[0.97]"
                    style={{ '--hero-delay': '240ms' } as React.CSSProperties}
                >
                    <GiMeat className="text-xl" aria-hidden="true" />
                    Ver Nuestros Cortes
                </Link>
            </div>

            <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Foto anterior"
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white/70 transition hover:text-white"
            >
                <BsArrowLeftCircle className="text-4xl md:text-5xl" aria-hidden="true" />
            </button>

            <button
                type="button"
                onClick={() => paginate(1)}
                aria-label="Foto siguiente"
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-white/70 transition hover:text-white"
            >
                <BsArrowRightCircle className="text-4xl md:text-5xl" aria-hidden="true" />
            </button>

            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {bannerImages.map((_, index) => (
                    <button
                        type="button"
                        key={index}
                        aria-label={`Ir a la foto ${index + 1}`}
                        aria-current={index === imageIndex}
                        onClick={() => {
                            setAutoPlay(false);
                            setPage(index);
                        }}
                        className={`h-3 w-3 rounded-full transition-colors ${
                            index === imageIndex ? 'bg-[#fff4bf]' : 'bg-white/50 hover:bg-white/70'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};
