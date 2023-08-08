import { BannerContainer, BannerImages, BannerText, Container, Foto, Foto2, Image1, Image2, LeftContainerService1, LeftContainerService2, LeftContainerService3, LeftContainerService4, LeftImageLeftContainer, LeftImageRightContainer, RightContainerService1, RightContainerService2, RightContainerService3, RightContainerService4, RightImageLeftContainer, RightImageRightContainer, SN, Services1, Services2, Services3, Services4, Slogan, Text, TextContainer } from "./styles";
import esc from "../../assets/Escritório.png"
import esc2 from "../../assets/Escritório - Copia.png"
import LIRCS1 from "../../assets/services foto1.1.png"
import RIRCS1 from "../../assets/services foto1.2.png"
import LILCS2 from "../../assets/services foto2.1.png"
import RILCS2 from "../../assets/services foto2.2.png"
import LIRCS3 from "../../assets/services foto3.1.png"
import RIRCS3 from "../../assets/services foto3.2.png"
import LILCS4 from "../../assets/services foto 4.1.png"
import RILCS4 from "../../assets/services foto 4.2.png"

function Services (){
    return(
        <Container>
            <TextContainer>
                <BannerText>
                    <SN> - PRIMEIRO PLANO </SN>
                    <Slogan>    
                        SERVIÇOS
                    </Slogan>
                    <Text>
                        A Primeira Plano Construtora concentra-se em empreendimentos imobiliários sustentáveis ​​e ecologicamente corretos que tenham um impacto positivo na biodiversidade e nas comunidades locais.
                    </Text>
                </BannerText>
            </TextContainer>
            <BannerContainer>   
                <BannerImages>
                    <Image1 alt="" src={esc2}/>
                    <Image2 alt="" src={esc}/>       
                </BannerImages>
            </BannerContainer>
            <Services1>
                <LeftContainerService1>
                    <Slogan>    
                        Aquisição de Imóveis
                    </Slogan>
                    <Text>
                        Nosso foco é a aquisição de propriedades e terrenos para fins de empreendimentos imobiliários de alto padrão. Nossa experiência comprovada nesta área é evidenciada por nosso histórico de sucesso na aquisição de propriedades, colocando as necessidades e os interesses dos vendedores em primeiro lugar. Entendemos a importância de negociações claras e justas e buscamos sempre manter a transparência em todo o processo de transação para garantir a satisfação de todas as partes envolvidas.
                    </Text>
                </LeftContainerService1>
                <RightContainerService1>
                    <Foto>
                        <LeftImageRightContainer alt="" src={LIRCS1}/>
                        <RightImageRightContainer alt="" src={RIRCS1}/>
                    </Foto>
                </RightContainerService1>
            </Services1>
            <Services2>
                <LeftContainerService2>
                    <Foto2>
                        <LeftImageLeftContainer alt="" src={LILCS2} />
                        <RightImageLeftContainer alt="" src={RILCS2} />
                    </Foto2>
                </LeftContainerService2>
                <RightContainerService2>
                    <Slogan>    
                        Desenvolvimento Imobiliário
                    </Slogan>
                    <Text>
                    Especializados na área do desenvolvimento imobiliário inovador e sustentável, colaboramos com parceiros locais fortes e de confiança. Nossa equipe de especialistas se dedica a desenvolver promoções excepcionais que atendam às mais altas necessidades de nossos clientes e tenham um impacto benéfico na comunidade local e no meio ambiente. Estamos comprometidos com a excelência e práticas comerciais éticas em todas as nossas iniciativas.
                    </Text>
                </RightContainerService2>
            </Services2>
            <Services3>
                <LeftContainerService3>
                    <Slogan>    
                        Gerenciamento de projetos
                    </Slogan>
                    <Text>
                        Os projetos imobiliários podem ser complexos e requerem experiência e gerenciamento de projetos adequados para garantir seu sucesso. Nossa equipe inicia cada projeto com uma liderança forte e competente, dando aos nossos clientes os mais altos níveis de confiança desde o início. Temos profundo conhecimento do setor e sólido conhecimento do mercado, o que nos permite orientar nossos clientes de maneira eficaz em todas as etapas do processo, desde o projeto inicial até a conclusão final.
                    </Text>
                </LeftContainerService3>
                <RightContainerService3>
                    <Foto>
                        <LeftImageRightContainer alt="" src={LIRCS3} />
                        <RightImageRightContainer alt="" src={RIRCS3} />
                    </Foto>
                </RightContainerService3>
            </Services3>
            <Services4>
                <LeftContainerService4>
                    <Foto2>
                        <LeftImageLeftContainer alt="" src={LILCS4}/>
                        <RightImageLeftContainer alt="" src={RILCS4} />
                    </Foto2>
                </LeftContainerService4>
                <RightContainerService4>
                    <Slogan>    
                        Corretagem
                    </Slogan>
                    <Text>
                        Nossa equipe profissional e dedicada possui ampla proficiência na área de corretagem imobiliária. Combinamos conhecimento do mercado local, conhecimento especializado e ferramentas e recursos de ponta para oferecer soluções de corretagem superiores. Apoiamos nossos clientes com suas necessidades de compra, venda e financiamento, com base em suas necessidades individuais específicas. 
                    </Text>
                </RightContainerService4>
            </Services4>
        </Container>
    )
}

export default Services;