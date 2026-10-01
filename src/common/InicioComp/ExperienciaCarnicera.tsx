import React from 'react';
import { GiMeatCleaver, GiGrass, GiHeartBeats, GiTrophy } from 'react-icons/gi';
import { BotonWhatsApp, BotonLlamar } from '@/components/WhatsApp/BotonWhatsApp';

/**
 * Sin framer-motion, esta sección ya no necesita ser componente de cliente:
 * no manda ni un byte de JavaScript. Las entradas las resuelve el sistema de
 * `data-reveal` (ver `components/Reveal/Reveal.tsx`) y los estados de hover,
 * clases de Tailwind.
 */

const PILARES = [
  {
    icono: GiGrass,
    titulo: 'Origen Garantizado',
    texto: (
      <>
        Seleccionamos reses de las mejores pasturas. La <strong>carne de res</strong> que ofrecemos
        proviene de ganado criado con estándares óptimos, garantizando un marmoleo natural y sabor
        inigualable.
      </>
    ),
  },
  {
    icono: GiMeatCleaver,
    titulo: 'Corte de Maestro',
    texto: (
      <>
        Nuestros carniceros expertos dominan cada técnica. Desde el <strong>lomo fino</strong> hasta
        la <strong>panceta de cerdo</strong>, cada pieza es tratada con precisión para preservar su
        frescura y textura.
      </>
    ),
  },
  {
    icono: GiHeartBeats,
    titulo: 'Nutrición de Calidad',
    texto: (
      <>
        La carne es fuente esencial de hierro, zinc y vitaminas B12. Nuestras{' '}
        <strong>carnes de res y chancho</strong> aportan las proteínas necesarias para una dieta
        equilibrada y saludable.
      </>
    ),
  },
  {
    icono: GiTrophy,
    titulo: 'Excelencia Local',
    texto: (
      <>
        Somos referentes en la venta de carne de calidad. En Carnicentro Marcelo, el compromiso es la
        frescura diaria y la satisfacción total en cada pedido de nuestros clientes.
      </>
    ),
  },
];

const ExperienciaCarnicera: React.FC = () => {
  return (
    <section className="overflow-hidden bg-surface py-20">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div data-reveal="up" className="mb-16 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-ink">
            Pasión por la Tradición
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-tight text-ink md:text-5xl">
            El arte de la <span className="text-brand-ink">carnicería</span> de verdad
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl leading-relaxed text-ink-muted">
            En Carnicentro Marcelo, no solo vendemos carne; honramos el trabajo del ganadero y la
            maestría del carnicero para llevar lo mejor a su mesa.
          </p>
        </div>

        {/* El escalonado entre tarjetas lo calcula el CSS con nth-child. */}
        <div
          data-reveal-group=""
          className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {PILARES.map(({ icono: Icono, titulo, texto }) => (
            <div
              key={titulo}
              data-reveal="up"
              className="group flex flex-col items-center text-center"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-surface-warm transition-colors duration-300 group-hover:bg-brand">
                <Icono className="text-4xl text-brand-ink transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-ink">{titulo}</h3>
              <p className="leading-relaxed text-ink-muted">{texto}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div data-reveal="left" className="space-y-6">
            <h3 className="font-display text-3xl font-bold text-ink">
              ¿Por qué elegir nuestras carnes de res y cerdo?
            </h3>
            <p className="text-justify text-lg leading-relaxed text-ink-muted">
              Como conocedores del campo y la mesa, entendemos que la calidad de la carne comienza en
              la crianza. El ganado que seleccionamos para nuestra <strong>carnicería</strong>{' '}
              disfruta de una alimentación controlada y libre de estrés, lo que se traduce en una
              terneza superior de la carne.
            </p>
            <p className="text-justify text-lg leading-relaxed text-ink-muted">
              La <strong>carne de chancho</strong> (o cerdo) que procesamos destaca por su jugosidad.
              Cortes como la bondiola o la chuleta de lomo pasan por rigurosos controles sanitarios,
              asegurando que su aporte nutricional y sabor sean siempre de primer nivel.
            </p>
            <div className="border-l-4 border-brand pl-6 pt-4 italic text-ink-muted">
              &ldquo;El secreto de un buen asado no está solo en el fuego, sino en la mano que elige
              la pieza correcta.&rdquo; — Marcelo, Maestro Carnicero.
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <BotonWhatsApp mensaje="Hola, quiero que me recomienden un corte.">
                Consultar a un carnicero
              </BotonWhatsApp>
              <BotonLlamar tono="marca" />
            </div>
          </div>

          <div data-reveal="scale" className="relative">
            <div className="absolute -inset-4 -z-10 rounded-full bg-surface-warm/30 blur-3xl"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="transform rounded-2xl bg-brand p-8 shadow-xl transition-transform hover:-rotate-2">
                  <span className="text-5xl font-black text-white">100%</span>
                  <p className="mt-2 font-medium uppercase tracking-wide text-white">
                    Calidad Selecta
                  </p>
                </div>
                <div className="transform rounded-2xl border border-line bg-surface p-8 shadow-xl transition-transform hover:rotate-2">
                  <span className="text-5xl font-black text-brand-ink">Fresco</span>
                  <p className="mt-2 font-medium uppercase tracking-wide text-ink-muted">
                    Corte del Día
                  </p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="transform rounded-2xl border border-line bg-surface p-8 shadow-xl transition-transform hover:rotate-2">
                  <span className="text-4xl font-black text-ink">Nutritivo</span>
                  <p className="mt-2 font-medium uppercase tracking-wide text-ink-muted">
                    Alto en Proteínas
                  </p>
                </div>
                <div className="transform rounded-2xl bg-surface-warm p-8 shadow-xl transition-transform hover:-rotate-2">
                  <span className="text-4xl font-black text-brand-ink">Tradición</span>
                  <p className="mt-2 font-medium uppercase tracking-wide text-brand-ink">
                    Pura Maestría
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienciaCarnicera;
