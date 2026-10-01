import { GiMeatCleaver, GiPriceTag, GiScooter } from 'react-icons/gi';
import { FaWhatsapp } from 'react-icons/fa';
import { DELIVERY, SITE } from '@/lib/site';

/**
 * Franja de pizarra bajo la portada, rematada con el mantel a cuadros.
 *
 * Son los cuatro datos que decide una compra en una carnicería, dichos como en
 * la pizarra del mostrador: cortos y con el número delante. Componente de
 * servidor, sin JavaScript.
 */

const DATOS = [
  {
    icono: GiMeatCleaver,
    titulo: 'Corte del día',
    texto: 'Se corta y porciona el mismo día de la entrega.',
  },
  {
    icono: GiPriceTag,
    titulo: 'Precio por kilo a la vista',
    texto: 'Cada corte de res y cerdo con su precio publicado.',
  },
  {
    icono: GiScooter,
    titulo: 'Delivery en Lima',
    texto: `Pedidos con ${DELIVERY.anticipacionHoras} horas de anticipación.`,
  },
  {
    icono: FaWhatsapp,
    titulo: `WhatsApp ${SITE.phoneLocal}`,
    texto: 'Atención directa, sin formularios ni esperas.',
  },
];

export function FranjaMostrador() {
  return (
    <section aria-label="Por qué comprar en Carnicentro Marcelo">
      <div className="pizarra">
        <ul
          data-reveal-group=""
          className="mx-auto grid max-w-site grid-cols-1 gap-x-8 gap-y-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {DATOS.map(({ icono: Icono, titulo, texto }) => (
            <li key={titulo} data-reveal="up" className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cream/40 text-2xl text-cream">
                <Icono aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold uppercase tracking-wide text-cream">
                  {titulo}
                </p>
                <p className="mt-0.5 text-sm text-white/75">{texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mantel" aria-hidden="true" />
    </section>
  );
}
