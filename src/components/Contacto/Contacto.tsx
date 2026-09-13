import React from "react";
import ContactGrid from "./ContactGrid";

export const Contacto: React.FC = () => {
  return (
    <section className="mx-auto max-w-site px-6 py-10">
      <ContactGrid />

      <div className="mt-8 rounded-lg border border-brand/20 bg-surface-2 p-5">
        <p className="text-ink-muted">
          Nota: Los pedidos y entregas deben confirmarse con un día de
          anticipación. Recomendamos coordinar por teléfono o WhatsApp para
          asegurar tiempos y disponibilidad.
        </p>
      </div>
    </section>
  );
};

export default Contacto;