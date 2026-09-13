import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { buildFaqSchema, jsonLd, type Faq } from '@/lib/schema';
import { whatsappUrl } from '@/lib/site';

/**
 * Componente de servidor.
 *
 * El acordeón era `useState` + `AnimatePresence`; ahora es `<details>` nativo,
 * que despliega sin JavaScript y deja las respuestas dentro del HTML. Eso
 * importa para SEO: las respuestas declaradas en el `FAQPage` tienen que estar
 * realmente en la página, y así lo están aunque el visitante no abra nada.
 */

const faqs: Faq[] = [
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
    respuesta: "Recomendamos mantener la carne refrigerada entre 0 °C y 4 °C si se va a consumir pronto. Para periodos largos, la congelación es ideal. Siempre sugerimos sacar la carne del frío unos minutos antes de cocinarla para que recupere su temperatura ambiente."
  }
];

const FAQSection: React.FC = () => {
  return (
    <section className="overflow-hidden bg-gray-50 py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(buildFaqSchema(faqs))} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div data-reveal="up" className="mb-16 text-center">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-[#a90a0a]">
            Ayuda y Soporte
          </h2>
          <h3 className="text-4xl font-extrabold text-gray-900">Preguntas Frecuentes</h3>
          <div className="mx-auto mt-6 h-1 w-20 bg-[#a90a0a]"></div>
        </div>

        <div data-reveal="up" className="rounded-3xl bg-white p-8 shadow-xl md:p-12">
          {faqs.map((faq) => (
            <details key={faq.pregunta} className="group border-b border-gray-200 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left marker:hidden">
                <span className="text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-[#a90a0a] group-open:text-[#a90a0a]">
                  {faq.pregunta}
                </span>
                <FaChevronDown
                  aria-hidden="true"
                  className="shrink-0 text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-[#a90a0a]"
                />
              </summary>
              <p className="pb-6 text-lg leading-relaxed text-gray-600">{faq.respuesta}</p>
            </details>
          ))}
        </div>

        <div data-reveal="fade" className="mt-12 text-center">
          <p className="mb-4 font-medium text-gray-600">¿Aún tienes dudas?</p>
          <a
            href={whatsappUrl('Hola, tengo una consulta sobre sus cortes.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transform items-center gap-2 rounded-full bg-[#25D366] px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#128C7E]"
          >
            Pregúntanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
