import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl, DELIVERY } from "@/lib/site";

/**
 * Franja de confianza al pie de la ficha.
 *
 * Cierra la página con lo que decide la compra en una carnicería —frescura,
 * corte a medida, entrega— y con una salida hacia el pilar de delivery, que es
 * lo que mantiene la fuerza circulando entre las 31 fichas y las 3 páginas que
 * de verdad convierten.
 */
export function TrustBanner({ nombre }: { nombre: string }) {
  return (
    <section className="mt-14 overflow-hidden rounded-2xl bg-brand">
      <div className="flex flex-col gap-8 px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[2px] text-cream/80">
            Carnicería con reparto en Lima
          </p>
          <h2 className="mt-2 font-display text-2xl leading-tight text-cream md:text-3xl">
            Cortamos el {nombre.toLowerCase()} el mismo día que te llega
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-cream/90">
            Nada sale del mostrador congelado para venderse como fresco. Coordinas por WhatsApp con
            un día de anticipación
            {DELIVERY.minimoSoles !== null ? `, desde S/ ${DELIVERY.minimoSoles} de pedido` : ""} y
            llega empacado y porcionado como lo pediste.
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
          <a
            href={whatsappUrl(`Hola, quiero consultar por el ${nombre}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-cream px-6 py-3 text-sm font-bold text-brand-ink-deep transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <FaWhatsapp className="text-lg" aria-hidden="true" />
            Escríbenos
          </a>
          <Link
            href="/delivery-de-carne-en-lima"
            className="inline-flex items-center justify-center rounded-lg border border-cream/50 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
          >
            Ver cobertura y horarios
          </Link>
        </div>
      </div>
    </section>
  );
}
