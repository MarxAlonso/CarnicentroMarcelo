import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
            <motion.div
                className="text-center max-w-2xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Iconos flotantes */}
                <div className="relative mb-8">
                    <motion.div
                        className="absolute -top-10 -left-10 text-[#a90a0a] text-4xl opacity-20"
                        animate={floatingAnimation}
                    >
                        <GiCow />
                    </motion.div>
                    <motion.div
                        className="absolute -top-5 -right-8 text-[#a90a0a] text-3xl opacity-20"
                        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
                    >
                        <GiMeat />
                    </motion.div>
                    <motion.div
                        className="absolute -bottom-5 left-5 text-[#a90a0a] text-3xl opacity-20"
                        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
                    >
                        <GiChefToque />
                    </motion.div>
                </div>

                {/* Número 404 */}
                <motion.div
                    className="mb-8"
                    variants={itemVariants}
                >
                    <h1 className="text-9xl md:text-[12rem] font-bold text-[#a90a0a] leading-none">
                        4
                        <motion.span
                            className="inline-block"
                            animate={{
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut" as const
                            }}
                        >
                            0
                        </motion.span>
                        4
                    </h1>
                </motion.div>

                {/* Mensaje principal */}
                <motion.div
                    className="mb-8"
                    variants={itemVariants}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#a90a0a] mb-4">
                        ¡Ups! Página no encontrada
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-2">
                        Parece que esta página se fue a pastar...
                    </p>
                    <p className="text-base md:text-lg text-gray-600">
                        La página que buscas no existe o ha sido movida.
                    </p>
                </motion.div>

                {/* Ilustración con carne */}
                <motion.div
                    className="mb-8 flex justify-center"
                    variants={itemVariants}
                >
                    <motion.div
                        className="bg-white rounded-full p-8 shadow-lg border-4 border-[#a90a0a]"
                        whileHover={{ scale: 1.05 }}
                        animate={{
                            boxShadow: [
                                "0 10px 30px rgba(169, 10, 10, 0.2)",
                                "0 15px 40px rgba(169, 10, 10, 0.3)",
                                "0 10px 30px rgba(169, 10, 10, 0.2)"
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <GiMeat className="text-6xl md:text-8xl text-[#a90a0a]" />
                    </motion.div>
                </motion.div>

                {/* Botones de navegación */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    variants={itemVariants}
                >
                    <Link to="/">
                        <motion.button
                            className="bg-[#a90a0a] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 hover:bg-red-800 transition-colors duration-300 shadow-lg"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaHome className="text-xl" />
                            Ir al Inicio
                        </motion.button>
                    </Link>
                    
                    <motion.button
                        onClick={() => window.history.back()}
                        className="bg-white text-[#a90a0a] px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 border-2 border-[#a90a0a] hover:bg-[#fff4bf] transition-colors duration-300 shadow-lg"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaArrowLeft className="text-xl" />
                        Volver Atrás
                    </motion.button>
                </motion.div>

                {/* Mensaje adicional */}
                <motion.div
                    className="mt-12 p-6 bg-white/80 rounded-lg border border-[#a90a0a]/20"
                    variants={itemVariants}
                >
                    <p className="text-[#a90a0a] font-medium text-lg mb-2">
                        🥩 CarnicentroMarcelo
                    </p>
                    <p className="text-gray-600">
                        ¿Buscas nuestras carnes premium? Visita nuestro catálogo de productos
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        <Link to="/carneres">
                            <motion.span
                                className="text-[#a90a0a] hover:text-red-800 font-medium underline cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                            >
                                Carne de Res
                            </motion.span>
                        </Link>
                        <Link to="/carnecerdo">
                            <motion.span
                                className="text-[#a90a0a] hover:text-red-800 font-medium underline cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                            >
                                Carne de Cerdo
                            </motion.span>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};
export default NotFound;