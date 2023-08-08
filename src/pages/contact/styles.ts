import styled from "styled-components";

export const Container = styled.div`
margin-top: 100px;
width: 100%;
height: 100%;
flex-direction: column;
background-color: black;
`;

export const ContactContainer = styled.div`
width: 100%;
height: 980px;
display: flex;
flex-direction: row;

`;

export const LeftContainer = styled.div`
width: 60%;
height: 100%;
background-color: darkblue;
padding-left:30px;
display: flex;
align-items: end;
`;

export const Text = styled.div`
width:auto;
height:auto;
`;

export const Ols = styled.div`
font-size:20px;
color:white;
`;

export const ContactText = styled.div`
font-size:70px;
font-weight:900;
color: white;
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
background-color:darkblue;
font-size:23px;
height: 30px;
color:white;
font-weight: 500;
`;

export const ContactContent = styled.div`
color: white;
background-color: darkblue;
`;

export const RightImage = styled.img`
width: 40%;
height: 100%;
background-color: brown;
`;

export const ContactFormContainer = styled.div`
width:100%;
height:700px;
background-color: azure;
display: flex;
flex-direction: row;

@media (max-width: 768px){
flex-direction: column;
height: 800px;
}
`;

export const TextContactForm = styled.div`
width:50%;
height:100%;
display: flex;
flex-direction: column;
justify-content: center;

@media (max-width: 768px){
width: 100%;
}
`;

export const ECC = styled.div`
width:30%;
height:auto;
font-size: 50px;
font-weight: 600;
color: darkblue;
padding-left: 2.5rem;
background-color:azure;

@media (max-width: 768px){
width: 100%;
}
`;

export const ECCText = styled.div`
width:40%;
height:auto;
font-size:20px;
font-weight: 200;
color: darkblue;
padding-left: 2.5rem;
background-color:azure;

@media (max-width: 768px){
width: 90%;
}
`;

export const FormContainer = styled.div`
width:50%;
height:100%;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px){
width: 100%;
margin-bottom: 100px;
}
`;

export const Form = styled.form`
width:90%;
height:100%;
background-color:azure;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const Name = styled.div`
width:100%;
height: 75px;
display: flex;
flex-direction:row;
justify-content: space-around;
`;

export const FirstName = styled.input`
display:block;
width: 45%;
height: 100%;
padding-left: 2%;
font-size:20px;
border-radius: 5px;
`;

export const SecondName = styled.input`
display:block;
width: 45%;
height: 100%;
padding-left: 2%;
font-size:20px;
border-radius: 5px;
`;

export const ContactForm = styled.div`
width:100%;
height: 75px;
display: flex;
flex-direction:row;
justify-content: space-around;
margin-top: 40px;
`;

export const Email = styled.input`
display:block;
width: 45%;
height: 100%;
padding-left: 2%;
font-size:20px;
border-radius: 5px;
`;

export const Call = styled.input`
display:block;
width: 45%;
height: 100%;
padding-left: 2%;
font-size:20px;
border-radius: 5px;
`;

export const MessageForm = styled.div`
width:100%;
height: 180px;
margin-top: 40px;
display: flex;
flex-direction:row;
justify-content: space-around;
`;

export const Message = styled.textarea`
display:block;
width:95%;
height:100%;
font-size: 20px;
padding-left: 2%;
padding-top: 2%;
border-radius: 5px;
`;

export const Send = styled.div`
width: 100%;
height: 75px;
display: flex;
justify-content: space-between;
flex-direction: row;
padding-left: 2%;
padding-top: 2%;
align-items: center;
`;

export const Check = styled.div`
width: 40%;
height:100%;
display: flex;
flex-direction:row;
padding: 0.3125rem;
`;

export const TCPP = styled.input`
width: 1.875rem;
border-radius: 5px;
cursor: pointer;
`;

export const Agree = styled.label`
display:flex;
font-size:0.9375rem;
padding-top: 1.25rem;
padding-left: 0.3125rem;
`;

export const Button = styled.input`
width:40%;
height:100%;
background-color:darkblue;
color:white;
border-radius:0.3125rem;
font-size: 1.25rem;
margin-top: 1.875rem;
margin-right: 1.3125rem;
cursor: pointer;
`;