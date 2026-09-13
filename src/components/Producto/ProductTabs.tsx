import type { Corte } from "@/content/catalogo";

/**
 * Pestañas de la ficha, sin JavaScript.
 *
 * Hechas con `input[type=radio]` ocultos y selectores de hermano en CSS (ver
 * `.tabs-producto` en `globals.css`). Eso tiene una consecuencia que aquí pesa
 * más que la elegancia: **todo el contenido de todas las pestañas queda escrito
 * en el HTML**, aunque solo una esté visible. Unas pestañas con estado de React
 * solo renderizarían el panel activo, y el resto del texto —que es justo el
 * contenido largo que da posicionamiento— no existiría para Google.
 *
 * Las reglas van en CSS y no en clases de Tailwind porque el número de
 * pestañas es variable: Tailwind genera sus clases leyendo el código fuente y
 * no puede resolver un nombre construido en tiempo de ejecución.
 */

type Panel = { id: string; etiqueta: string; contenido: React.ReactNode };

export function ProductTabs({ corte }: { corte: Corte }) {
  const paneles: Panel[] = [
    {
      id: "cocinar",
      etiqueta: "Cómo cocinarlo",
      contenido: (
        <div className="flex flex-col gap-5">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {corte.coccion && <Dato termino="Método" valor={corte.coccion} />}
            {corte.tiempo && <Dato termino="Tiempo aproximado" valor={corte.tiempo} />}
            {corte.grasa && <Dato termino="Nivel de grasa" valor={corte.grasa} />}
            {corte.platos && <Dato termino="Platos recomendados" valor={corte.platos.join(" · ")} />}
          </dl>

          {corte.consejo && (
            <p className="border-l-2 border-brand bg-surface-warm/50 px-4 py-3 text-[15px] leading-relaxed text-ink-muted">
              <b className="text-ink">Del carnicero: </b>
              {corte.consejo}
            </p>
          )}

          <p className="text-[15px] leading-relaxed text-ink-muted">
            Si no estás seguro del punto o del grosor, dinos qué plato vas a preparar al hacer el
            pedido y lo cortamos como corresponde. No cuesta nada y cambia el resultado.
          </p>
        </div>
      ),
    },
    {
      id: "cantidad",
      etiqueta: "Cuánto pedir",
      contenido: (
        <div className="flex flex-col gap-4">
          {corte.porPersona && (
            <p className="text-[15px] leading-relaxed text-ink-muted">
              Para este corte calculamos <b className="text-ink">{corte.porPersona} por persona</b>{" "}
              de carne cruda, suponiendo que hay guarnición. Si la comida es principalmente carne,
              suma un 30 %.
            </p>
          )}

          <div className="overflow-x-auto rounded-xl border border-line">
            <table className="w-full min-w-[380px] border-collapse text-left">
              <thead>
                <tr className="bg-surface-2 text-xs uppercase tracking-widest text-ink-subtle">
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Comensales
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Cantidad
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">
                    Aproximado
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {[2, 4, 6, 10].map((personas) => {
                  const gramos = parseInt(corte.porPersona ?? "200", 10) || 200;
                  const kilos = Math.round(((gramos * personas) / 1000) * 2) / 2;
                  return (
                    <tr key={personas}>
                      <th scope="row" className="px-4 py-3 font-medium text-ink">
                        {personas} personas
                      </th>
                      <td className="px-4 py-3 tabular-nums text-ink-muted">{kilos} kg</td>
                      <td className="px-4 py-3 text-right font-semibold tabular-nums text-brand-ink">
                        S/ {(kilos * corte.precio).toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-ink-subtle">
            Las cantidades son orientativas. Confirmamos el peso exacto y el total antes de preparar
            el pedido.
          </p>
        </div>
      ),
    },
    {
      id: "conservacion",
      etiqueta: "Conservación",
      contenido: (
        <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-ink-muted">
          <p>
            La carne sale fresca, cortada el mismo día. Si la vas a consumir en las próximas 48
            horas, basta con la parte más fría de la refrigeradora, entre 0 °C y 4 °C.
          </p>
          <p>
            Para guardarla más tiempo, <b className="text-ink">porciona antes de congelar</b>, no
            después. Congelar la pieza entera obliga a descongelarla toda cada vez, y cada ciclo de
            congelado y descongelado le cuesta jugosidad.
          </p>
          <p>
            Descongela en la refrigeradora, nunca en el microondas ni bajo el chorro: el cambio
            brusco de temperatura rompe las fibras y la carne suelta todo su jugo en la sartén.
          </p>
          <p>
            Sácala del frío entre 20 y 30 minutos antes de cocinarla. Una pieza fría por dentro se
            dora por fuera antes de calentarse por dentro.
          </p>
        </div>
      ),
    },
  ];

  if (corte.equivalencias) {
    paneles.push({
      id: "nombres",
      etiqueta: "Otros nombres",
      contenido: (
        <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-ink-muted">
          <p>
            El mismo músculo cambia de nombre según el país, y es la causa número uno de confusión
            al seguir una receta extranjera. Este corte se conoce como:
          </p>
          <p className="rounded-xl border border-line bg-surface-2 px-4 py-3 font-medium text-ink">
            {corte.equivalencias}
          </p>
          <p>
            La equivalencia sirve para orientarse, pero no es exacta: cada tradición despieza la res
            de forma distinta, así que el corte «equivalente» puede incluir algo más o algo menos de
            músculo.
          </p>
        </div>
      ),
    });
  }

  return (
    <section className="mt-12" aria-label={`Información sobre ${corte.nombre}`}>
      <div className="tabs-producto">
        {/* Los radios van antes que todo: los selectores de hermano en CSS solo
            alcanzan hacia adelante. */}
        {paneles.map((p, i) => (
          <input
            key={`radio-${p.id}`}
            type="radio"
            name={`pestanas-${corte.slug}`}
            id={`tab-${corte.slug}-${p.id}`}
            defaultChecked={i === 0}
          />
        ))}

        <div className="tabs-etiquetas">
          {paneles.map((p) => (
            <label key={`label-${p.id}`} htmlFor={`tab-${corte.slug}-${p.id}`}>
              {p.etiqueta}
            </label>
          ))}
        </div>

        <div className="tabs-paneles">
          {paneles.map((p) => (
            <div key={`panel-${p.id}`} className="tabs-panel">
              <h2 className="sr-only">
                {p.etiqueta} — {corte.nombre}
              </h2>
              {p.contenido}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dato({ termino, valor }: { termino: string; valor: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="text-xs font-semibold uppercase tracking-wide text-ink-subtle">{termino}</dt>
      <dd className="text-[15px] font-medium text-ink">{valor}</dd>
    </div>
  );
}
