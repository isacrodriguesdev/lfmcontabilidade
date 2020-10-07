import React from 'react'
import styled from 'styled-components'

export default function Conquest() {

  return (
    <div className='container-fluid'>
      <div className='row justify-content-end no-glutters'>
        <div className='col-md-7 col-sm-12 no-glutters'>
          <ConquestContainer className='row justify-content-center'>
            <div className='col-md-5 col-sm-12'>
              <ConquestItem>
                <ConquestName>Fundado em</ConquestName>
                <ConquestNumber>1996</ConquestNumber>
              </ConquestItem>
            </div>

            <div className='col-md-5 col-sm-12'>
              <ConquestItem>
                <ConquestName>Anos de experiência</ConquestName>
                <ConquestNumber style={{ color: '#41caf6' }}>24</ConquestNumber>
              </ConquestItem>
            </div>
          </ConquestContainer>
        </div>
      </div>
    </div>
  )
}

const ConquestContainer = styled.div`
  background: #21233a;
  font-family: 'Montserrat', sans-serif;
  padding: 35px 0px;
  margin-bottom: 50px;
  @media(min-width: 600px) {
    margin-bottom: 25px;
  }
`
const ConquestItem = styled.div`
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 15px 0px;
  @media(min-width: 600px) {
    margin: 0px 0px;
    padding-top: 60px;
  }
`
const ConquestNumber = styled.p`
  color: #2c81e5;
  font-size: 3.88em;
  font-weight: bold;
`
const ConquestName = styled.h5`
  color: #6b7c93;
  color: white;
  font-size: 1.22em;
  font-weight: bold;
  text-transform: uppercase;
`
