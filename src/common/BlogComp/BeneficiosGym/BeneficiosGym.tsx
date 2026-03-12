import React from 'react';
import { motion } from 'framer-motion';
import { GiMuscleUp, GiCookingPot } from 'react-icons/gi';
import { FaCheckCircle, FaAppleAlt } from 'react-icons/fa';
import imageHeader from '../../../assets/blog/gym_blog_header.png';

const BeneficiosGym: React.FC = () => {
  return (
    <article className="bg-white min-h-screen pb-20">
      {/* Hero Header */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={imageHeader}
          alt="Beneficios de la carne para el progreso en el gimnasio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-12 w-full text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-[#a90a0a] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-4 inline-block">Fitness y Rendimiento</span>
              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                La Carne de Res y Cerdo: Claves para tu Progreso en el Gimnasio
              </h1>
              <p className="mt-4 text-xl text-gray-200 max-w-3xl">
                Descubre cómo los cortes magros potencian la síntesis proteica, aceleran la recuperación y maximizan la ganancia de masa muscular.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-16">
        {/* Intro Section */}
        <section className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="text-2xl font-medium text-gray-900 mb-8 border-l-4 border-red-600 pl-6">
            Consumir cortes magros de carne vacuna y de cerdo puede ser la clave de una dieta para aumentar masa muscular. Estos alimentos aportan proteínas de alto valor biológico, creatina natural y carnitina.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-gray-900">Proteína de Alto Poder</h2>
              <p>
                100g de carne roja magra aportan unos **25–26g de proteína completa**, rica en **leucina**, el aminoácido clave que activa la síntesis muscular. El cerdo magro ofrece cantidades similares, junto con vitaminas B1, B3, B6 y B12 que reducen la fatiga en deportistas.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-600 shrink-0" />
                  <span>Creatina natural para fuerza y explosividad.</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-600 shrink-0" />
                  <span>Hierro hemo para el transporte eficiente de oxígeno.</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-600 shrink-0" />
                  <span>Zinc y Fósforo para la contracción y recuperación.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <GiMuscleUp className="text-5xl text-red-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Efecto Anabólico</h3>
              <p className="text-gray-300 italic">
                "La combinación de estas proteínas con el entrenamiento de fuerza y un descanso adecuado de 7–8 horas maximiza la regeneración muscular y evita la fatiga crónica."
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-black text-gray-900 mt-12 mb-8">Cortes Magros Recomendados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#a90a0a] mb-2">Lomo Fino / Solomillo</h4>
              <p className="text-sm">El más tierno y bajo en grasa. Ideal para medallones gourmet.</p>
            </div>
            <div className="border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#a90a0a] mb-2">Cuadril de Cadera</h4>
              <p className="text-sm">Corte premium, tierno y bajo en grasa, perfecto para asar.</p>
            </div>
            <div className="border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#a90a0a] mb-2">Lomo de Cerdo</h4>
              <p className="text-sm">Chuleta de lomo muy baja en grasa (≈2.6g/100g) y alta en proteína.</p>
            </div>
            <div className="border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#a90a0a] mb-2">Redondo / Bola de Lomo</h4>
              <p className="text-sm">Magros y ricos en proteína (~26g/100g).</p>
            </div>
            <div className="border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#a90a0a] mb-2">Tapa de Lomo</h4>
              <p className="text-sm">Corte suave y jugoso, ideal para la plancha o sartén.</p>
            </div>
            <div className="border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#a90a0a] mb-2">Pierna de Cerdo</h4>
              <p className="text-sm">Muy versátil y magra, perfecta para asados o estofados.</p>
            </div>
          </div>

          <h2 className="text-3xl font-black text-gray-900 mt-12 mb-8">Consumo Consciente</h2>
          <div className="bg-red-50 p-8 rounded-3xl border border-red-100 space-y-4">
            <p>
              Para maximizar resultados y mantener la salud, recomendamos:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-xl flex items-start gap-4 shadow-sm">
                <GiCookingPot className="text-2xl text-red-600 shrink-0" />
                <div>
                  <h5 className="font-bold">Métodos Saludables</h5>
                  <p className="text-sm">Asados, parrilla o plancha en lugar de fritos. Evita carbonizar la carne.</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl flex items-start gap-4 shadow-sm">
                <FaAppleAlt className="text-2xl text-red-600 shrink-0" />
                <div>
                  <h5 className="font-bold">Acompañamientos</h5>
                  <p className="text-sm">Combina con vegetales y ensaladas para un perfil nutricional completo.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-12 text-center text-xl font-medium text-gray-600">
            En resumen, la carne magra favorece el mantenimiento muscular cuando se complementa con entrenamiento y descanso adecuado.
          </p>
        </section>

        {/* Dynamic CTA */}
        <div className="mt-24 bg-gradient-to-r from-[#a90a0a] to-red-800 rounded-[40px] p-12 text-white shadow-2xl relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <h3 className="text-3xl md:text-4xl font-black mb-6">¿Listo para potenciar tus entrenamientos?</h3>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Visita nuestra tienda online y descubre más cortes magros seleccionados para tu dieta deportiva. ¡Calidad garantizada para tu progreso!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/carneres" className="bg-white text-[#a90a0a] px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">Ver Cortes de Res</a>
            <a href="/carnecerdo" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-[#a90a0a] transition-all">Ver Cortes de Cerdo</a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BeneficiosGym;
