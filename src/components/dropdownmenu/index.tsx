import { Container, LeftContainer, CenterContainer, RightContainer, Contact, ContactContent, LeftContent, CenterContent, ShortCut, DDMImage, Local} from "./styles";
import room from "../../assets/sala.png"
import { useNavigate } from "react-router-dom";

interface Iprops {
    openMenu: boolean;
}

const contato = [
    {meio:"endereço" ,local:"OAKS LANE SA" ,conteúdo:"Quai Gustave-Ador 62, 1207 Genebra" },
    {meio:"telefone" ,local:"" ,conteúdo:"+50 42 98232 7042" },
    {meio:"e-mail" ,local:"" ,conteúdo:"contato@PPC.ch" }
]

const atalho = [
    {nome:"Agência", link:"/agency"},
    {nome:"Serviços", link:"/services"},
    {nome:"Contato", link:"/contact"}
]

function DDM({openMenu}: Iprops){
    const navigate = useNavigate();
    return (
       <Container openMenu={openMenu}>
        
            <LeftContainer>
                {contato.map((contato)=>(
                    <LeftContent key="">
                        <Contact>{contato.meio}</Contact>
                        <Local id="local">{contato.local}</Local>
                        <ContactContent>{contato.conteúdo}</ContactContent>
                    </LeftContent>
                ))}
            </LeftContainer>
        
            <CenterContainer>
                {atalho.map((atalho)=>(
                    <CenterContent key="">
                        <ShortCut onClick={()=> navigate(atalho.link)}>{atalho.nome}</ShortCut>
                    </CenterContent>   
                ))}
            </CenterContainer>
            <RightContainer>
                    <DDMImage src={room} alt="" />
            </RightContainer>
       </Container>
    )
}

export default DDM;