import styled from "styled-components";

export const Container = styled.div`
margin-top: 100px;
width: 100%;
height: auto;
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
margin-right: 1.75rem;

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
align-items: end;
bottom: 30px;

@media (max-width: 768px){
align-items: baseline;
margin-top: 20px;
}
`;

export const BannerText = styled.div`
width: 30%;
height:30%;
margin-left: 30px;
color: white;

@media (max-width: 768px){
width: 100%;
margin-top: 300px;
}
`;

export const SN = styled.div`
font-size: 30px;
font-weight: 400;
`;

export const Slogan = styled.div`
font-size:60px;
font-weight: 700;


@media (max-width: 768px){
font-size: 40px;
width: 100%;
text-align: center;
}
`;

export const Text = styled.div`
font-size:20px;
font-weight: 400;
`;

export const Services1 = styled.div`
width: 100%;
height: 700px;
display: flex;
justify-content: space-between;
flex-direction: row;
background-color: white;
margin-top: 100px;

@media (max-width: 768px){
text-align: center;
margin-top: 200px;
flex-direction: column;
}
`;

export const LeftContainerService1 = styled.div`
width: 40%;
height: 70%;
margin-left: 30px;
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
text-align: start;
background-color: white;
color: darkblue;

@media (max-width: 768px){
width: 80%;
text-align: center;
display: flex;
margin-left: 60px;
margin-bottom: 30px;
}
`;

export const RightContainerService1 = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 768px){
width: 90%;
display: flex;
justify-content: center;
align-items: end;
margin-left: 50px;
}
`;

export const Foto = styled.div`
width:100%;
height:90%;
display: flex;
flex-direction: row;
background-color: white;
`;

export const Foto2 = styled.div`
width:100%;
height:90%;
display: flex;
justify-content: flex-end;
flex-direction: row;
background-color: white;
`;

export const LeftImageRightContainer = styled.img`
background-color:brown;
width:45%;
height:80%;
`;

export const RightImageRightContainer = styled.img`
background-color:brown;
width:45%;
height:80%;
margin-top: 15%;
margin-left: 0.125rem;
`;

export const Services2 = styled.div`
width: 90%;
height: 700px;
display: flex;
justify-content: space-between;
flex-direction: row;
background-color: white;

@media (max-width: 768px){
text-align: center;
margin-top: 200px;
flex-direction: column-reverse;
justify-content: center;
align-items: center;
}
`;

export const LeftContainerService2 = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 768px){
width: 90%;
display: flex;
justify-content: center;
align-items: end;
}
`;

export const LeftImageLeftContainer = styled.img`
background-color:brown;
width:45%;
height:80%;
margin-top: 15%;
margin-right: 0.125rem;
`;

export const RightImageLeftContainer = styled.img`
background-color:brown;
width:45%;
height:80%;
`;

export const RightContainerService2 = styled.div`
width: 40%;
height: 70%;
margin-right: 30px;
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
text-align: start;
background-color: white;
color: darkblue;

@media (max-width: 768px){
width: 80%;
text-align: center;
display: flex;
margin-left: 60px;
margin-bottom: 30px;
}
`;

export const Services3 = styled.div`
width: 90%;
height: 700px;
display: flex;
justify-content: space-between;
flex-direction: row;
background-color: white;

@media (max-width: 768px){
margin-top: 100px;
flex-direction: column;
}
`;

export const LeftContainerService3 = styled.div`
width: 40%;
height: 70%;
margin-left: 30px;
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
text-align: start;
background-color: white;
color: darkblue;

@media (max-width: 768px){
width: 80%;
text-align: center;
display: flex;
margin-left: 60px;
margin-bottom: 30px;
}
`;

export const RightContainerService3 = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 768px){
width: 90%;
display: flex;
justify-content: center;
align-items: end;
margin-left: 50px;
}
`;

export const Services4 = styled.div`
width: 90%;
height: 700px;
display: flex;
justify-content: space-between;
flex-direction: row;
background-color: white;

@media (max-width: 768px){
margin-top: 150px;
flex-direction: column-reverse;
text-align: center;
}
`;

export const LeftContainerService4 = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 768px){
width: 90%;
display: flex;
justify-content: center;
align-items: end;
margin-bottom: 100px;
margin-left:20px;
}
`;

export const RightContainerService4 = styled.div`
width: 40%;
height: 70%;
margin-right: 30px;
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
text-align: start;
background-color: white;
color: darkblue;

@media (max-width: 768px){
width: 80%;
text-align: center;
display: flex;
margin-left: 60px;
margin-bottom: 30px;
}
`;
