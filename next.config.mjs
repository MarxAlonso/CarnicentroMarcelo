/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // AVIF primero: pesa ~50% menos que el WebP actual en las fotos de cortes.
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 420, 640, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
  },

  // Las direcciones viejas ya están indexadas: se redirigen en permanente
  // para no perder lo ganado al estrenar los slugs con palabra clave.
  async redirects() {
    return [
      { source: "/carneres", destination: "/carne-de-res", permanent: true },
      { source: "/carnecerdo", destination: "/carne-de-cerdo", permanent: true },
    ];
  },
};

export default nextConfig;
