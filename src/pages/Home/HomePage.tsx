import { useState } from 'react';
import './HomePage.css';
import { Banner } from '../../components/Banner/Banner';
import { ExplorarCarnes } from '../../common/InicioComp/ExplorarCarnes';
import { CatalogoCarnes } from '../../common/InicioComp/CatalogoCarnes';
import SEO from '../../components/SEO/SEO';
import ExperienciaCarnicera from '../../common/InicioComp/ExperienciaCarnicera';
import FAQSection from '../../common/InicioComp/FAQSection';
import Testimonios from '../../common/InicioComp/Testimonios';

const HomePage = () => {
    const [category, setCategory] = useState("Mas");

    return (
        <div>
            <SEO
                title="Inicio"
                description="Bienvenido a Carnicentro Marcelo. Ofrecemos las mejores carnes de res y cerdo con calidad de exportación y cortes maestros."
            />
            <Banner />
            <ExperienciaCarnicera />
            <ExplorarCarnes category={category} setCategory={setCategory} />
            <CatalogoCarnes />
            <Testimonios />
            <FAQSection />
        </div>
    );
}

export default HomePage;