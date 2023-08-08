import { BannerContainer, BannerImages, BannerText, Container, Image1, Image2, SN, Slogan, Text, TextContainer, TextVV, VV, VVCard, VVDText, VVDescription, VVImage, VVImageText, VisionValueCards, VisionValueContainer, VisionValueText } from "./styles";
import predio11 from "../../assets/predio1.1.png"
import predio12 from "../../assets/predio1.1 - Copia.png"
import fundo1 from "../../assets/fundo 1.png"
import fundo2 from "../../assets/fundo 2.png"
import fundo3 from "../../assets/fundo 3.png"

const VisionValue = [
    {TextCard:"Investir para um impacto duradouro com uma abordagem responsável e consciente.",Description:"Temos os meios e competências para criar um impacto positivo considerável, investindo de forma responsável e consciente. Não tomamos decisões de investimento motivadas apenas por benefícios financeiros de curto prazo, mas garantindo que cada investimento seja ético e eficaz.", image:fundo1},
    {TextCard:"Um compromisso total com projetos de grande escala.",Description:"Os projetos mais ambiciosos e importantes são muitas vezes os mais difíceis de concretizar, sendo fundamental apoiar os indivíduos que a eles se dedicam, sejam quais forem as dificuldades encontradas. É por isso que, quando firmamos uma parceria, estamos totalmente comprometidos em todos os níveis. Estamos empenhados em apoiar nossas ideias e ir além dos limites do esperado para criar um impacto perceptível.", image:fundo2},
    {TextCard:"Moldando o ambiente com uma abordagem responsável e cuidadosa para o setor imobiliário.",Description:"As decisões que tomamos no setor imobiliário têm um impacto real e duradouro em nosso meio ambiente e em nosso mundo. Vemos isso como uma oportunidade de fazer uma diferença significativa. É por isso que consideramos cuidadosamente cada etapa antes de tomar uma decisão.", image:fundo3}
]

function Agency(){
    return(
        <Container>
            <TextContainer>
                <BannerText>
                    <SN> - SOBRE NÓS </SN>
                    <Slogan>    
                        entregando
                        real de alta qualidade
                        Desenvolvimento imobiliário
                    </Slogan>
                    <Text>
                        Na Primeira Plano Construtora, somos uma construtora apaixonada por transformar sonhos em realidade. Com uma equipe altamente qualificada de arquitetos, engenheiros e especialistas em construção, estamos comprometidos em entregar soluções personalizadas e de alta qualidade para nossos clientes.
                    </Text>
                </BannerText>
            </TextContainer>
            <BannerContainer>
                <BannerImages>
                    <Image1 alt="" src={predio12}/>
                    <Image2 alt="" src = {predio11}/>
                </BannerImages>
            </BannerContainer>
            <VisionValueContainer>
                <VisionValueText>
                    <VV>VISÃO<br/>&<br/>VALORES</VV>
                    <TextVV>Em resumo, nosso objetivo é ser uma construtora líder no mercado, reconhecida por nossa excelência, comprometimento com a qualidade e satisfação do cliente. Estamos empenhados em tornar cada projeto um sucesso, proporcionando resultados excepcionais e construindo relacionamentos duradouros com nossos clientes.</TextVV>
                </VisionValueText>
                <VisionValueCards>
                {VisionValue.map((VisionValue)=>(
                    <VVCard key="">
                        <VVImage >
                            <VVImageText>{VisionValue.TextCard}</VVImageText>
                        </VVImage>
                        <VVDescription>
                            <VVDText>
                                {VisionValue.Description}
                            </VVDText>
                        </VVDescription>
                    </VVCard>
                ))}
                </VisionValueCards>
            </VisionValueContainer>
        </Container>
    )
}

export default Agency;