import React from "react";
import bannercontacto from "../../assets/banner/banner2-vacas.webp"
export const BannerContacto: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative bg-gradient-to-r from-[#8B0000] to-[#5B0000]">
        <img
          src={bannercontacto}
          alt="Carnicentro Marcelo"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Contáctanos para pedidos, entregas y contratos
            </h1>
            <p className="mt-4 text-white/90">
              En Carnicentro Marcelo coordinamos pedidos de cortes especiales,
              entregas a domicilio y contratos para restaurantes y eventos.
              Escríbenos o llámanos para agendar con anticipación.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="tel:984620910"
                className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white px-5 py-3 transition-colors"
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a2 2 0 011.96 1.57l.5 2a2 2 0 01-.54 1.95L9 10a16 16 0 007 7l1.47-1.21a2 2 0 011.95-.54l2 .5A2 2 0 0123 18.72V22a2 2 0 01-2 2h-1c-9.94 0-18-8.06-18-18V5z" />
                </svg>
                Tel: 984-620-910
              </a>
              <a
                href="https://wa.me/+51984620910"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-white text-[#8B0000] hover:bg-[#FBECEC] px-5 py-3 transition-colors"
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 00-9.12 14.56L2 22l5.56-1.88A10 10 0 1012 2zm5.31 14.27c-.23.65-1.34 1.23-1.86 1.31-.48.08-1.1.11-1.79-.11-.41-.13-.94-.3-1.62-.59-2.85-1.24-4.7-4.12-4.84-4.31-.14-.19-1.16-1.54-1.16-2.94 0-1.39.74-2.07 1-2.36.26-.29.57-.36.76-.36.18 0 .38 0 .55.01.18.01.41-.07.64.49.23.55.79 1.91.86 2.05.07.14.11.31.02.5-.09.19-.14.31-.27.48-.13.17-.28.39-.4.52-.13.13-.27.27-.12.53.15.26.67 1.11 1.43 1.8.99.89 1.82 1.17 2.09 1.3.26.13.42.11.58-.07.16-.18.66-.77.83-1.03.17-.26.36-.22.6-.13.24.09 1.52.72 1.78.85.26.13.43.2.5.31.07.11.07.63-.16 1.28z" />
                </svg>
                WhatsApp
              </a>
            </div>
            <p className="mt-4 text-white/80">
              Recomendación: realiza tu pedido con un día de anticipación para
              asegurar disponibilidad y coordinar entregas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerContacto;