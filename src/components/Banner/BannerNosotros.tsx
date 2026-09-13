"use client";

import Image from 'next/image';
import { GiCow, GiPig, GiMeat, GiSteak } from 'react-icons/gi';
import { useState, useEffect } from 'react';
import banner4 from '../../assets/banner/banner4.webp';

/**
 * Sigue siendo de cliente por la frase que rota, pero sin framer-motion. El
 * cambio de frase se anima con `frase-in`, que se reinicia porque el `key`
 * cambia con el índice.
 */

const frases = [
    'La mejor calidad en carnes para tu mesa',
    'Tradición y excelencia en cada corte',
    'Expertos en carnes desde 1990',
    'Sabor y calidad garantizada',
];

const ICONOS = [GiCow, GiPig, GiMeat, GiSteak];

export const BannerNosotros = () => {
    const [fraseActual, setFraseActual] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFraseActual((prev) => (prev + 1) % frases.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[80vh] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src={banner4}
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    quality={70}
                    placeholder="blur"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-carni-red/60 to-carni-dark-red/60" />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-center">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="hero-enter mb-8 text-4xl font-bold text-carni-cream sm:text-5xl lg:text-6xl">
                            Carnicentro Marcelo
                        </h1>

                        <p
                            key={fraseActual}
                            className="frase-in mb-12 text-xl italic text-white sm:text-2xl lg:text-3xl"
                        >
                            &ldquo;{frases[fraseActual]}&rdquo;
                        </p>
                    </div>

                    <div className="mb-12 flex justify-center gap-8 sm:gap-12">
                        {ICONOS.map((Icono, i) => (
                            <span
                                key={i}
                                className="hero-enter inline-block text-carni-cream transition-transform duration-200 hover:scale-110"
                                style={{ '--hero-delay': `${160 + i * 70}ms` } as React.CSSProperties}
                            >
                                <Icono className="h-12 w-12 sm:h-16 sm:w-16" aria-hidden="true" />
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
