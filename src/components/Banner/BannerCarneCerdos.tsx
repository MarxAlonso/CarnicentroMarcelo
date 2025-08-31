import { motion } from 'framer-motion';
import { GiPig, GiMeat, GiKnifeFork } from 'react-icons/gi';
import { useState, useEffect } from 'react';
import banner4cerdo from "../../assets/banner/banner4-cerdo.webp";

export const BannerCarneCerdos = () => {
    const [text, setText] = useState('');
    const [fullText, setFullText] = useState('');
    const [index, setIndex] = useState(0);
    const [currentPhrase, setCurrentPhrase] = useState(0);

    const phrases = [
        "La mejor carne de cerdo",
        "Cortes premium seleccionados",
        "Sabor y calidad garantizada",
        "Del campo a tu mesa"
    ];

    // Efecto de escritura de texto
    useEffect(() => {
        setFullText(phrases[currentPhrase]);
        
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText(prevText => prevText + fullText[index]);
                setIndex(prevIndex => prevIndex + 1);
            }, 100);
            
            return () => clearTimeout(timeout);
        } else {
            // Cambiar a la siguiente frase después de un tiempo
            const timeout = setTimeout(() => {
                setCurrentPhrase((prev) => (prev + 1) % phrases.length);
                setText('');
                setIndex(0);
            }, 2000);
            
            return () => clearTimeout(timeout);
        }
    }, [fullText, index, currentPhrase]);

    // Variantes para animaciones
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
                type: "spring", 
                stiffness: 100 
            }
        }
    } as const;

    return (
        <div className="relative h-[80vh] overflow-hidden bg-gradient-to-r from-[#a90a0a] to-[#a90a0a]/80">
            {/* Fondo con patrón */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${banner4cerdo})` }} />
            </div>
            
            {/* Contenido principal */}
            <div className="relative container mx-auto h-full flex flex-col md:flex-row items-center justify-between px-6 py-12">
                {/* Texto y descripción */}
                <motion.div 
                    className="text-white max-w-xl z-10 mb-10 md:mb-0"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 
                        className="text-5xl md:text-6xl font-bold mb-6"
                        variants={itemVariants}
                    >
                        <span className="text-[#fff4bf]">Carnes de Cerdo</span> Premium
                    </motion.h1>
                    
                    <motion.div 
                        className="text-xl md:text-2xl font-medium mb-8 h-12"
                        variants={itemVariants}
                    >
                        <span className="text-[#fff4bf]">{text}</span>
                        <span className="animate-pulse">|</span>
                    </motion.div>
                    
                    <motion.p 
                        className="text-lg mb-8 text-[#fff4bf]/90"
                        variants={itemVariants}
                    >
                        En Carnicentro Marcelo seleccionamos los mejores cortes de cerdo para 
                        brindarte una experiencia culinaria excepcional. Calidad, frescura y sabor garantizado.
                    </motion.p>
                    
                    <motion.button
                        className="bg-[#fff4bf] text-[#a90a0a] px-8 py-3 rounded-full font-bold text-lg
                                hover:bg-white transition-colors duration-300 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        variants={itemVariants}
                    >
                        Ver Productos
                    </motion.button>
                </motion.div>
                
                {/* Elementos visuales */}
                <motion.div 
                    className="relative w-full md:w-1/2 h-[300px] flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Icono principal */}
                    <motion.div
                        className="absolute"
                        animate={{ 
                            rotate: [0, 10, 0, -10, 0],
                            scale: [1, 1.05, 1, 1.05, 1],
                        }}
                        transition={{ 
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <GiPig className="text-[#fff4bf] text-[200px]" />
                    </motion.div>
                    
                    {/* Iconos decorativos */}
                    <motion.div
                        className="absolute top-0 right-1/4"
                        animate={{ 
                            y: [0, -20, 0],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <GiMeat className="text-white text-[50px] opacity-70" />
                    </motion.div>
                    
                    <motion.div
                        className="absolute bottom-10 left-1/4"
                        animate={{ 
                            y: [0, 20, 0],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{ 
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    >
                        <GiKnifeFork className="text-white text-[40px] opacity-70" />
                    </motion.div>
                </motion.div>
            </div>
            
            {/* Decoración inferior */}
            <motion.div 
                className="absolute bottom-0 left-0 w-full h-4 bg-[#fff4bf]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
            />
        </div>
    );
};