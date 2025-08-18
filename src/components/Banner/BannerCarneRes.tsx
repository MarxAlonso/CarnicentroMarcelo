import { motion } from 'framer-motion';
import { GiCow } from 'react-icons/gi';
import  banner1vacas  from '../../assets/banner/banner1-vacas.webp';

export const BannerCarneRes = () => {
    return (
        <div className="relative w-full min-h-[60vh] overflow-hidden">
            {/* Fondo con imagen y degradado */}
            <div 
                className="absolute inset-0 bg-gradient-to-r from-carni-red/90 to-carni-dark-red/90"
                style={{ 
                    backgroundImage: `url(${banner1vacas})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                }}
            />

            {/* Contenido principal */}
            <div className="relative container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
                {/* Texto y descripción */}
                <motion.div 
                    className="text-white max-w-2xl mb-8 md:mb-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="text-carni-cream">Carnes Premium</span> de Res
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-carni-cream/90">
                        Descubre nuestra selección de cortes premium, desde tiernos lomos hasta jugosos ribeyes, 
                        preparados con la más alta calidad para tu mesa.
                    </p>
                    <motion.button
                        className="bg-carni-cream text-carni-red px-8 py-3 rounded-full font-bold text-lg
                                 hover:bg-white transition-colors duration-300 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Ver Productos
                    </motion.button>
                </motion.div>

                {/* Icono de vaca con hover */}
                <motion.div 
                    className="relative w-full md:w-1/2 h-[300px] flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        whileHover={{ 
                            scale: 1.2,
                            color: '#FFFFFF',
                            transition: { duration: 0.3 }
                        }}
                        className="cursor-pointer"
                    >
                        <GiCow className="text-carni-cream text-[200px] transition-colors duration-300" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Decoración inferior */}
            <motion.div 
                className="absolute bottom-0 left-0 w-full h-4 bg-carni-cream"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
            />
        </div>
    );
};