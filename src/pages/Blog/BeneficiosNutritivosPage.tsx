import React from 'react';
import SEO from '../../components/SEO/SEO';
import BeneficiosNutritivos from '../../common/BlogComp/BeneficiosNutritivos/BeneficiosNutritivos';

const BeneficiosNutritivosPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Beneficios Nutritivos de la Carne de Res" 
        description="Descubre el elevado valor nutricional de la carne de res: hierro, vitaminas del complejo B, zinc y más. Información verificada sobre salud y bienestar."
        keywords="beneficios carne de res, nutrición carne roja, hierro hemo, vitamina B12 carne, proteínas alta calidad, salud carnes"
      />
      <main>
        <BeneficiosNutritivos />
      </main>
    </>
  );
};

export default BeneficiosNutritivosPage;
