# Carnicentro Marcelo

Sitio de la carnicería: catálogo de cortes de res y cerdo con precio por kilo,
delivery en Lima y blog. Next.js 15 (App Router) con generación estática,
TypeScript y Tailwind.

## Arrancar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # genera el HTML estático de todas las rutas
npm run start    # sirve el build
npm run lint
```

## Cómo está organizado

```
src/
  app/            Rutas. Cada carpeta es una URL; loading.tsx es su skeleton.
  lib/site.ts     Datos del negocio: teléfono, horario, dirección, distritos.
  lib/schema.ts   Constructores de JSON-LD.
  lib/pilares.ts  Las tres páginas pilar: título, descripción y FAQs.
  content/posts.ts  Registro de artículos del blog, publicados y planificados.
  components/     Componentes de interfaz.
  common/         Secciones de página.
```

## Reglas que sostienen el SEO

Son cuatro y conviene no saltárselas:

1. **Un dato del negocio se cambia en `lib/site.ts`, en ningún otro sitio.**
   De ahí salen los metadatos, el JSON-LD, el sitemap y el pie de página. Un
   teléfono escrito a mano dentro de un componente es un teléfono que algún día
   va a quedar desfasado respecto al resto.

2. **Lo que se declara en JSON-LD tiene que estar visible en la página.** Las
   FAQs se pintan desde el mismo arreglo que alimenta el `FAQPage`, y los
   precios del `Offer` son los de la tabla. Declarar algo que el visitante no ve
   es motivo de penalización manual de Google.

3. **Si tocas un precio, actualiza `PRECIOS_ACTUALIZADOS` en `lib/site.ts`.**
   Esa fecha se pinta encima de cada tabla. Una tabla de precios sin fecha
   envejece en silencio y hace más daño que no publicarla.

4. **Un artículo nuevo se da de alta en `content/posts.ts`.** De ese registro
   salen el listado, la ruta estática, el sitemap y los metadatos. Además hay
   que escribir su componente usando `components/Blog/ArticleLayout` y
   añadirlo al mapa `CUERPOS` de `app/blog/[slug]/page.tsx`.

## Animaciones: nada de librerías

El sitio no usa framer-motion. Se quitó porque costaba 172 KB en todas las
páginas y, sobre todo, porque dejaba el contenido en `opacity: 0` hasta que
React hidrataba: el HTML llegaba rápido pero la página se veía vacía.

En su lugar hay dos mecanismos, ambos en CSS:

- **Revelado al entrar en pantalla.** Pon `data-reveal="up"` (o `fade`, `left`,
  `right`, `scale`) en el elemento. Para escalonar hermanos, envuélvelos en un
  `data-reveal-group` y el retraso lo calcula el CSS con `nth-child`.
- **Entrada inmediata**, para lo que ya está en pantalla al cargar: clase
  `hero-enter`, con `--hero-delay` si quieres escalonar.

La regla que no se rompe: **el HTML sale visible**. El sistema solo se activa
si un script inline de ~400 bytes marca el documento antes del primer pintado.
Si el JavaScript falla, o el visitante pidió menos movimiento en su sistema, se
ve todo sin animación. Nunca al revés.

Al añadir animación, quédate en `opacity` y `transform`: son las dos
propiedades que el compositor resuelve sin recalcular maquetación.

## Datos que faltan

En `lib/site.ts` hay tres constantes vacías esperando información del cliente.
Mientras lo estén, el sitio funciona pero pierde posicionamiento local:

- `ADDRESS.street` — sin dirección no se emite `address` en el `LocalBusiness`,
  que es lo que Google usa para la ficha del negocio y para «carnicería cerca
  de mí».
- `DISTRITOS` — la lista real de reparto. Alimenta el `areaServed` y el listado
  visible de la página de delivery. «Lima Metropolitana» a secas no posiciona
  en ninguna búsqueda por zona; el nombre del distrito, sí.
- `DELIVERY.minimoSoles` y `costoEnvioSoles` — mientras sean `null`, la página
  dice «se confirma al coordinar» en lugar de inventar una cifra.

## Despliegue

Netlify, con `@netlify/plugin-nextjs`. Las rutas antiguas `/carneres` y
`/carnecerdo` redirigen en permanente (301) a `/carne-de-res` y
`/carne-de-cerdo` desde `next.config.mjs`, para no perder lo ya indexado.
