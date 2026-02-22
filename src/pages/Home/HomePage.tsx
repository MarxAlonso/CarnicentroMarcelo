import {useState} from 'react'
import './HomePage.css'
import {Banner} from '../../components/Banner/Banner'
import {ExplorarCarnes} from '../../common/InicioComp/ExplorarCarnes'
import { CatalogoCarnes } from '../../common/InicioComp/CatalogoCarnes'
import SEO from '../../components/SEO/SEO'
const HomePage = () =>{
    const[category,setCategory] = useState("Mas");
    return(
        <div>
            <SEO title="Inicio" description="Carnicentro Marcelo - Carnes de res y cerdo de calidad. Explora nuestro catálogo y contáctanos para pedidos." />
            <Banner />
            <ExplorarCarnes category={category} setCategory={setCategory} />
            <CatalogoCarnes />
        </div>
    )
}
export default HomePage;