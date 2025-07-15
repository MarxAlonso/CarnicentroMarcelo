import {useState} from 'react'
import './HomePage.css'
import {Banner} from '../../components/Banner/Banner'
import {ExplorarCarnes} from '../../common/InicioComp/ExplorarCarnes'
export const HomePage = () =>{
    const[category,setCategory] = useState("Mas");
    return(
        <div>
            <Banner />
            <ExplorarCarnes category={category} setCategory={setCategory} />
        </div>
    )
}