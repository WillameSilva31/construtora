import styled from "styled-components";

export const Container = styled.div<{openMenu: boolean}>`
width: 100%;
height:100vh;
display:${({ openMenu})=> openMenu?'flex' :'none'};
justify-content: center;
background-color: darkblue;
position: fixed;
z-index: 50;

@media (max-width:768px){
height: 100%;
width: 100%;
flex-direction: column;
overflow-y: auto;
padding-top: 400px;
}
`;

export const LeftContainer = styled.div`
width: 33%;
height: 100%;
display: flex;
flex-direction: column;
background-color: darkblue;
margin-top: 100px;

@media (max-width:768px){
border-left: none;
display: flex;
margin-left: 20px;
width: 100%;
}
`;

export const LeftContent = styled.div`
width:100%;
display:flex;
flex-direction:column;
padding: 10px;
margin-top: 30px;

#local {
    color: white;
    font-weight: 800;
}
`;

export const CenterContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
background-color: darksblue;
border-left: 1px solid gray;
margin-top: 100px;
height: 100%;

@media (max-width: 768px) {
border-bottom: 1px solid gray;
border-left: none;
padding-bottom: 40px;
}
`;

export const CenterContent = styled.div`
width:100%;
display:flex;
flex-direction:column;
margin-top: 30px;
margin-left: 20px;
`;

export const ShortCut = styled.div`
font-size: 40px;
font-weight:400;
color: white;
cursor: pointer;

@media (max-width: 768px) {
font-size: 70px;
margin-left: 1.0625rem;
}
`;

export const RightContainer = styled.div`
display: flex;
background-color: white;
width: 33%;
margin-top: 100px;

@media (max-width: 768px) {
visibility: hidden;
}`;

export const DDMImage = styled.img`
background-size: cover;
`;

export const Contact = styled.div`
background-color:darkblue;
font-size:23px;
height: 30px;
color:white;
font-weight: 500;

@media (max-width: 768px) {
font-size: 26px;
}
`;

export const Local = styled.span`
font-size:auto;

@media (max-width: 768px) {
font-size: 26px;
padding-top: 5px;
}
`;

export const ContactContent = styled.div`
color: white;
background-color: darkblue;

@media (max-width: 768px) {
font-size: 23px;
font-weight: 600;
padding-top: 10pxa;
}
`;