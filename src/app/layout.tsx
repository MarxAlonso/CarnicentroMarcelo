import type { Metadata, Viewport } from "next";
import { Kanit, Poppins } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { PedidoWhatsApp } from "@/common/InicioComp/PedidoWhatsApp";
import Chatbot from "@/components/Chatbot/Chatbot";
import { WhatsAppFlotante } from "@/components/WhatsApp/WhatsAppFlotante";
import { ADSENSE_PUB_ID, SITE } from "@/lib/site";
import {
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
  jsonLd,
} from "@/lib/schema";
import { REVEAL_SCRIPT } from "@/components/Reveal/Reveal";
import { TEMA_SCRIPT } from "@/components/Tema/tema";

/**
 * Antes se pedían las dos familias completas a Google Fonts: nueve pesos, en
 * normal y cursiva, cada una — 36 variantes para usar siete. Ahora se
 * autoalojan solo los pesos que el diseño realmente utiliza.
 */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-kanit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Carnicería en Lima con delivery`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: SITE.url,
    title: `${SITE.name} | Carnicería en Lima con delivery`,
    description: SITE.description,
    images: [{ url: SITE.ogImage, alt: `Logo de ${SITE.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Carnicería en Lima con delivery`,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/logo-carnicentromarcelo.png", apple: "/logo-carnicentromarcelo.png" },
  category: "Carnicería",
  // Etiquetas de ubicación clásicas. Google las ignora, pero Bing —que es de
  // donde beben Copilot y ChatGPT— sí las lee para situar el negocio.
  other: {
    "geo.region": "PE-LIM",
    "geo.placename": "Lima",
  },
};

/** Países donde Google exige consentimiento previo para cookies de anuncios. */
const REGIONES_CONSENTIMIENTO = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IS", "IE",
  "IT", "LV", "LI", "LT", "LU", "MT", "NL", "NO", "PL", "PT", "RO", "SK", "SI", "ES", "SE",
  "GB", "CH",
];

const CONSENT_SCRIPT = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',region:${JSON.stringify(REGIONES_CONSENTIMIENTO)},wait_for_update:500});`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#a90a0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-PE" suppressHydrationWarning className={`${poppins.variable} ${kanit.variable}`}>
      <head>
        {/* Negocio y organización se declaran una sola vez, en la raíz.
            Las páginas añaden su propio schema específico. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd([
            buildLocalBusinessSchema(),
            buildOrganizationSchema(),
            buildWebSiteSchema(),
          ])}
        />
        {/* Marca el documento antes del primer pintado para que el revelado no
            parpadee. Son ~400 bytes inline: no hay petición de red ni espera a
            que React hidrate. */}
        <script dangerouslySetInnerHTML={{ __html: REVEAL_SCRIPT }} />
        {/* Aplica el tema antes del primer pintado. Sin esto la pagina
            parpadea en blanco antes de pasar a oscuro. */}
        <script dangerouslySetInnerHTML={{ __html: TEMA_SCRIPT }} />
        {/* Modo de consentimiento de Google. Tiene que correr antes que GA4 y
            AdSense, por eso va inline y no con <Script lazyOnload>. En el EEE,
            Reino Unido y Suiza todo arranca denegado hasta que el visitante
            responde al aviso de cookies (el CMP de AdSense, que se activa en
            "Privacidad y mensajes"). En Perú no cambia nada. */}
        <script dangerouslySetInnerHTML={{ __html: CONSENT_SCRIPT }} />
      </head>
      <body className="bg-page text-ink antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[2000] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>

        <Navbar />
        <main id="contenido">{children}</main>
        {/* Cierre común de todas las páginas: cómo pedir y los botones para hacerlo. */}
        <PedidoWhatsApp />
        <WhatsAppFlotante />
        <Chatbot />
        <Footer />

        {/* Los tres terceros se cargan después de que la página es usable.
            AdSense estaba duplicado (head y body); ahora va una sola vez. */}
        <Script
          id="ga4"
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-VPJ7TM47ZG"
        />
        <Script id="ga4-init" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-VPJ7TM47ZG');`}
        </Script>
        <Script id="clarity" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","vt79b3de9r");`}
        </Script>
        <Script
          id="adsense"
          strategy="lazyOnload"
          async
          crossOrigin="anonymous"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${ADSENSE_PUB_ID}`}
        />
      </body>
    </html>
  );
}
