import React from "react";
import BannerContacto from "../../components/Banner/BannerContacto";
import Contacto from "../../components/Contacto/Contacto";

export const ContactoComp: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <BannerContacto />
      <Contacto />
    </main>
  );
};

export default ContactoComp;