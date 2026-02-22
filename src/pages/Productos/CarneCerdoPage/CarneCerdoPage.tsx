import { CarneCerdoComp } from "../../../common/CarneCerdosComp/CarneCerdoComp"
import SEO from '../../../components/SEO/SEO'

const CarneCerdoPage = () =>{
    return(
        <>
            <SEO title="Carne de Cerdo" description="Catálogo de carne de cerdo en Carnicentro Marcelo. Cortes frescos y de calidad para tus recetas." pathname="/carnecerdo" />
            <CarneCerdoComp />
        </>
    )
}

export default CarneCerdoPage;