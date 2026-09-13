"use client";

import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

/**
 * Modal compartido, sin framer-motion.
 *
 * Los tres modales del sitio (portada, filtro de res, filtro de cerdo) eran
 * tres implementaciones distintas con `AnimatePresence`. Ahora comparten este,
 * la animación la hacen dos clases de CSS, y de paso se arreglan tres cosas que
 * faltaban en todos: cerrar con Escape, bloquear el scroll del fondo y devolver
 * el foco al elemento que abrió el modal.
 */
export function Modal({
  abierto,
  onClose,
  children,
  etiqueta,
}: {
  abierto: boolean;
  onClose: () => void;
  children: React.ReactNode;
  /** Nombre accesible del diálogo, para lectores de pantalla. */
  etiqueta: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const origenRef = useRef<Element | null>(null);

  useEffect(() => {
    if (!abierto) return;

    origenRef.current = document.activeElement;
    panelRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    // Evita que el fondo siga desplazándose bajo el modal.
    const overflowPrevio = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflowPrevio;
      // Devuelve el foco a donde estaba: si no, quien navega con teclado
      // aparece de vuelta al principio de la página.
      (origenRef.current as HTMLElement | null)?.focus?.();
    };
  }, [abierto, onClose]);

  if (!abierto) return null;

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={etiqueta}
        tabIndex={-1}
        className="modal-panel relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-10 text-gray-500 transition-colors hover:text-gray-700"
        >
          <FaTimes className="text-2xl" aria-hidden="true" />
        </button>
        {children}
      </div>
    </div>
  );
}
