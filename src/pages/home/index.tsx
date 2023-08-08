import { AgencyCenterContent, AgencyCenterPicture, AgencyContainer, AgencyLeftContent, AgencyRightContent, AgencyRightPicture, Banner, BannerContainer, CenterDownSpace, CenterSpace, CenterUpSpace, Container, Down1, Down2, Image, LeftDownSpace, LeftSpace, LeftUpSpace, Os, QCI, RightDownSpace, RightDownSpaceBar, RightSpace, RightUpSpace, Space, Seta, TextAgencyContainer, Span, SpaceContainer, AgencyRightContainer, Agencia } from "./styles";
import House from "../../assets/casa.png"
import House12 from "../../assets/casa2.png"
import House22 from "../../assets/casa2.2.png"
import seta from "../../assets/seta.png"
import { useNavigate } from "react-router-dom";

interface Iprops {
    openMenu: boolean;
}

function Home ({openMenu}: Iprops){
    const navigate = useNavigate();

    return(
        <Container openMenu = {openMenu}>

            <SpaceContainer>
                <Space >
                    <LeftSpace>
                        <LeftUpSpace >
                            <QCI>
                                Qualidade.<br/>
                                Confiança.<br/>
                                Inovação.<br/>
                                <Seta alt="" src={seta}></Seta>
                                < span onClick={()=> navigate("/agency")} style ={{margin:"10px", cursor:"pointer",fontSize:"1.0625rem", fontWeight:"600"}}>nossos serviços</span>
                            </QCI>
                        </LeftUpSpace>
                        <LeftDownSpace></LeftDownSpace>
                    </LeftSpace>
                    <CenterSpace>
                        <CenterUpSpace></CenterUpSpace>
                        <CenterDownSpace>
                            <Down1></Down1>
                            <Down2></Down2>
                        </CenterDownSpace>
                    </CenterSpace>
                    <RightSpace>
                        <RightUpSpace></RightUpSpace>
                        <RightDownSpace>
                            <RightDownSpaceBar/>
                        </RightDownSpace>
                    </RightSpace>
                </Space>
            </SpaceContainer>
            <BannerContainer >
                <Banner >
                    <Image alt='' src={House}>
                    </Image>
                </Banner>
            </BannerContainer>
            <AgencyContainer>
                <AgencyLeftContent>
                    <Agencia>Agência</Agencia>
                    <TextAgencyContainer>
                        <Span>Primeiro Plano é uma agência de construção personalizada. Equipe qualificada. Design inovador e sustentável. Consultoria especializada. Transformando visões em realidade.</Span>
                    </TextAgencyContainer>
                    <br/>
                    <Os onClick={()=> navigate("/agency")} >
                        <Seta alt="" src={seta}></Seta>
                        <span style ={{margin:"10px"}}>saiba mais</span>
                    </Os>
                </AgencyLeftContent>
                <AgencyRightContainer>
                <AgencyCenterContent>
                    <AgencyCenterPicture alt="" src={House12}/>
                </AgencyCenterContent>
                <AgencyRightContent>
                    < AgencyRightPicture alt="" src={House22}/>
                </AgencyRightContent>
                </AgencyRightContainer>
            </AgencyContainer>
        </Container>
    )
}

export default Home;