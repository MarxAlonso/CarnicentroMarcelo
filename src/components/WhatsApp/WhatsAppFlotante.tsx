import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "@/lib/site";

/**
 * Botón flotante de WhatsApp, presente en todas las páginas.
 *
 * Va apilado justo encima del botón del asistente, en la misma esquina y con
 * el mismo diámetro. Su `z-index` queda por debajo del asistente a propósito:
 * cuando se abre la ventana del chat, lo tapa en vez de quedar flotando encima
 * de los mensajes.
 */
export function WhatsAppFlotante() {
  return (
    <a
      href={whatsappUrl("Hola, quiero hacer un pedido de carne.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hacer un pedido por WhatsApp"
      className="wa-onda group fixed bottom-[5.25rem] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95"
    >
      <FaWhatsapp className="text-3xl" aria-hidden="true" />
      {/* Etiqueta solo en escritorio: en móvil taparía el contenido. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-char px-4 py-2 text-sm font-semibold text-cream opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:block"
      >
        Pide por WhatsApp
      </span>
    </a>
  );
}
