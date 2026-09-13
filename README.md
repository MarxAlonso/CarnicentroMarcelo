# Carnicentro Marcelo

Sitio de la carnicería: catálogo de cortes de res y cerdo con precio por kilo,
delivery en Lima y blog. Next.js 15 (App Router) con generación estática,
TypeScript y Tailwind.

## Arrancar

El proyecto usa **pnpm**. La versión está fijada en `packageManager`, así que
Corepack la instala sola.

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # genera el HTML estático de todas las rutas
pnpm start    # sirve el build
pnpm lint
```

No mezclar gestores: un `package-lock.json` junto al `pnpm-lock.yaml` haría que
Netlify eligiera mal y compilara con un árbol de dependencias distinto al local.

`pnpm-workspace.yaml` decide qué dependencias pueden ejecutar scripts de
instalación. pnpm **falla la instalación** si encuentra alguna sin decidir, así
que al añadir un paquete con `postinstall` hay que declararlo ahí — permitido en
`onlyBuiltDependencies` o denegado en `allowBuilds`.

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

## Sistema visual

### Colores: tokens, no valores fijos

Ningún componente escribe un color. Todos usan tokens que apuntan a variables
CSS, y esas variables cambian de valor en `.dark`. Por eso el modo oscuro
funciona sin una sola variante `dark:` repartida por el código.

| Token | Para qué | Claro | Oscuro |
|---|---|---|---|
| `brand` | Fondos rojos (barra, botones) | `#a90a0a` | `#9a1111` |
| `brand-deep` | El mismo rojo en hover | `#8a0808` | `#7a0c0c` |
| `brand-ink` | El rojo **como texto** | `#a90a0a` | `#ff8a7a` |
| `brand-ink-deep` | Titulares | `#8a0808` | `#ffb9ad` |
| `cream` | Texto sobre superficies rojas | `#fff4bf` | igual |
| `page` / `surface` / `surface-2` / `surface-warm` | Fondos | blancos y crema | neutros cálidos oscuros |
| `ink` / `ink-muted` / `ink-subtle` | Texto | grises oscuros | cremas apagados |
| `line` | Bordes y separadores | `#e5e7eb` | `#3a322d` |

El detalle que hay que entender antes de tocar esto: **el rojo está partido en
dos**. `brand` es el rojo de fondo y se mantiene profundo en ambos temas,
porque la barra de navegación tiene que seguir leyéndose como la misma marca.
`brand-ink` es el rojo de texto y sí se aclara en oscuro, porque `#a90a0a`
sobre un fondo oscuro no tiene contraste suficiente. Usar el equivocado no
rompe el build, solo hace el texto ilegible en un tema.

Lo mismo con la crema: `text-cream` es un claro fijo (siempre va sobre rojo),
mientras que `bg-surface-warm` es la sección color crema, que sí se oscurece.

### Tipografía

La escala es fluida: cada tamaño interpola con `clamp()` entre un mínimo de
móvil y un máximo de escritorio, definidos en `tailwind.config.mjs`. Se usan
las clases de siempre (`text-4xl`, `text-lg`…), pero el valor se adapta al
ancho de pantalla en vez de saltar por breakpoints. El tope está bastante más
contenido que los valores por defecto de Tailwind: `text-6xl` llega a 52 px en
lugar de 60 px.

### Anchos

- `max-w-site` — **1350 px**. El ancho de toda sección.
- `max-w-prose` (68ch) y `max-w-3xl`/`max-w-2xl` — columnas de lectura. No
  siguen a `site` a propósito: un párrafo de 1350 px de ancho cansa, el ojo
  pierde el renglón al volver.

Los banners usan `h-[clamp(...)]` en vez de `vh` puros, para que en un monitor
grande no ocupen la ventana entera antes de que se vea una palabra.

### Modo claro y oscuro

El interruptor está en la barra de navegación (`components/Tema/BotonTema`).
Respeta el sistema operativo mientras el visitante no elija a mano; si elige,
su preferencia se guarda y manda. Un script inline en el `<head>` aplica la
clase `dark` **antes del primer pintado** — sin él la página parpadearía en
blanco antes de pasar a oscuro, y eso no se puede arreglar desde React porque
React llega tarde.

## Fichas de producto

Cada uno de los 30 cortes tiene su propia página, generada en el build:

```
/carne-de-res/lomo-fino
/carne-de-res/tira-de-asado
/carne-de-cerdo/panceta-especial
…
```

Antes el catálogo vivía dentro de un filtro de JavaScript y los cortes se
abrían en un modal: no tenían dirección, así que no se podían enlazar,
compartir por WhatsApp ni indexar. «lomo fino precio Lima» es una búsqueda real
que no tenía a dónde llegar.

Todo sale de `content/catalogo.ts`, que unifica res y cerdo, genera los slugs y
guarda el **saber de carnicero** de cada corte: para qué plato sirve, cómo se
llama fuera del Perú, cuánto pedir por persona, cuánta grasa tiene. Ese archivo
alimenta a la vez las fichas, la tabla de precios de los pilares y las guías del
blog, así que un dato se corrige en un solo sitio.

**Para añadir un corte**: se agrega a `productosRes` o `productosCerdo` y, si
tiene saber de carnicero, su entrada en `SABER_RES` / `SABER_CERDO`. La ruta, el
sitemap, los relacionados y el JSON-LD salen solos.

**Las pestañas de la ficha están hechas con CSS**, no con estado de React, y es
a propósito: así el contenido de las cuatro pestañas queda escrito en el HTML
aunque solo una esté visible. Con estado de React solo existiría el panel
activo, y el texto largo —que es justo el que posiciona— no llegaría a Google.

### Reseñas

⚠️ **Las reseñas de `content/resenas.ts` son de demostración, no son clientes
reales.** Están para ver el diseño funcionando y para que las fichas no salgan
con un hueco.

La bandera `RESENAS_REALES` controla el JSON-LD y está en `false`. Con ese
valor, la sección se pinta pero **no se emite marcado `Review` ni
`AggregateRating`**. Es deliberado: declarar valoraciones inventadas en datos
estructurados es una de las causas más frecuentes de acción manual de Google, y
la sanción baja el dominio entero, no solo la ficha. En Perú, además, es
publicidad engañosa ante Indecopi.

`resenasParaSchema()` es el único camino por el que las reseñas llegan al
marcado, así que esa bandera es la única puerta que hay que vigilar.

**Cuando lleguen las reales:**

1. Sustituir el contenido de `RESENAS` por las de verdad, con permiso del autor.
2. Poner `RESENAS_REALES = true`.
3. El schema se emite solo, sin tocar nada más.

**Qué esperar de eso, siendo realistas:** Google no muestra estrellas en los
resultados a partir de reseñas que el propio negocio publica sobre sí mismo —
su regla anti «auto-elogio» deja fuera del formato de estrellas a las páginas
con `LocalBusiness` u `Organization` cuando el negocio controla las reseñas.
Las reseñas de la web sirven para convencer a quien ya llegó a la ficha, que no
es poco, pero no para ganar posiciones.

Las estrellas que sí aparecen en Google salen de la **ficha de Google Business
Profile**. Ahí es donde hay que pedirlas, y es lo que mueve el ranking local.

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
