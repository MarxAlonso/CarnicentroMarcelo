import React from 'react';
import { motion } from 'framer-motion';
import { GiHealthNormal, GiBrain, GiMuscleUp } from 'react-icons/gi';
import { FaUserGraduate, FaChild, FaUserAlt, FaBone } from 'react-icons/fa';
import imageHeader from '../../../assets/blog/blog_header_nutrition_beef.png';

const ImportanciaCarne: React.FC = () => {
  return (
    <article className="bg-white min-h-screen pb-20">
      {/* Hero Header */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={imageHeader}
          alt="Importancia de la carne de res"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-12 w-full text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-[#a90a0a] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-4 inline-block">Nutrición y Salud</span>
              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                La Importancia de la Carne de Res en el Desarrollo Humano
              </h1>
              <p className="mt-4 text-xl text-gray-200 max-w-3xl">
                Un análisis profundo sobre cómo la proteína de alta calidad y los micronutrientes de la carne roja impactan en cada etapa de la vida.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-16">
        {/* Intro */}
        <section className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="text-2xl font-medium text-gray-900 mb-8 border-l-4 border-[#a90a0a] pl-6">
            Como expertos en carnicería y apasionados por la nutrición, entendemos que la carne de res no es solo un alimento, sino una fuente de vitalidad esencial. Médicamente comprobado, el aporte de aminoácidos esenciales y hierro hemínico es insustituible.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Micronutrientes de Poder</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div className="bg-[#fff4bf]/20 p-6 rounded-2xl border border-[#fff4bf]">
              <div className="flex items-center gap-3 mb-4 text-[#a90a0a]">
                <GiHealthNormal className="text-2xl" />
                <h3 className="text-xl font-bold m-0">Hierro Hemínico</h3>
              </div>
              <p className="m-0">A diferencia del hierro vegetal, el hierro de la carne de res es de **alta biodisponibilidad**, absorbiéndose hasta 5 veces más rápido, clave para prevenir la anemia ferropénica.</p>
            </div>
            <div className="bg-[#fff4bf]/20 p-6 rounded-2xl border border-[#fff4bf]">
              <div className="flex items-center gap-3 mb-4 text-[#a90a0a]">
                <GiBrain className="text-2xl" />
                <h3 className="text-xl font-bold m-0">Vitamina B12</h3>
              </div>
              <p className="m-0">Esencial para la formación de glóbulos rojos y el mantenimiento del **sistema nervioso central**, la B12 se encuentra de forma natural y potente en la carne roja.</p>
            </div>
          </div>
        </section>

        {/* Life Stages */}
        <div className="space-y-24 mt-20">
          {/* Niños */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-12 items-start"
          >
            <div className="w-16 h-16 bg-[#a90a0a] rounded-full flex items-center justify-center shrink-0">
              <FaChild className="text-3xl text-[#fff4bf]" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Etapa 1: Infancia y Crecimiento</h2>
              <p className="text-lg text-gray-600 mb-6">
                Durante los primeros años, el cuerpo requiere bloques de construcción sólidos. La **proteína completa** de la carne de res proporciona los aminoácidos necesarios para el crecimiento de tejidos y el desarrollo óseo. El Zinc presente es vital para el **sistema inmunológico**, protegiendo a los más pequeños de infecciones recurrentes.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Estimula la hormona de crecimiento natural.</li>
                <li>Mejora la densidad mineral ósea.</li>
                <li>Fundamental para el desarrollo cognitivo temprano.</li>
              </ul>
            </div>
          </motion.section>

          {/* Jóvenes */}
          <motion.section
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row-reverse gap-12 items-start"
          >
            <div className="w-16 h-16 bg-[#a90a0a] rounded-full flex items-center justify-center shrink-0">
              <FaUserGraduate className="text-3xl text-[#fff4bf]" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Etapa 2: Adolescencia y Rendimiento</h2>
              <p className="text-lg text-gray-600 mb-6">
                En la juventud, el metabolismo está en su punto máximo. Para los jóvenes activos y deportistas, la carne de res es la mejor aliada para la **hipertrofia y recuperación muscular** gracias a su contenido de creatina natural y potasio. Además, el aporte graso saludable ayuda a la síntesis hormonal necesaria en esta etapa de cambios.
              </p>
              <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl border-l-4 border-[#a90a0a]">
                <GiMuscleUp className="text-4xl text-[#a90a0a]" />
                <p className="m-0 font-medium italic">"La carne roja es el combustible metabólico más eficiente para el desarrollo de la masa muscular magra."</p>
              </div>
            </div>
          </motion.section>

          {/* Adultos */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-12 items-start"
          >
            <div className="w-16 h-16 bg-[#a90a0a] rounded-full flex items-center justify-center shrink-0">
              <FaUserAlt className="text-3xl text-[#fff4bf]" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Etapa 3: Adultez y Plenitud</h2>
              <p className="text-lg text-gray-600 mb-6">
                Para el adulto, mantener la vitalidad es prioridad. El consumo de cortes magros de res ayuda a combatir la **sarcopenia** (pérdida de masa muscular con la edad). Además, el aporte de selenio actúa como un potente antioxidante celular, retrasando el envejecimiento y mejorando la salud cardiovascular cuando se consume con equilibrio.
              </p>
              <div className="flex items-center gap-4 bg-[#fff4bf]/10 p-6 rounded-xl border-l-4 border-[#fff4bf]">
                <FaBone className="text-4xl text-[#a90a0a]" />
                <p className="m-0 font-medium italic">Previene la debilidad articular y mantiene los niveles de energía estables durante el día.</p>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Conclusion */}
        <div className="mt-32 p-12 bg-[#a90a0a] rounded-[40px] text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-xl"></div>
          <h3 className="text-3xl font-bold mb-6">Calidad que se Traduce en Salud</h3>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            En Carnicentro Marcelo, seleccionamos cada pieza con rigurosidad médica y técnica. Comer carne de calidad es invertir en tu futuro y el de tu familia.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <a href="/carneres" className="bg-[#fff4bf] text-[#a90a0a] px-8 py-3 rounded-full font-bold hover:bg-white transition-colors transform hover:scale-105">Explorar Cortes de Res</a>
            <a href="/contacto" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#a90a0a] transition-all">Hablar con un Maestro Carnicero</a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ImportanciaCarne;
