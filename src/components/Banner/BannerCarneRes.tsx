import { GiCow } from 'react-icons/gi';
import banner1vacas from '../../assets/banner/banner1-vacas.webp';

/**
 * Componente de servidor: sin framer-motion no necesita JavaScript.
 *
 * El titular pasó de `h1` a `p`. La página ya tiene su `h1` con la palabra
 * clave («Carne de res en Lima: cortes y precio por kilo») justo debajo, y dos
 * `h1` en la misma página se anulan entre sí de cara a Google.
 */
export const BannerCarneRes = () => {
    return (
        <div className="relative min-h-[clamp(340px,52vh,460px)] w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-gradient-to-r from-brand/90 to-brand-deep/90"
                style={{
                    /* `.src`: la importación estática devuelve un objeto con ruta y
                       dimensiones, no una cadena. Interpolarlo directo escribía
                       "[object Object]" y el fondo no se veía. Se queda como
                       background porque el `backgroundBlendMode` compone la imagen
                       con el degradado; con next/image ese mezclado cambiaría. */
                    backgroundImage: `url(${banner1vacas.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay',
                }}
            />

            <div className="container relative mx-auto flex flex-col items-center justify-between px-4 py-12 md:flex-row">
                <div className="hero-enter mb-8 max-w-2xl text-white md:mb-0">
                    <p className="mb-6 text-4xl font-bold md:text-6xl">
                        <span className="text-cream">Carnes Premium</span> de Res
                    </p>
                    <p className="mb-8 text-lg text-cream/90 md:text-xl">
                        Descubre nuestra selección de cortes premium, desde tiernos lomos hasta
                        jugosos ribeyes, preparados con la más alta calidad para tu mesa.
                    </p>
                    <a
                        href="#productosres"
                        className="inline-block rounded-full bg-surface-warm px-8 py-3 text-lg font-bold text-brand-ink shadow-lg transition-all duration-200 hover:scale-105 hover:bg-surface active:scale-95"
                    >
                        Ver Productos
                    </a>
                </div>

                <div
                    className="hero-enter relative flex h-[300px] w-full items-center justify-center md:w-1/2"
                    style={{ '--hero-delay': '120ms' } as React.CSSProperties}
                >
                    <GiCow
                        aria-hidden="true"
                        className="text-[200px] text-cream transition-all duration-300 hover:scale-110 hover:text-white"
                    />
                </div>
            </div>

            <div className="bar-grow absolute bottom-0 left-0 h-4 w-full bg-surface-warm" />
        </div>
    );
};
