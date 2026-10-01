import { MdAccessTime, MdPayments, MdPhone } from 'react-icons/md';
import { BotonWhatsApp, BotonLlamar } from '@/components/WhatsApp/BotonWhatsApp';
import { DELIVERY, FORMAS_DE_PAGO, HOURS_DISPLAY, SITE } from '@/lib/site';

/**
 * Cierre de todas las páginas, justo antes del pie (va en `app/layout.tsx`):
 * cómo se pide, y los botones para hacerlo.
 *
 * Está escrita como respuesta, no como eslogan. «¿Cómo pido carne a
 * Carnicentro Marcelo?» es la pregunta que alguien le hace a un buscador o a
 * un asistente de IA, y lo que estos citan es un bloque que la conteste entero:
 * los pasos, el número, el horario y las formas de pago, todo en texto y en el
 * mismo sitio. Los datos salen de `lib/site.ts`, así que no pueden quedar
 * distintos de los del pie de página o del schema.
 */

const PASOS = [
  {
    titulo: 'Escríbenos por WhatsApp',
    texto: `Al ${SITE.phoneLocal}, con los cortes y los kilos que necesitas. Si no sabes qué corte pedir, dinos qué plato vas a preparar.`,
  },
  {
    titulo: 'Te confirmamos precio y entrega',
    texto: `Respondemos con la disponibilidad, el total y la hora aproximada. El pedido se cierra con ${DELIVERY.anticipacionHoras} horas de anticipación.`,
  },
  {
    titulo: 'Recibe tu carne fresca',
    texto: 'Cortada y porcionada el mismo día, empacada y entregada a domicilio en Lima.',
  },
];

export function PedidoWhatsApp() {
  return (
    <section aria-labelledby="pedido-titulo">
      <div className="mantel" aria-hidden="true" />
      <div className="pizarra">
        <div className="mx-auto grid max-w-site gap-12 px-6 py-20 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:px-8">
          <div data-reveal="left">
            <p className="text-sm font-bold uppercase tracking-widest text-cream">Haz tu pedido</p>
            <h2
              id="pedido-titulo"
              className="mt-2 font-display text-4xl font-bold uppercase leading-tight text-white md:text-5xl"
            >
              ¿Cómo pedir carne <span className="text-cream">por WhatsApp?</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              En {SITE.name} los pedidos de carne de res y cerdo se hacen por WhatsApp o por
              teléfono al <strong className="text-white">{SITE.phoneLocal}</strong>, en tres pasos:
            </p>

            <ol className="mt-8 space-y-6">
              {PASOS.map((paso, i) => (
                <li key={paso.titulo} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand font-display text-xl font-bold text-cream ring-2 ring-cream/40"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{paso.titulo}</h3>
                    <p className="mt-1 text-white/75">{paso.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Tarjeta tipo pizarra de precios: borde de tiza y datos duros. */}
          <div
            data-reveal="scale"
            className="rounded-2xl border-2 border-dashed border-cream/50 bg-black/30 p-8"
          >
            <p className="font-display text-2xl font-bold uppercase text-cream">
              Datos para tu pedido
            </p>

            <dl className="mt-6 space-y-5 text-white/85">
              <div className="flex gap-3">
                <MdPhone className="mt-1 shrink-0 text-xl text-cream" aria-hidden="true" />
                <div>
                  <dt className="font-bold text-white">WhatsApp y teléfono</dt>
                  <dd>
                    <a href={`tel:${SITE.phone}`} className="tabular-nums hover:text-cream">
                      {SITE.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <MdAccessTime className="mt-1 shrink-0 text-xl text-cream" aria-hidden="true" />
                <div>
                  <dt className="font-bold text-white">Horario de atención</dt>
                  {HOURS_DISPLAY.map((h) => (
                    <dd key={h.label}>
                      {h.label}: {h.value}
                    </dd>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <MdPayments className="mt-1 shrink-0 text-xl text-cream" aria-hidden="true" />
                <div>
                  <dt className="font-bold text-white">Formas de pago</dt>
                  <dd>{FORMAS_DE_PAGO.join(', ')}</dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3">
              <BotonWhatsApp
                mensaje="Hola, quiero hacer un pedido. Necesito:"
                className="w-full"
              >
                Hacer mi pedido por WhatsApp
              </BotonWhatsApp>
              <BotonLlamar className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
