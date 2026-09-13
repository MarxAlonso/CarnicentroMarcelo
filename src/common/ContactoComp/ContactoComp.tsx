import React from "react";
import BannerContacto from "../../components/Banner/BannerContacto";
import Contacto from "../../components/Contacto/Contacto";

export const ContactoComp: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface">
      <BannerContacto />
      <Contacto />
    </div>
  );
};

export default ContactoComp;