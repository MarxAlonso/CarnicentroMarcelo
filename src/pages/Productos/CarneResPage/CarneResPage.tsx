import {CarneResComp} from "../../../common/CarneResComp/CarneResComp";
import SEO from '../../../components/SEO/SEO'

const CarneResPage = () =>{
    return(
        <>
            <SEO title="Carne de Res" description="Catálogo de carne de res en Carnicentro Marcelo. Cortes premium para asados y preparaciones." pathname="/carneres" />
            <CarneResComp />
        </>
    )
}

export default CarneResPage;