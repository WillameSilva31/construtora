import styled from "styled-components";

export const Container = styled.div`
margin-top: 80px;
width: 100%;
height: auto;
background-color: white;
flex-direction: column;
`;

export const BannerContainer = styled.div`
width:100%;
height:1050px;
background-color: darkblue;
display: flex;
justify-content: flex-end;

@media (max-width: 768px){
height: 950px;
}
`;

export const BannerImages = styled.div`
background-color: darkblue;
width: 82%;
height: 100%;
display: flex;
flex-direction: row;
align-items: flex-end;

@media (max-width: 768px){
height: 100%;
}
`;

export const Image1 = styled.img`
width:40%;
height: 65%;
background-color: black;
margin-right: 0.9375rem;

@media (max-width: 768px){
height: 39%;
}
`;

export const Image2 = styled.img`
width:59.5%;
height:100%;
background-color: black;

@media (max-width: 768px){
height: 60%;
}
`;

export const TextContainer = styled.div`
width:100%;
height:1050px;
position: absolute;
display: flex;
align-items: center;

@media (max-width: 768px){
align-items: baseline;
margin-top: 20px;
}
`;

export const BannerText = styled.div`
width: 40%;
height:40%;
color: white;
margin-left: 1.875rem;
flex-direction: column;

@media (max-width: 768px){
width: 100%;
margin-top: 50px;
}
`;

export const SN = styled.div`
font-size: 30px;
font-weight: 400;
`;

export const Slogan = styled.div`
font-size:60px;
font-weight: 700;

`;

export const Text = styled.div`
font-size:20px;
font-weight: 400;
`;

export const VisionValueContainer = styled.div`
margin-top:50px ;
width:100%;
height:1300px;
background-color:black;
flex-direction: column;

@media (max-width: 768px){
height: 2300px;
}
`;

export const VisionValueText = styled.div`
width:100%;
height: 30%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
color: darkblue;

@media (max-width: 768px){
height: 15%;
padding-left: 50px ;
}
`;

export const VV = styled.div`
width:30%;
height:100%;
background-color:white;
font-size: 50px;
font-weight: 900;
display: flex;
justify-content: center;
align-items: center;
`;

export const TextVV = styled.div`
margin-left: 50px;
width:50%;
height:100%;
display:flex;
background-color: white;
padding-right: 40px;
padding-left: 40px;
justify-content:center;
align-items:center;
`;

export const VisionValueCards = styled.div`
width: 100%;
height:70%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
background-color: white;

@media (max-width: 768px){
flex-direction: column;
height: 85%;
}
`;

export const VVCard = styled.div`
width: 500px;
height:85%;
border: 1px solid;
margin: 10px;
flex-direction: column;
background-color: white;

@media (max-width: 768px){
height: 100%;
width: 400px;
}
`;

export const VVImage = styled.div`
width: 100%;
height:65%;
background-color:darkblue;
display: flex;
justify-content: center;
align-items: end;
`;

export const VVImageText = styled.div`
width: 100%;
height: auto;
margin-left: 20px;
margin-bottom:20px;
font-size:40px;
color: white;
z-index: 1;
`;

export const VVDescription = styled.div`
width:100%;
height: 35%;
background-color:white;
display: flex;
justify-content: center;
align-items: center;

`;

export const VVDText = styled.span`
width:85%;
height:90%;
margin-top: 20px;
display: flex;
overflow: -moz-hidden-unscrollable;
overflow-x: hidden;
`;

