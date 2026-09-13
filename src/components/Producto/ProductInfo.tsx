"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdVerified, MdAcUnit, MdLocalShipping, MdContentCut } from "react-icons/md";
import { GiCow, GiPig } from "react-icons/gi";
import type { Corte } from "@/content/catalogo";
import { SITE, whatsappUrl, HOURS_DISPLAY, PRECIOS_ACTUALIZADOS } from "@/lib/site";

/**
 * Ficha de compra.
 *
 * La adaptación grande respecto al proyecto de origen: aquí no hay carrito ni
 * pasarela. Carnicentro vende por kilo y cierra por WhatsApp, así que el
 * selector va en kilos —con pasos de medio— y calcula el total en vivo. Esa
 * cifra es lo que la gente quiere saber antes de escribir, y es justo lo que
 * ningún competidor de Lima muestra.
 *
 * El mensaje de WhatsApp sale prellenado con el corte y los kilos: quien pulsa
 * no tiene que explicar nada, solo enviar.
 */

const PASO_KG = 0.5;
const MIN_KG = 0.5;

const GARANTIAS = [
  { Icon: MdVerified, titulo: "Corte del día", texto: "Se prepara el mismo día de la entrega" },
  { Icon: MdContentCut, titulo: "Cortado a tu medida", texto: "Dinos el grosor o el gramaje por porción" },
  { Icon: MdAcUnit, titulo: "Cadena de frío", texto: "Empaque sellado y contenedor térmico" },
  { Icon: MdLocalShipping, titulo: "Delivery en Lima", texto: "Coordinado con un día de anticipación" },
];

export function ProductInfo({ corte }: { corte: Corte }) {
  const [kg, setKg] = useState(1);

  const total = kg * corte.precio;
  const Icono = corte.tipo === "res" ? GiCow : GiPig;
  const fechaPrecio = new Date(`${PRECIOS_ACTUALIZADOS}T12:00:00`).toLocaleDateString("es-PE", {
    day: "numeric",
    month: "long",
  });

  const mensaje = `Hola, quiero pedir ${kg} kg de ${corte.nombre} (S/ ${total.toFixed(
    2
  )}). ¿Está disponible?`;

  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-2">
          <Icono className="shrink-0 text-xl text-brand-ink" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[1.2px] text-brand-ink">
            {corte.tipo === "res" ? "Carne de res" : "Carne de cerdo"}
          </span>
        </span>
        <span className="text-xs font-semibold text-ink-subtle">{corte.categoria}</span>
      </div>

      <h1 className="mt-3 font-display text-4xl leading-tight text-ink">{corte.nombre}</h1>

      <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-3xl font-semibold tabular-nums text-ink">
          S/ {corte.precio.toFixed(2)}
        </span>
        <span className="text-base font-medium text-ink-subtle">por kilo</span>
        <span className="w-full text-xs text-ink-subtle">
          Precio actualizado el {fechaPrecio}
        </span>
      </div>

      <p className="mt-4 text-base font-medium leading-relaxed text-ink-muted">
        {corte.descripcion}
      </p>

      {corte.platos && corte.platos.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {corte.platos.map((plato) => (
            <span
              key={plato}
              className="rounded-full border border-line bg-surface-2 px-3.5 py-1.5 text-xs font-semibold text-ink-muted"
            >
              {plato}
            </span>
          ))}
        </div>
      )}

      {/* Selector en kilos + total en vivo. */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <div className="flex h-11 items-center overflow-hidden rounded-md border border-line">
          <button
            type="button"
            onClick={() => setKg((k) => Math.max(MIN_KG, +(k - PASO_KG).toFixed(1)))}
            aria-label="Quitar medio kilo"
            className="flex h-11 w-11 items-center justify-center text-lg text-ink transition hover:bg-surface-2"
          >
            −
          </button>
          <span
            aria-live="polite"
            className="flex h-11 min-w-[76px] items-center justify-center border-x border-line px-2 text-sm font-medium tabular-nums text-ink"
          >
            {kg} kg
          </span>
          <button
            type="button"
            onClick={() => setKg((k) => +(k + PASO_KG).toFixed(1))}
            aria-label="Añadir medio kilo"
            className="flex h-11 w-11 items-center justify-center text-lg text-ink transition hover:bg-surface-2"
          >
            +
          </button>
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-subtle">
            Total
          </span>
          <span className="text-xl font-bold tabular-nums text-brand-ink">
            S/ {total.toFixed(2)}
          </span>
        </div>
      </div>

      <a
        href={whatsappUrl(mensaje)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-brand text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:scale-[1.01] hover:bg-brand-deep active:scale-[0.99]"
      >
        <FaWhatsapp className="text-xl" aria-hidden="true" />
        PEDIR {kg} KG POR WHATSAPP
      </a>

      <a
        href={`tel:${SITE.phone}`}
        className="mt-3 flex h-12 w-full items-center justify-center rounded-md border border-ink text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-page"
      >
        Llamar al {SITE.phoneDisplay}
      </a>

      <p className="mt-3 text-xs text-ink-subtle">
        Los pedidos se coordinan con un día de anticipación. Confirmamos disponibilidad y total
        antes de preparar el corte.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-line pt-6 sm:grid-cols-2">
        {GARANTIAS.map(({ Icon, titulo, texto }) => (
          <div key={titulo} className="flex items-start gap-3">
            <Icon className="mt-0.5 shrink-0 text-xl text-ink-muted" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold leading-tight text-ink">{titulo}</span>
              <span className="text-sm font-medium text-ink-muted">{texto}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 border-l-2 border-brand bg-surface-warm/60 px-4 py-3">
        <p className="text-xs leading-relaxed text-ink-muted">
          <b className="text-ink">Horario de atención:</b>{" "}
          {HOURS_DISPLAY.map((h) => `${h.label}, ${h.value}`).join(" · ")}. Los mensajes de WhatsApp
          se reciben a cualquier hora y se confirman al abrir.
        </p>
      </div>
    </div>
  );
}
