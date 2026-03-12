import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

interface FAQItem {
  pregunta: string;
  respuesta: string;
}

const faqs: FAQItem[] = [
  {
    pregunta: "¿Qué garantiza la calidad de sus carnes de res?",
    respuesta: "Nuestra carne de res proviene de ganado seleccionado cuidadosamente en las mejores zonas de pastura. Garantizamos frescura diaria, cortes precisos realizados por maestros carniceros y un cumplimiento estricto de las normas sanitarias."
  },
  {
    pregunta: "¿Ofrecen cortes especiales para parrilla?",
    respuesta: "Sí, somos especialistas en cortes para parrilla. Contamos con lomo fino, bife ancho, cuadril de cadera y panceta de cerdo preparada especialmente para lograr la mejor crocancia y sabor en sus reuniones."
  },
  {
    pregunta: "¿Cómo aseguran la frescura en la carne de chancho?",
    respuesta: "La carne de chancho (cerdo) en Carnicentro Marcelo se procesa diariamente. Trabajamos con granjas tecnificadas que aseguran una carne tierna, magra y con el balance justo de grasa para un sabor superior."
  },
  {
    pregunta: "¿Realizan pedidos personalizados o al por mayor?",
    respuesta: "Atendemos tanto pedidos para el hogar como para negocios y eventos. Puede solicitarnos cortes específicos con el peso y grosor que prefiera. Contáctenos directamente para cotizaciones de carnicería al por mayor."
  },
  {
    pregunta: "¿Cuál es la mejor forma de conservar la carne?",
    respuesta: "Recomendamos mantener la carne refrigerada entre 0°C y 4°C si se va a consumir pronto. Para periodos largos, la congelación es ideal. Siempre sugerimos sacar la carne del frío unos minutos antes de cocinarla para que recupere su temperatura ambiente."
  }
];

const FAQAccordion: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-[#a90a0a]' : 'text-gray-800'} group-hover:text-[#a90a0a]`}>
          {item.pregunta}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`${isOpen ? 'text-[#a90a0a]' : 'text-gray-400'}`}
        >
          <FaChevronDown />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed text-lg">
              {item.respuesta}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  // Generar JSON-LD para SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.pregunta,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.respuesta
      }
    }))
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#a90a0a] uppercase mb-2">Ayuda y Soporte</h2>
          <h3 className="text-4xl font-extrabold text-gray-900">Preguntas Frecuentes</h3>
          <div className="w-20 h-1 bg-[#a90a0a] mx-auto mt-6"></div>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {faqs.map((faq, index) => (
            <FAQAccordion key={index} item={faq} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4 font-medium">¿Aún tienes dudas?</p>
          <a
            href="https://wa.me/519XXXXXXXX" // Reemplazar con número real si se conoce o dejar placeholder
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full font-bold hover:bg-[#128C7E] transition-all transform hover:scale-105 shadow-lg"
          >
            Pregúntanos por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
