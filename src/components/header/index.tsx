import { useNavigate } from "react-router-dom";
import ddm from "../../assets/ddm.png"
import { Button, CenterContainer, Container, DDMButton, LeftContainer, PPC,PP, C , RightContainer, Ddm } from "./styles";

interface Iprops {
    openMenu: boolean;
    setOpenMenu: (openMenu: boolean)=> void
}

function Header({openMenu, setOpenMenu}: Iprops){
    const navigate = useNavigate();

    return (
        <Container >
            <LeftContainer>
                <DDMButton onClick={()=> {setOpenMenu(!openMenu)}} >
                    <Ddm alt="" src={ddm}></Ddm>
                </DDMButton>
                <Button openMenu={openMenu} onClick={()=> navigate("/agency")}>
                    Agencia
                </Button>
                
            </LeftContainer>
            <CenterContainer>
                <PPC  onClick={()=> navigate("/")}>
                    <PP>Primeiro Plano</PP>
                    <C>Construtora</C>
                </PPC>      
            </CenterContainer>
            <RightContainer>
                <Button openMenu={openMenu} onClick={()=> navigate("/contact")} >
                    Contato
                </Button>
                <Button openMenu={openMenu} onClick={()=> navigate("/services")}>
                    Serviços
                </Button>
            </RightContainer>
        </Container>
    )
}

export default Header;