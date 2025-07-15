/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'carni-cream': '#fff4bf',
        'carni-red': '#a90a0a',
        'carni-dark-red': '#8a0808',
      },
    },
  },
  plugins: [],
}