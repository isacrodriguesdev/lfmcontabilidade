import React from 'react'
import styled from 'styled-components'

export default function Footer() {

  return (
    <Container>
      <p style={{ fontFamily: 'Montserrat', marginTop: 12, fontWeight: 500 }}>© Todos direitos reservados</p>
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f7f8ff;
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat;
  width: 100%;
  padding: 20px 0px;
  margin-top: 100px;
  color: #2f314a;
  border-top: 2px solid #eff3f5;
`