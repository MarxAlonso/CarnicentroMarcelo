import React from 'react';
import SEO from '../../components/SEO/SEO';
import BeneficiosGym from '../../common/BlogComp/BeneficiosGym/BeneficiosGym';

const BeneficiosGymPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Beneficios de la Carne para el Gimnasio" 
        description="Cómo la carne de res y cerdo ayudan a ganar masa muscular. Proteínas, creatina y cortes magros clave para deportistas y fitness."
        keywords="carne para gym, masa muscular res, proteínas fitness, creatina natural carne, cortes magros deporte, nutrición gimnasio"
      />
      <main>
        <BeneficiosGym />
      </main>
    </>
  );
};

export default BeneficiosGymPage;
