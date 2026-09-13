import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

/** Componente de servidor: sin framer-motion no necesita JavaScript en cliente. */

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

const TestimonioCard: React.FC<{ testimonio: Testimonio }> = ({ testimonio }) => {
  return (
    <div
      data-reveal="scale"
      className="group relative rounded-3xl border border-cream/30 bg-surface p-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
    >
      <div className="absolute right-10 top-0 flex h-16 w-16 -translate-y-1/2 transform items-center justify-center rounded-2xl bg-brand shadow-lg transition-transform group-hover:-rotate-6">
        <FaQuoteLeft className="text-2xl text-white" />
      </div>
      <div className="mb-4 flex gap-1" aria-label={`${testimonio.estrellas} de 5 estrellas`}>
        {Array.from({ length: testimonio.estrellas }, (_, i) => (
          <FaStar key={i} className="text-[#FFD700]" aria-hidden="true" />
        ))}
      </div>
      <p className="mb-6 text-lg italic leading-relaxed text-ink-muted">
        &ldquo;{testimonio.comentario}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-warm font-bold text-brand-ink">
          {testimonio.nombre.charAt(0)}
        </div>
        <h4 className="text-lg font-bold text-ink">{testimonio.nombre}</h4>
      </div>
    </div>
  );
};

const Testimonios: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-brand py-24">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-10">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-surface blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-surface-warm blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div data-reveal="up" className="mb-16 text-center">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-cream">
            Opiniones de Nuestros Clientes
          </h2>
          <h3 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Confianza que se <span className="text-cream">Saborea</span>
          </h3>
        </div>

        <div data-reveal-group="" className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonios.map((t) => (
            <TestimonioCard key={t.nombre} testimonio={t} />
          ))}
        </div>

        <div data-reveal="fade" className="mt-20 text-center">
          <div className="inline-block rounded-full border border-white/20 bg-surface/10 px-6 py-3 backdrop-blur-sm">
            <p className="text-lg font-medium text-white">
              Más de <span className="font-bold text-cream">500+ clientes</span> satisfechos cada
              mes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
