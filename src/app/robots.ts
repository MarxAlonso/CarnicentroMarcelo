import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Rastreadores de los asistentes de IA, con permiso explícito.
 *
 * La regla `*` ya los dejaba pasar, pero varios de ellos buscan su propio
 * nombre en el archivo antes de decidir, y un `robots.txt` que los nombra no
 * deja lugar a dudas. Hay de dos clases y conviene tener las dos:
 *   · los que leen la página en el momento para contestar a alguien
 *     (ChatGPT-User, Claude-User, Perplexity-User…), y
 *   · los que la indexan para el buscador del asistente o para entrenar
 *     (GPTBot, ClaudeBot, Google-Extended…).
 * Bloquear a los segundos es legítimo, pero entonces el asistente no sabrá
 * que esta carnicería existe cuando alguien le pregunte por una en Lima.
 */
const RASTREADORES_IA = [
  // OpenAI / ChatGPT
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic / Claude
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google (Gemini y resúmenes de IA) y Apple Intelligence
  "Google-Extended",
  "Applebot-Extended",
  // Otros asistentes y sus fuentes
  "Amazonbot",
  "meta-externalagent",
  "MistralAI-User",
  "DuckAssistBot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: RASTREADORES_IA, allow: "/" },
    ],
    sitemap: new URL("/sitemap.xml", SITE.url).toString(),
    host: SITE.url,
  };
}
