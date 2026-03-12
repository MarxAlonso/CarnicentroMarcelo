import React from 'react';
import SEO from '../../components/SEO/SEO';
import ImportanciaCarne from '../../common/BlogComp/ImportanciaCarne/ImportanciaCarne';

const ImportanciaCarnePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Importancia de la Carne de Res" 
        description="Análisis nutricional sobre la carne de res para niños, jóvenes y adultos. Descubre los beneficios médicos y nutricionales."
        keywords="carne de res niños, beneficios carne roja adolescentes, nutrición carnes adultos, hierro hemínico, vitamina B12 carne"
      />
      <main>
        <ImportanciaCarne />
      </main>
    </>
  );
};

export default ImportanciaCarnePage;
