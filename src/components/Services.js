import React from 'react';
import styled from 'styled-components'
// images
import BillSVG from '../assets/images/svg/bill.svg'
import MortgageSVG from '../assets/images/svg/mortgage.svg'
import PiechartSVG from '../assets/images/svg/piechart.svg'
import TaxSVG from '../assets/images/svg/tax.svg'
import UserSVG from '../assets/images/svg/user.svg'
import RefundSVG from '../assets/images/svg/refund.svg'

export default function Services() {

  return (
    <React.Fragment>

      <TitleContainer>
        <ServicesTitle><span style={{ fontWeight: 'bold' }}>Soluções completas</span></ServicesTitle>
        <ServicesSubTitle>Apenas alguns dos muitos serviços que podemos fazer por você</ServicesSubTitle>
      </TitleContainer>

      <Container>

        <ServiceItems className='container-fluid'>
          <div className='row'>

            <div className='col-sm-12 col-md-4'>
              <ServiceBox>
                <ServiceBoxImageContainer>
                  <ServiceBoxImage>
                    <TaxSVG height={30} width={30} />
                  </ServiceBoxImage>
                </ServiceBoxImageContainer>
                <ServiceBoxTitle>Serviços contábeis em geral</ServiceBoxTitle>
                <ServideBoxText>
                  Administramos toda parte financeira e tributária, o objetivo é tornar o mais simples possível para você
                </ServideBoxText>
              </ServiceBox>
            </div>

            <div className='col-sm-12 col-md-4'>
              <ServiceBox>
                <ServiceBoxImageContainer>
                  <ServiceBoxImage>
                    <MortgageSVG height={30} width={30} />
                  </ServiceBoxImage>
                </ServiceBoxImageContainer>
                <ServiceBoxTitle>Microempreendedor individual (MEI)</ServiceBoxTitle>
                <ServideBoxText>
                  Abertura gratuita de seu negócio e orientação nos processos
                </ServideBoxText>
              </ServiceBox>
            </div>

            <div className='col-sm-12 col-md-4'>
              <ServiceBox>
                <ServiceBoxImageContainer>
                  <ServiceBoxImage>
                    <PiechartSVG height={30} width={30} />
                  </ServiceBoxImage>
                </ServiceBoxImageContainer>
                <ServiceBoxTitle>Parcelamento de tributos</ServiceBoxTitle>
                <ServideBoxText>
                  Aliviamos a carga tríbutaria, dividindo em varias parcelas
                </ServideBoxText>
              </ServiceBox>
            </div>

          </div>
        </ServiceItems>

        <ServiceItems className='container-fluid'>
          <div className='row'>

            <div className='col-sm-12 col-md-4'>
              <ServiceBox>
                <ServiceBoxImageContainer>
                  <ServiceBoxImage>
                    <RefundSVG height={30} width={30} />
                  </ServiceBoxImage>
                </ServiceBoxImageContainer>
                <ServiceBoxTitle>Abertura e encerramento de empresas</ServiceBoxTitle>
                <ServideBoxText>
                  Abrimos sua empresa sem burocracia, pague apenas as taxas do governo e faça os protocolos físicos,
                  o resto é com a gente
                </ServideBoxText>
              </ServiceBox>
            </div>

            <div className='col-sm-12 col-md-4'>
              <ServiceBox>
                <ServiceBoxImageContainer>
                  <ServiceBoxImage>
                    <BillSVG height={30} width={30} />
                  </ServiceBoxImage>
                </ServiceBoxImageContainer>
                <ServiceBoxTitle>Departamento fiscal tributária</ServiceBoxTitle>
                <ServideBoxText>
                  Fazemos um planejamento tributário que é capaz de reduzir a carga tributária de sua empresa
                </ServideBoxText>
              </ServiceBox>
            </div>

            <div className='col-sm-12 col-md-4'>
              <ServiceBox>
                <ServiceBoxImageContainer>
                  <ServiceBoxImage>
                    <UserSVG height={30} width={30} />
                  </ServiceBoxImage>
                </ServiceBoxImageContainer>
                <ServiceBoxTitle>Imposto de renda pessoa física</ServiceBoxTitle>
                <ServideBoxText>
                  Nós fazemos o preenchimento e a transmissão de sua declaração
                </ServideBoxText>
              </ServiceBox>
            </div>

          </div>
        </ServiceItems>

      </Container>
    </React.Fragment>

  )
}
const Container = styled.div`
  position: relative;
  background-color: #f7f8ff;
  padding: 30px 0px 30px 0px;
  @media(min-width: 600px) {
    padding: 50px 30vh;
  }
`
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
  margin-top: 25px;
  @media(min-width: 600px) {
    margin-bottom: 100px;
    margin-top: 100px;
  }
`
const ServiceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 30px;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  transition-duration: 0.4s;
  @media(min-width: 600px) {
    padding: 40px 30px;
  }
`
const ServiceItems = styled.div`
  display: flex;
  flex-direction: column;
  @media(min-width: 600px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`
const ServicesTitle = styled.h4`
  color: #2f314a;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1.8em;
  text-align: center;
`
const ServicesSubTitle = styled.p`
  color: #a3a9b9;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  text-align: center;
  font-size: 1.08em;
`
const ServiceBoxTitle = styled.h3`
    color: rgba(0,0,25,1);
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1.05em;
    margin-bottom: 15px;
  `
const ServideBoxText = styled.p`
  color: #6b7c93;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 1.1em;
  /* text-align: justify; */
`
const ServiceBoxImageContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  margin-bottom: 15px;
  padding: 10px;
  z-index: 99999;
`
const ServiceBoxImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100px;
` 