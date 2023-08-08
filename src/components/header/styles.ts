import styled from "styled-components";

export const Container = styled.header `
width: 100%;
height: 100px;
background-color: white;
padding: 0 0;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
z-index: 51;
border: 1px solid gray;

@media (max-width:768px) {
height: 100px;
}
`;

export const LeftContainer = styled.div`
display: flex;
align-items: center;
width: 33%;

`;

export const DDMButton = styled.div`
width: 5.625rem;
height: 98px;
display: flex;
justify-content: center;
align-items: center;
color: darkblue;

&:hover{
    background-color: darkblue;
    color: white;
    transition: 1s;
}
`;

export const Ddm = styled.img`
width: 40px;
`;

export const Button = styled.div<{openMenu: boolean}>`
width: 9.375rem;
height: 98px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
border: 1px solid gray;
color: darkblue;
visibility: ${({openMenu})=> openMenu? 'hidden' : 'visible'};

&:hover {
    background-color: darkblue;
    color: white;
    transition: 1s;
}

@media (max-width: 768px){
display: none;
}
`;


export const CenterContainer = styled.div`
background-color: white;
width: 33%;
height:98px;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid gray;
position: static;
`;

export const PPC = styled.div`
text-align: center;
margin: 0 auto;
color: darkblue;
cursor: pointer;
`;

export const PP = styled.div`
font-size: 25px;
font-weight: 700;
color: darkblue;

&:hover {
    font-size:30px;
    font-weight: 900;
    transition: 0.5s;
}
`;

export const C = styled.div`
font-size: 15px;
font-weight: 500;
color: darkblue;

&:hover {
    font-size: 20px;
    font-weight: 600;
    transition: 0.5s;
}
`;

export const RightContainer = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 33%;
visibility: visible;
`;
