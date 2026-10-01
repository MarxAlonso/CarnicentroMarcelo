import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { buildFaqSchema, jsonLd, type Faq } from '@/lib/schema';
import { DELIVERY, FORMAS_DE_PAGO, HOURS_DISPLAY, SITE } from '@/lib/site';
import { BotonWhatsApp } from '@/components/WhatsApp/BotonWhatsApp';

/**
 * Componente de servidor.
 *
 * El acordeón era `useState` + `AnimatePresence`; ahora es `<details>` nativo,
 * que despliega sin JavaScript y deja las respuestas dentro del HTML. Eso
 * importa para SEO: las respuestas declaradas en el `FAQPage` tienen que estar
 * realmente en la página, y así lo están aunque el visitante no abra nada.
 *
 * Las cuatro primeras son las que alguien le pregunta a un asistente de IA
 * antes de comprar: cómo se pide, a qué hora, si hay reparto y cómo se paga.
 * Cada respuesta empieza por el dato y se entiende sola, sin el resto de la
 * página, porque así es como la van a citar. Los datos salen de `lib/site.ts`.
 */

const horarioTexto = HOURS_DISPLAY.map(
  (h) => `${h.label.toLowerCase()} de ${h.value.replace(' – ', ' a ')}`
).join('; ');

const faqs: Faq[] = [
  {
    pregunta: `¿Cómo hago un pedido en ${SITE.name}?`,
    respuesta: `Escríbenos por WhatsApp o llámanos al ${SITE.phoneDisplay} con los cortes y los kilos que necesitas. Te confirmamos la disponibilidad, el total y la hora de entrega. Los pedidos se coordinan con ${DELIVERY.anticipacionHoras} horas de anticipación.`
  },
  {
    pregunta: `¿Cuál es el horario de atención de ${SITE.name}?`,
    respuesta: `Atendemos ${horarioTexto}. Los mensajes de WhatsApp que llegan fuera de horario se responden al abrir.`
  },
  {
    pregunta: "¿Hacen delivery de carne en Lima?",
    respuesta: `Sí. Llevamos carne de res y cerdo fresca a domicilio en Lima. El pedido se arma por WhatsApp al ${SITE.phoneLocal}, se confirma con un día de anticipación y se entrega empacado y porcionado.`
  },
  {
    pregunta: "¿Qué formas de pago aceptan?",
    respuesta: `Aceptamos ${FORMAS_DE_PAGO.join(', ')}. El detalle se confirma al cerrar el pedido por WhatsApp.`
  },
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
    <section className="overflow-hidden bg-surface-2 py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(buildFaqSchema(faqs))} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div data-reveal="up" className="mb-16 text-center">
          {/* El antetítulo era el `h2` y el título, un `h3`: la jerarquía
              estaba al revés de como se lee. */}
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-ink">
            Antes de pedir
          </p>
          <h2 className="font-display text-4xl font-bold uppercase text-ink md:text-5xl">
            Preguntas frecuentes
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 bg-brand"></div>
        </div>

        <div data-reveal="up" className="rounded-3xl bg-surface p-8 shadow-xl md:p-12">
          {faqs.map((faq) => (
            <details key={faq.pregunta} className="group border-b border-line last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left marker:hidden">
                <span className="text-lg font-bold text-ink transition-colors duration-300 group-hover:text-brand-ink group-open:text-brand-ink">
                  {faq.pregunta}
                </span>
                <FaChevronDown
                  aria-hidden="true"
                  className="shrink-0 text-ink-subtle transition-transform duration-300 group-open:rotate-180 group-open:text-brand-ink"
                />
              </summary>
              <p className="pb-6 text-lg leading-relaxed text-ink-muted">{faq.respuesta}</p>
            </details>
          ))}
        </div>

        <div data-reveal="fade" className="mt-12 text-center">
          <p className="mb-4 font-medium text-ink-muted">¿Aún tienes dudas?</p>
          <BotonWhatsApp mensaje="Hola, tengo una consulta sobre sus cortes.">
            Pregúntanos por WhatsApp
          </BotonWhatsApp>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
