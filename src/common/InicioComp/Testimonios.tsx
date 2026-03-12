import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

interface Testimonio {
  nombre: string;
  comentario: string;
  estrellas: number;
}

const testimonios: Testimonio[] = [
  {
    nombre: "Roberto García",
    comentario: "La mejor carnicería de la zona. El lomo fino siempre está en su punto y la atención de Marcelo es de primera. Muy recomendado.",
    estrellas: 5
  },
  {
    nombre: "Lucía Fernández",
    comentario: "Compré panceta para un asado familiar y quedó espectacular. Se nota que es carne fresca de buena crianza. ¡Volveré pronto!",
    estrellas: 5
  },
  {
    nombre: "Andrés Mendoza",
    comentario: "Excelente variedad de cortes de res. Me asesoraron sobre qué corte llevar para un guiso y el resultado fue delicioso. Gran calidad.",
    estrellas: 5
  }
];

const TestimonioCard: React.FC<{ testimonio: Testimonio; index: number }> = ({ testimonio, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-white p-8 rounded-3xl shadow-lg border border-[#fff4bf]/30 hover:shadow-2xl transition-all duration-300 relative group"
    >
      <div className="absolute top-0 right-10 -translate-y-1/2 w-16 h-16 bg-[#a90a0a] rounded-2xl flex items-center justify-center shadow-lg transform group-hover:-rotate-6 transition-transform">
        <FaQuoteLeft className="text-white text-2xl" />
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(testimonio.estrellas)].map((_, i) => (
          <FaStar key={i} className="text-[#FFD700]" />
        ))}
      </div>
      <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
        "{testimonio.comentario}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-[#fff4bf] rounded-full flex items-center justify-center font-bold text-[#a90a0a]">
          {testimonio.nombre.charAt(0)}
        </div>
        <h4 className="text-lg font-bold text-gray-900">{testimonio.nombre}</h4>
      </div>
    </motion.div>
  );
};

const Testimonios: React.FC = () => {
  return (
    <section className="py-24 bg-[#a90a0a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#fff4bf] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#fff4bf] uppercase mb-2">Opiniones de Nuestros Clientes</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Confianza que se <span className="text-[#fff4bf]">Saborea</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((t, i) => (
            <TestimonioCard key={i} testimonio={t} index={i} />
          ))}
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
        >
          <div className="inline-block p-1 rounded-full bg-white/10 backdrop-blur-sm px-6 py-3 border border-white/20">
            <p className="text-white text-lg font-medium">Más de <span className="text-[#fff4bf] font-bold">500+ clientes</span> satisfechos cada mes.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonios;
