import React from 'react'
import styled from 'styled-components'
import colors from '../app/colors'
// images
import LogoSVG from '../assets/images/svg/logo.svg'

function AboutConsultant() {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <div className='col-md-5 col-lx-5 col-sm-12'>
            <BackgroundContainer>
              <BackgroundIcon>
                <LogoSVG width={220} height={220} />
              </BackgroundIcon>
            </BackgroundContainer>
        </div>
        <div className='col-md-7 col-lx-6 col-sm-12'>
          <AbountContainer>
            <TitleText>Nossa consultoria</TitleText>
            <div className="line-20" />
            <div className='col-md-8 col-lx-7 col-sm-12 no-gutters'>
              <div>
                <p>A LFM Contabilidade nasceu com o intuito de ajudar a todos com comprometimento e seriedade. Temos um trabalho consolidado no mercado desde 1996, ou seja, são aproximadamente 24 anos fornecendo ajuda para pessoas interessadas em contratar um serviço único de qualidade para sua empresa ou seu negócio. Com toda essa experiência pudemos ajudar centenas de pessoas no ramo de escrita fiscal, departamento pessoal e departamento contábil.</p>
              </div>
            </div>
          </AbountContainer>
        </div>
      </div>
    </Container>
  )
}

export default AboutConsultant

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #a3a9b9;
  margin-top: 50px;
  @media(min-width: 600px) {
    font-size: 16px;
    margin-bottom: 100px;
    margin-top: 100px;
  }
`
const AbountContainer = styled.div`
  padding: 50px 20px;
  @media(min-width: 600px) {
    padding: 0px 50px;
    padding-top: 50px;
  }
`
const TitleText = styled.h4`
  font-size: 2.3em;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  color: #2f314a;
`
const BackgroundContainer = styled.div`
  display: flex; 
  justify-content: center; 
  flex-direction: row-reverse;
  align-items: center; 
  background: #5c3cac;
  min-width: 100%;
  max-width: 80%;
  min-height: 25em;
  max-height: 25em;
  @media(min-width: 600px) {
    justify-content: space-between; 
  }
`

const BackgroundIcon = styled.div`
  @media(min-width: 600px) {
    margin-right: 8em;
  }
`