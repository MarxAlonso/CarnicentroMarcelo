import React from "react";
import ContactoComp from "../../common/ContactoComp/ContactoComp";
import SEO from '../../components/SEO/SEO'

export const ContactoPage: React.FC = () => {
  return (
    <>
      <SEO title="Contacto" description="Contacta a Carnicentro Marcelo para pedidos, consultas y cotizaciones de carnes." pathname="/contacto" />
      <ContactoComp />
    </>
  );
};

export default ContactoPage;