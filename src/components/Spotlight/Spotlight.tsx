"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

/**
 * Sección con una luz que sigue al mouse.
 *
 * Solo escribe dos variables CSS (`--mx`, `--my`) en la sección y en cada
 * tarjeta marcada con `data-glow`; el degradado lo pinta el CSS (`.spotlight`
 * y `.glow-card` en `globals.css`). Las escrituras se agrupan en un
 * `requestAnimationFrame`, así que como mucho hay una por fotograma.
 *
 * En pantallas táctiles no hace nada: no hay puntero que seguir.
 */
export function Spotlight({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const frame = useRef(0);

  const mover = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const { clientX: x, clientY: y } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${x - r.left}px`);
      el.style.setProperty("--my", `${y - r.top}px`);
      el.querySelectorAll<HTMLElement>("[data-glow]").forEach((card) => {
        const c = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${x - c.left}px`);
        card.style.setProperty("--my", `${y - c.top}px`);
      });
    });
  };

  return (
    <section
      ref={ref}
      id={id}
      onPointerMove={mover}
      onPointerEnter={(e) => e.pointerType === "mouse" && ref.current?.setAttribute("data-lit", "")}
      onPointerLeave={() => ref.current?.removeAttribute("data-lit")}
      className={`spotlight ${className}`}
    >
      {children}
    </section>
  );
}
