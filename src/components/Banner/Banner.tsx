import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { GiMeat, GiCow, GiPig } from 'react-icons/gi';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';

const bannerImages = [
    '/header_img.png',
    '../../assets/food_1.png',
    '../../assets/food_2.png',
];

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
    })
};

export const Banner = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const [autoPlay, setAutoPlay] = useState(true);

    const imageIndex = Math.abs(page % bannerImages.length);

    const paginate = (newDirection: number) => {
        setAutoPlay(false);
        setPage([page + newDirection, newDirection]);
    };

    useEffect(() => {
        if (autoPlay) {
            const timer = setTimeout(() => {
                setPage([page + 1, 1]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [page, autoPlay]);

    return (
        <div className="relative h-[80vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-[#fff4bf]">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute w-full h-full"
                    style={{
                        backgroundImage: `url(${bannerImages[imageIndex]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-40" />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
                    >
                        <div className="flex items-center gap-3 mb-4">
                             <GiCow className="text-[#fff4bf] text-4xl md:text-5xl banner-icon" />
                             <GiPig className="text-[#fff4bf] text-4xl md:text-5xl banner-icon" />
                         </div>
                         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 banner-title">
                             Las Mejores Carnes
                             <span className="block text-[#fff4bf]">Para Tu Mesa</span>
                         </h1>
                         <p className="text-lg md:text-xl text-white mb-8 max-w-2xl banner-description">
                             Descubre nuestra selección premium de carnes de res y cerdo, criadas con los más altos estándares de calidad.
                         </p>
                         <motion.button
                             whileHover={{ scale: 1.05 }}
                             whileTap={{ scale: 0.95 }}
                             className="flex items-center gap-2 bg-[#a90a0a] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#8a0808] transition-colors w-fit banner-button"
                        >
                            <GiMeat className="text-xl" />
                            Ver Nuestros Cortes
                        </motion.button>
                    </motion.div>
                </motion.div>
            </AnimatePresence>

            {/* Controles de navegación */}
            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
                onClick={() => paginate(-1)}
            >
                <BsArrowLeftCircle className="text-4xl md:text-5xl" />
            </button>
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
                onClick={() => paginate(1)}
            >
                <BsArrowRightCircle className="text-4xl md:text-5xl" />
            </button>

            {/* Indicadores de página */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {bannerImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setAutoPlay(false);
                            setPage([index, index > imageIndex ? 1 : -1]);
                        }}
                        className={`w-3 h-3 rounded-full transition-colors ${index === imageIndex ? 'bg-[#fff4bf]' : 'bg-white/50 hover:bg-white/70'}`}
                    />
                ))}            </div>
        </div>
    );
};