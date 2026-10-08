import type { Metadata } from "next";
import Link from "next/link";
import { SITE, whatsappUrl } from "@/lib/site";
import { buildBreadcrumbSchema, jsonLd } from "@/lib/schema";

/**
 * Política de privacidad.
 *
 * AdSense la exige como condición de aprobación: tiene que decir que Google y
 * otros proveedores usan cookies para mostrar anuncios y cómo desactivarlas.
 * Si se añade o se quita un servicio de terceros del layout, se actualiza la
 * lista de "Servicios de terceros" y la fecha de `ACTUALIZADA`.
 */
const ACTUALIZADA = "2026-10-07";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Qué datos recoge ${SITE.name}, para qué los usa, qué cookies emplea la web y cómo puedes desactivarlas.`,
  alternates: { canonical: "/politica-de-privacidad" },
};

export default function PoliticaPrivacidadPage() {
  const fecha = new Date(`${ACTUALIZADA}T12:00:00`).toLocaleDateString("es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          buildBreadcrumbSchema([
            { nombre: "Inicio", url: "/" },
            { nombre: "Política de privacidad", url: "/politica-de-privacidad" },
          ])
        )}
      />
      <article className="bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-14 text-[16px] leading-relaxed text-ink-muted [&_a]:font-medium [&_a]:text-brand-ink [&_a:hover]:underline [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-ink [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
          <h1 className="font-display text-4xl text-ink md:text-5xl">Política de privacidad</h1>
          <p className="text-sm text-ink-subtle">Última actualización: {fecha}</p>

          <p>
            En {SITE.name} ({SITE.url.replace("https://", "")}) respetamos tu privacidad. Esta
            página explica qué información se recoge cuando visitas la web, para qué se usa y qué
            puedes hacer al respecto. El tratamiento se rige por la Ley N.º 29733, Ley de
            Protección de Datos Personales del Perú.
          </p>

          <h2>Qué datos recogemos</h2>
          <ul>
            <li>
              <strong>Datos que nos das tú.</strong> La web no tiene formularios ni cuentas de
              usuario. Cuando nos escribes por WhatsApp o nos llamas para hacer un pedido, usamos
              tu nombre, teléfono, dirección de entrega y el detalle del pedido solo para
              atenderlo y coordinar la entrega.
            </li>
            <li>
              <strong>Datos de navegación.</strong> Como casi todas las webs, recogemos de forma
              automática información técnica: páginas visitadas, tipo de dispositivo y navegador,
              ubicación aproximada (ciudad o país) y cómo llegaste a la web. No sirve para
              identificarte personalmente.
            </li>
          </ul>

          <h2>Cookies</h2>
          <p>
            Las cookies son pequeños archivos que el navegador guarda en tu dispositivo. Esta web
            las usa para medir visitas y para mostrar anuncios. También guarda en tu navegador si
            prefieres el tema claro u oscuro; ese dato no sale de tu dispositivo.
          </p>

          <h2>Publicidad (Google AdSense)</h2>
          <p>
            Esta web muestra anuncios de Google AdSense. Sobre la publicidad de Google:
          </p>
          <ul>
            <li>
              Google y otros proveedores externos usan cookies para mostrar anuncios basados en
              las visitas anteriores que hayas hecho a esta web o a otras.
            </li>
            <li>
              Las cookies de publicidad permiten a Google y a sus socios mostrarte anuncios según
              tus visitas a esta web y a otros sitios de Internet.
            </li>
            <li>
              Puedes desactivar la publicidad personalizada en la{" "}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
                configuración de anuncios de Google
              </a>
              . También puedes desactivar las cookies de otros proveedores de publicidad en{" "}
              <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">
                www.aboutads.info
              </a>
              .
            </li>
            <li>
              Puedes leer más en{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
              >
                cómo usa Google la información de los sitios que usan sus servicios
              </a>
              .
            </li>
          </ul>
          <p>
            Si nos visitas desde el Espacio Económico Europeo, el Reino Unido o Suiza, te
            pediremos tu consentimiento antes de usar cookies de publicidad o de medición, y
            podrás cambiar tu elección en cualquier momento.
          </p>

          <h2>Servicios de terceros</h2>
          <ul>
            <li>
              <strong>Google Analytics</strong>, para saber cuántas personas visitan la web y qué
              páginas leen.{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Política de Google
              </a>
              .
            </li>
            <li>
              <strong>Microsoft Clarity</strong>, para ver de forma anónima cómo se usa la web
              (clics y desplazamiento) y mejorarla.{" "}
              <a
                href="https://privacy.microsoft.com/es-es/privacystatement"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de Microsoft
              </a>
              .
            </li>
            <li>
              <strong>Google AdSense</strong>, para mostrar anuncios, como se explica arriba.
            </li>
            <li>
              <strong>WhatsApp</strong>, cuando decides escribirnos. Lo que envíes por ahí está
              sujeto también a la política de privacidad de WhatsApp.
            </li>
          </ul>

          <h2>Cómo desactivar las cookies</h2>
          <p>
            Puedes bloquear o borrar las cookies desde la configuración de tu navegador (Chrome,
            Safari, Firefox, Edge). La web seguirá funcionando, aunque los anuncios que veas serán
            menos relevantes.
          </p>

          <h2>Con quién compartimos tus datos</h2>
          <p>
            No vendemos ni alquilamos tus datos. Los datos de un pedido solo los usamos nosotros
            para entregarlo. Los datos de navegación los procesan los servicios de terceros
            mencionados arriba, según sus propias políticas.
          </p>

          <h2>Tus derechos</h2>
          <p>
            Puedes pedirnos que te digamos qué datos tuyos tenemos, que los corrijamos o que los
            borremos. Escríbenos por{" "}
            <a href={whatsappUrl("Hola, tengo una consulta sobre mis datos personales.")} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>{" "}
            o llámanos al <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>.
          </p>

          <h2>Menores de edad</h2>
          <p>
            Esta web no está dirigida a menores de 14 años y no recogemos a sabiendas datos de
            menores.
          </p>

          <h2>Cambios en esta política</h2>
          <p>
            Si cambiamos esta política, publicaremos aquí la nueva versión con su fecha de
            actualización. Para cualquier duda, visita nuestra página de{" "}
            <Link href="/contacto">contacto</Link>.
          </p>
        </div>
      </article>
    </>
  );
}
