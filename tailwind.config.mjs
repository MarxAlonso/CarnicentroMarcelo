/** @type {import('tailwindcss').Config} */

/**
 * Cada color es una variable CSS con el valor en R G B separados por espacios.
 * Ese formato es lo que permite que `bg-brand/90` siga funcionando: Tailwind
 * sustituye `<alpha-value>` por la opacidad que pidas.
 *
 * Los valores concretos de cada tema están en `src/app/globals.css`.
 */
const color = (variable) => `rgb(var(${variable}) / <alpha-value>)`;

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        /* ─── Marca ───
           El rojo se parte en dos porque no puede ser el mismo valor de fondo
           que de texto: #a90a0a sobre un fondo oscuro no tiene contraste
           suficiente para leerse, pero sigue siendo el rojo correcto para la
           barra de navegación en los dos temas. */
        brand: color("--brand"), // fondos, bordes y anillos
        "brand-deep": color("--brand-deep"), // el mismo rojo, más oscuro (hover)
        "brand-ink": color("--brand-ink"), // el rojo como color de texto
        "brand-ink-deep": color("--brand-ink-deep"), // titulares

        /* Crema de marca. Se usa como texto sobre el rojo, así que se mantiene
           claro en los dos temas: el rojo de debajo no se aclara. */
        cream: color("--cream"),

        /* ─── Superficies ─── */
        page: color("--page"),
        surface: color("--surface"), // tarjetas
        "surface-2": color("--surface-2"), // secciones alternas
        "surface-warm": color("--surface-warm"), // las secciones color crema

        /* ─── Texto y separadores ─── */
        ink: color("--ink"),
        "ink-muted": color("--ink-muted"),
        "ink-subtle": color("--ink-subtle"),
        line: color("--line"),
      },

      /* Ancho máximo único para todas las secciones. */
      maxWidth: {
        site: "1350px",
        /* Columna de lectura. No sigue a `site` a propósito: un párrafo de
           1350 px de ancho es incómodo de leer, el ojo pierde el renglón al
           volver. Se queda en unos 70 caracteres. */
        prose: "68ch",
      },

      /**
       * Escala tipográfica fluida.
       *
       * Antes eran tamaños fijos pensados para móvil, y en un monitor grande
       * se veían enormes. Ahora cada tamaño interpola entre un mínimo (móvil)
       * y un máximo (escritorio) con `clamp`, así que no hay un salto brusco
       * en ningún punto intermedio y el tope es bastante más contenido que
       * antes: los titulares grandes bajan de 60 px a 52 px, y el cuerpo
       * grande de 20 px a 19 px.
       */
      fontSize: {
        xs: ["clamp(0.72rem, 0.70rem + 0.10vw, 0.78rem)", { lineHeight: "1.5" }],
        sm: ["clamp(0.82rem, 0.79rem + 0.13vw, 0.90rem)", { lineHeight: "1.55" }],
        base: ["clamp(0.94rem, 0.91rem + 0.15vw, 1.00rem)", { lineHeight: "1.65" }],
        lg: ["clamp(1.00rem, 0.96rem + 0.20vw, 1.09rem)", { lineHeight: "1.6" }],
        xl: ["clamp(1.06rem, 1.00rem + 0.28vw, 1.19rem)", { lineHeight: "1.55" }],
        "2xl": ["clamp(1.19rem, 1.10rem + 0.42vw, 1.38rem)", { lineHeight: "1.4" }],
        "3xl": ["clamp(1.38rem, 1.25rem + 0.60vw, 1.75rem)", { lineHeight: "1.3" }],
        "4xl": ["clamp(1.63rem, 1.42rem + 0.95vw, 2.13rem)", { lineHeight: "1.2" }],
        "5xl": ["clamp(2.00rem, 1.64rem + 1.60vw, 2.75rem)", { lineHeight: "1.12" }],
        "6xl": ["clamp(2.25rem, 1.80rem + 2.10vw, 3.25rem)", { lineHeight: "1.08" }],
      },

      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-kanit)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
