"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { GiMeatCleaver, GiCow, GiPig } from 'react-icons/gi';
import { MdCheckCircle } from 'react-icons/md';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';
import banner1 from '../../assets/banner/banner1-vacas.webp';
import banner2 from '../../assets/banner/banner2-vacas.webp';
import banner3 from '../../assets/banner/banner4-cerdo.webp';
import { BotonWhatsApp, BotonLlamar } from '@/components/WhatsApp/BotonWhatsApp';

const bannerImages = [banner1, banner2, banner3];

/** Lo que alguien quiere saber antes de escribir. Tres datos, no un párrafo. */
const GARANTIAS = ['Precio por kilo publicado', 'Corte del día', 'Delivery en Lima'];

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
 *   · El `h1` dice qué es el negocio y dónde está, que es lo que leen Google
 *     y los asistentes de IA. «Las mejores carnes para tu mesa» no le decía
 *     a nadie que esto es una carnicería de Lima.
 *   · La llamada a la acción principal ya no lleva al catálogo sino a
 *     WhatsApp, que es donde de verdad se cierra un pedido.
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
        <section
            aria-label="Carnicentro Marcelo, carnicería en Lima"
            className="relative flex min-h-[clamp(560px,82vh,720px)] overflow-hidden bg-char"
        >
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

            {/* Degradado de izquierda a derecha: oscurece donde va el texto y
                deja ver la foto en el otro lado. Un velo parejo apagaba toda
                la imagen para proteger solo media pantalla. */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="relative mx-auto flex w-full max-w-site items-center justify-between gap-10 px-6 pb-20 pt-14 md:px-16 lg:px-24">
                <div className="max-w-2xl">
                    <p className="hero-enter mb-5 inline-flex items-center gap-2 rounded-full border border-cream/40 bg-black/35 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cream">
                        <GiMeatCleaver className="text-base" aria-hidden="true" />
                        Carnicería en Lima · Res y chancho
                    </p>

                    <h1
                        className="hero-enter mb-5 text-balance font-display text-5xl font-bold uppercase leading-[1.04] text-white lg:text-6xl"
                        style={{ '--hero-delay': '80ms' } as React.CSSProperties}
                    >
                        Carne fresca de res y cerdo
                        <span className="block text-cream">cortada al momento</span>
                    </h1>

                    <p
                        className="hero-enter mb-7 max-w-xl text-lg text-white/90 md:text-xl"
                        style={{ '--hero-delay': '160ms' } as React.CSSProperties}
                    >
                        Lomo fino, bife, panceta, chuleta y todo el mostrador con el precio por kilo
                        a la vista. Escríbenos por WhatsApp y coordinamos tu pedido a domicilio.
                    </p>

                    <div
                        className="hero-enter flex flex-wrap items-center gap-3"
                        style={{ '--hero-delay': '240ms' } as React.CSSProperties}
                    >
                        <BotonWhatsApp mensaje="Hola, vi su web y quiero hacer un pedido de carne.">
                            Pedir por WhatsApp
                        </BotonWhatsApp>
                        <BotonLlamar />
                    </div>

                    <Link
                        href="/carne-de-res"
                        className="hero-enter mt-5 inline-block font-semibold text-cream underline decoration-cream/50 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                        style={{ '--hero-delay': '300ms' } as React.CSSProperties}
                    >
                        Ver cortes y precios por kilo →
                    </Link>

                    <ul
                        className="hero-enter mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white/90"
                        style={{ '--hero-delay': '360ms' } as React.CSSProperties}
                    >
                        {GARANTIAS.map((g) => (
                            <li key={g} className="flex items-center gap-1.5">
                                <MdCheckCircle className="text-base text-cream" aria-hidden="true" />
                                {g}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sello de mostrador. Solo en pantallas anchas: en móvil
                    competiría con el titular por el mismo espacio. */}
                <div
                    aria-hidden="true"
                    className="hero-enter hidden shrink-0 lg:block"
                    style={{ '--hero-delay': '420ms' } as React.CSSProperties}
                >
                    <div className="sello flex h-48 w-48 flex-col items-center justify-center rounded-full bg-brand text-center text-cream">
                        <span className="flex items-center gap-2 text-4xl">
                            <GiCow />
                            <GiPig />
                        </span>
                        <span className="mt-2 font-display text-2xl font-bold uppercase leading-none">
                            Corte del día
                        </span>
                        <span className="mt-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em]">
                            Res · Cerdo · Molida
                        </span>
                    </div>
                </div>
            </div>

            <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Foto anterior"
                className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 text-white/70 transition hover:text-white md:block"
            >
                <BsArrowLeftCircle className="text-4xl" aria-hidden="true" />
            </button>

            <button
                type="button"
                onClick={() => paginate(1)}
                aria-label="Foto siguiente"
                className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 text-white/70 transition hover:text-white md:block"
            >
                <BsArrowRightCircle className="text-4xl" aria-hidden="true" />
            </button>

            <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
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
                            index === imageIndex ? 'bg-cream' : 'bg-white/50 hover:bg-white/70'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};
