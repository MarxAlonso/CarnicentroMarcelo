import React from 'react';
import { FaGoogle, FaQuoteLeft } from 'react-icons/fa';
import { RESENAS_GOOGLE, type ResenaGoogle } from '@/content/resenas';

/** Componente de servidor: sin framer-motion no necesita JavaScript en cliente. */

const TestimonioCard: React.FC<{ testimonio: ResenaGoogle }> = ({ testimonio }) => {
  return (
    <div
      data-reveal="scale"
      className="group relative rounded-3xl border border-cream/30 bg-surface p-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
    >
      <div className="absolute right-10 top-0 flex h-16 w-16 -translate-y-1/2 transform items-center justify-center rounded-2xl bg-brand shadow-lg transition-transform group-hover:-rotate-6">
        <FaQuoteLeft className="text-2xl text-white" />
      </div>
      <p className="mb-6 text-lg italic leading-relaxed text-ink-muted">
        &ldquo;{testimonio.texto}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-warm font-bold text-brand-ink">
          {testimonio.autor.charAt(0)}
        </div>
        <div>
          <p className="text-lg font-bold text-ink">{testimonio.autor}</p>
          <p className="flex items-center gap-1.5 text-sm text-ink-subtle">
            <FaGoogle aria-hidden="true" /> Reseña en Google · {testimonio.antiguedad}
          </p>
        </div>
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
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-cream">
            Opiniones de Nuestros Clientes
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-tight text-white md:text-5xl">
            Confianza que se <span className="text-cream">saborea</span>
          </h2>
        </div>

        <div data-reveal-group="" className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {RESENAS_GOOGLE.map((t) => (
            <TestimonioCard key={t.autor} testimonio={t} />
          ))}
        </div>

        <div data-reveal="fade" className="mt-20 text-center">
          <div className="inline-block rounded-full border border-white/20 bg-surface/10 px-6 py-3 backdrop-blur-sm">
            <p className="text-lg font-medium text-white">
              Opiniones publicadas por nuestros clientes en{" "}
              <span className="font-bold text-cream">Google</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
