import {useState} from 'react'
import './HomePage.css'
import {Header} from '../../components/Header/Header'
import {ExplorarCarnes} from '../../components/ExplorarCarnes/ExplorarCarnes'
export const HomePage = () =>{
    const[category,setCategory] = useState("Mas");
    return(
        <div>
            <Header />
            <ExplorarCarnes category={category} setCategory={setCategory} />
        </div>
    )
}