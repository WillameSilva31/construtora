import styled from "styled-components";

export const FooterContainer = styled.div`
width: 100%;
height: 900px;
display: flex;
flex-direction: row;

@media (max-width: 768px){
height: 600px;
}
`;

export const FooterLeftContainer = styled.div`
width:33.5%;
height: 100%;
background-color: darkblue;
display: flex;
border-right: 1px solid gray;

@media (max-width: 768px){
display: none;
}
`;

export const FooterLeftContent = styled.div`
height: 100%;
width: 70%;
display: flex;
justify-content: center;
align-items: flex-end;
margin-left: 11.25rem;
transform:rotate(270deg);
`;

export const FooterPPC = styled.p`
font-size: 470px;
color: blue;
`;

export const FooterCenterContainer = styled.div`
width: 33%;
height: 100%;
background-color: darkblue;
display: flex;
flex-direction: column;
border-right: 1px solid gray;

@media (max-width: 768px){
width: 100%;
padding-left: 20px;
padding-top: 100px;
}
`;

export const FooterCenterContent1 = styled.div`
width:100%;
height:70%;
display: flex;
flex-direction: column;
justify-content: end;
border-bottom: 1px solid gray;
padding-left: 20px;
padding-bottom: 20px;

@media (max-width: 768px){
height: 35%;
}
`;

export const FooterCenterContainer2 = styled.div`
width:100%;
height:30%;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px){
height: 65%;
display: flex;
flex-direction: column;
}
`;

export const Atalhos = styled.div`
width:100%;
height:50%;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

@media (max-width: 768px){
flex-direction: column;
align-items: flex-start;
padding-left: 28px;
padding-top: 20px;

}
`;

export const Agency = styled.div `
background-color:darkblue;
color:gray;
cursor: pointer;
`;

export const Services = styled.div `
background-color:darkblue;
color:gray;
cursor: pointer;
`;

export const Contact = styled.div `
background-color:darkblue;
cursor: pointer;
color:gray;
`;

export const FooterRightContainer = styled.div`
width:33.5%;
height:100%;
background-color: darkblue;
display: flex;
align-items: end;

@media (max-width: 768px){
display: none;
}
`;

export const FooterRightContent = styled.div`
width:100%;
height:auto;
`;

export const ContactContentFather = styled.div`
width:100%;
display:flex;
flex-direction:column;
padding: 10px;
margin-top: 30px;


#local {
    color: white;
    font-weight: 800;
}`;

export const ContactChildren = styled.div`
font-size:23px;
height: 30px;
color:white;
font-weight: 500;
`;

export const ContactContent = styled.div`
color: white;

`;

export const Direitos = styled.div`
color:gray;
width: 70%;
text-align: center;
display: flex;

@media (max-width: 768px){
width: 100%;
padding-left: 25px;
padding-top: 10px;
margin-left: 0;
text-align: start;
}
`;
