/**
 * Constructores de JSON-LD.
 *
 * Regla que se respeta en todo el archivo: no se declara un dato que no esté
 * visible en la página. Un `FAQPage` cuyas preguntas no aparecen en pantalla, o
 * un precio distinto al de la tabla, es motivo de penalización manual.
 */
import { SITE, ADDRESS, HOURS, DISTRITOS, FORMAS_DE_PAGO, absoluteUrl, whatsappUrl } from "./site";

type Json = Record<string, unknown>;

const ORGANIZATION_ID = `${SITE.url}/#organization`;
const BUSINESS_ID = `${SITE.url}/#business`;
const WEBSITE_ID = `${SITE.url}/#website`;

export function buildLocalBusinessSchema(): Json {
  const schema: Json = {
    "@context": "https://schema.org",
    // `Butcher` no existe en el vocabulario de schema.org, así que los
    // validadores lo descartaban. El tipo válido más cercano es
    // `GroceryStore`; que es una carnicería lo precisa `additionalType`.
    "@type": ["LocalBusiness", "GroceryStore"],
    additionalType: "http://www.productontology.org/id/Butcher",
    "@id": BUSINESS_ID,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    image: absoluteUrl(SITE.logo),
    logo: absoluteUrl(SITE.logo),
    priceRange: "S/",
    currenciesAccepted: "PEN",
    paymentAccepted: FORMAS_DE_PAGO.join(", "),
    // De qué sabe el negocio. Es lo que usa un asistente de IA para decidir
    // si esta web responde a «dónde comprar lomo fino en Lima».
    knowsAbout: [
      "Carne de res",
      "Carne de cerdo",
      "Cortes de carne para parrilla",
      "Carne molida",
      "Delivery de carne en Lima",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: SITE.phone,
      url: whatsappUrl(),
      availableLanguage: "es",
      areaServed: "PE",
    },
    // El catálogo, apuntando a las páginas donde el precio está visible.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cortes de carne por kilo",
      itemListElement: [
        { "@type": "OfferCatalog", name: "Carne de res", url: absoluteUrl("/carne-de-res") },
        { "@type": "OfferCatalog", name: "Carne de cerdo", url: absoluteUrl("/carne-de-cerdo") },
      ],
    },
    potentialAction: {
      "@type": "OrderAction",
      name: "Pedir por WhatsApp",
      target: whatsappUrl(),
    },
    openingHoursSpecification: HOURS.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
  };

  // Solo se emite la dirección cuando existe de verdad.
  if (ADDRESS.street) {
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.district || ADDRESS.city,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode || undefined,
      addressCountry: ADDRESS.country,
    };
  }

  if (ADDRESS.lat !== null && ADDRESS.lng !== null) {
    schema.geo = { "@type": "GeoCoordinates", latitude: ADDRESS.lat, longitude: ADDRESS.lng };
  }

  schema.areaServed = DISTRITOS.length
    ? DISTRITOS.map((d) => ({ "@type": "City", name: d, containedInPlace: { "@type": "City", name: "Lima" } }))
    : { "@type": "City", name: "Lima" };

  return schema;
}

export function buildOrganizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE.name,
    url: SITE.url,
    logo: absoluteUrl(SITE.logo),
    telephone: SITE.phone,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: SITE.phone,
      url: whatsappUrl(),
      availableLanguage: "es",
    },
  };
}

/** Nombre del sitio, idioma y quién lo publica: lo mínimo para que un buscador
    muestre «Carnicentro Marcelo» y no el dominio pelado. */
export function buildWebSiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "es-PE",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export type ProductoSchema = {
  nombre: string;
  descripcion?: string;
  precio: number;
  imagen?: string;
};

/**
 * Lista de cortes con precio. `ItemList` + `Product` por ítem es lo que permite
 * que Google muestre el precio por kilo junto al resultado.
 */
export function buildProductListSchema(
  productos: ProductoSchema[],
  opts: { nombreLista: string; url: string }
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: opts.nombreLista,
    url: absoluteUrl(opts.url),
    numberOfItems: productos.length,
    itemListElement: productos.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.nombre,
        description: p.descripcion,
        image: p.imagen ? absoluteUrl(p.imagen) : undefined,
        brand: { "@type": "Brand", name: SITE.name },
        offers: {
          "@type": "Offer",
          price: p.precio,
          priceCurrency: "PEN",
          // El precio por kilo es la unidad real de venta.
          eligibleQuantity: { "@type": "QuantitativeValue", unitCode: "KGM", value: 1 },
          availability: "https://schema.org/InStock",
          seller: { "@id": BUSINESS_ID },
          url: absoluteUrl(opts.url),
        },
      },
    })),
  };
}

/**
 * Ficha de un solo corte.
 *
 * `aggregateRating` y `review` se emiten **solo** si llegan reseñas reales.
 * Declarar valoraciones inventadas es la vía más rápida a una acción manual de
 * Google, y esa sanción no se queda en la ficha: baja el dominio entero.
 */
export function buildProductSchema(p: {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  url: string;
  categoria: string;
  resenas?: { autor: string; estrellas: number; fecha: string; texto: string }[];
}): Json {
  const schema: Json = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.nombre,
    description: p.descripcion,
    image: absoluteUrl(p.imagen),
    category: p.categoria,
    brand: { "@type": "Brand", name: SITE.name },
    offers: {
      "@type": "Offer",
      price: p.precio,
      priceCurrency: "PEN",
      // La unidad de venta real es el kilo, no la pieza.
      eligibleQuantity: { "@type": "QuantitativeValue", unitCode: "KGM", value: 1 },
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      url: absoluteUrl(p.url),
      seller: { "@id": BUSINESS_ID },
    },
  };

  if (p.resenas && p.resenas.length > 0) {
    const suma = p.resenas.reduce((acc, r) => acc + r.estrellas, 0);
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: Math.round((suma / p.resenas.length) * 10) / 10,
      reviewCount: p.resenas.length,
      bestRating: 5,
      worstRating: 1,
    };
    schema.review = p.resenas.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.autor },
      datePublished: r.fecha,
      reviewBody: r.texto,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.estrellas,
        bestRating: 5,
        worstRating: 1,
      },
    }));
  }

  return schema;
}

export type Faq = { pregunta: string; respuesta: string };

/** Las mismas preguntas deben estar visibles en la página. Sin excepción. */
export function buildFaqSchema(faqs: Faq[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.pregunta,
      acceptedAnswer: { "@type": "Answer", text: f.respuesta },
    })),
  };
}

export function buildBreadcrumbSchema(items: { nombre: string; url: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.nombre,
      item: absoluteUrl(it.url),
    })),
  };
}

export function buildArticleSchema(post: {
  titulo: string;
  descripcion: string;
  slug: string;
  publicado: string;
  actualizado?: string;
  imagen?: string;
  autor?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.titulo,
    description: post.descripcion,
    url: absoluteUrl(`/blog/${post.slug}`),
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    datePublished: post.publicado,
    dateModified: post.actualizado ?? post.publicado,
    image: post.imagen ? absoluteUrl(post.imagen) : absoluteUrl(SITE.ogImage),
    author: { "@type": "Person", name: post.autor ?? SITE.name },
    publisher: { "@id": ORGANIZATION_ID },
  };
}

/** Serializa para `<script type="application/ld+json">` sin romper el HTML. */
export function jsonLd(schema: Json | Json[]) {
  return { __html: JSON.stringify(schema).replace(/</g, "\u003c") };
}
