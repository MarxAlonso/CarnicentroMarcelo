import { FaWhatsapp } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { SITE, whatsappUrl } from "@/lib/site";

/**
 * Los dos botones de contacto de la web, en un solo sitio.
 *
 * Antes cada sección escribía su propio enlace a `wa.me`, con el número a mano
 * y un verde distinto en cada una. Ahora el número sale de `SITE` y el estilo
 * es el mismo en todas partes: quien ve el botón en la portada lo reconoce en
 * la ficha de un corte.
 *
 * Son componentes de servidor: un `<a>` no necesita JavaScript.
 */

type Tamano = "md" | "lg";

const TAMANOS: Record<Tamano, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base md:text-lg",
};

type BotonWhatsAppProps = {
  /** Texto con el que se abre el chat. Que diga de qué sección viene el pedido. */
  mensaje?: string;
  children?: React.ReactNode;
  tamano?: Tamano;
  className?: string;
  style?: React.CSSProperties;
};

export function BotonWhatsApp({
  mensaje = "Hola, quiero hacer un pedido.",
  children = "Pedir por WhatsApp",
  tamano = "lg",
  className = "",
  style,
}: BotonWhatsAppProps) {
  return (
    <a
      href={whatsappUrl(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      // Texto oscuro sobre el verde de WhatsApp: el blanco de siempre no llega
      // al contraste mínimo para leerse.
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] font-bold text-[#06280f] shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#3be37a] active:scale-[0.97] ${TAMANOS[tamano]} ${className}`}
    >
      <FaWhatsapp className="shrink-0 text-[1.35em]" aria-hidden="true" />
      {children}
    </a>
  );
}

type BotonLlamarProps = {
  tamano?: Tamano;
  /** `claro` va sobre fotos y fondos oscuros; `marca`, sobre fondos claros. */
  tono?: "claro" | "marca";
  className?: string;
  style?: React.CSSProperties;
};

export function BotonLlamar({ tamano = "lg", tono = "claro", className = "", style }: BotonLlamarProps) {
  const color =
    tono === "claro"
      ? "border-white/70 text-white hover:bg-white hover:text-brand-deep"
      : "border-brand text-brand-ink hover:bg-brand hover:text-white";

  return (
    <a
      href={`tel:${SITE.phone}`}
      style={style}
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 font-bold transition-all duration-200 active:scale-[0.97] ${color} ${TAMANOS[tamano]} ${className}`}
    >
      <MdPhone className="shrink-0 text-[1.25em]" aria-hidden="true" />
      <span>
        Llamar al <span className="tabular-nums">{SITE.phoneLocal}</span>
      </span>
    </a>
  );
}
