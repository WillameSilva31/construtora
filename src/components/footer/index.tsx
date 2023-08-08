import { useNavigate } from "react-router-dom";
import { Agency, Atalhos, Contact, ContactChildren, ContactContent, ContactContentFather, Direitos, FooterCenterContainer, FooterCenterContainer2, FooterCenterContent1, FooterContainer, FooterLeftContainer, FooterLeftContent, FooterPPC, FooterRightContainer, FooterRightContent, Services } from "./styles";

const contato = [
    {meio:"endereço" ,local:"OAKS LANE SA" ,conteúdo:"Quai Gustave-Ador 62, 1207 Genebra" },
    {meio:"telefone" ,local:"" ,conteúdo:"+50 42 98232 7042" },
    {meio:"e-mail" ,local:"" ,conteúdo:"contato@PPC.ch" }
]

function Footer(){
    const navigate = useNavigate();

    return (
        <FooterContainer>
                <FooterLeftContainer>
                    <FooterLeftContent>
                        <FooterPPC>PPC</FooterPPC>
                    </FooterLeftContent>
                </FooterLeftContainer>
                <FooterCenterContainer>
                    <FooterCenterContent1>
                        {contato.map((contato)=>(
                            <ContactContentFather key="">
                                <ContactChildren>{contato.meio}</ContactChildren>
                                <span id="local">{contato.local}</span>
                                <ContactContent>{contato.conteúdo}</ContactContent>
                            </ContactContentFather>
                        ))}
                    </FooterCenterContent1>
                    <FooterCenterContainer2>
                        <Atalhos>
                            <Agency onClick={()=> navigate("/agency")} >Agência</Agency>
                            <Contact onClick={()=> navigate("/contact")} >Contato</Contact>
                            <Services onClick={()=> navigate("/services")} >Serviços</Services>
                        </Atalhos>
                        <Direitos>
                            © 2023. PRIMEIRO PLANO CONSTRUTORA. Todos os direitos reservados.
                            <br/>Desenhado por Willame Silva
                        </Direitos>
                    </FooterCenterContainer2>
                </FooterCenterContainer>
                <FooterRightContainer>
                    <FooterRightContent>
                    </FooterRightContent>
                </FooterRightContainer>
        </FooterContainer>
    )
}

export default Footer;