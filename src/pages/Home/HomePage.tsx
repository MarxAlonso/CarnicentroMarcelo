import {useState} from 'react'
import './HomePage.css'
import {Banner} from '../../components/Banner/Banner'
import {ExplorarCarnes} from '../../common/InicioComp/ExplorarCarnes'
import { CatalogoCarnes } from '../../common/InicioComp/CatalogoCarnes'
const HomePage = () =>{
    const[category,setCategory] = useState("Mas");
    return(
        <div>
            <Banner />
            <ExplorarCarnes category={category} setCategory={setCategory} />
            <CatalogoCarnes />
        </div>
    )
}
export default HomePage;