
import { motion } from 'framer-motion';
import { GiMeat, GiCow, GiPig, GiKnifeFork, GiWeight } from 'react-icons/gi';
import { BannerNosotros } from '../../components/Banner/BannerNosotros';

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

export const NosotrosInicio = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-carni-cream to-white">
            <BannerNosotros />
            
            <motion.div 
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.section 
                    className="mb-20"
                    variants={cardVariants}
                >
                    <div className="flex items-center justify-center mb-8">
                        <GiKnifeFork className="text-carni-red text-4xl mr-4 transform -rotate-12" />
                        <h2 className="text-4xl font-bold text-carni-dark-red">Nuestra Misión</h2>
                    </div>
                    <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
                        Ofrecer la mejor selección de carnes de res y cerdo de primera calidad, 
                        garantizando cortes precisos, frescura excepcional y un servicio personalizado 
                        que satisfaga las exigencias de nuestros clientes.
                    </p>
                </motion.section>

                <motion.section 
                    className="mb-20"
                    variants={cardVariants}
                >
                    <div className="flex items-center justify-center mb-8">
                        <GiWeight className="text-carni-red text-4xl mr-4" />
                        <h2 className="text-4xl font-bold text-carni-dark-red">Nuestra Visión</h2>
                    </div>
                    <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
                        Ser la carnicería líder en la región, reconocida por la excelencia de nuestros 
                        cortes de res y cerdo, manteniendo los más altos estándares de calidad y 
                        ofreciendo una experiencia de compra única.
                    </p>
                </motion.section>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                    variants={containerVariants}
                >
                    {[
                        {
                            icon: GiCow,
                            title: "Carnes de Res Premium",
                            description: "Seleccionamos las mejores reses para ofrecer cortes de primera calidad, desde tiernos lomos hasta jugosos ribeyes."
                        },
                        {
                            icon: GiPig,
                            title: "Cerdo Selecto",
                            description: "Ofrecemos la mejor carne de cerdo, con cortes especializados y calidad garantizada en cada pieza."
                        },
                        {
                            icon: GiKnifeFork,
                            title: "Cortes Especializados",
                            description: "Realizamos cortes precisos y personalizados según sus preferencias, garantizando la mejor presentación."
                        },
                        {
                            icon: GiMeat,
                            title: "Calidad Garantizada",
                            description: "Cada corte pasa por un riguroso control de calidad para asegurar la mejor experiencia en su mesa."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-carni-red/10"
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className="flex items-center justify-center mb-6">
                                <item.icon className="text-6xl text-carni-red transform hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-2xl font-bold text-carni-dark-red text-center mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};