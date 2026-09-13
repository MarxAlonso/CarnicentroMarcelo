import type { Metadata, Viewport } from "next";
import { Kanit, Poppins } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import Chatbot from "@/components/Chatbot/Chatbot";
import { SITE } from "@/lib/site";
import { buildLocalBusinessSchema, buildOrganizationSchema, jsonLd } from "@/lib/schema";
import { REVEAL_SCRIPT } from "@/components/Reveal/Reveal";

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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#a90a0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-PE" className={`${poppins.variable} ${kanit.variable}`}>
      <head>
        {/* Negocio y organización se declaran una sola vez, en la raíz.
            Las páginas añaden su propio schema específico. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd([buildLocalBusinessSchema(), buildOrganizationSchema()])}
        />
        {/* Marca el documento antes del primer pintado para que el revelado no
            parpadee. Son ~400 bytes inline: no hay petición de red ni espera a
            que React hidrate. */}
        <script dangerouslySetInnerHTML={{ __html: REVEAL_SCRIPT }} />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[2000] focus:rounded-lg focus:bg-carni-red focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>

        <Navbar />
        <main id="contenido">{children}</main>
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
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7330512160006531"
        />
      </body>
    </html>
  );
}
