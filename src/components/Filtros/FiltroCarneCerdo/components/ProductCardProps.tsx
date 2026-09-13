import Image from "next/image";
import Link from "next/link";
import { GiWeight } from "react-icons/gi";
import type { Corte } from "@/content/catalogo";

/**
 * Tarjeta de corte de cerdo.
 *
 * Ahora es un enlace a la ficha, no un disparador de modal: el modal mostraba
 * la misma información sin dirección propia, así que no se podía enlazar,
 * compartir ni indexar.
 *
 * Al no necesitar estado ni manejador, pasa a ser componente de servidor.
 */
export const ProductCard = ({ corte }: { corte: Corte }) => {
  return (
    <article className="card-in group relative overflow-hidden rounded-xl border border-line bg-surface shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-48 overflow-hidden bg-surface-2">
        <Image
          src={corte.imagen}
          alt={corte.nombre}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-brand-ink">
            <Link href={corte.ruta}>
              {/* El enlace cubre la tarjeta entera. */}
              <span className="absolute inset-0" aria-hidden="true" />
              {corte.nombre}
            </Link>
          </h3>
          <span className="shrink-0 rounded-full bg-surface-warm px-3 py-1 text-sm font-semibold text-brand-ink">
            {corte.categoria}
          </span>
        </div>

        <p className="mb-4 text-ink-muted">{corte.descripcion}</p>

        <div className="flex items-center justify-between gap-3">
          <span className="flex items-center text-brand-ink-deep">
            <GiWeight className="mr-2 text-xl" aria-hidden="true" />
            <span className="text-lg font-bold tabular-nums">
              S/ {corte.precio.toFixed(2)} / kg
            </span>
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-ink transition-transform group-hover:translate-x-1">
            Ver corte →
          </span>
        </div>
      </div>
    </article>
  );
};
