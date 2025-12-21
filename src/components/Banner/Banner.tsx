import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { GiMeat, GiCow, GiPig } from 'react-icons/gi';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';
import banner1 from '../../assets/banner/banner1-vacas.webp';
import banner2 from '../../assets/banner/banner2-vacas.webp';
import banner3 from '../../assets/banner/banner4-cerdo.webp';

const bannerImages = [banner1, banner2, banner3];

const fadeVariants = {
    initial: {
        opacity: 0,
        scale: 1.03
    },
    animate: {
        opacity: 1,
        scale: 1
    },
    exit: {
        opacity: 0
    }
};

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
        <div className="relative h-[80vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
            <AnimatePresence>
                <motion.div
                    key={imageIndex}
                    variants={fadeVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 1,
                        ease: 'easeInOut'
                    }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${bannerImages[imageIndex]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* CONTENIDO */}
                    <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                        <div className="flex items-center gap-3 mb-4">
                            <GiCow className="text-[#fff4bf] text-4xl md:text-5xl" />
                            <GiPig className="text-[#fff4bf] text-4xl md:text-5xl" />
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Las Mejores Carnes
                            <span className="block text-[#fff4bf]">
                                Para Tu Mesa
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
                            Descubre nuestra selección premium de carnes de res y
                            cerdo, criadas con los más altos estándares de calidad.
                        </p>

                        <motion.a
                            href="/carneres"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 bg-[#a90a0a] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#8a0808] transition-colors w-fit"
                        >
                            <GiMeat className="text-xl" />
                            Ver Nuestros Cortes
                        </motion.a>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* CONTROLES */}
            <button
                onClick={() => paginate(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition z-10"
            >
                <BsArrowLeftCircle className="text-4xl md:text-5xl" />
            </button>

            <button
                onClick={() => paginate(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition z-10"
            >
                <BsArrowRightCircle className="text-4xl md:text-5xl" />
            </button>

            {/* INDICADORES */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {bannerImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setAutoPlay(false);
                            setPage(index);
                        }}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            index === imageIndex
                                ? 'bg-[#fff4bf]'
                                : 'bg-white/50 hover:bg-white/70'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};
