import React from 'react';
import styled from 'styled-components'
import SocialNetworks from './SocialNetworks';
// images
import MailSVG from '../assets/images/svg/mail.svg'
import PinSVG from '../assets/images/svg/pin.svg'
import PhoneSVG from '../assets/images/svg/phonecall.svg'

export default function About() {

  return (
    <Container>
      <div className='col-md-8 col-sm-12'>
        <div>

          <AboutContainer>
            <PhotoContainer>
              <PhotoImage src='/static/e68e3276-e1b1-4648-91b4-8a89fe6ae0c0.jpg' />
              <NameText>Luismar Pinheiro</NameText>
            </PhotoContainer>
            <DescriptionText>
              A contabilidade foi a responsável por abrir portas em minha vida, uma vez que me encontrei sem saída, o curso me proporcionou liberdade financeira, confiança, honestidade, amizade e muitas outras coisas que eu mesmo pude notar ao decorrer dos anos.
              Eu trabalho desde de novo e sempre pensando em como seria minha vida no futuro, nascido e criado em Aurilândia-GO, cheio de sonhos e vontades, queria saber como eu venceria a pobreza do interior de Goiás. Por volta dos 22 anos me mudei para Goiânia-GO afim de gerar possibilidades, e, portanto, aqui estou, tentando ajudar os empresários que desejam ter sucesso e fazendo o meu melhor para que eu esteja sempre prosperando.
            </DescriptionText>
            <SocialNetworks />
          </AboutContainer>

          <div>
            <InfoContainer>
              <InfoIcon>
                <PinSVG width={20} height={20} />
              </InfoIcon>
              <div>
                <InfoText>Rua Jamil Abrão QD 17D LT 14</InfoText>
                <InfoText>St Roviario Cep 74.430-290</InfoText>
                <InfoText>Goiânia GO</InfoText>
              </div>
            </InfoContainer>

            <InfoContainer>
              <InfoIcon>
                <MailSVG width={20} height={20} />
              </InfoIcon>
              <InfoText>
                lfmcontabilidade@terra.com.br
              </InfoText>
            </InfoContainer>

            <InfoContainer>
              <InfoIcon>
                <PhoneSVG width={20} height={20} />
              </InfoIcon>
              <InfoText className='font-bold'>
                (62) 3295-8152
            </InfoText>
            </InfoContainer>
          </div>

        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  color: rgba(255,255,255,1);
  margin-bottom: 50px;
  padding: 0px 15px;
  @media(min-width: 600px) {
    margin-bottom: 0px;
    padding: 0px;
  }
`
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  margin-bottom: 50px;
  border-bottom: 1px solid rgba(255,255,255,0.2);
`
const PhotoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
const PhotoImage = styled.img`
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 25px;

`
const NameText = styled.h5`
  color: rgba(255,255,255,1);
  font-size: 1.4em;
  font-weight: bolder;
  position: relative;
  margin-top: 10px;
  margin-left: 15px;
  @media(min-width: 600px) {
    font-size: 1.1em;
  }
`
const DescriptionText = styled.p`
  text-align: left;
  color: rgba(255,255,255,0.7);
  font-size: 0.92em;
  margin-top: 20px;
  margin-bottom: 25px;
  font-family: 'Poppins', sans-serif;
`
const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 30px;
`
const InfoIcon = styled.div`
  margin-right: 15px;
`
const InfoText = styled.p`
  position: relative;
  bottom: 2px;
  color: white;
  font-size: 1.1em;
  word-break: break-all;
  margin: 0;
`