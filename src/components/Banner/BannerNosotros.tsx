import { motion } from 'framer-motion';
import { GiCow, GiPig, GiMeat, GiSteak } from 'react-icons/gi';
import { useState, useEffect } from 'react';
import header_img from '../../assets/header_img.png';

const frases = [
    '"La mejor calidad en carnes para tu mesa"',
    '"Tradición y excelencia en cada corte"',
    '"Expertos en carnes desde 1990"',
    '"Sabor y calidad garantizada"'
];

export const BannerNosotros = () => {
    const [fraseActual, setFraseActual] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFraseActual((prev) => (prev + 1) % frases.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[90vh] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src={header_img} 
                    alt="Banner Carnicentro" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-carni-red/60 to-carni-dark-red/60" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-carni-cream mb-8">
                            Carnicentro Marcelo
                        </h1>
                        <motion.div
                            key={fraseActual}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl sm:text-2xl lg:text-3xl text-white italic mb-12"
                        >
                            {frases[fraseActual]}
                        </motion.div>
                    </motion.div>

                    <div className="flex justify-center gap-8 sm:gap-12 mb-12">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-carni-cream"
                        >
                            <GiCow className="w-12 h-12 sm:w-16 sm:h-16" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-carni-cream"
                        >
                            <GiPig className="w-12 h-12 sm:w-16 sm:h-16" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-carni-cream"
                        >
                            <GiMeat className="w-12 h-12 sm:w-16 sm:h-16" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-carni-cream"
                        >
                            <GiSteak className="w-12 h-12 sm:w-16 sm:h-16" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};