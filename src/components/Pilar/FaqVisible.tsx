import type { Faq } from "@/lib/schema";

/**
 * Preguntas frecuentes visibles.
 *
 * Recibe exactamente el mismo arreglo que alimenta el `FAQPage` del JSON-LD:
 * así no hay forma de que el dato declarado y el dato visible se separen.
 * Usa `<details>` nativo, que es plegable sin JavaScript y queda en el HTML
 * para quien lo lea sin ejecutar scripts.
 */
export function FaqVisible({ faqs, titulo = "Preguntas frecuentes" }: { faqs: Faq[]; titulo?: string }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16" aria-labelledby="faq-titulo">
      <h2 id="faq-titulo" className="font-display text-3xl font-bold text-brand-ink-deep md:text-4xl">
        {titulo}
      </h2>

      <div className="mt-8 divide-y divide-line border-t border-line">
        {faqs.map((faq) => (
          <details key={faq.pregunta} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-semibold text-ink marker:hidden">
              <span>{faq.pregunta}</span>
              <span
                aria-hidden="true"
                className="mt-1 shrink-0 text-brand-ink transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-ink-muted">{faq.respuesta}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
