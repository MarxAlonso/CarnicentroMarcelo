/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "carni-cream": "#fff4bf",
        "carni-red": "#a90a0a",
        "carni-dark-red": "#8a0808",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-kanit)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
