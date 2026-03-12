import React from 'react';
import { motion } from 'framer-motion';
import { GiMeatCleaver, GiGrass, GiHeartBeats, GiTrophy } from 'react-icons/gi';

const ExperienciaCarnicera: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#a90a0a] uppercase mb-2">Pasión por la Tradición</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            El Arte de la <span className="text-[#a90a0a]">Carnicería</span> de Verdad
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En Carnicentro Marcelo, no solo vendemos carne; honramos el trabajo del ganadero y la maestría del carnicero para llevar lo mejor a su mesa.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Card 1: Ganadería */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-[#fff4bf] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#a90a0a] transition-colors duration-300">
              <GiGrass className="text-4xl text-[#a90a0a] group-hover:text-white transition-colors duration-300" />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-3">Origen Garantizado</h4>
            <p className="text-gray-600 leading-relaxed">
              Seleccionamos reses de las mejores pasturas. La <strong>carne de res</strong> que ofrecemos proviene de ganado criado con estándares óptimos, garantizando un marmoleo natural y sabor inigualable.
            </p>
          </motion.div>

          {/* Card 2: Maestría */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-[#fff4bf] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#a90a0a] transition-colors duration-300">
              <GiMeatCleaver className="text-4xl text-[#a90a0a] group-hover:text-white transition-colors duration-300" />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-3">Corte de Maestro</h4>
            <p className="text-gray-600 leading-relaxed">
              Nuestros carniceros expertos dominan cada técnica. Desde el <strong>lomo fino</strong> hasta la <strong>panceta de cerdo</strong>, cada pieza es tratada con precisión para preservar su frescura y textura.
            </p>
          </motion.div>

          {/* Card 3: Nutrición */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-[#fff4bf] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#a90a0a] transition-colors duration-300">
              <GiHeartBeats className="text-4xl text-[#a90a0a] group-hover:text-white transition-colors duration-300" />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-3">Nutrición de Calidad</h4>
            <p className="text-gray-600 leading-relaxed">
              La carne es fuente esencial de hierro, zinc y vitaminas B12. Nuestras <strong>carnes de res y chancho</strong> aportan las proteínas necesarias para una dieta equilibrada y saludable.
            </p>
          </motion.div>

          {/* Card 4: Compromiso */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-[#fff4bf] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#a90a0a] transition-colors duration-300">
              <GiTrophy className="text-4xl text-[#a90a0a] group-hover:text-white transition-colors duration-300" />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-3">Excelencia Local</h4>
            <p className="text-gray-600 leading-relaxed">
              Somos referentes en la venta de carne de calidad. En Carnicentro Marcelo, el compromiso es la frescura diaria y la satisfacción total en cada pedido de nuestros clientes.
            </p>
          </motion.div>
        </motion.div>

        {/* Detailed Expertise Section (SEO Rich Text) */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-3xl font-bold text-gray-900">¿Por qué elegir nuestras Carnes de Res y Cerdo?</h4>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Como conocedores del campo y la mesa, entendemos que la calidad de la carne comienza en la crianza. El ganado que seleccionamos para nuestra <strong>carnicería</strong> disfruta de una alimentación controlada y libre de estrés, lo que se traduce en una terneza superior de la carne.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              La <strong>carne de chancho</strong> (o cerdo) que procesamos destaca por su jugosidad. Cortes como la bondiola o la chuleta de lomo pasan por rigurosos controles sanitarios, asegurando que su aporte nutricional y sabor sean siempre de primer nivel.
            </p>
            <div className="pt-4 border-l-4 border-[#a90a0a] pl-6 italic text-gray-600">
              "El secreto de un buen asado no está solo en el fuego, sino en la mano que elige la pieza correcta." — Marcelo, Maestro Carnicero.
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[#fff4bf]/30 rounded-full blur-3xl -z-10"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-[#a90a0a] p-8 rounded-2xl shadow-xl transform hover:-rotate-2 transition-transform">
                  <span className="text-5xl font-black text-white">100%</span>
                  <p className="text-white font-medium mt-2 uppercase tracking-wide">Calidad Selecta</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform hover:rotate-2 transition-transform">
                  <span className="text-5xl font-black text-[#a90a0a]">Fresco</span>
                  <p className="text-gray-600 font-medium mt-2 uppercase tracking-wide">Corte del Día</p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform hover:rotate-2 transition-transform">
                  <span className="text-4xl font-black text-gray-800">Nutritivo</span>
                  <p className="text-gray-600 font-medium mt-2 uppercase tracking-wide">Alto en Proteínas</p>
                </div>
                <div className="bg-[#fff4bf] p-8 rounded-2xl shadow-xl transform hover:-rotate-2 transition-transform">
                  <span className="text-4xl font-black text-[#a90a0a]">Tradición</span>
                  <p className="text-[#a90a0a] font-medium mt-2 uppercase tracking-wide">Pura Maestría</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienciaCarnicera;
