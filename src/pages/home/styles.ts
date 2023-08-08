import styled from "styled-components";

export const Container = styled.div<{openMenu: boolean}>`
width: 100%;
height: 100%;
display:${({ openMenu})=> openMenu?'none' :'flex'};
flex-direction: column;
position: sticky;

*{
padding: 0;
}



@media (max-width:768px) {
width: 100% ;
}

`;
export const SpaceContainer = styled.div`
width:100%;
height:1100px;
display:flex;
position: absolute;
`;

export const BannerContainer = styled.div`
width: 100%;
height: 1100px;
display:flex;
position: relative; 
`;


export const Banner = styled.div`
width: 100%;
height: 96%;
z-index: -2;

@media (max-width:768px) {
width: 100%;
position: absolute;
height: 100%;
display: flex;
align-items: end;
}
`;

export const Space = styled.div`
width: 100%;
height: 100%;
position: absolute;
display: flex;
align-items: center;
flex-direction: row;
margin-top: 100px;
z-index: 1;
`;

export const LeftSpace = styled.div`
width:33.5%;
height: 100%;
display: flex;
flex-direction: column;
border-right: 1px solid gray;

@media (max-width:768px) {
border: none;
width: 100%;
}
`;

export const LeftUpSpace = styled.div`
width:100%;
height:50%;
background-color:white;

@media (max-width:768px) {
position: absolute;
width:100% ;
height: 100px;
}
`;

export const QCI = styled.div`
font-size:40px;
font-weight:900;
color: darkblue;
padding: 50px;
padding-left: 30px;
`;

export const Os = styled.div`
margin-left:60px;
color: darkblue;
font-size: 17px;
font-weight: 600;
cursor: pointer;
background-color: white;
position: absolute;
`;

export const Seta = styled.img`
width:0.9375rem;
`;

export const LeftDownSpace = styled.div`
width:9%;
height:50%;
background-color:white;

@media (max-width:768px) {
display: none;
}
`;

export const CenterSpace = styled.div`
width:33%;
height: 100%;
display: flex;
flex-direction: column;
border-right: 1px solid gray;

@media (max-width:768px) {
display: none;
}
`;

export const CenterUpSpace = styled.div`
width:100%;
height: 28%;
background-color:white;
`;

export const CenterDownSpace = styled.div`
width:100%;
height:60%;
display: flex;
justify-content: space-between;
`;

export const Down1 = styled.div`
width:9%;
height:100%;
background-color:white;
`;

export const Down2 = styled.div`
width:9%;
height:100%;
background-color:white;
`;

export const RightSpace = styled.div`
width:33.5%;
height: 100%;
display: flex;
flex-direction: column;

@media (max-width:768px) {
display: none;
}
`;

export const RightUpSpace = styled.div`
width:100%;
height:5%;
background-color:white;
`;

export const RightDownSpace = styled.div`
width:100%;
height:95%;
display: flex;
justify-content: flex-end;
`;

export const RightDownSpaceBar = styled.div`
width:9%;
height:100%;
background-color:white;
`;

export const Image = styled.img`
width: 100%;
height: 100%;
z-index: -1;
position: relative;

@media (max-width:768px) {
position: absolute;
height: 50%;
}
`;

export const AgencyContainer = styled.div`
width: 100%;
height: 500px;
display: flex;
flex-direction: row;
background-color: white;

@media (max-width:768px) {
height: 800px;
flex-direction: column;
}
`;

export const AgencyLeftContent = styled.div`
width:33.5%;
height: 100%;
background-color: white;
border-right: solid 1px gray;

@media (max-width:768px) {
width:100% ;
height: 100%;
}
`;

export const Agencia = styled.div`
font-size:70px;
font-weight:900;
color: darkblue;
padding-top: 60px;
padding-left: 60px;
padding-bottom: 10px;

@media (max-width:768px) {
font-size: 30px;
font-weight: 600;
border: none;
}
`;

export const TextAgencyContainer = styled.div`
font-size:20px;
font-weight:600;
color: darkblue;
padding-left: 3.75rem;
padding-right: 0.3125rem;
text-align: start;

@media (max-width:768px) {
width: 90%;
font-size: 15px;
font-weight: 500;
}
`;

export const Span = styled.span`
text-align:center;
font-size: 17px;
padding: 28px;
`;

export const AgencyRightContainer = styled.div`
width: 66.5%;
height: 100%;
display: flex;
flex-direction: row;

@media (max-width:768px) {
width:100% ;
height: max-content;
padding-bottom: 40px;
}
`;

export const AgencyCenterContent = styled.div`
width: 49.7%;
height: 100%;
display: flex;
justify-content: flex-end;
background-color: white;
border-right: 1px solid gray;

@media (max-width:768px) {
border:none;
padding-right: 1px;
}
`;

export const AgencyCenterPicture = styled.img`
width: 50%;
height: 350px;
margin-top: 20px;

@media (max-width:768px) {
width:90% ;
}
`;

export const AgencyRightContent = styled.div`
width:50.53%;
height: 100%;
display: flex;
justify-content: flex-start;
background-color: white;
`;

export const AgencyRightPicture = styled.img`
width: 50%;
height: 350px;
display: flex;
margin-top: 60px;

@media (max-width:768px) {
width:95% ;
}
`;


