import { ContactContainer, ContactContent, ContactContentFather, ContactFormContainer, Container, Form, LeftContainer, Ols, RightImage, TextContactForm, ContactText, ContactChildren, Text, ECC, ECCText, FormContainer, FirstName, Name, SecondName, ContactForm, Email, Call, MessageForm, Message, Send, TCPP, Agree, Button, Check} from "./styles";
import predio from "../../assets/predio-contato.png"
import { useState } from "react";

const contato = [
    {meio:"endereço" ,local:"OAKS LANE SA" ,conteúdo:"Quai Gustave-Ador 62, 1207 Genebra" },
    {meio:"telefone" ,local:"" ,conteúdo:"+50 42 98232 7042" },
    {meio:"e-mail" ,local:"" ,conteúdo:"contato@PPC.ch" }
]

function Contact (){
    const [name, setName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [email, setEmail] = useState("")
    const [cell, setCell] = useState("")
    const [message, setMessage] = useState("")
    const [check, setCheck] = useState(false)

    function sendEmail(e:any){
        e.preventDefault();
        if(name === "" || secondName === "" || email ==="" || cell === "" || check === false ){
            alert("preencha todos os campos");
            return;
        }
        alert("MENSAGEM ENVIADA!")
    }

    return(
        <Container>
            <ContactContainer>
                <LeftContainer>
                    <Text>
                    <Ols> - PRIMEIRO PLANO CONSTRUTORA</Ols>
                    <ContactText>Contato</ContactText>
                    {contato.map((contato)=>(
                    <ContactContentFather key="">
                        <ContactChildren>{contato.meio}</ContactChildren>
                        <span id="local">{contato.local}</span>
                        <ContactContent>{contato.conteúdo}</ContactContent>
                    </ContactContentFather>
                ))}
                </Text>
                </LeftContainer>
                <RightImage alt="" src={predio}></RightImage>
            </ContactContainer>
            <ContactFormContainer>
                <TextContactForm>
                    <ECC>Entre em contato conosco</ECC>
                    <ECCText>Por favor, não hesite em nos contatar diretamente. Em alternativa, pode enviar-nos uma mensagem preenchendo o formulário.</ECCText>
                </TextContactForm>
                <FormContainer>
                    <Form onSubmit={sendEmail}>
                        <Name>
                            <FirstName onChange={(e)=> setName(e.target.value)} value = {name} type="text" placeholder="Primeiro nome"/>
                            <SecondName onChange={(e)=> setSecondName(e.target.value)} value = {secondName}  type="text" placeholder="Sobrenome"/>
                        </Name>
                        <ContactForm>
                            <Email onChange={(e)=> setEmail(e.target.value)} value = {email}  placeholder="email" type="email"/>
                            <Call onChange={(e)=> setCell(e.target.value)} value = {cell} placeholder="Telefone" type="number"/>
                        </ContactForm>
                        <MessageForm>
                            <Message onChange={(e)=> setMessage(e.target.value)} value = {message}  placeholder="Sua mensagem" typeof="textarea"/>
                        </MessageForm>
                        <Send>
                            <Check>
                                <TCPP onChange={()=> setCheck(true)} type="checkbox" id="agree" name="agree"/>
                                <Agree>
                                    Eu concordo com os Termos e Condições e Política de Privacidade
                                </Agree>
                            </Check>
                            <Button type="submit" value="enviar"/>
                        </Send>
                    </Form>
                </FormContainer>
            </ContactFormContainer>
        </Container>
    )
}

export default Contact;