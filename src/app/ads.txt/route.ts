import { ADSENSE_PUB_ID } from "@/lib/site";

/**
 * /ads.txt — declara qué cuentas pueden vender anuncios en este dominio.
 *
 * Sin este archivo AdSense avisa de "ingresos en riesgo" y algunos
 * compradores dejan de pujar. Sale del mismo `ADSENSE_PUB_ID` que el script
 * del layout, así que no pueden desincronizarse.
 */
export const dynamic = "force-static";

export function GET() {
  return new Response(`google.com, ${ADSENSE_PUB_ID}, DIRECT, f08c47fec0942fa0\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
