import { NosotrosInicio } from '../../common/NosotrosComp/NosotrosInicio';
import SEO from '../../components/SEO/SEO'

const NosotrosPage = () =>{
    return(
        <div>
            <SEO title="Nosotros" description="Conoce a Carnicentro Marcelo: nuestra historia, valores y compromiso con la calidad en carnes." pathname="/nosotros" />
            <NosotrosInicio />
        </div>
    )
}
export default NosotrosPage;