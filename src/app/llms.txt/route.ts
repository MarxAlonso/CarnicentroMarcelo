import { CATALOGO, cortesPorTipo, type Corte } from "@/content/catalogo";
import { postsPublicados } from "@/content/posts";
import { PILARES_LISTA } from "@/lib/pilares";
import {
  DELIVERY,
  FORMAS_DE_PAGO,
  HOURS_DISPLAY,
  PRECIOS_ACTUALIZADOS,
  SITE,
  absoluteUrl,
  whatsappUrl,
} from "@/lib/site";

/**
 * /llms.txt — la web resumida para un asistente de IA.
 *
 * Es el equivalente del sitemap para ChatGPT, Claude, Perplexity y compañía:
 * un Markdown corto con quién es el negocio, cómo se le contacta y qué vende,
 * sin menús ni JavaScript de por medio. Cuando alguien pregunta «¿dónde compro
 * panceta en Lima?», esto es lo más fácil de leer y de citar que tiene la web.
 *
 * Se genera en el build a partir de los mismos registros que pintan las
 * páginas, así que un precio nuevo en el catálogo sale aquí sin tocar nada.
 */
export const dynamic = "force-static";

const linea = (c: Corte) =>
  `- [${c.nombre}](${absoluteUrl(c.ruta)}): S/ ${c.precio.toFixed(2)} por kilo. ${c.descripcion}`;

export function GET() {
  const res = cortesPorTipo("res");
  const cerdo = cortesPorTipo("cerdo");

  const texto = `# ${SITE.name}

> ${SITE.name} es una carnicería de Lima, Perú, que vende ${CATALOGO.length} cortes frescos de carne de res y de cerdo (chancho) con el precio por kilo publicado. Los pedidos se hacen por WhatsApp o por teléfono al ${SITE.phoneDisplay} y se entregan a domicilio en Lima.

## Datos del negocio

- Nombre: ${SITE.name}
- Rubro: carnicería (venta de carne de res y de cerdo al por menor y al por mayor)
- Ciudad: Lima, Perú
- WhatsApp y teléfono: ${SITE.phoneDisplay}
- Enlace directo para pedir por WhatsApp: ${whatsappUrl()}
- Sitio web: ${SITE.url}
- Formas de pago: ${FORMAS_DE_PAGO.join(", ")}
- Moneda: soles peruanos (PEN)

## Horario de atención

${HOURS_DISPLAY.map((h) => `- ${h.label}: ${h.value}`).join("\n")}

## Cómo hacer un pedido

1. Escribir por WhatsApp al ${SITE.phoneDisplay} con los cortes y los kilos que se necesitan.
2. ${SITE.name} confirma la disponibilidad, el total y la hora aproximada de entrega.
3. El pedido se coordina con ${DELIVERY.anticipacionHoras} horas de anticipación y se entrega a domicilio en Lima, cortado y porcionado el mismo día.

## Páginas principales

${PILARES_LISTA.map((p) => `- [${p.h1}](${absoluteUrl(p.ruta)}): ${p.entradilla}`).join("\n")}
- [Contacto](${absoluteUrl("/contacto")}): teléfono, WhatsApp y horario.
- [Nosotros](${absoluteUrl("/nosotros")}): quiénes están detrás de la carnicería.

## Precios de carne de res (por kilo, actualizados el ${PRECIOS_ACTUALIZADOS})

${res.map(linea).join("\n")}

## Precios de carne de cerdo (por kilo, actualizados el ${PRECIOS_ACTUALIZADOS})

${cerdo.map(linea).join("\n")}

## Guías y artículos

${postsPublicados.map((p) => `- [${p.titulo}](${absoluteUrl(`/blog/${p.slug}`)}): ${p.descripcion}`).join("\n")}
`;

  return new Response(texto, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
