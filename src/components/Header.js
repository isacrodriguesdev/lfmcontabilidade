import React from 'react'
import styled from 'styled-components'
import colors from '../../src/app/colors'
import SocialNetworks from './SocialNetworks'
// images
import MailSVG from '../assets/images/svg/mail.svg'
import LogoSVG from '../assets/images/svg/logo.svg'

export default function Header() {
  return (
    <React.Fragment>
      <Background>
        <Container>
          <Title>Lfm Contablidade</Title>
          <TopHeader>
            <div style={{ display: 'flex', }}>
              <LogoSVG height={30} width={30}
                style={{ position: 'relative', marginRight: 10, top: 2 }} />
              <CompanyName>LFM</CompanyName>
            </div>
            <SocialNetworks />
          </TopHeader>

          <TitleContainer>
            <TitleText><span style={{
              fontWeight: 500, color: colors.primaryColor,
              fontFamily: 'Poppins'
            }}>Contabilidade</span> que funciona para você</TitleText>
            <DescriptionText>
              Entre em contato e faça seu orçamento, planejamento tributário e veja qual a melhor opção para sua empresa
            </DescriptionText>
            <ButtonContact onClick={() => {
              document.querySelector(".contact")
                .scrollIntoView({ block: "start", behavior: "smooth" });
            }}>
              <MailSVG height={18} width={18} style={{ marginRight: 10 }} />
              <span style={{ position: 'relative', top: 1 }}>Entre em contato</span>
            </ButtonContact>
          </TitleContainer>
        </Container>

      </Background>
    </React.Fragment >
  )
}

const Background = styled.div`
  background-image: url(
    https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
  );
  background-size: cover;
  background-position: center;
  `
const Container = styled.header`
  background-color: ${colors.secundaryColorOpacity(0.98)};
  width: 100%;
  padding: 40px 30px;
  z-index: 9999999;
  @media(min-width: 600px) {
    padding: 40px 100px;
  }
`
const Title = styled.h1`
  opacity: 0;
  user-select: none;
  cursor: default;
  position: absolute;
`
const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media(min-width: 600px) {
  }
`
const CompanyName = styled.h2`
  position: relative;
  font-family: 'Anurati';
  font-size: 1.75em;
  color: ${'white'};
  font-weight: bolder;
  letter-spacing: 0.2px;
  top: 5px;
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 100px 0px;
  padding-bottom: 50px;
  @media(min-width: 600px) {
    width: 50%;
  }
`
const TitleText = styled.h2`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 2.5em;
  text-align: left;
  @media(min-width: 600px) {
    font-size: 3.2em;
  }
`
const DescriptionText = styled.p`
  color: white;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  margin-top: 15px;
  font-size: 1.1em;
`
const ButtonContact = styled.div`
  display: flex;
  background-color: ${colors.primaryColor};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  padding: 18px 40px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.8em;
  border: 0;
  outline: 0;
  border-inline: 0;
  color: white;
  cursor: pointer;
  border-radius: 100px;
  user-select: none;
  text-transform: uppercase;
  box-shadow: 0 8px 14px rgba(0,0,0,.1) !important;
  text-shadow: 1px 1px rgba(0,0,0,0);
  @media(min-width: 600px){ 
    padding: 18px 50px;
  }
`
