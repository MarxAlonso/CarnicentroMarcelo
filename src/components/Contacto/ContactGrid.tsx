import React from "react";
import ContactCard from "./ContactCard";

export const ContactGrid: React.FC = () => {
  const whatsappLink = "https://wa.me/+51984620910";

  const IconPedidos = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 2l3 7h6l3-7M6 22h12M9 22v-7h6v7" />
    </svg>
  );

  const IconDelivery = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h13l5 5v7a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2z" />
    </svg>
  );

  const IconContratos = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10M7 12h10M7 17h6" />
    </svg>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <ContactCard
        title="Pedidos de cortes"
        icon={IconPedidos}
        phone="984620910"
        whatsapp={whatsappLink}
      >
        <p>
          Para cortes especiales y pedidos personalizados, contáctanos y agenda con
          un día de anticipación para garantizar disponibilidad y preparación.
        </p>
        <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
          <li>Pedidos coordinados con 24 horas de anticipación.</li>
          <li>Disponibles cortes para parrilla, restaurantes y eventos.</li>
          <li>Asesoría sobre gramajes y presentaciones.</li>
        </ul>
      </ContactCard>

      <ContactCard
        title="Entregas a domicilio"
        icon={IconDelivery}
        phone="984620910"
        whatsapp={whatsappLink}
      >
        <p>
          Ofrecemos servicio de delivery coordinado. Agenda tu entrega con un
          día de anticipación para organizar rutas y tiempos.
        </p>
        <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
          <li>Entrega coordinada y confirmada previamente.</li>
          <li>Horarios de entrega según disponibilidad de ruta.</li>
          <li>Empaque seguro y cadena de frío garantizada.</li>
        </ul>
      </ContactCard>

      <ContactCard
        title="Contratos y restaurantes"
        icon={IconContratos}
        whatsapp={whatsappLink}
      >
        <p>
          Atendemos contratos para restaurantes, hoteles y eventos. Escríbenos
          para cotizaciones, acuerdos y programación de entregas.
        </p>
        <ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
          <li>Planificación con anticipación para garantizar stock.</li>
          <li>Facturación y documentación a solicitud.</li>
          <li>Atención personalizada según tipo de negocio.</li>
        </ul>
      </ContactCard>
    </div>
  );
};

export default ContactGrid;