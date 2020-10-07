import React from 'react'
import styled from 'styled-components'
import colors from '../app/colors'
import About from './About'
import Form from './Form'

export default function Contact() {

  return (
    <React.Fragment>

      <FormTitleContainer>
        <FormTitle>Contato</FormTitle>
        <div className="line-5" />
      </FormTitleContainer>

      <div className='container-fluid no-gutters justify-content-center' style={{
        marginBottom: 50, backgroundColor: colors.secundaryColor, padding: '55px 0px'
      }}>
        <div className='row justify-content-center no-gutters'>
          <div className='col-md-6 col-sm-12'> <About /> </div>
          <div className='col-md-6 col-sm-12'> <Form /> </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const FormTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
  margin-top: 100px;
`
const FormTitle = styled.h5`
  color: #2f314a;
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  font-size: 1.8em;
  text-transform: uppercase;
`