"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { GiPig, GiMeat, GiKnifeFork } from 'react-icons/gi';
import banner4cerdo from "../../assets/banner/banner4-cerdo.webp";

/**
 * Sigue siendo de cliente por el texto que se escribe solo, pero ya sin
 * framer-motion: los iconos que flotaban en bucle infinito ahora lo hacen con
 * `@keyframes`. Esa diferencia importa más de lo que parece — un bucle de
 * framer-motion mantiene JavaScript trabajando en cada fotograma mientras el
 * banner esté a la vista; una animación de CSS la resuelve el compositor.
 *
 * El titular pasó de `h1` a `p`: la página ya tiene su `h1` con la palabra
 * clave justo debajo.
 */

const phrases = [
    "La mejor carne de cerdo",
    "Cortes premium seleccionados",
    "Sabor y calidad garantizada",
    "Del campo a tu mesa"
];

export const BannerCarneCerdos = () => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [currentPhrase, setCurrentPhrase] = useState(0);

    useEffect(() => {
        const fullText = phrases[currentPhrase];

        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText(fullText.slice(0, index + 1));
                setIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
            setText('');
            setIndex(0);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [index, currentPhrase]);

    return (
        <div className="relative h-[clamp(400px,68vh,580px)] overflow-hidden bg-gradient-to-r from-brand to-brand/80">
            <div className="absolute inset-0 opacity-50">
                <Image
                    src={banner4cerdo}
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    quality={70}
                    placeholder="blur"
                    className="object-cover object-center"
                />
            </div>

            <div className="container relative mx-auto flex h-full flex-col items-center justify-between px-6 py-12 md:flex-row">
                <div className="z-10 mb-10 max-w-xl text-white md:mb-0">
                    <p className="hero-enter mb-6 text-5xl font-bold md:text-6xl">
                        <span className="text-cream">Carnes de Cerdo</span> Premium
                    </p>

                    <div
                        className="hero-enter mb-8 h-12 text-xl font-medium md:text-2xl"
                        style={{ '--hero-delay': '80ms' } as React.CSSProperties}
                    >
                        {/* aria-live en "off": es decoración, no hace falta que un
                            lector de pantalla narre cada letra. */}
                        <span className="text-cream" aria-live="off">
                            {text}
                        </span>
                        <span className="caret-blink" aria-hidden="true">|</span>
                    </div>

                    <p
                        className="hero-enter mb-8 text-lg text-cream/90"
                        style={{ '--hero-delay': '160ms' } as React.CSSProperties}
                    >
                        En Carnicentro Marcelo seleccionamos los mejores cortes de cerdo para
                        brindarte una experiencia culinaria excepcional. Calidad, frescura y sabor
                        garantizado.
                    </p>

                    <a
                        href="#productoscerdos"
                        className="hero-enter inline-block rounded-full bg-surface-warm px-8 py-3 text-lg font-bold text-brand-ink shadow-lg transition-all duration-200 hover:scale-105 hover:bg-surface active:scale-95"
                        style={{ '--hero-delay': '240ms' } as React.CSSProperties}
                    >
                        Ver Productos
                    </a>
                </div>

                <div className="relative flex h-[300px] w-full items-center justify-center md:w-1/2">
                    <div className="sway-slow absolute">
                        <GiPig className="text-[200px] text-cream" aria-hidden="true" />
                    </div>

                    <div className="float-slow absolute right-1/4 top-0">
                        <GiMeat className="text-[50px] text-white" aria-hidden="true" />
                    </div>

                    <div className="float-slow-delayed absolute bottom-10 left-1/4">
                        <GiKnifeFork className="text-[40px] text-white" aria-hidden="true" />
                    </div>
                </div>
            </div>

            <div className="bar-grow absolute bottom-0 left-0 h-4 w-full bg-surface-warm" />
        </div>
    );
};
