import React from "react";

export const Contacto: React.FC = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pedidos de cortes */}
        <div className="rounded-lg border border-[#8B0000]/20 bg-white shadow-sm">
          <div className="p-5">
            <div className="flex items-center mb-3">
              <svg className="h-6 w-6 text-[#8B0000] mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 2l3 7h6l3-7M6 22h12M9 22v-7h6v7" />
              </svg>
              <h3 className="text-lg font-semibold text-[#8B0000]">Pedidos de cortes</h3>
            </div>
            <p className="text-gray-700">
              Para cortes especiales y pedidos personalizados, contáctanos y agenda con
              un día de anticipación para garantizar disponibilidad y preparación.
            </p>
            <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
              <li>Pedidos coordinados con 24 horas de anticipación.</li>
              <li>Disponibles cortes para parrilla, restaurantes y eventos.</li>
              <li>Asesoría sobre gramajes y presentaciones.</li>
            </ul>
          </div>
          <div className="border-t border-[#8B0000]/10 px-5 py-3 bg-[#FFF8F8] flex items-center justify-between">
            <a href="tel:984620910" className="text-[#8B0000] font-medium hover:underline">Tel: 984-620-910</a>
            <a href="https://wa.me/+51984620910" target="_blank" rel="noopener noreferrer" className="text-[#8B0000] font-medium hover:underline">WhatsApp</a>
          </div>
        </div>

        {/* Entregas a domicilio */}
        <div className="rounded-lg border border-[#8B0000]/20 bg-white shadow-sm">
          <div className="p-5">
            <div className="flex items-center mb-3">
              <svg className="h-6 w-6 text-[#8B0000] mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h13l5 5v7a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2z" />
              </svg>
              <h3 className="text-lg font-semibold text-[#8B0000]">Entregas a domicilio</h3>
            </div>
            <p className="text-gray-700">
              Ofrecemos servicio de delivery coordinado. Agenda tu entrega con un
              día de anticipación para organizar rutas y tiempos.
            </p>
            <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
              <li>Entrega coordinada y confirmada previamente.</li>
              <li>Horarios de entrega según disponibilidad de ruta.</li>
              <li>Empaque seguro y cadena de frío garantizada.</li>
            </ul>
          </div>
          <div className="border-t border-[#8B0000]/10 px-5 py-3 bg-[#FFF8F8] flex items-center justify-between">
            <a href="tel:984620910" className="text-[#8B0000] font-medium hover:underline">Tel: 984-620-910</a>
            <a href="https://wa.me/+51984620910" target="_blank" rel="noopener noreferrer" className="text-[#8B0000] font-medium hover:underline">WhatsApp</a>
          </div>
        </div>

        {/* Contratos y restaurantes */}
        <div className="rounded-lg border border-[#8B0000]/20 bg-white shadow-sm">
          <div className="p-5">
            <div className="flex items-center mb-3">
              <svg className="h-6 w-6 text-[#8B0000] mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10M7 12h10M7 17h6" />
              </svg>
              <h3 className="text-lg font-semibold text-[#8B0000]">Contratos y restaurantes</h3>
            </div>
            <p className="text-gray-700">
              Atendemos contratos para restaurantes, hoteles y eventos. Escríbenos
              para cotizaciones, acuerdos y programación de entregas.
            </p>
            <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
              <li>Planificación con anticipación para garantizar stock.</li>
              <li>Facturación y documentación a solicitud.</li>
              <li>Atención personalizada según tipo de negocio.</li>
            </ul>
          </div>
          <div className="border-t border-[#8B0000]/10 px-5 py-3 bg-[#FFF8F8] flex items-center justify-between">
            {/*<a href="mailto:info@carnicentromarcelo.com" className="text-[#8B0000] font-medium hover:underline">info@carnicentromarcelo.com</a>*/}
            <a href="https://wa.me/+51984620910" target="_blank" rel="noopener noreferrer" className="text-[#8B0000] font-medium hover:underline">WhatsApp</a>
          </div>
        </div>
      </div>

      {/* Avisos generales */}
      <div className="mt-8 rounded-lg border border-[#8B0000]/20 bg-[#FFF8F8] p-5">
        <p className="text-gray-700">
          Nota: Los pedidos y entregas deben confirmarse con un día de
          anticipación. Recomendamos coordinar por teléfono o WhatsApp para
          asegurar tiempos y disponibilidad.
        </p>
      </div>
    </section>
  );
};

export default Contacto;